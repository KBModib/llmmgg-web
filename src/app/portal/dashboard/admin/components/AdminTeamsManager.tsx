// src/app/portal/dashboard/admin/components/AdminTeamsManager.tsx
'use client';

import { useState } from 'react';

export interface AdminTeamRecord {
  id: string;
  name: string;
  coach: string;
  playerCount: number;
  verified: boolean;
}

interface Props {
  initialTeams: AdminTeamRecord[];
}

const emptyTeam: AdminTeamRecord = {
  id: '',
  name: '',
  coach: '',
  playerCount: 0,
  verified: false,
};

export function AdminTeamsManager({ initialTeams }: Props) {
  const [teams, setTeams] = useState<AdminTeamRecord[]>(initialTeams);
  const [form, setForm] = useState<AdminTeamRecord>(emptyTeam);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!form.name.trim()) return;

    if (form.id) {
      setTeams((prev) =>
        prev.map((team) => (team.id === form.id ? { ...form } : team)),
      );
    } else {
      setTeams((prev) => [
        ...prev,
        { ...form, id: crypto.randomUUID() },
      ]);
    }

    setForm(emptyTeam);
  };

  const startEdit = (team: AdminTeamRecord) => setForm({ ...team });
  const resetForm = () => setForm(emptyTeam);
  const removeTeam = (id: string) =>
    setTeams((prev) => prev.filter((team) => team.id !== id));

  return (
    <section className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-100">
      <form
        onSubmit={handleSubmit}
        className="grid gap-4 border-b border-gray-100 pb-6 md:grid-cols-4"
      >
        <div>
          <label className="text-xs font-semibold uppercase tracking-wide text-gray-500">
            Team Name
          </label>
          <input
            className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-green-600 focus:outline-none focus:ring-1 focus:ring-green-600"
            value={form.name}
            onChange={(e) => setForm((prev) => ({ ...prev, name: e.target.value }))}
            required
          />
        </div>

        <div>
          <label className="text-xs font-semibold uppercase tracking-wide text-gray-500">
            Head Coach
          </label>
          <input
            className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-green-600 focus:outline-none focus:ring-1 focus:ring-green-600"
            value={form.coach}
            onChange={(e) => setForm((prev) => ({ ...prev, coach: e.target.value }))}
            required
          />
        </div>

        <div>
          <label className="text-xs font-semibold uppercase tracking-wide text-gray-500">
            Players
          </label>
          <input
            type="number"
            min={0}
            className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-green-600 focus:outline-none focus:ring-1 focus:ring-green-600"
            value={form.playerCount}
            onChange={(e) =>
              setForm((prev) => ({
                ...prev,
                playerCount: Number(e.target.value),
              }))
            }
          />
        </div>

        <div className="flex items-end gap-2">
          <label className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-gray-500">
            <input
              type="checkbox"
              checked={form.verified}
              onChange={(e) =>
                setForm((prev) => ({ ...prev, verified: e.target.checked }))
              }
              className="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-600"
            />
            Verified
          </label>
          <div className="ml-auto flex gap-2">
            <button
              type="button"
              onClick={resetForm}
              className="rounded-lg border border-gray-200 px-3 py-2 text-xs font-semibold text-gray-600 hover:bg-gray-50"
            >
              Reset
            </button>
            <button
              type="submit"
              className="rounded-lg bg-green-700 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-white hover:bg-green-800"
            >
              {form.id ? 'Update' : 'Add'}
            </button>
          </div>
        </div>
      </form>

      <div className="mt-6 overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-100 text-sm text-gray-700">
          <thead className="bg-gray-50 text-xs font-semibold uppercase tracking-wide text-gray-500">
            <tr>
              <th className="px-4 py-3 text-left">Team</th>
              <th className="px-4 py-3 text-left">Coach</th>
              <th className="px-4 py-3 text-center">Players</th>
              <th className="px-4 py-3 text-center">Verified</th>
              <th className="px-4 py-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {teams.map((team) => (
              <tr key={team.id}>
                <td className="px-4 py-3 font-semibold text-gray-900">{team.name}</td>
                <td className="px-4 py-3">{team.coach}</td>
                <td className="px-4 py-3 text-center">{team.playerCount}</td>
                <td className="px-4 py-3 text-center">
                  <span
                    className={`rounded-full px-2 py-1 text-xs font-semibold ${
                      team.verified
                        ? 'bg-green-50 text-green-700'
                        : 'bg-yellow-50 text-yellow-700'
                    }`}
                  >
                    {team.verified ? 'Yes' : 'Pending'}
                  </span>
                </td>
                <td className="px-4 py-3 text-right">
                  <button
                    onClick={() => startEdit(team)}
                    className="text-xs font-semibold text-indigo-600 hover:text-indigo-800"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => removeTeam(team.id)}
                    className="ml-4 text-xs font-semibold text-red-600 hover:text-red-800"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}


