import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import { CommandPalette } from './command-palette';

const MainLayout: React.FC = () => {
    return (
        <div className="flex h-screen bg-background">
            <Sidebar />
            <div className="flex flex-col flex-1 overflow-hidden">
                <Header />
                <main className="flex-1 overflow-y-auto overflow-x-hidden">
                    <Outlet />
                </main>
            </div>
            <CommandPalette />
        </div>
    );
};

export default MainLayout;