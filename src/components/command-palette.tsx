import React, { useState, useEffect } from 'react';
import {
    Command,
    CommandDialog,
    CommandInput,
    CommandList,
    CommandEmpty,
    CommandGroup,
    CommandItem,
} from './ui/command';
import { useNavigate } from 'react-router-dom';

export const CommandPalette: React.FC = () => {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === 'k' && (e.metaKey || e.ctrlKey)) {
                e.preventDefault();
                setOpen((open) => !open);
            }
        };
        document.addEventListener('keydown', down);
        return () => document.removeEventListener('keydown', down);
    }, []);
    
    const runCommand = (command: () => void) => {
        setOpen(false);
        command();
    };

    return (
        <CommandDialog open={open} onOpenChange={setOpen}>
            <CommandInput placeholder="Digite um comando ou busque..." />
            <CommandList>
                <CommandEmpty>Nenhum resultado encontrado.</CommandEmpty>
                <CommandGroup heading="Navegação">
                    <CommandItem onSelect={() => runCommand(() => navigate('/'))}>Dashboard</CommandItem>
                    <CommandItem onSelect={() => runCommand(() => navigate('/inbox'))}>Caixa de Entrada</CommandItem>
                    <CommandItem onSelect={() => runCommand(() => navigate('/settings'))}>Configurações</CommandItem>
                </CommandGroup>
            </CommandList>
        </CommandDialog>
    );
};
