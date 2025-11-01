import React from 'react';
import { Skeleton } from '../ui/skeleton';

const ChatPanelSkeleton: React.FC = () => {
    return (
        <div className="flex flex-col h-full">
            <div className="p-4 border-b">
                <Skeleton className="h-6 w-1/2" />
            </div>
            <div className="flex-1 p-4 space-y-4 overflow-y-auto">
                <div className="flex justify-start">
                    <Skeleton className="h-16 w-3/4 rounded-lg" />
                </div>
                <div className="flex justify-end">
                    <Skeleton className="h-20 w-3/4 rounded-lg" />
                </div>
                <div className="flex justify-start">
                    <Skeleton className="h-12 w-1/2 rounded-lg" />
                </div>
            </div>
            <div className="p-4 border-t space-y-2">
                <Skeleton className="h-24 w-full" />
                <div className="flex justify-end">
                    <Skeleton className="h-10 w-24" />
                </div>
            </div>
        </div>
    );
};

export default ChatPanelSkeleton;
