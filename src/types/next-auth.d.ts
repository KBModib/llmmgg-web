// src/types/next-auth.d.ts

import NextAuth, { DefaultSession, DefaultUser } from "next-auth";
import { UserRole } from "@prisma/client"; // Import your custom enum

// Extend the built-in Session type
declare module "next-auth" {
    /**
     * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
     */
    interface Session {
        user: {
            id: string; // Ensure ID is always included
            role: UserRole; // Add your custom role
            managedTeamId?: string | null; // Add your custom field
        } & DefaultSession["user"];
    }

    /**
     * The shape of the user object that is returned by the database adapter.
     */
    interface User extends DefaultUser {
        role: UserRole;
        managedTeamId: string | null;
    }
}

// Extend the JWT type for session persistence
import { JWT } from "next-auth/jwt";

declare module "next-auth/jwt" {
    /**
     * Returned by the `jwt` callback and store on the `session`
     */
    interface JWT {
        id: string;
        role: UserRole;
        managedTeamId: string | null;
    }
}