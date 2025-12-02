// src/app/portal/dashboard/coach/components/CoachTeamManager.tsx
'use client';

import { useState } from 'react';

interface CoachTeam {
  name: string;
  motto: string;
  homeGround: string;
  trainingDays: string[];
}

interface CoachTeamManagerProps {
  initialTeam: CoachTeam;
}

const TRAINING_OPTIONS = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

export function CoachTeamManager({ initialTeam }: CoachTeamManagerProps) {
  const [team, setTeam] = useState<CoachTeam>(initialTeam);
  const [isSaving, setIsSaving] = useState(false);
  const [saveMessage, setSaveMessage] = useState<{
    type: "success" | "error";
    text: string;
  } | null>(null);

  const toggleDay = (day: string) => {
    setTeam((prev) => ({
      ...prev,
      trainingDays: prev.trainingDays.includes(day)
        ? prev.trainingDays.filter((d) => d !== day)
        : [...prev.trainingDays, day],
    }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setIsSaving(true);
    setSaveMessage(null);

    try {
      const response = await fetch("/api/coach/team/settings", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: team.name,
          motto: team.motto,
          homeGround: team.homeGround,
          trainingDays: team.trainingDays,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        setSaveMessage({
          type: "success",
          text: "Team settings saved successfully!",
        });
      } else {
        setSaveMessage({
          type: "error",
          text: data.error || "Failed to save team settings.",
        });
      }
    } catch (error) {
      console.error("Error saving team settings:", error);
      setSaveMessage({
        type: "error",
        text: "An error occurred while saving.",
      });
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <section className="rounded-3xl bg-gradient-to-br from-white via-white to-green-50/80 p-6 shadow-xl ring-1 ring-green-100">
      <div className="mb-6 flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-xs font-semibold tracking-[0.3em] text-green-700 uppercase">
            Team Settings
          </p>
          <h2 className="text-2xl font-extrabold text-gray-900">
            Manage Team Identity
          </h2>
          <p className="text-sm text-gray-500">
            Keep your club profile sharp—these details appear on tournament
            sheets.
          </p>
        </div>
        <div className="rounded-xl border border-green-100 bg-white px-4 py-2 text-right shadow-sm">
          <p className="text-[11px] tracking-widest text-gray-400 uppercase">
            Last updated
          </p>
          <p className="text-sm font-semibold text-gray-800">Just now</p>
        </div>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        <form
          onSubmit={handleSubmit}
          className="space-y-6 rounded-2xl border border-gray-100 bg-white/70 p-6 shadow-inner lg:col-span-2"
        >
          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label className="text-xs font-semibold tracking-wide text-gray-500 uppercase">
                Team Name
              </label>
              <input
                className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm shadow-sm focus:border-green-600 focus:ring-2 focus:ring-green-100 focus:outline-none"
                value={team.name}
                onChange={(e) =>
                  setTeam((prev) => ({ ...prev, name: e.target.value }))
                }
              />
            </div>

            <div>
              <label className="text-xs font-semibold tracking-wide text-gray-500 uppercase">
                Motto / Tagline
              </label>
              <input
                className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm shadow-sm focus:border-green-600 focus:ring-2 focus:ring-green-100 focus:outline-none"
                value={team.motto}
                onChange={(e) =>
                  setTeam((prev) => ({ ...prev, motto: e.target.value }))
                }
              />
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <label className="text-xs font-semibold tracking-wide text-gray-500 uppercase">
                Home Ground
              </label>
              <input
                className="mt-2 w-full rounded-xl border border-gray-200 px-4 py-3 text-sm shadow-sm focus:border-green-600 focus:ring-2 focus:ring-green-100 focus:outline-none"
                value={team.homeGround}
                onChange={(e) =>
                  setTeam((prev) => ({ ...prev, homeGround: e.target.value }))
                }
              />
            </div>

            <div>
              <label className="text-xs font-semibold tracking-wide text-gray-500 uppercase">
                Training Days
              </label>
              <div className="mt-3 flex flex-wrap gap-2">
                {TRAINING_OPTIONS.map((day) => {
                  const active = team.trainingDays.includes(day);
                  return (
                    <button
                      key={day}
                      type="button"
                      onClick={() => toggleDay(day)}
                      className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition ${
                        active
                          ? "border-green-600 bg-green-600 text-white shadow"
                          : "border-gray-200 bg-white text-gray-600 hover:border-green-200 hover:text-green-700"
                      }`}
                    >
                      {day}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>

          {saveMessage && (
            <div
              className={`rounded-xl px-4 py-3 text-sm ${
                saveMessage.type === "success"
                  ? "border border-green-200 bg-green-50 text-green-800"
                  : "border border-red-200 bg-red-50 text-red-800"
              }`}
            >
              {saveMessage.text}
            </div>
          )}

          <div className="flex justify-end">
            <button
              type="submit"
              disabled={isSaving}
              className="rounded-xl bg-green-700 px-8 py-3 text-sm font-semibold tracking-wide text-white uppercase shadow-lg transition hover:bg-green-800 disabled:cursor-not-allowed disabled:opacity-50"
            >
              {isSaving ? "Saving..." : "Save Changes"}
            </button>
          </div>
        </form>

        <aside className="space-y-5 rounded-2xl border border-green-100 bg-white/70 p-6 shadow-inner">
          <div className="rounded-2xl bg-gradient-to-br from-green-600 to-green-700 p-5 text-white shadow-lg">
            <p className="text-xs tracking-wide text-green-100 uppercase">
              Club Preview
            </p>
            <h3 className="mt-2 text-2xl font-extrabold">{team.name}</h3>
            <p className="mt-1 text-sm text-green-50">
              “{team.motto || "Unstoppable Spirit"}”
            </p>
            <p className="mt-4 text-xs font-semibold tracking-wide text-green-200 uppercase">
              Home Ground
            </p>
            <p className="text-sm text-white/90">
              {team.homeGround || "Not set"}
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold tracking-wide text-gray-500 uppercase">
              Training Schedule
            </p>
            <ul className="mt-3 space-y-2">
              {team.trainingDays.length ? (
                team.trainingDays.map((day) => (
                  <li
                    key={day}
                    className="flex items-center justify-between rounded-xl border border-gray-100 bg-white px-3 py-2 text-sm"
                  >
                    <span className="font-semibold text-gray-800">{day}</span>
                    <span className="text-xs tracking-wide text-green-600 uppercase">
                      16:00 - 18:00
                    </span>
                  </li>
                ))
              ) : (
                <li className="rounded-xl border border-dashed border-gray-200 bg-white px-3 py-2 text-sm text-gray-500">
                  No training days selected.
                </li>
              )}
            </ul>
          </div>
        </aside>
      </div>
    </section>
  );
}


