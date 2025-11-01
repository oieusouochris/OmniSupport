import React from 'react';
import { type KbArticle } from '../../lib/definitions';
import { cn } from '../../lib/utils';
import { Badge } from '../ui/badge';

interface ArticleListItemProps {
    article: KbArticle;
    isSelected: boolean;
    onSelect: (id: string) => void;
}

const ArticleListItem: React.FC<ArticleListItemProps> = ({ article, isSelected, onSelect }) => {
    return (
        <div
            onClick={() => onSelect(article.id)}
            className={cn(
                "p-4 border-b cursor-pointer hover:bg-muted/50",
                isSelected && "bg-muted"
            )}
        >
            <div className="flex justify-between items-start">
                 <h3 className="font-semibold text-sm truncate pr-2">{article.title}</h3>
                 <Badge variant={article.status === 'published' ? 'default' : 'secondary'} className="flex-shrink-0">{article.status}</Badge>
            </div>
            <p className="text-xs text-muted-foreground mt-1">
                Por {article.author.displayName}
            </p>
        </div>
    );
};

export default ArticleListItem;
