import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { useDataStore } from '../../store/use-data-store';
import { Progress } from '../ui/progress';
import { Server } from 'lucide-react';

const SystemMetricsWidget: React.FC = () => {
    const { systemMetrics } = useDataStore();

    const getProgressColor = (value: number) => {
        if (value > 90) return "bg-red-500";
        if (value > 75) return "bg-yellow-500";
        return "bg-green-500";
    };

    return (
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <Server className="h-5 w-5" />
                    Métricas do Sistema
                </CardTitle>
                <CardDescription>Uso atual dos recursos do sistema.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="space-y-2">
                    <div className="flex justify-between text-sm font-medium">
                        <span>CPU</span>
                        <span>{systemMetrics.cpu}%</span>
                    </div>
                    <Progress value={systemMetrics.cpu} className="h-2" indicatorClassName={getProgressColor(systemMetrics.cpu)} />
                </div>
                <div className="space-y-2">
                    <div className="flex justify-between text-sm font-medium">
                        <span>Memória</span>
                        <span>{systemMetrics.memory}%</span>
                    </div>
                    <Progress value={systemMetrics.memory} className="h-2" indicatorClassName={getProgressColor(systemMetrics.memory)} />
                </div>
                <div className="space-y-2">
                    <div className="flex justify-between text-sm font-medium">
                        <span>Disco</span>
                        <span>{systemMetrics.disk}%</span>
                    </div>
                    <Progress value={systemMetrics.disk} className="h-2" indicatorClassName={getProgressColor(systemMetrics.disk)} />
                </div>
                 <div className="space-y-2">
                    <div className="flex justify-between text-sm font-medium">
                        <span>Rede</span>
                        <span>{systemMetrics.network} Mbps</span>
                    </div>
                    <Progress value={systemMetrics.network} className="h-2" indicatorClassName={getProgressColor(systemMetrics.network)} />
                </div>
            </CardContent>
        </Card>
    );
};

export default SystemMetricsWidget;
