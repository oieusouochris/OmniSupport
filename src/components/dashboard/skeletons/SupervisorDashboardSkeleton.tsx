import React from 'react';
import KpiCardSkeleton from './KpiCardSkeleton';
import { Skeleton } from '../../ui/skeleton';
import { Card, CardContent, CardHeader } from '../../ui/card';

const SupervisorDashboardSkeleton: React.FC = () => {
    return (
        <div className="space-y-6 p-4 md:p-6">
            <Skeleton className="h-8 w-64" />

            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <KpiCardSkeleton />
                <KpiCardSkeleton />
                <KpiCardSkeleton />
                <KpiCardSkeleton />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <Card className="lg:col-span-2">
                    <CardHeader>
                        <Skeleton className="h-6 w-48" />
                        <Skeleton className="h-4 w-72" />
                    </CardHeader>
                    <CardContent>
                        <Skeleton className="h-48 w-full" />
                    </CardContent>
                </Card>
                <div className="space-y-6">
                   <Skeleton className="h-64 w-full" />
                   <Skeleton className="h-64 w-full" />
                </div>
            </div>
        </div>
    );
};

export default SupervisorDashboardSkeleton;