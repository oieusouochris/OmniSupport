import React from 'react';
import { Skeleton } from '../ui/skeleton';

const ConversationListItemSkeleton: React.FC = () => (
    <div className="p-4 border-b">
        <div className="flex justify-between mb-1">
            <Skeleton className="h-4 w-24" />
            <Skeleton className="h-3 w-12" />
        </div>
        <Skeleton className="h-4 w-40 mb-2" />
        <Skeleton className="h-3 w-full" />
    </div>
);


const ConversationListSkeleton: React.FC = () => {
    return (
        <div className="flex flex-col h-full border-r">
            <div className="p-4 border-b">
                <Skeleton className="h-10 w-full" />
            </div>
            <div className="flex-1">
                <ConversationListItemSkeleton />
                <ConversationListItemSkeleton />
                <ConversationListItemSkeleton />
                <ConversationListItemSkeleton />
                <ConversationListItemSkeleton />
            </div>
        </div>
    );
};

export default ConversationListSkeleton;
