import React from 'react';
import { ResizableHandle, ResizablePanel, ResizablePanelGroup } from '@/components/ui/resizable';
import ConversationList from './components/ConversationList';
import ChatPanel from './components/ChatPanel';
import ContextPanel from './components/ContextPanel';

const InboxPage: React.FC = () => {
    return (
        <ResizablePanelGroup direction="horizontal" className="h-full">
            <ResizablePanel defaultSize={25} minSize={20}>
                <ConversationList />
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel defaultSize={50} minSize={30}>
                <ChatPanel />
            </ResizablePanel>
            <ResizableHandle withHandle />
            <ResizablePanel defaultSize={25} minSize={20}>
                <ContextPanel />
            </ResizablePanel>
        </ResizablePanelGroup>
    );
};

export default InboxPage;