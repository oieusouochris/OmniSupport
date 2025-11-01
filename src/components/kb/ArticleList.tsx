import React from 'react';
import { useDataStore } from '../../store/use-data-store';
import { Input } from '../ui/input';
import { ScrollArea } from '../ui/scroll-area';
import { cn } from '../../lib/utils';

const ArticleList: React.FC = () => {
    const { kbArticles } = useDataStore();
    const [selectedId, setSelectedId] = React.useState<string | null>(kbArticles[0]?.id || null);

    return (
        <div className="flex flex-col h-full border-r">
            <div className="p-4 border-b">
                <Input placeholder="Buscar artigos..." />
            </div>
            <ScrollArea className="flex-1">
                {kbArticles.map(article => (
                    <div
                        key={article.id}
                        onClick={() => setSelectedId(article.id)}
                        className={cn(
                            "p-4 border-b cursor-pointer hover:bg-muted/50",
                            selectedId === article.id && "bg-muted"
                        )}
                    >
                        <h3 className="font-semibold text-sm truncate">{article.title}</h3>
                        <p className="text-xs text-muted-foreground">
                            Por {article.author.displayName}
                        </p>
                    </div>
                ))}
            </ScrollArea>
        </div>
    );
};

export default ArticleList;
