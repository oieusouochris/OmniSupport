import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { LogoIcon } from './icons/LogoIcon';
import AuthButton from './auth-button';
import GlobalSearch from './GlobalSearch';
import { ThemeToggle } from './settings/theme-toggle';
import { Menu } from 'lucide-react';
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet';
import { navConfig } from '../config/nav-config';
import { cn } from '../lib/utils';
import { Button } from './ui/button';

const Header: React.FC = () => {
    const [isSheetOpen, setIsSheetOpen] = useState(false);

    return (
        <header className="sticky top-0 z-40 w-full border-b bg-background">
            <div className="container flex h-16 items-center justify-between">
                {/* Logo */}
                <div className="flex items-center gap-6">
                    <Link to="/" className="flex items-center space-x-2">
                        <LogoIcon className="h-6 w-6" />
                        <span className="hidden font-bold sm:inline-block">Omnisuport</span>
                    </Link>
                </div>

                {/* Desktop Nav Items */}
                <div className="hidden flex-1 items-center justify-end space-x-4 md:flex">
                    <div className="w-full flex-1 md:w-auto md:max-w-xs">
                        <GlobalSearch />
                    </div>
                    <nav className="flex items-center space-x-1">
                        <ThemeToggle />
                        <AuthButton />
                    </nav>
                </div>

                {/* Mobile Nav Trigger */}
                <div className="md:hidden">
                    <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
                        <SheetTrigger asChild>
                            <Button variant="ghost" size="icon">
                                <Menu className="h-5 w-5" />
                                <span className="sr-only">Toggle Menu</span>
                            </Button>
                        </SheetTrigger>
                        <SheetContent side="left" className="w-full max-w-xs sm:max-w-sm">
                            <Link to="/" className="flex items-center space-x-2 mb-6" onClick={() => setIsSheetOpen(false)}>
                                <LogoIcon className="h-6 w-6" />
                                <span className="font-bold">Omnisuport</span>
                            </Link>
                            <div className="mb-4">
                                <GlobalSearch />
                            </div>
                            <nav className="flex flex-col space-y-2">
                                {navConfig.map((item) => (
                                    <NavLink
                                        key={item.to}
                                        to={item.to}
                                        end={item.end}
                                        onClick={() => setIsSheetOpen(false)}
                                        className={({ isActive }) =>
                                            cn(
                                                'flex items-center px-3 py-2 text-base font-medium rounded-md transition-colors',
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
                             <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                                <ThemeToggle />
                                <AuthButton />
                            </div>
                        </SheetContent>
                    </Sheet>
                </div>
            </div>
        </header>
    );
};

export default Header;