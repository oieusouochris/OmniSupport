import React from 'react';
import { useDataStore } from '@/store/use-data-store';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

const ConversationList: React.FC = () => {
    const { conversations } = useDataStore();
    const [selectedId, setSelectedId] = React.useState<string | null>(conversations[0]?.id || null);

    return (
        <div className="flex flex-col h-full border-r">
            <div className="p-4 border-b">
                <Input placeholder="Buscar conversas..." />
            </div>
            <ScrollArea className="flex-1">
                {conversations.map(conv => (
                    <div
                        key={conv.id}
                        onClick={() => setSelectedId(conv.id)}
                        className={cn(
                            "p-4 border-b cursor-pointer hover:bg-muted/50",
                            selectedId === conv.id && "bg-muted"
                        )}
                    >
                        <div className="flex justify-between">
                            <h3 className="font-semibold text-sm">{conv.customer.name}</h3>
                            <p className="text-xs text-muted-foreground">
                                {new Date(conv.lastMessageTimestamp).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' })}
                            </p>
                        </div>
                        <p className="text-sm truncate">{conv.subject}</p>
                        <p className="text-xs text-muted-foreground truncate">{conv.lastMessage}</p>
                    </div>
                ))}
            </ScrollArea>
        </div>
    );
};

export default ConversationList;