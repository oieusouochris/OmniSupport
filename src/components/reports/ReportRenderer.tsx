import React from 'react';
import ResolutionTimeChart from './ResolutionTimeChart';
import VolumeReport from './VolumeReport';

interface ReportRendererProps {
    reportType: 'resolutionTime' | 'volume' | 'custom';
    config?: any;
}

const ReportRenderer: React.FC<ReportRendererProps> = ({ reportType, config }) => {
    switch (reportType) {
        case 'resolutionTime':
            return <ResolutionTimeChart />;
        case 'volume':
            return <VolumeReport />;
        case 'custom':
            // Lógica para renderizar um relatório customizado com base na config
            return <div>Relatório Customizado: {JSON.stringify(config)}</div>;
        default:
            return <div>Tipo de relatório não reconhecido.</div>;
    }
};

export default ReportRenderer;
