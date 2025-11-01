import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { LogoIcon } from './icons/LogoIcon';
import { cn } from '../lib/utils';
import { navConfig } from '../config/nav-config';

const Sidebar: React.FC = () => {
    return (
        <aside className="hidden md:flex flex-col w-64 border-r bg-background">
            <div className="flex items-center h-16 border-b px-6">
                 <Link to="/" className="flex items-center space-x-2">
                    <LogoIcon className="h-6 w-6" />
                    <span className="font-bold">Omnisuport</span>
                </Link>
            </div>
            <nav className="flex-1 p-4 space-y-2">
                {navConfig.map((item) => (
                    <NavLink
                        key={item.to}
                        to={item.to}
                        end={item.end}
                        className={({ isActive }) =>
                            cn(
                                'flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors',
                                isActive
                                    ? 'bg-primary text-primary-foreground'
                                    : 'text-muted-foreground hover:bg-muted/50 hover:text-foreground'
                            )
                        }
                    >
                        <item.icon className="mr-3 h-5 w-5" />
                        {item.label}
                    </NavLink>
                ))}
            </nav>
        </aside>
    );
};

export default Sidebar;