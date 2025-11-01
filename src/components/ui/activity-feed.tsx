import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './card';
import { cn } from '../../lib/utils';
import { Bell } from 'lucide-react';

interface ActivityItem {
    id: string;
    icon?: React.ReactNode;
    title: string;
    description: string;
    timestamp: string;
}

interface ActivityFeedProps {
    title: string;
    description?: string;
    activities: ActivityItem[];
    className?: string;
}

export const ActivityFeed: React.FC<ActivityFeedProps> = ({ title, description, activities, className }) => {
    return (
        <Card className={cn(className)}>
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <Bell className="h-5 w-5" />
                    {title}
                </CardTitle>
                {description && <CardDescription>{description}</CardDescription>}
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    {activities.length > 0 ? (
                        activities.map((activity) => (
                            <div key={activity.id} className="flex items-start gap-4">
                                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary text-secondary-foreground">
                                    {activity.icon || <Bell size={16} />}
                                </div>
                                <div className="flex-1">
                                    <p className="font-medium text-sm">{activity.title}</p>
                                    <p className="text-xs text-muted-foreground">{activity.description}</p>
                                    <p className="text-xs text-muted-foreground mt-1">{activity.timestamp}</p>
                                </div>
                            </div>
                        ))
                    ) : (
                        <p className="text-sm text-muted-foreground">Nenhuma atividade recente.</p>
                    )}
                </div>
            </CardContent>
        </Card>
    );
};
