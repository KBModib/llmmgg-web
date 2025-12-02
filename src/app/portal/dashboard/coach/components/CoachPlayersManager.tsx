// src/app/portal/dashboard/coach/components/CoachPlayersManager.tsx
'use client';

import { useMemo, useState } from 'react';

export interface CoachPlayerRecord {
  id: string;
  name: string;
  position: string;
  jerseyNumber: number | null;
  status: 'Match Fit' | 'Pending Medical' | 'Suspended';
}

interface CoachPlayersManagerProps {
  initialPlayers: CoachPlayerRecord[];
}

const EMPTY_PLAYER: CoachPlayerRecord = {
  id: '',
  name: '',
  position: '',
  jerseyNumber: null,
  status: 'Match Fit',
};

const POSITION_OPTIONS = ['Goalkeeper', 'Defender', 'Midfielder', 'Forward'];

export function CoachPlayersManager({ initialPlayers }: CoachPlayersManagerProps) {
  const [players, setPlayers] = useState<CoachPlayerRecord[]>(initialPlayers);
  const [form, setForm] = useState<CoachPlayerRecord>(EMPTY_PLAYER);
  const [filter, setFilter] = useState('');

  const filteredPlayers = useMemo(() => {
    return players.filter((player) =>
      player.name.toLowerCase().includes(filter.toLowerCase()),
    );
  }, [players, filter]);

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

    setForm(EMPTY_PLAYER);
  };

  const startEdit = (player: CoachPlayerRecord) => setForm({ ...player });
  const resetForm = () => setForm(EMPTY_PLAYER);
  const removePlayer = (id: string) =>
    setPlayers((prev) => prev.filter((player) => player.id !== id));

  return (
    <section className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-100">
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-xs font-semibold uppercase tracking-wide text-green-700">
            Roster
          </p>
          <h2 className="text-2xl font-bold text-gray-900">Player Manager</h2>
        </div>
        <input
          className="w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-green-600 focus:outline-none focus:ring-1 focus:ring-green-600 md:w-64"
          placeholder="Search player..."
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
      </div>

      <form
        onSubmit={handleSubmit}
        className="mt-6 grid gap-4 border-b border-gray-100 pb-6 md:grid-cols-4"
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
            Position
          </label>
          <select
            className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-green-600 focus:outline-none focus:ring-1 focus:ring-green-600"
            value={form.position}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, position: e.target.value }))
            }
            required
          >
            <option value="" disabled>
              Select position
            </option>
            {POSITION_OPTIONS.map((pos) => (
              <option key={pos} value={pos}>
                {pos}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label className="text-xs font-semibold uppercase tracking-wide text-gray-500">
            Jersey #
          </label>
          <input
            type="number"
            min={0}
            className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-green-600 focus:outline-none focus:ring-1 focus:ring-green-600"
            value={form.jerseyNumber ?? ''}
            onChange={(e) =>
              setForm((prev) => ({
                ...prev,
                jerseyNumber: e.target.value ? Number(e.target.value) : null,
              }))
            }
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
                status: e.target.value as CoachPlayerRecord['status'],
              }))
            }
          >
            <option value="Match Fit">Match Fit</option>
            <option value="Pending Medical">Pending Medical</option>
            <option value="Suspended">Suspended</option>
          </select>
        </div>

        <div className="md:col-span-4 flex justify-end gap-2">
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
          <thead className="bg-gray-50 text-left text-xs font-semibold uppercase tracking-wide text-gray-500">
            <tr>
              <th className="px-4 py-3">Player</th>
              <th className="px-4 py-3">Position</th>
              <th className="px-4 py-3">Jersey #</th>
              <th className="px-4 py-3 text-right">Status</th>
              <th className="px-4 py-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {filteredPlayers.map((player) => (
              <tr key={player.id}>
                <td className="px-4 py-3 font-semibold text-gray-900">{player.name}</td>
                <td className="px-4 py-3">{player.position}</td>
                <td className="px-4 py-3">{player.jerseyNumber ?? '—'}</td>
                <td className="px-4 py-3 text-right">
                  <span
                    className={`rounded-full px-3 py-1 text-xs font-semibold ${
                      player.status === 'Match Fit'
                        ? 'bg-green-50 text-green-700'
                        : player.status === 'Pending Medical'
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


