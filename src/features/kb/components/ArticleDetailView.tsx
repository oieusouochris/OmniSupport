import React from 'react';
import { useDataStore } from '@/store/use-data-store';
import { Badge } from '@/components/ui/badge';

const ArticleDetailView: React.FC = () => {
    // Usando o primeiro artigo como exemplo
    const { kbArticles } = useDataStore();
    const article = kbArticles[0];

    if (!article) {
        return (
            <div className="p-8 h-full flex items-center justify-center">
                <p className="text-muted-foreground">Selecione um artigo para visualizar.</p>
            </div>
        );
    }

    return (
        <div className="p-6 h-full overflow-y-auto">
            <article className="prose dark:prose-invert max-w-none">
                <div className="mb-4">
                    <Badge variant={article.status === 'published' ? 'default' : 'secondary'}>{article.status}</Badge>
                </div>
                <h1>{article.title}</h1>
                <p className="text-sm text-muted-foreground">
                    Por {article.author.displayName} em {new Date(article.createdAt).toLocaleDateString('pt-BR')}
                </p>
                <div className="mt-4">
                    {article.content}
                </div>
            </article>
        </div>
    );
};

export default ArticleDetailView;