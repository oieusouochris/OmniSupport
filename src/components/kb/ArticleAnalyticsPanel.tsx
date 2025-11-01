import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Eye, ThumbsUp, ThumbsDown } from 'lucide-react';
import { type KbArticle } from '../../lib/definitions';

interface ArticleAnalyticsPanelProps {
    article: KbArticle;
}

const ArticleAnalyticsPanel: React.FC<ArticleAnalyticsPanelProps> = ({ article }) => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Analytics do Artigo</CardTitle>
                <CardDescription>Métricas de uso e feedback.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="flex items-center justify-between">
                    <span className="text-sm flex items-center gap-2"><Eye className="h-4 w-4" /> Visualizações</span>
                    <span className="font-semibold">{article.views}</span>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-sm flex items-center gap-2"><ThumbsUp className="h-4 w-4" /> Avaliações Positivas</span>
                    <span className="font-semibold">{article.likes}</span>
                </div>
                <div className="flex items-center justify-between">
                    <span className="text-sm flex items-center gap-2"><ThumbsDown className="h-4 w-4" /> Avaliações Negativas</span>
                    <span className="font-semibold">{article.dislikes}</span>
                </div>
            </CardContent>
        </Card>
    );
};

export default ArticleAnalyticsPanel;
