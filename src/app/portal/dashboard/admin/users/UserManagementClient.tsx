"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface AdminUserRecord {
  id: string;
  name: string | null;
  email: string | null;
  role: string;
  emailVerified: Date | null;
  managedTeam?: { name: string } | null;
  playerProfile?: { team: { name: string } | null } | null;
}

interface EditModalData {
  userId: string;
  currentRole: string;
  currentVerified: boolean;
}

export function UserManagementClient({ users }: { users: AdminUserRecord[] }) {
  const router = useRouter();
  const [editModal, setEditModal] = useState<EditModalData | null>(null);
  const [selectedRole, setSelectedRole] = useState<string>("");
  const [isVerified, setIsVerified] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleEditClick = (user: AdminUserRecord) => {
    setEditModal({
      userId: user.id,
      currentRole: user.role,
      currentVerified: !!user.emailVerified,
    });
    setSelectedRole(user.role);
    setIsVerified(!!user.emailVerified);
  };

  const handleSaveEdit = async () => {
    if (!editModal) return;

    setIsLoading(true);
    try {
      const response = await fetch(`/api/admin/users/${editModal.userId}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          role: selectedRole,
          emailVerified: isVerified,
        }),
      });

      if (response.ok) {
        setEditModal(null);
        router.refresh();
      } else {
        const error = await response.json();
        alert(error.error || "Failed to update user");
      }
    } catch (error) {
      alert("Failed to update user");
    } finally {
      setIsLoading(false);
    }
  };

  const handleDelete = async (userId: string, userName: string | null) => {
    if (!confirm(`Are you sure you want to delete user "${userName ?? "this user"}"?`)) {
      return;
    }

    setIsLoading(true);
    try {
      const response = await fetch(`/api/admin/users/${userId}`, {
        method: "DELETE",
      });

      if (response.ok) {
        router.refresh();
      } else {
        const error = await response.json();
        alert(error.error || "Failed to delete user");
      }
    } catch (error) {
      alert("Failed to delete user");
    } finally {
      setIsLoading(false);
    }
  };

  const stats = [
    {
      label: "Total Users",
      value: users.length,
      color: "bg-blue-100 text-blue-800",
    },
    {
      label: "Admins",
      value: users.filter((u) => u.role === "ADMIN").length,
      color: "bg-purple-100 text-purple-800",
    },
    {
      label: "Coaches",
      value: users.filter((u) => u.role === "COACH").length,
      color: "bg-green-100 text-green-800",
    },
    {
      label: "Players",
      value: users.filter((u) => u.role === "PLAYER").length,
      color: "bg-orange-100 text-orange-800",
    },
  ];

  return (
    <>
      {/* Stats Cards */}
      <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <div
            key={index}
            className="rounded-lg border border-gray-200 bg-white p-6 shadow-sm"
          >
            <div className="text-sm font-medium text-gray-600">
              {stat.label}
            </div>
            <div className="mt-2 text-3xl font-bold text-gray-900">
              {stat.value}
            </div>
          </div>
        ))}
      </div>

      {/* Users Table */}
      <div className="overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
        <div className="border-b border-gray-200 bg-gray-50 px-6 py-4">
          <h2 className="text-lg font-semibold text-gray-900">All Users</h2>
        </div>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  Email
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  Role
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  Team
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  Verified
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-gray-500">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              {users.length === 0 ? (
                <tr>
                  <td
                    colSpan={6}
                    className="px-6 py-10 text-center text-gray-400"
                  >
                    No users found
                  </td>
                </tr>
              ) : (
                users.map((user) => (
                  <tr key={user.id} className="hover:bg-gray-50">
                    <td className="whitespace-nowrap px-6 py-4 text-sm font-medium text-gray-900">
                      {user.name ?? "N/A"}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-600">
                      {user.email ?? "N/A"}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      <span
                        className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${
                          user.role === "ADMIN"
                            ? "bg-purple-100 text-purple-800"
                            : user.role === "COACH"
                              ? "bg-green-100 text-green-800"
                              : "bg-orange-100 text-orange-800"
                        }`}
                      >
                        {user.role}
                      </span>
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm text-gray-600">
                      {user.managedTeam?.name ??
                        user.playerProfile?.team?.name ??
                        "—"}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4">
                      {user.emailVerified ? (
                        <span className="inline-flex items-center rounded-full bg-green-100 px-2 py-1 text-xs font-semibold text-green-800">
                          ✓ Verified
                        </span>
                      ) : (
                        <span className="inline-flex items-center rounded-full bg-yellow-100 px-2 py-1 text-xs font-semibold text-yellow-800">
                          Pending
                        </span>
                      )}
                    </td>
                    <td className="whitespace-nowrap px-6 py-4 text-sm">
                      <button
                        onClick={() => handleEditClick(user)}
                        disabled={isLoading}
                        className="text-blue-600 hover:text-blue-800 disabled:opacity-50"
                        title="Edit user"
                      >
                        Edit
                      </button>
                      <span className="mx-2 text-gray-300">|</span>
                      <button
                        onClick={() => handleDelete(user.id, user.name)}
                        disabled={isLoading}
                        className="text-red-600 hover:text-red-800 disabled:opacity-50"
                        title="Delete user"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Edit Modal */}
      {editModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-xl">
            <h3 className="mb-4 text-xl font-semibold text-gray-900">
              Edit User
            </h3>
            
            <div className="mb-4">
              <label className="mb-2 block text-sm font-medium text-gray-700">
                Role
              </label>
              <select
                value={selectedRole}
                onChange={(e) => setSelectedRole(e.target.value)}
                className="w-full rounded-lg border border-gray-300 px-3 py-2 focus:border-blue-500 focus:outline-none"
              >
                <option value="PLAYER">Player</option>
                <option value="COACH">Coach</option>
                <option value="ADMIN">Admin</option>
              </select>
            </div>

            <div className="mb-6">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={isVerified}
                  onChange={(e) => setIsVerified(e.target.checked)}
                  className="mr-2 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                />
                <span className="text-sm font-medium text-gray-700">
                  Email Verified
                </span>
              </label>
            </div>

            <div className="flex justify-end gap-3">
              <button
                onClick={() => setEditModal(null)}
                disabled={isLoading}
                className="rounded-lg border border-gray-300 px-4 py-2 text-gray-700 hover:bg-gray-50 disabled:opacity-50"
              >
                Cancel
              </button>
              <button
                onClick={handleSaveEdit}
                disabled={isLoading}
                className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 disabled:opacity-50"
              >
                {isLoading ? "Saving..." : "Save Changes"}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
