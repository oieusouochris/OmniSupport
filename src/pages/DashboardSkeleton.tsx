import React from 'react';
import { Skeleton } from '@/components/ui/skeleton';
import KpiCardSkeleton from './KpiCardSkeleton';

const DashboardSkeleton: React.FC = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 p-4 md:p-6">
            <div className="xl:col-span-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-3">
                    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                        <KpiCardSkeleton />
                        <KpiCardSkeleton />
                        <KpiCardSkeleton />
                        <KpiCardSkeleton />
                    </div>
                </div>
                <div className="lg:col-span-2">
                    <Skeleton className="h-96" />
                </div>
                <div>
                     <Skeleton className="h-96" />
                </div>
            </div>

            <div className="space-y-6">
                 <Skeleton className="h-48" />
                 <Skeleton className="h-48" />
                 <Skeleton className="h-48" />
            </div>
        </div>
    );
};

export default DashboardSkeleton;