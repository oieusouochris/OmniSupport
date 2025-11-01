import React from 'react';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Button } from '../ui/button';
import { Forward } from 'lucide-react';
import { Command, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem } from '../ui/command';
import { useDataStore } from '../../store/use-data-store';

const TransferPopover: React.FC = () => {
    const { users } = useDataStore();

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button variant="ghost" size="sm">
                    <Forward className="mr-2 h-4 w-4" />
                    Transferir
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-64 p-0">
                <Command>
                    <CommandInput placeholder="Transferir para..." />
                    <CommandList>
                        <CommandEmpty>Nenhum resultado encontrado.</CommandEmpty>
                        <CommandGroup heading="Agentes">
                            {users.filter(u => u.role === 'agent').map(user => (
                                <CommandItem key={user.uid}>
                                    {user.displayName}
                                </CommandItem>
                            ))}
                        </CommandGroup>
                         <CommandGroup heading="Equipes">
                             <CommandItem>Vendas</CommandItem>
                             <CommandItem>Suporte N2</CommandItem>
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    );
};

export default TransferPopover;
