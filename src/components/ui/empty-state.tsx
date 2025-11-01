import React from 'react';
import { cn } from '../../lib/utils';
import { Inbox } from 'lucide-react';

interface EmptyStateProps {
    icon?: React.ReactNode;
    title: string;
    description: string;
    action?: React.ReactNode;
    className?: string;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
    icon = <Inbox className="h-12 w-12 text-muted-foreground" />,
    title,
    description,
    action,
    className
}) => {
    return (
        <div className={cn("flex flex-col items-center justify-center text-center p-8 space-y-4 bg-muted/50 rounded-lg h-full", className)}>
            <div>{icon}</div>
            <div className="space-y-1">
                <h3 className="text-lg font-semibold">{title}</h3>
                <p className="text-sm text-muted-foreground">{description}</p>
            </div>
            {action && <div className="pt-2">{action}</div>}
        </div>
    );
};
