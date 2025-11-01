import React from 'react';
import { Card, CardHeader, CardContent } from '../../ui/card';
import { Skeleton } from '../../ui/skeleton';

const KpiCardSkeleton: React.FC = () => {
    return (
        <Card>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
                <Skeleton className="h-4 w-1/2" />
                <Skeleton className="h-4 w-4 rounded-full" />
            </CardHeader>
            <CardContent>
                <Skeleton className="h-6 w-1/4" />
            </CardContent>
        </Card>
    );
};

export default KpiCardSkeleton;