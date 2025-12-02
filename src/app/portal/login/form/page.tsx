"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import LoginForm from "~/app/portal/login/LoginForm";
import Link from "next/link";

// Define valid roles (must match the enum and the roles used in role-selector.tsx)
const VALID_ROLES = ["ADMIN", "COACH", "PLAYER"];
type UserRole = "ADMIN" | "COACH" | "PLAYER";

function LoginFormContent() {
  const searchParams = useSearchParams();
  const roleParam = searchParams.get("role");

  // Validate the role from the query parameter
  const selectedRole = VALID_ROLES.includes(roleParam!)
    ? (roleParam as UserRole)
    : null;

  if (!selectedRole) {
    // If the role is missing or invalid, prompt the user to select one
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-4">
        <div className="rounded-xl bg-white p-8 text-center shadow-lg">
          <h2 className="mb-4 text-2xl font-bold text-red-600">
            Role Selection Required
          </h2>
          <p className="mb-6 text-gray-600">
            Please select a valid role before logging in.
          </p>
          <Link
            href="/portal/login"
            className="rounded-md bg-green-600 px-4 py-2 font-semibold text-white transition hover:bg-green-700"
          >
            Go Back to Role Selector
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      {/* Pass the validated role down to the LoginForm component */}
      <LoginForm initialRole={selectedRole} />
    </div>
  );
}

export default function LoginFormPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center bg-gray-100">
          Loading...
        </div>
      }
    >
      <LoginFormContent />
    </Suspense>
  );
}