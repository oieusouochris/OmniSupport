import React from 'react';
import ResolutionTimeChart from './components/ResolutionTimeChart';
import VolumeReport from './components/VolumeReport';

const ReportsPage: React.FC = () => {
    return (
        <div className="space-y-6 p-4 md:p-6">
            <h1 className="text-2xl font-bold">Relatórios</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                <ResolutionTimeChart />
                <VolumeReport />
            </div>
        </div>
    );
};

export default ReportsPage;