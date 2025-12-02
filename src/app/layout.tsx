// src/app/layout.tsx

import type { Metadata } from "next";
// Assuming you have a basic CSS file, if not, skip this import
import "~/styles/globals.css"; 

import AuthProvider from "~/app/components/AuthProvider"; 
import NavbarWrapper from "~/app/components/NavbarWrapper";
import { Footer } from "./components/Footer";
import { TRPCReactProvider } from "~/trpc/react";

// --- Metadata (Replaces <Head> tag) ---
export const metadata: Metadata = {
  title: "Lucas Masterpieces Moripe Goodwill Games",
  description: "Official portal for LMM Goodwill Games 2025.",
  icons: [{ rel: "icon", url: "/assets/graphics/logo.png" }],
};

// --- Root Layout Component ---
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    // NOTE: You may need to replace the font class names if you are not using Geist
    <html lang="en">
      <body>
        <AuthProvider>
          <TRPCReactProvider>
            {/* Navbar is placed here so it wraps all pages (children) */}
            <NavbarWrapper />
            {children}
          </TRPCReactProvider>
        </AuthProvider>
      </body>
      <Footer />
    </html>
  );
}