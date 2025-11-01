import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { type KbArticle } from '../../lib/definitions';
import { Badge } from '../ui/badge';

interface ArticleMetadataPanelProps {
    article: KbArticle;
}

const DetailItem: React.FC<{ label: string; children: React.ReactNode }> = ({ label, children }) => (
    <div className="text-sm">
        <span className="text-muted-foreground">{label}: </span>
        <span className="font-medium">{children}</span>
    </div>
);

const ArticleMetadataPanel: React.FC<ArticleMetadataPanelProps> = ({ article }) => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Metadados</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
                <DetailItem label="Autor">{article.author.displayName}</DetailItem>
                <DetailItem label="Status">{article.status}</DetailItem>
                <DetailItem label="Criado em">{new Date(article.createdAt).toLocaleDateString('pt-BR')}</DetailItem>
                <DetailItem label="Atualizado em">{new Date(article.updatedAt).toLocaleDateString('pt-BR')}</DetailItem>
                <div>
                    <p className="text-sm text-muted-foreground">Tags</p>
                    <div className="flex flex-wrap gap-1 mt-1">
                        {article.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default ArticleMetadataPanel;
