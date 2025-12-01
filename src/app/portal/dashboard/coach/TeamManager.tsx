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

const AddPlayerModal: React.FC<AddPlayerModalProps> = ({ isOpen, onClose, teamId, onPlayerAdded }) => {
    if (!isOpen) return null;
    
    // --- Add Player Form Logic ---
    const [name, setName] = useState('');
    const [jerseyNumber, setJerseyNumber] = useState<string>('');
    const [position, setPosition] = useState('');
    const [isCaptain, setIsCaptain] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setError(null);
        setLoading(true);

        // teamId is guaranteed by parent component guard {teamId && <AddPlayerModal ...>}
        const postUrl = `/api/coach/team/${teamId}/player`; 
        
        try {
            const response = await fetch(postUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ 
                    name, 
                    jerseyNumber: jerseyNumber ? parseInt(jerseyNumber) : null, // Handle null/empty string
                    position, 
                    isCaptain, 
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                setError(data.message || data.error?.message || 'Failed to add player.');
                return;
            }

            onPlayerAdded();
            onClose();

        } catch (err) {
            setError('A network error occurred.');
        } finally {
            setLoading(false);
        }
    };
    
    // UI Implementation (Tailwind classes kept simple for brevity)
    const inputClasses = "w-full p-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500";
    
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white p-6 rounded-lg shadow-2xl w-full max-w-md">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Add Player to Roster</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    
                    {/* Player Name (NEW FIELD) */}
                    <div>
                        <label className="block text-sm font-medium text-gray-700">Player Name (For Roster)</label>
                        <input type="text" value={name} onChange={(e) => setName(e.target.value)} required className={inputClasses} placeholder="Alex Johnson" />
                    </div>

                    {/* Jersey Number & Position */}
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Jersey #</label>
                            <input type="number" value={jerseyNumber} onChange={(e) => setJerseyNumber(e.target.value)} className={inputClasses} placeholder="e.g. 10" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Position</label>
                            <select value={position} onChange={(e) => setPosition(e.target.value)} className={inputClasses} required>
                                <option value="">Select Position</option>
                                <option value="Forward">Forward</option>
                                <option value="Midfielder">Midfielder</option>
                                <option value="Defender">Defender</option>
                                <option value="Goalkeeper">Goalkeeper</option>
                            </select>
                        </div>
                    </div>
                    
                    {/* Captain Checkbox */}
                    <div className="flex items-center">
                        <input type="checkbox" id="isCaptainAdd" checked={isCaptain} onChange={(e) => setIsCaptain(e.target.checked)} className="h-4 w-4 text-green-600 border-gray-300 rounded focus:ring-green-500" />
                        <label htmlFor="isCaptainAdd" className="ml-2 block text-sm text-gray-900">Mark as Captain</label>
                    </div>

                    {error && <p className="text-red-500 text-sm mt-3">{error}</p>}

                    <div className="flex justify-end space-x-3 pt-4 border-t mt-4">
                        <button type="button" onClick={onClose} className="px-4 py-2 text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50 transition">Cancel</button>
                        <button type="submit" disabled={loading} className="px-4 py-2 text-white font-semibold rounded-md disabled:opacity-50 transition" style={{ backgroundColor: primaryGreen }}>
                            {loading ? 'Adding...' : 'Add Player'}
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

const EditPlayerModal: React.FC<EditPlayerModalProps> = ({ isOpen, onClose, player, onPlayerUpdated }) => {
    if (!isOpen || !player) return null;

    // --- Edit Player Form Logic ---
    const [jerseyNumber, setJerseyNumber] = useState<string>(player.jerseyNumber?.toString() || '');
    const [position, setPosition] = useState(player.position || '');
    const [isCaptain, setIsCaptain] = useState(player.isCaptain);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    // Reset form state when player prop changes (i.e., when modal opens for a new player)
    useEffect(() => {
        setJerseyNumber(player.jerseyNumber?.toString() || '');
        setPosition(player.position || '');
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
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ 
                    jerseyNumber: jerseyNumber ? parseInt(jerseyNumber) : null,
                    position, 
                    isCaptain, 
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                setError(data.message || data.error?.message || `Failed to update ${player.name}.`);
                return;
            }

            // Success!
            onPlayerUpdated();
            onClose();

        } catch (err) {
            setError('A network error occurred.');
        } finally {
            setLoading(false);
        }
    };

    const inputClasses = "w-full p-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500";

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white p-6 rounded-lg shadow-2xl w-full max-w-md">
                <h2 className="text-2xl font-bold mb-4 text-gray-800">Edit Player: {player.name}</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    
                    {/* Jersey Number & Position */}
                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Jersey #</label>
                            <input type="number" value={jerseyNumber} onChange={(e) => setJerseyNumber(e.target.value)} className={inputClasses} placeholder="e.g. 10" />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700">Position</label>
                            <select value={position} onChange={(e) => setPosition(e.target.value)} className={inputClasses}>
                                <option value="">Select Position</option>
                                <option value="Forward">Forward</option>
                                <option value="Midfielder">Midfielder</option>
                                <option value="Defender">Defender</option>
                                <option value="Goalkeeper">Goalkeeper</option>
                            </select>
                        </div>
                    </div>
                    
                    {/* Captain Checkbox */}
                    <div className="flex items-center">
                        <input type="checkbox" id="isCaptainEdit" checked={isCaptain} onChange={(e) => setIsCaptain(e.target.checked)} className="h-4 w-4 text-green-600 border-gray-300 rounded focus:ring-green-500" />
                        <label htmlFor="isCaptainEdit" className="ml-2 block text-sm text-gray-900">Mark as Captain</label>
                    </div>

                    {error && <p className="text-red-500 text-sm mt-3">{error}</p>}

                    <div className="flex justify-end space-x-3 pt-4 border-t mt-4">
                        <button type="button" onClick={onClose} className="px-4 py-2 text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50 transition">Cancel</button>
                        <button type="submit" disabled={loading} className="px-4 py-2 text-white font-semibold rounded-md disabled:opacity-50 transition" style={{ backgroundColor: primaryGreen }}>
                            {loading ? 'Saving...' : 'Save Changes'}
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
    const [error, setError] = useState<string | null>(null);

    // Modal State Management
    const [isAddModalOpen, setIsAddModalOpen] = useState(false);
    const [playerToEdit, setPlayerToEdit] = useState<PlayerData | null>(null); // State to hold player data for editing
    
    // Get teamId from session
    useEffect(() => {
        if (session?.user?.managedTeamId) {
            setTeamId(session.user.managedTeamId);
        } else if (status === 'authenticated') {
            setError("You are not currently assigned to manage a team.");
            setLoading(false);
        }
    }, [session, status]);


    // Function to fetch the team's roster (UPDATED to call the GET /roster API)
    const fetchRoster = useCallback(async () => {
        if (!teamId) return;

        setLoading(true);
        setError(null);
        try {
            const response = await fetch(`/api/coach/team/${teamId}/roster`);
            
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.message || 'Failed to fetch roster.');
            }
            
            const data: PlayerData[] = await response.json();
            setPlayers(data);
            
        } catch (err) {
            console.error('Fetch roster error:', err);
            setError(err instanceof Error ? err.message : 'Failed to load team roster.');
            setPlayers([]); // Clear roster on error
        } finally {
            setLoading(false);
        }
    }, [teamId]);

    useEffect(() => {
        if (teamId) {
            fetchRoster();
        }
    }, [teamId, fetchRoster]);


    // Handler to open the Edit Modal
    const handleEditClick = (player: PlayerData) => {
        setPlayerToEdit(player);
    };

    // Handler to close all Modals
    const handleCloseModals = () => {
        setIsAddModalOpen(false);
        setPlayerToEdit(null);
    };

    // --- NEW: Remove Player Handler (FIXED TYPE ERROR HERE) ---
    const handleRemovePlayer = async (playerProfileId: string, playerName: string | null) => {
        // FIX: Add runtime check to ensure teamId is available.
        if (!teamId) {
            alert("Error: Team ID is not available for this action.");
            return;
        }

        if (!window.confirm(`Are you sure you want to remove ${playerName || 'this player'} from the team? This action cannot be undone.`)) {
            return;
        }

        setLoading(true);
        try {
            // FIX: teamId is now guaranteed to be a string here.
            const response = await fetch(`/api/coach/team/${teamId}/player/${playerProfileId}`, { 
                method: 'DELETE',
            });
            
            const data = await response.json();

            if (!response.ok) {
                alert(data.message || `Failed to remove ${playerName}.`);
            } else {
                alert(`${playerName || 'Player'} successfully removed.`);
                await fetchRoster();
            }
        } catch (error) {
            alert('A network error occurred while attempting to remove the player.');
        } finally {
            // We rely on fetchRoster to set loading back to false, 
            // but for network errors before fetchRoster runs, we ensure it's off.
            // The original check was fine for the top-level loading state.
            if (loading) setLoading(false);
        }
    };
    
    
    // --- Render Logic ---

    if (status === 'loading' || loading) {
        return <div className="p-8 text-center text-lg">Loading team manager...</div>;
    }

    if (error || !teamId) {
        return <div className="p-8 text-red-600 text-center font-semibold">{error || 'Coach is not assigned to manage a team.'}</div>;
    }

    // Main Render
    return (
        <>
            <div className="p-8 sm:p-10 bg-white rounded-lg shadow-xl">
                <header className="mb-8 border-b pb-4">
                    <h1 className="text-3xl font-extrabold text-gray-800">
                        Team Management: <span style={{ color: primaryGreen }}>{/* Fetch Team Name Here */}Team Roster</span>
                    </h1>
                    <p className="text-sm text-gray-500 mt-1">
                        Current Roster Size: **{players.length || 0}**
                    </p>
                </header>

                <section className="mt-6">
                    <div className="flex justify-between items-center mb-4">
                        <h2 className="text-2xl font-semibold text-gray-700">Team Roster</h2>
                        {/* Button to open the modal */}
                        <button
                            className="px-4 py-2 text-white font-semibold rounded-md transition disabled:opacity-50"
                            style={{ backgroundColor: primaryGreen }}
                            onClick={() => setIsAddModalOpen(true)}
                        >
                            + Add Player
                        </button>
                    </div>

                    {/* Roster Table View (Improved display) */}
                    <div className="overflow-x-auto">
                        <table className="min-w-full divide-y divide-gray-200">
                            <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">#</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Name</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Position</th>
                                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Captain</th>
                                    <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider">Actions</th>
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200">
                                {players.length === 0 ? (
                                    <tr><td colSpan={5} className="text-center py-8 text-gray-500 italic">Your roster is empty. Add players above.</td></tr>
                                ) : (
                                    players.map((player) => (
                                        <tr key={player.id} className={player.isCaptain ? 'bg-yellow-50/50' : ''}>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{player.jerseyNumber}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">{player.name}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{player.position}</td>
                                            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                                {player.isCaptain ? '⭐' : ''}
                                            </td>
                                            <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-4">
                                                <button 
                                                    onClick={() => handleEditClick(player)}
                                                    className="text-indigo-600 hover:text-indigo-900 transition disabled:opacity-50"
                                                    disabled={loading}
                                                >
                                                    Edit
                                                </button>
                                                <button
                                                    onClick={() => handleRemovePlayer(player.id, player.name)}
                                                    className="text-red-600 hover:text-red-900 transition disabled:opacity-50"
                                                    disabled={loading}
                                                >
                                                    Remove
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                )}
                            </tbody>
                        </table>
                    </div>
                </section>
                
                {/* Visual context for the dashboard layout 
                
                

[Image of a UI screen design for a sports team management dashboard]

                
                */}
            </div>

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