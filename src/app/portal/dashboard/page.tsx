'use client';

import React from 'react';
import { useAuth } from '~/hooks/useAuth'; // Assuming you have an authentication hook
import AdminDashboard from '~/app/components/AdminDashboard';
import CoachDashboard from '~/app/components/CoachDashboard';
import PlayerDashboard from '~/app/components/PlayerDashboard';
import LoadingSpinner from '~/app/components/common/LoadingSpinner';

const DashboardPage: React.FC = () => {
    // 1. Fetch user data and role from context/hook
    const { user, isLoading, isAuthenticated } = useAuth(); 
    
    // Show loading state while fetching user data
    if (isLoading) {
        return <LoadingSpinner />;
    }

    // Redirect unauthenticated users (handled by your auth middleware/hook)
    if (!isAuthenticated) {
        return <p>Redirecting to login...</p>; 
    }

    // 2. Determine which component to render based on the role
    const renderDashboard = () => {
        switch (user?.role) {
            case 'ADMIN':
                return <AdminDashboard user={user} />;
            case 'COACH':
                return <CoachDashboard user={user} />;
            case 'PLAYER':
                return <PlayerDashboard user={user} />;
            default:
                // Handle roles that don't exist or a missing role
                return <div>Access Denied: Unknown Role.</div>;
        }
    };

    return (
        <main className="dashboard-container">
            {renderDashboard()}
        </main>
    );
};

export default DashboardPage;