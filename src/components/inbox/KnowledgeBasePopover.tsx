import React, { useState } from 'react';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Book } from 'lucide-react';
import { useDataStore } from '../../store/use-data-store';
import { ScrollArea } from '../ui/scroll-area';

const KnowledgeBasePopover: React.FC = () => {
    const { kbArticles } = useDataStore();
    const [search, setSearch] = useState('');

    const filteredArticles = kbArticles.filter(
        article => article.status === 'published' && article.title.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button variant="ghost" size="sm">
                    <Book className="mr-2 h-4 w-4" />
                    Base de Conhecimento
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
                <div className="grid gap-4">
                    <Input placeholder="Buscar artigo..." value={search} onChange={e => setSearch(e.target.value)} />
                    <ScrollArea className="h-48">
                        <ul className="space-y-2">
                            {filteredArticles.map(article => (
                                <li key={article.id} className="text-sm p-2 rounded-md hover:bg-muted cursor-pointer">
                                    {article.title}
                                </li>
                            ))}
                        </ul>
                    </ScrollArea>
                </div>
            </PopoverContent>
        </Popover>
    );
};

export default KnowledgeBasePopover;
