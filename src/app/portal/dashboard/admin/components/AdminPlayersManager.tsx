// src/app/portal/dashboard/admin/components/AdminPlayersManager.tsx
'use client';

import { useState } from 'react';

export interface AdminPlayerRecord {
  id: string;
  name: string;
  team: string;
  status: 'Active' | 'Pending' | 'Suspended';
}

interface Props {
  initialPlayers: AdminPlayerRecord[];
}

const emptyPlayer: AdminPlayerRecord = {
  id: '',
  name: '',
  team: '',
  status: 'Active',
};

export function AdminPlayersManager({ initialPlayers }: Props) {
  const [players, setPlayers] = useState<AdminPlayerRecord[]>(initialPlayers);
  const [form, setForm] = useState<AdminPlayerRecord>(emptyPlayer);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!form.name.trim()) return;

    if (form.id) {
      setPlayers((prev) =>
        prev.map((player) => (player.id === form.id ? { ...form } : player)),
      );
    } else {
      setPlayers((prev) => [...prev, { ...form, id: crypto.randomUUID() }]);
    }

    setForm(emptyPlayer);
  };

  const startEdit = (player: AdminPlayerRecord) => setForm({ ...player });
  const resetForm = () => setForm(emptyPlayer);
  const removePlayer = (id: string) =>
    setPlayers((prev) => prev.filter((player) => player.id !== id));

  return (
    <section className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-100">
      <form
        onSubmit={handleSubmit}
        className="grid gap-4 border-b border-gray-100 pb-6 md:grid-cols-4"
      >
        <div>
          <label className="text-xs font-semibold uppercase tracking-wide text-gray-500">
            Player Name
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
            Team
          </label>
          <input
            className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-green-600 focus:outline-none focus:ring-1 focus:ring-green-600"
            value={form.team}
            onChange={(e) => setForm((prev) => ({ ...prev, team: e.target.value }))}
            required
          />
        </div>

        <div>
          <label className="text-xs font-semibold uppercase tracking-wide text-gray-500">
            Status
          </label>
          <select
            className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-green-600 focus:outline-none focus:ring-1 focus:ring-green-600"
            value={form.status}
            onChange={(e) =>
              setForm((prev) => ({
                ...prev,
                status: e.target.value as AdminPlayerRecord['status'],
              }))
            }
          >
            <option value="Active">Active</option>
            <option value="Pending">Pending</option>
            <option value="Suspended">Suspended</option>
          </select>
        </div>

        <div className="flex items-end justify-end gap-2">
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
      </form>

      <div className="mt-6 overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-100 text-sm text-gray-700">
          <thead className="bg-gray-50 text-xs font-semibold uppercase tracking-wide text-gray-500">
            <tr>
              <th className="px-4 py-3 text-left">Player</th>
              <th className="px-4 py-3 text-left">Team</th>
              <th className="px-4 py-3 text-right">Status</th>
              <th className="px-4 py-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {players.map((player) => (
              <tr key={player.id}>
                <td className="px-4 py-3 font-semibold text-gray-900">
                  {player.name}
                </td>
                <td className="px-4 py-3">{player.team}</td>
                <td className="px-4 py-3 text-right">
                  <span
                    className={`rounded-full px-2 py-1 text-xs font-semibold ${
                      player.status === 'Active'
                        ? 'bg-green-50 text-green-700'
                        : player.status === 'Pending'
                          ? 'bg-yellow-50 text-yellow-700'
                          : 'bg-red-50 text-red-700'
                    }`}
                  >
                    {player.status}
                  </span>
                </td>
                <td className="px-4 py-3 text-right">
                  <button
                    onClick={() => startEdit(player)}
                    className="text-xs font-semibold text-indigo-600 hover:text-indigo-800"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => removePlayer(player.id)}
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


