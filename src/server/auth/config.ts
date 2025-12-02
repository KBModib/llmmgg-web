// src/server/auth/config.ts

import { PrismaAdapter } from "@auth/prisma-adapter";
import { type DefaultSession, type NextAuthConfig } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials"; 
import bcrypt from 'bcryptjs'; 
import { type JWT } from "next-auth/jwt"; // NEW: Required for extending JWT token type

import { db } from "~/server/db";

// Type alias based on your Prisma schema enum for UserRole
type UserRole = 'ADMIN' | 'COACH' | 'PLAYER';

/**
 * Module augmentation for `next-auth` types. 
 * We must add the 'role' and 'managedTeamId' properties to the session and user types.
 */
declare module "next-auth" {
  interface Session extends DefaultSession {
    user: {
      id: string;
      role: UserRole; 
      managedTeamId?: string | null; // <-- FIX: Add managedTeamId to Session User
    } & DefaultSession["user"];
  }

  interface User {
      role: UserRole; 
      managedTeamId: string | null; // <-- FIX: Add managedTeamId to User
  }
}

// FIX: Extend JWT type to include custom fields
declare module "next-auth/jwt" {
    interface JWT {
        id: string;
        role: UserRole;
        managedTeamId: string | null; // <-- FIX: Add managedTeamId to JWT
    }
}


/**
 * Options for NextAuth.js used to configure adapters, providers, callbacks, etc.
 */
export const authConfig = {
  // We use the JWT strategy for CredentialsProvider
  session: {
    strategy: "jwt",
  },
  
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text" },
        password: { label: "Password", type: "password" },
        role: { label: "Role", type: "text" } 
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password || !credentials?.role) {
          return null;
        }

        // --- TYPE ASSERTION ---
        const typedCredentials = credentials as { 
          email: string; 
          password: string; 
          role: string; 
        };

        // 1. Fetch User by Email (Now including managedTeamId)
        const user = await db.user.findUnique({
          where: { email: typedCredentials.email },
          // Must explicitly include the required fields if using a custom adapter or JWT strategy
          select: {
             id: true,
             email: true,
             password: true,
             role: true,
             managedTeamId: true, // <-- FIX: Ensure this is fetched from DB
             name: true,
          }
        });

        if (!user || !user.password) {
          return null;
        }

        // 2. Verify Password
        const isPasswordValid = await bcrypt.compare(
          typedCredentials.password, 
          user.password 
        );

        // 3. Verify Role (RBAC Check)
        const isRoleMatch = user.role.toUpperCase() === typedCredentials.role.toUpperCase();

        if (isPasswordValid && isRoleMatch) {
          // Success: Credentials and Role match. Return the full user object.
          return user;
        }
        
        return null; 
      }
    }),
  ],

  callbacks: {
    // Override the default session callback to inject custom properties from the JWT token
    session: ({ session, token }) => { 
      if (session.user && token) {
        session.user.id = token.id;
        session.user.role = token.role;
        session.user.managedTeamId = token.managedTeamId; // <-- FIX: Pass managedTeamId to session
      }
      return session;
    },
    jwt: ({ token, user }) => {
            if (user) {
                // --- CRITICAL FIX: Explicitly assert the type of the user object ---
                const extendedUser = user as { 
                    id: string; 
                    role: UserRole; 
                    managedTeamId: string | null; 
                    name?: string | null; // Include optional fields if needed
                    email?: string | null;
                };

                token.id = extendedUser.id;
                token.role = extendedUser.role;
                // This line now safely accesses the field from the asserted type
                token.managedTeamId = extendedUser.managedTeamId; 
            }
            return token;
        },
  },
} satisfies NextAuthConfig;