// src/app/portal/dashboard/admin/components/AdminTournamentsManager.tsx
'use client';

import { useState } from 'react';

export interface AdminTournamentRecord {
  id: string;
  name: string;
  venue: string;
  startDate: string;
  status: string;
}

interface Props {
  initialTournaments: AdminTournamentRecord[];
}

const emptyTournament: AdminTournamentRecord = {
  id: '',
  name: '',
  venue: '',
  startDate: '',
  status: 'Draft',
};

export function AdminTournamentsManager({ initialTournaments }: Props) {
  const [tournaments, setTournaments] = useState<AdminTournamentRecord[]>(
    initialTournaments,
  );
  const [form, setForm] =
    useState<AdminTournamentRecord>(emptyTournament);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!form.name.trim()) return;

    if (form.id) {
      setTournaments((prev) =>
        prev.map((tournament) =>
          tournament.id === form.id ? { ...form } : tournament,
        ),
      );
    } else {
      setTournaments((prev) => [
        ...prev,
        { ...form, id: crypto.randomUUID() },
      ]);
    }

    setForm(emptyTournament);
  };

  const startEdit = (tournament: AdminTournamentRecord) =>
    setForm({ ...tournament });
  const resetForm = () => setForm(emptyTournament);
  const removeTournament = (id: string) =>
    setTournaments((prev) => prev.filter((item) => item.id !== id));

  return (
    <section className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-100">
      <form
        onSubmit={handleSubmit}
        className="grid gap-4 border-b border-gray-100 pb-6 md:grid-cols-4"
      >
        <div>
          <label className="text-xs font-semibold uppercase tracking-wide text-gray-500">
            Tournament Name
          </label>
          <input
            className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-green-600 focus:outline-none focus:ring-1 focus:ring-green-600"
            value={form.name}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, name: e.target.value }))
            }
            required
          />
        </div>

        <div>
          <label className="text-xs font-semibold uppercase tracking-wide text-gray-500">
            Venue
          </label>
          <input
            className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-green-600 focus:outline-none focus:ring-1 focus:ring-green-600"
            value={form.venue}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, venue: e.target.value }))
            }
            required
          />
        </div>

        <div>
          <label className="text-xs font-semibold uppercase tracking-wide text-gray-500">
            Start Date
          </label>
          <input
            type="date"
            className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-green-600 focus:outline-none focus:ring-1 focus:ring-green-600"
            value={form.startDate}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, startDate: e.target.value }))
            }
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
              setForm((prev) => ({ ...prev, status: e.target.value }))
            }
          >
            <option value="Draft">Draft</option>
            <option value="Confirmed">Confirmed</option>
            <option value="Completed">Completed</option>
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

      <div className="mt-6 grid gap-4 md:grid-cols-2">
        {tournaments.map((tournament) => (
          <article
            key={tournament.id}
            className="rounded-xl border border-gray-100 p-5 shadow-sm"
          >
            <p className="text-xs font-semibold uppercase tracking-wide text-gray-500">
              {tournament.startDate || 'TBC'}
            </p>
            <h3 className="mt-2 text-xl font-semibold text-gray-900">
              {tournament.name}
            </h3>
            <p className="text-sm text-gray-600">Venue: {tournament.venue}</p>
            <div className="mt-3 flex items-center justify-between">
              <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">
                {tournament.status}
              </span>
              <div className="space-x-4 text-xs font-semibold">
                <button
                  onClick={() => startEdit(tournament)}
                  className="text-indigo-600 hover:text-indigo-800"
                >
                  Edit
                </button>
                <button
                  onClick={() => removeTournament(tournament.id)}
                  className="text-red-600 hover:text-red-800"
                >
                  Delete
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}


