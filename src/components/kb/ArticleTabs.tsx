import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../ui/tabs';
import ArticleEditor from './ArticleEditor';
import ArticleCommentPanel from './ArticleCommentPanel';
import ArticleAnalyticsPanel from './ArticleAnalyticsPanel';
import { type KbArticle } from '../../lib/definitions';

interface ArticleTabsProps {
    article: KbArticle;
}

const ArticleTabs: React.FC<ArticleTabsProps> = ({ article }) => {
    return (
        <Tabs defaultValue="editor" className="h-full flex flex-col">
            <TabsList className="shrink-0">
                <TabsTrigger value="editor">Editor</TabsTrigger>
                <TabsTrigger value="comments">Comentários</TabsTrigger>
                <TabsTrigger value="analytics">Analytics</TabsTrigger>
            </TabsList>
            <TabsContent value="editor" className="flex-grow">
                <ArticleEditor initialTitle={article.title} initialContent={article.content} />
            </TabsContent>
            <TabsContent value="comments">
                <ArticleCommentPanel />
            </TabsContent>
            <TabsContent value="analytics">
                <ArticleAnalyticsPanel article={article} />
            </TabsContent>
        </Tabs>
    );
};

export default ArticleTabs;
