import React from 'react';
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable';
import ArticleList from './components/ArticleList';
import ArticleDetailView from './components/ArticleDetailView';

const KnowledgeBasePage: React.FC = () => {
    return (
        <ResizablePanelGroup direction="horizontal" className="h-full">
            <ResizablePanel defaultSize={30} minSize={20}>
                <ArticleList />
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel defaultSize={70} minSize={40}>
                <ArticleDetailView />
            </ResizablePanel>
        </ResizablePanelGroup>
    );
};

export default KnowledgeBasePage;