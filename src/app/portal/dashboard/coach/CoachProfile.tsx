// src/app/portal/dashboard/coach/CoachProfile.tsx (FINAL, CORRECTED CODE)

'use client';

import React, { useState, useEffect } from 'react';

const primaryGreen = '#3e7c13';

// Interface for the data returned by the API
interface CoachProfileData {
    id: string;
    name: string | null;
    email: string;
    role: 'COACH';
    dateOfBirth: Date | string | null; 
    idNumber: string | null;
    image: string | null;
    managedTeamId: string | null;
}

export const CoachProfile: React.FC = () => {
    const [profile, setProfile] = useState<CoachProfileData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [isEditing, setIsEditing] = useState(false); 
    
    const [formData, setFormData] = useState({
        name: '',
        dateOfBirth: '',
        idNumber: '',
    });
    const [updateLoading, setUpdateLoading] = useState(false);
    const [updateError, setUpdateError] = useState<string | null>(null);


    const fetchProfileData = async () => {
        setLoading(true);
        setError(null);
        try {
            const response = await fetch('/api/coach/profile');
            const data = await response.json();

            if (!response.ok) {
                setError(data.message || 'Failed to load profile data.');
                return;
            }

            setProfile(data);
            
            // ⭐ FINAL FIX FOR FRONTEND: Explicit typing and safe checking
            let formattedDob: string = ''; 
            const dobValue = data.dateOfBirth;

            if (dobValue) { 
                // Convert to string and slice to get YYYY-MM-DD format
                formattedDob = String(dobValue).split('T')[0]!;
            }
            
            setFormData({
                name: data.name || '',
                dateOfBirth: formattedDob, // Guaranteed to be type 'string' (YYYY-MM-DD or '')
                idNumber: data.idNumber || '',
            });

        } catch (err) {
            console.error('Fetch error:', err);
            setError('A network error occurred while fetching your profile.');
        } finally {
            setLoading(false);
        }
    };

    const handleFormChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleUpdateProfile = async (e: React.FormEvent) => {
        e.preventDefault();
        setUpdateLoading(true);
        setUpdateError(null);

        try {
            const response = await fetch('/api/coach/profile', {
                method: 'PUT',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    name: formData.name,
                    dateOfBirth: formData.dateOfBirth,
                    idNumber: formData.idNumber,
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                setUpdateError(data.message || 'Failed to update profile.');
                return;
            }

            await fetchProfileData();
            setIsEditing(false);
            alert('Profile updated successfully!');

        } catch (err) {
            setUpdateError('A network error occurred.');
        } finally {
            setUpdateLoading(false);
        }
    };
    
    useEffect(() => {
        fetchProfileData();
    }, []);

    if (loading) {
        return <div className="p-8 text-center text-lg">Loading coach profile...</div>;
    }

    if (error) {
        return <div className="p-8 text-red-600 text-center font-semibold">{error}</div>;
    }

    if (!profile) {
        return <div className="p-8 text-center text-gray-500">Profile data could not be loaded.</div>;
    }
    
    // Helper function for rendering display mode fields
    const renderField = (label: string, value: string | null) => (
        <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-sm font-medium text-gray-500">{label}</p>
            <p className="text-lg font-bold text-gray-800">{value || 'Not Set'}</p>
        </div>
    );

    // Format the date for display (safely uses new Date)
    const formattedDate = profile.dateOfBirth 
        ? new Date(profile.dateOfBirth).toLocaleDateString() 
        : 'N/A';
    
    const inputClasses = "w-full p-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500";


    return (
        <div className="p-8 sm:p-10 bg-white rounded-lg shadow-xl">
            <header className="mb-8 border-b pb-4">
                <h1 className="text-3xl font-extrabold text-gray-800">
                    Coach Profile: <span style={{ color: primaryGreen }}>{profile.name || 'N/A'}</span>
                </h1>
                <p className="text-gray-600 mt-2">Manage your personal and security settings.</p>
            </header>

            {/* Conditional Rendering: View Mode vs. Edit Mode */}
            {isEditing ? (
                <section>
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">Edit Details</h2>
                    <form onSubmit={handleUpdateProfile} className="space-y-4">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {/* Name */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Full Name</label>
                                <input type="text" name="name" value={formData.name} onChange={handleFormChange} required className={inputClasses} />
                            </div>

                            {/* Date of Birth */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Date of Birth</label>
                                <input type="date" name="dateOfBirth" value={formData.dateOfBirth} onChange={handleFormChange} className={inputClasses} />
                            </div>

                            {/* ID Number */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700">ID Number</label>
                                <input type="text" name="idNumber" value={formData.idNumber} onChange={handleFormChange} className={inputClasses} placeholder="National ID or unique identifier" />
                            </div>
                            
                            {/* Email (Disabled, cannot be changed here) */}
                            <div>
                                <label className="block text-sm font-medium text-gray-700">Email (Cannot Change)</label>
                                <input type="email" value={profile.email} disabled className={inputClasses + ' bg-gray-200 cursor-not-allowed'} />
                            </div>
                        </div>

                        {updateError && <p className="text-red-500 text-sm mt-3">{updateError}</p>}

                        <div className="flex justify-start space-x-4 pt-4 border-t">
                            <button 
                                type="submit" 
                                disabled={updateLoading}
                                className="px-6 py-2 text-white font-semibold rounded-md transition disabled:opacity-50"
                                style={{ backgroundColor: primaryGreen }}
                            >
                                {updateLoading ? 'Saving...' : 'Save Changes'}
                            </button>
                            <button 
                                type="button" 
                                onClick={() => { setIsEditing(false); setUpdateError(null); }}
                                className="px-6 py-2 text-gray-700 border border-gray-300 rounded-md hover:bg-gray-50 transition"
                                disabled={updateLoading}
                            >
                                Cancel
                            </button>
                        </div>
                    </form>
                </section>
            ) : (
                <section className="space-y-6">
                    <h2 className="text-2xl font-semibold text-gray-700">Current Details</h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {renderField('Full Name', profile.name)}
                        {renderField('Email', profile.email)}
                        {renderField('Role', profile.role)}
                        {renderField('Managed Team ID', profile.managedTeamId)}
                        {renderField('Date of Birth', formattedDate)}
                        {renderField('ID Number', profile.idNumber)}
                    </div>
                    
                    {/* Edit Button */}
                    <div className="mt-8 pt-6 border-t">
                        <button
                            className="px-6 py-2 text-white font-semibold rounded-md transition disabled:opacity-50"
                            style={{ backgroundColor: primaryGreen }}
                            onClick={() => setIsEditing(true)}
                        >
                            Edit Profile Details
                        </button>
                    </div>
                </section>
            )}
        </div>
    );
};