import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { ShieldAlert, ShieldCheck } from 'lucide-react';
import { cn } from '../../lib/utils';

interface RiskAnalysisPanelProps {
    riskLevel: 'Baixo' | 'Médio' | 'Alto';
    factors: string[];
}

const riskConfig = {
    Baixo: {
        icon: ShieldCheck,
        color: 'text-green-500',
        label: 'Baixo Risco',
    },
    Médio: {
        icon: ShieldAlert,
        color: 'text-yellow-500',
        label: 'Risco Médio',
    },
    Alto: {
        icon: ShieldAlert,
        color: 'text-red-500',
        label: 'Alto Risco',
    },
};

const RiskAnalysisPanel: React.FC<RiskAnalysisPanelProps> = ({ riskLevel, factors }) => {
    const config = riskConfig[riskLevel];
    const Icon = config.icon;

    return (
        <Card>
            <CardHeader>
                <CardTitle>Análise de Risco</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex items-center gap-2 mb-4">
                    <Icon className={cn("h-6 w-6", config.color)} />
                    <span className={cn("font-semibold text-lg", config.color)}>{config.label}</span>
                </div>
                <div>
                    <h4 className="font-semibold text-sm mb-2">Fatores identificados:</h4>
                    <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                        {factors.map((factor, index) => (
                            <li key={index}>{factor}</li>
                        ))}
                    </ul>
                </div>
            </CardContent>
        </Card>
    );
};

export default RiskAnalysisPanel;
