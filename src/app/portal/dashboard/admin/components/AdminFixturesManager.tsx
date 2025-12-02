// src/app/portal/dashboard/admin/components/AdminFixturesManager.tsx
'use client';

import { useState } from 'react';

export interface AdminFixtureRecord {
  id: string;
  home: string;
  away: string;
  venue: string;
  date: string;
  kickoff: string;
  status: string;
}

interface Props {
  initialFixtures: AdminFixtureRecord[];
}

const emptyFixture: AdminFixtureRecord = {
  id: '',
  home: '',
  away: '',
  venue: '',
  date: '',
  kickoff: '',
  status: 'Draft',
};

export function AdminFixturesManager({ initialFixtures }: Props) {
  const [fixtures, setFixtures] = useState<AdminFixtureRecord[]>(initialFixtures);
  const [form, setForm] = useState<AdminFixtureRecord>(emptyFixture);

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!form.home.trim() || !form.away.trim()) return;

    if (form.id) {
      setFixtures((prev) =>
        prev.map((fixture) => (fixture.id === form.id ? { ...form } : fixture)),
      );
    } else {
      setFixtures((prev) => [...prev, { ...form, id: crypto.randomUUID() }]);
    }

    setForm(emptyFixture);
  };

  const startEdit = (fixture: AdminFixtureRecord) => setForm({ ...fixture });
  const resetForm = () => setForm(emptyFixture);
  const removeFixture = (id: string) =>
    setFixtures((prev) => prev.filter((fixture) => fixture.id !== id));

  return (
    <section className="rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-100">
      <form
        onSubmit={handleSubmit}
        className="grid gap-4 border-b border-gray-100 pb-6 md:grid-cols-3"
      >
        <div>
          <label className="text-xs font-semibold uppercase tracking-wide text-gray-500">
            Home Team
          </label>
          <input
            className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-green-600 focus:outline-none focus:ring-1 focus:ring-green-600"
            value={form.home}
            onChange={(e) => setForm((prev) => ({ ...prev, home: e.target.value }))}
            required
          />
        </div>

        <div>
          <label className="text-xs font-semibold uppercase tracking-wide text-gray-500">
            Away Team
          </label>
          <input
            className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-green-600 focus:outline-none focus:ring-1 focus:ring-green-600"
            value={form.away}
            onChange={(e) => setForm((prev) => ({ ...prev, away: e.target.value }))}
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
            Date
          </label>
          <input
            type="date"
            className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-green-600 focus:outline-none focus:ring-1 focus:ring-green-600"
            value={form.date}
            onChange={(e) => setForm((prev) => ({ ...prev, date: e.target.value }))}
            required
          />
        </div>

        <div>
          <label className="text-xs font-semibold uppercase tracking-wide text-gray-500">
            Kick-off
          </label>
          <input
            type="time"
            className="mt-1 w-full rounded-lg border border-gray-200 px-3 py-2 text-sm focus:border-green-600 focus:outline-none focus:ring-1 focus:ring-green-600"
            value={form.kickoff}
            onChange={(e) =>
              setForm((prev) => ({ ...prev, kickoff: e.target.value }))
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
            <option value="Scheduled">Scheduled</option>
            <option value="Completed">Completed</option>
          </select>
        </div>

        <div className="md:col-span-3 flex justify-end gap-2">
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
              <th className="px-4 py-3">Date</th>
              <th className="px-4 py-3">Match</th>
              <th className="px-4 py-3">Kick-off</th>
              <th className="px-4 py-3">Venue</th>
              <th className="px-4 py-3 text-right">Status</th>
              <th className="px-4 py-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {fixtures.map((fixture) => (
              <tr key={fixture.id}>
                <td className="px-4 py-3 font-semibold text-gray-900">
                  {fixture.date}
                </td>
                <td className="px-4 py-3">
                  {fixture.home} vs {fixture.away}
                </td>
                <td className="px-4 py-3">{fixture.kickoff}</td>
                <td className="px-4 py-3">{fixture.venue}</td>
                <td className="px-4 py-3 text-right">
                  <span className="rounded-full bg-green-50 px-3 py-1 text-xs font-semibold text-green-700">
                    {fixture.status}
                  </span>
                </td>
                <td className="px-4 py-3 text-right">
                  <button
                    onClick={() => startEdit(fixture)}
                    className="text-xs font-semibold text-indigo-600 hover:text-indigo-800"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => removeFixture(fixture.id)}
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


