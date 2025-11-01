import React, { createContext, useState, useContext, ReactNode } from 'react';

interface LayoutContextType {
    isSidebarOpen: boolean;
    toggleSidebar: () => void;
}

const LayoutContext = createContext<LayoutContextType | undefined>(undefined);

export const LayoutProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);

    const toggleSidebar = () => {
        setIsSidebarOpen(prev => !prev);
    };

    return (
        <LayoutContext.Provider value={{ isSidebarOpen, toggleSidebar }}>
            {children}
        </LayoutContext.Provider>
    );
};

export const useLayout = (): LayoutContextType => {
    const context = useContext(LayoutContext);
    if (context === undefined) {
        throw new Error('useLayout deve ser usado dentro de um LayoutProvider');
    }
    return context;
};
