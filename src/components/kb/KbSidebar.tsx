import React, { useState } from 'react';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { PlusCircle } from 'lucide-react';
import { ScrollArea } from '../ui/scroll-area';
import { useDataStore } from '../../store/use-data-store';
import ArticleListItem from './ArticleListItem';

interface KbSidebarProps {
    selectedArticleId: string | null;
    onSelectArticle: (id: string) => void;
}

const KbSidebar: React.FC<KbSidebarProps> = ({ selectedArticleId, onSelectArticle }) => {
    const { kbArticles } = useDataStore();

    return (
        <div className="flex flex-col h-full border-r bg-background">
            <div className="p-4 border-b space-y-2">
                <Input placeholder="Buscar artigos..." />
                <Button className="w-full">
                    <PlusCircle className="mr-2 h-4 w-4" />
                    Novo Artigo
                </Button>
            </div>
            <ScrollArea className="flex-1">
                {kbArticles.map(article => (
                    <ArticleListItem
                        key={article.id}
                        article={article}
                        isSelected={selectedArticleId === article.id}
                        onSelect={onSelectArticle}
                    />
                ))}
            </ScrollArea>
        </div>
    );
};

export default KbSidebar;
