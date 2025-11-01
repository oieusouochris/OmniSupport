import React from 'react';
import SystemMetricsWidget from './components/SystemMetricsWidget';
import ServiceStatusWidget from './components/ServiceStatusWidget';
import CpuUsageChart from './components/CpuUsageChart';
import RecentEventsFeed from './components/RecentEventsFeed';

const MetricsPage: React.FC = () => {
    return (
        <div className="space-y-6 p-4 md:p-6">
            <h1 className="text-2xl font-bold">Métricas & Observabilidade</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 space-y-6">
                    <CpuUsageChart />
                    <RecentEventsFeed />
                </div>
                <div className="space-y-6">
                    <SystemMetricsWidget />
                    <ServiceStatusWidget />
                </div>
            </div>
        </div>
    );
};

export default MetricsPage;