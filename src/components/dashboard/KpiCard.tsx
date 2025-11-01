import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { type LucideIcon } from 'lucide-react';

interface KpiCardProps {
    title: string;
    value: string;
    icon?: LucideIcon;
    status?: 'operational' | 'degraded' | 'outage';
}

const KpiCard: React.FC<KpiCardProps> = ({ title, value, icon: Icon, status }) => {
    const statusColor = {
        operational: 'text-green-500',
        degraded: 'text-yellow-500',
        outage: 'text-red-500',
    };

    return (
        <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">{title}</CardTitle>
                {Icon && <Icon className="h-4 w-4 text-muted-foreground" />}
            </CardHeader>
            <CardContent>
                <div className={cn("text-2xl font-bold", status && statusColor[status])}>{value}</div>
            </CardContent>
        </Card>
    );
};

export default KpiCard;