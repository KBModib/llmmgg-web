// src/app/portal/dashboard/coach/TeamManager.tsx

'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { useSession } from 'next-auth/react'; // Necessary for current user and team context

const primaryGreen = '#3e7c13';

// --- 1. INTERFACES (MATCHING ROSTER API OUTPUT) ---
interface PlayerData {
  id: string; // PlayerProfile ID (Used for editing/deleting the profile)
  name: string; // User's name (from User model)
  jerseyNumber: number | null;
  position: string | null;
  isCaptain: boolean;
  teamId: string;
  userId: string | undefined; // User ID (from User model, useful for linking profile to user)
}

// --- 2. PLACEHOLDER MODALS (Now with full implementation) ---

// Placeholder for the Add Player Modal
interface AddPlayerModalProps {
  isOpen: boolean;
  onClose: () => void;
  teamId: string;
  onPlayerAdded: () => void;
}

const AddPlayerModal: React.FC<AddPlayerModalProps> = ({
  isOpen,
  onClose,
  teamId,
  onPlayerAdded,
}) => {
  if (!isOpen) return null; // --- Add Player Form Logic ---
  const [name, setName] = useState("");
  const [jerseyNumber, setJerseyNumber] = useState<string>("");
  const [position, setPosition] = useState("");
  const [isCaptain, setIsCaptain] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true); // teamId is guaranteed by parent component guard {teamId && <AddPlayerModal ...>}

    const postUrl = `/api/coach/team/${teamId}/player`;
    try {
      const response = await fetch(postUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          jerseyNumber: jerseyNumber ? parseInt(jerseyNumber) : null, // Handle null/empty string
          position,
          isCaptain,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(
          data.message || data.error?.message || "Failed to add player.",
        );
        return;
      }

      onPlayerAdded();
      onClose();
    } catch (err) {
      setError("A network error occurred.");
    } finally {
      setLoading(false);
    }
  };
  const inputClasses =
    "w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200 outline-none bg-gray-50 hover:bg-white";
  const labelClasses = "block text-sm font-semibold text-gray-700 mb-2";
  return (
    <div className="animate-in fade-in fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm duration-200">
      <div className="w-full max-w-lg transform rounded-2xl bg-white shadow-2xl transition-all">
        <div className="rounded-t-2xl bg-gradient-to-r from-green-600 to-emerald-600 px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-white">Add Player</h2>
              <p className="mt-1 text-sm text-green-100">
                Add new player to roster
              </p>
            </div>
            <button
              onClick={onClose}
              type="button"
              className="rounded-lg p-2 text-white/80 transition-colors hover:bg-white/10 hover:text-white"
              aria-label="Close modal"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6 p-8">
          {" "}
          {/* Player Name */}
          <div>
            <label className={labelClasses}>Player Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className={inputClasses}
              placeholder="Alex Johnson"
            />
          </div>{" "}
          {/* Jersey Number & Position */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className={labelClasses}>Jersey Number</label>
              <input
                type="number"
                value={jerseyNumber}
                onChange={(e) => setJerseyNumber(e.target.value)}
                className={inputClasses}
                placeholder="e.g. 10"
                min="1"
                max="99"
              />
            </div>
            <div>
              <label className={labelClasses}>Position</label>
              <select
                value={position}
                onChange={(e) => setPosition(e.target.value)}
                className={inputClasses}
                required
              >
                <option value="">Select Position</option>
                <option value="Forward">⚽ Forward</option>
                <option value="Midfielder">🎯 Midfielder</option>
                <option value="Defender">🛡️ Defender</option>
                <option value="Goalkeeper">🧤 Goalkeeper</option>
              </select>
            </div>
          </div>
          {/* Captain Checkbox */}
          <div className="rounded-lg border-2 border-gray-200 bg-gray-50 p-4 transition-colors hover:border-green-300">
            <div className="flex items-center space-x-3">
              <input
                type="checkbox"
                id="isCaptainAdd"
                checked={isCaptain}
                onChange={(e) => setIsCaptain(e.target.checked)}
                className="h-5 w-5 cursor-pointer rounded border-gray-300 text-green-600 focus:ring-2 focus:ring-green-500"
              />
              <label
                htmlFor="isCaptainAdd"
                className="flex cursor-pointer items-center gap-2 text-sm font-medium text-gray-900"
              >
                <span className="text-lg">👑</span>
                <span>Mark as Team Captain</span>
              </label>
            </div>
          </div>
          {error && (
            <div className="rounded-lg border-l-4 border-red-500 bg-red-50 p-4">
              <div className="flex items-center">
                <svg
                  className="mr-2 h-5 w-5 text-red-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="text-sm font-medium text-red-700">{error}</p>
              </div>
            </div>
          )}
          <div className="mt-4 flex justify-center space-x-3 border-t pt-4">
            <button
              type="button"
              onClick={onClose}
              className="rounded-md border border-gray-300 px-4 py-2 text-gray-700 transition hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="rounded-md px-4 py-2 font-semibold text-white transition disabled:opacity-50"
              style={{ backgroundColor: primaryGreen }}
            >
              {loading ? "Adding..." : "Add Player"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// Placeholder for the Edit Player Modal
interface EditPlayerModalProps {
  isOpen: boolean;
  onClose: () => void;
  player: PlayerData | null;
  onPlayerUpdated: () => void;
}

const EditPlayerModal: React.FC<EditPlayerModalProps> = ({
  isOpen,
  onClose,
  player,
  onPlayerUpdated,
}) => {
  if (!isOpen || !player) return null; // --- Edit Player Form Logic ---

  const [jerseyNumber, setJerseyNumber] = useState<string>(
    player.jerseyNumber?.toString() || "",
  );
  const [position, setPosition] = useState(player.position || "");
  const [isCaptain, setIsCaptain] = useState(player.isCaptain);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null); // Reset form state when player prop changes (i.e., when modal opens for a new player)

  useEffect(() => {
    setJerseyNumber(player.jerseyNumber?.toString() || "");
    setPosition(player.position || "");
    setIsCaptain(player.isCaptain);
    setError(null);
  }, [player]);
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const putUrl = `/api/coach/team/${player.teamId}/player/${player.id}`; // player.id is the PlayerProfile ID
    try {
      const response = await fetch(putUrl, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          jerseyNumber: jerseyNumber ? parseInt(jerseyNumber) : null,
          position,
          isCaptain,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(
          data.message ||
            data.error?.message ||
            `Failed to update ${player.name}.`,
        );
        return;
      } // Success!

      onPlayerUpdated();
      onClose();
    } catch (err) {
      setError("A network error occurred.");
    } finally {
      setLoading(false);
    }
  };

  const inputClasses =
    "w-full px-4 py-3 border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all duration-200 outline-none bg-gray-50 hover:bg-white";
  const labelClasses = "block text-sm font-semibold text-gray-700 mb-2";

  return (
    <div className="animate-in fade-in fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm duration-200">
      <div className="w-full max-w-lg transform rounded-2xl bg-white shadow-2xl transition-all">
        <div className="rounded-t-2xl bg-gradient-to-r from-green-600 to-emerald-600 px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-bold text-white">Edit Player</h2>
              <p className="mt-1 text-sm text-green-100">{player.name}</p>
            </div>
            <button
              onClick={onClose}
              type="button"
              className="rounded-lg p-2 text-white/80 transition-colors hover:bg-white/10 hover:text-white"
              aria-label="Close modal"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6 p-8">
          {/* Jersey Number & Position */}
          <div className="grid grid-cols-2 gap-6">
            <div>
              <label className={labelClasses}>Jersey Number</label>
              <input
                type="number"
                value={jerseyNumber}
                onChange={(e) => setJerseyNumber(e.target.value)}
                className={inputClasses}
                placeholder="e.g. 10"
                min="1"
                max="99"
              />
            </div>
            <div>
              <label className={labelClasses}>Position</label>
              <select
                value={position}
                onChange={(e) => setPosition(e.target.value)}
                className={inputClasses}
              >
                <option value="">Select Position</option>
                <option value="Forward">⚽ Forward</option>
                <option value="Midfielder">🎯 Midfielder</option>
                <option value="Defender">🛡️ Defender</option>
                <option value="Goalkeeper">🧤 Goalkeeper</option>
              </select>
            </div>
          </div>
          {/* Captain Checkbox */}
          <div className="rounded-lg border-2 border-gray-200 bg-gray-50 p-4 transition-colors hover:border-green-300">
            <div className="flex items-center space-x-3">
              <input
                type="checkbox"
                id="isCaptainEdit"
                checked={isCaptain}
                onChange={(e) => setIsCaptain(e.target.checked)}
                className="h-5 w-5 cursor-pointer rounded border-gray-300 text-green-600 focus:ring-2 focus:ring-green-500"
              />
              <label
                htmlFor="isCaptainEdit"
                className="flex cursor-pointer items-center gap-2 text-sm font-medium text-gray-900"
              >
                <span className="text-lg">👑</span>
                <span>Mark as Team Captain</span>
              </label>
            </div>
          </div>
          {error && (
            <div className="rounded-lg border-l-4 border-red-500 bg-red-50 p-4">
              <div className="flex items-center">
                <svg
                  className="mr-2 h-5 w-5 text-red-500"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z"
                    clipRule="evenodd"
                  />
                </svg>
                <p className="text-sm font-medium text-red-700">{error}</p>
              </div>
            </div>
          )}
          <div className="flex justify-center space-x-3 border-t-2 border-gray-100 pt-6">
            <button
              type="button"
              onClick={onClose}
              className="rounded-lg border-2 border-gray-300 px-6 py-3 font-semibold text-gray-700 transition-all duration-200 hover:border-gray-400 hover:bg-gray-50"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              className="rounded-lg bg-gradient-to-r from-green-600 to-emerald-600 px-6 py-3 font-semibold text-white shadow-lg transition-all duration-200 hover:from-green-700 hover:to-emerald-700 hover:shadow-xl disabled:cursor-not-allowed disabled:opacity-50"
            >
              {loading ? (
                <span className="flex items-center gap-2">
                  <svg
                    className="h-4 w-4 animate-spin"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                  Saving...
                </span>
              ) : (
                "Save Changes"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

// =================================================================
// 3. TeamManager Component (Main)
// =================================================================

export const TeamManager: React.FC = () => {
  const { data: session, status } = useSession(); // Use NextAuth session
  const [teamId, setTeamId] = useState<string | null>(null);
  const [players, setPlayers] = useState<PlayerData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null); // Modal State Management

  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [playerToEdit, setPlayerToEdit] = useState<PlayerData | null>(null); // State to hold player data for editing
  // Get teamId from session
  useEffect(() => {
    if (session?.user?.managedTeamId) {
      setTeamId(session.user.managedTeamId);
    } else if (status === "authenticated") {
      setError("You are not currently assigned to manage a team.");
      setLoading(false);
    }
  }, [session, status]); // Function to fetch the team's roster (UPDATED to call the GET /roster API)

  const fetchRoster = useCallback(async () => {
    if (!teamId) return;

    setLoading(true);
    setError(null);
    try {
      const response = await fetch(`/api/coach/team/${teamId}/roster`);
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Failed to fetch roster.");
      }
      const data: PlayerData[] = await response.json();
      setPlayers(data);
    } catch (err) {
      console.error("Fetch roster error:", err);
      setError(
        err instanceof Error ? err.message : "Failed to load team roster.",
      );
      setPlayers([]); // Clear roster on error
    } finally {
      setLoading(false);
    }
  }, [teamId]);

  useEffect(() => {
    if (teamId) {
      fetchRoster();
    }
  }, [teamId, fetchRoster]); // Handler to open the Edit Modal

  const handleEditClick = (player: PlayerData) => {
    setPlayerToEdit(player);
  }; // Handler to close all Modals

  const handleCloseModals = () => {
    setIsAddModalOpen(false);
    setPlayerToEdit(null);
  };

  const handleRemovePlayer = async (
    playerProfileId: string,
    playerName: string | null,
  ) => {
    // FIX: Add runtime check to ensure teamId is available.
    if (!teamId) {
      alert("Error: Team ID is not available for this action.");
      return;
    }

    if (
      !window.confirm(
        `Are you sure you want to remove ${playerName || "this player"} from the team? This action cannot be undone.`,
      )
    ) {
      return;
    }

    setLoading(true);
    try {
      // FIX: teamId is now guaranteed to be a string here.
      const response = await fetch(
        `/api/coach/team/${teamId}/player/${playerProfileId}`,
        {
          method: "DELETE",
        },
      );
      const data = await response.json();

      if (!response.ok) {
        alert(data.message || `Failed to remove ${playerName}.`);
      } else {
        alert(`${playerName || "Player"} successfully removed.`);
        await fetchRoster();
      }
    } catch (error) {
      alert("A network error occurred while attempting to remove the player.");
    } finally {
      // We rely on fetchRoster to set loading back to false,
      // but for network errors before fetchRoster runs, we ensure it's off.
      // The original check was fine for the top-level loading state.
      if (loading) setLoading(false);
    }
  }; // --- Render Logic ---
  if (status === "loading" || loading) {
    return (
      <div className="p-8 text-center text-lg">Loading team manager...</div>
    );
  }

  if (error || !teamId) {
    return (
      <div className="p-8 text-center font-semibold text-red-600">
        {error || "Coach is not assigned to manage a team."}
      </div>
    );
  } // Main Render

  return (
    <>
      <section className="rounded-3xl bg-white/90 p-6 shadow-2xl ring-1 ring-gray-100 sm:p-10">
        <header className="flex flex-col gap-6 border-b pb-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs font-semibold tracking-[0.3em] text-green-600 uppercase">
              Team Management
            </p>
            <h1 className="mt-2 text-3xl font-black text-gray-900">
              Team Roster
            </h1>
            <p className="mt-2 text-sm text-gray-500">
              Manage your squad - add players, assign positions, and set
              captaincy.
            </p>
          </div>
          <div className="flex gap-3">
            <div className="rounded-2xl border border-gray-100 bg-white px-4 py-3 text-center shadow-sm">
              <p className="text-xs tracking-wide text-gray-400 uppercase">
                Roster Size
              </p>
              <p className="text-2xl font-bold text-gray-900">
                {players.length || 0}
              </p>
            </div>
          </div>
        </header>
        <section className="mt-8 space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div>
              <h2 className="text-xl font-semibold text-gray-800">
                Squad List
              </h2>
              <p className="text-sm text-gray-500">
                View and manage your team players.
              </p>
            </div>
            <button
              className="rounded-xl bg-green-700 px-6 py-3 text-sm font-semibold tracking-wide text-white uppercase shadow-lg transition hover:bg-green-800 disabled:opacity-50"
              onClick={() => setIsAddModalOpen(true)}
              disabled={loading}
            >
              + Add Player
            </button>
          </div>
                              {/* Roster Table View (Improved display) */}
          <div className="overflow-hidden rounded-2xl border border-gray-100 shadow-lg">
            <table className="min-w-full divide-y divide-gray-100 text-sm text-gray-700">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-center text-xs font-semibold tracking-wide text-gray-600 uppercase">
                    #
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold tracking-wide text-gray-600 uppercase">
                    Player
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold tracking-wide text-gray-600 uppercase">
                    Position
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-semibold tracking-wide text-gray-600 uppercase">
                    Status
                  </th>
                  <th className="px-6 py-4 text-right text-xs font-semibold tracking-wide text-gray-600 uppercase">
                    Actions
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {players.length === 0 ? (
                  <tr>
                    <td
                      colSpan={5}
                      className="px-6 py-10 text-center text-gray-400"
                    >
                      No players yet. Use "Add Player" to start building your
                      squad.
                    </td>
                  </tr>
                ) : (
                  players.map((player) => (
                    <tr
                      key={player.id}
                      className={`transition-colors hover:bg-gray-50 ${
                        player.isCaptain
                          ? "border-l-4 border-yellow-500 bg-linear-to-r from-yellow-50 to-amber-50"
                          : "border-l-4 border-transparent hover:border-green-400"
                      }`}
                    >
                      <td className="px-6 py-4">
                        <div className="flex items-center justify-center">
                          <span className="w-8 text-center text-lg font-bold text-gray-900">
                            {player.jerseyNumber ?? "—"}
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex flex-col">
                          <span className="font-semibold text-gray-900">
                            {player.name}
                          </span>
                          <span className="text-xs text-gray-500">
                            ID: {player.id.substring(0, 8)}...
                          </span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="inline-flex rounded-lg bg-emerald-100 px-3 py-1.5 text-xs font-semibold text-emerald-800 transition-transform hover:scale-105">
                          {player.position ?? "Unassigned"}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        {player.isCaptain ? (
                          <span className="inline-flex items-center gap-1.5 rounded-lg border border-yellow-300 bg-linear-to-r from-yellow-100 to-amber-100 px-3 py-1.5 text-xs font-semibold text-yellow-800">
                            <span className="text-sm">⭐</span>
                            Captain
                          </span>
                        ) : (
                          <span className="text-xs font-medium text-gray-400">
                            —
                          </span>
                        )}
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center justify-end gap-2">
                          <button
                            onClick={() => handleEditClick(player)}
                            className="inline-flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-indigo-600 transition-all hover:bg-indigo-100 hover:text-indigo-700 disabled:cursor-not-allowed disabled:opacity-50"
                            disabled={loading}
                          >
                            <span>✎</span>
                            Edit
                          </button>
                          <button
                            onClick={() =>
                              handleRemovePlayer(player.id, player.name)
                            }
                            className="inline-flex items-center gap-1 rounded-lg px-3 py-2 text-sm font-medium text-red-600 transition-all hover:bg-red-100 hover:text-red-700 disabled:cursor-not-allowed disabled:opacity-50"
                            disabled={loading}
                          >
                            <span>✕</span>
                            Remove
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
                                           
              </tbody>
                                     
            </table>
                               
          </div>
                         
        </section>
                                 
      </section>
                  {/* Modals Integration */}           
      {teamId && (
        <>
                         
          <AddPlayerModal
            isOpen={isAddModalOpen}
            onClose={handleCloseModals}
            teamId={teamId}
            onPlayerAdded={fetchRoster} // Refresh data upon success
          />
                             
          <EditPlayerModal
            isOpen={!!playerToEdit} // True if playerToEdit is not null
            onClose={handleCloseModals}
            player={playerToEdit}
            onPlayerUpdated={fetchRoster} // Refresh roster on success
          />
        </>
      )}
    </>
  );
};