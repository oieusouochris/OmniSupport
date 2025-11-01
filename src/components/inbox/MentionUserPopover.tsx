import React from 'react';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Button } from '../ui/button';
import { AtSign } from 'lucide-react';
import { Command, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem } from '../ui/command';
import { useDataStore } from '../../store/use-data-store';

interface MentionUserPopoverProps {
    onSelectUser: (userName: string) => void;
}

const MentionUserPopover: React.FC<MentionUserPopoverProps> = ({ onSelectUser }) => {
    const { users } = useDataStore();

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                    <AtSign className="h-4 w-4" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-64 p-0">
                <Command>
                    <CommandInput placeholder="Mencionar usuário..." />
                    <CommandList>
                        <CommandEmpty>Nenhum usuário encontrado.</CommandEmpty>
                        <CommandGroup>
                            {users.map(user => (
                                <CommandItem
                                    key={user.uid}
                                    onSelect={() => onSelectUser(user.displayName || '')}
                                >
                                    {user.displayName}
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    );
};

export default MentionUserPopover;
