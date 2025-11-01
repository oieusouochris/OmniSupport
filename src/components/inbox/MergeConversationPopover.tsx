import React from 'react';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Button } from '../ui/button';
import { Merge } from 'lucide-react';
import { Command, CommandInput, CommandList, CommandEmpty, CommandGroup, CommandItem } from '../ui/command';
import { useDataStore } from '../../store/use-data-store';

const MergeConversationPopover: React.FC = () => {
    const { conversations } = useDataStore();

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button variant="ghost" size="sm">
                    <Merge className="mr-2 h-4 w-4" />
                    Mesclar
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80 p-0">
                 <Command>
                    <CommandInput placeholder="Buscar conversa para mesclar..." />
                    <CommandList>
                        <CommandEmpty>Nenhuma conversa encontrada.</CommandEmpty>
                        <CommandGroup heading="Conversas Recentes do Cliente">
                            {conversations.slice(0, 3).map(conv => (
                                <CommandItem key={conv.id}>
                                    <span>{conv.subject}</span>
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    </CommandList>
                </Command>
            </PopoverContent>
        </Popover>
    );
};

export default MergeConversationPopover;
