import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { TrendingDown } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';

interface ChurnPredictionWidgetProps {
    customerId: string;
}

const ChurnPredictionWidget: React.FC<ChurnPredictionWidgetProps> = ({ customerId }) => {
    const [churnRisk, setChurnRisk] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchChurnRisk = async () => {
            setIsLoading(true);
            // MOCK: Simula chamada de API
            await new Promise(resolve => setTimeout(resolve, 1200));
            // O risco varia com base no ID para demonstração
            const risk = customerId === 'cust_1' ? 15 : 65;
            setChurnRisk(risk);
            setIsLoading(false);
        };
        fetchChurnRisk();
    }, [customerId]);

    const getProgressColor = (value: number) => {
        if (value > 75) return "bg-red-500";
        if (value > 50) return "bg-yellow-500";
        return "bg-green-500";
    };

    return (
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <TrendingDown className="h-5 w-5" />
                    Previsão de Churn (IA)
                </CardTitle>
                <CardDescription>Probabilidade do cliente cancelar o serviço.</CardDescription>
            </CardHeader>
            <CardContent>
                {isLoading ? (
                    <div className="space-y-2">
                        <Skeleton className="h-6 w-1/4" />
                        <Skeleton className="h-4 w-full" />
                    </div>
                ) : (
                    <div className="space-y-2">
                        <div className="text-2xl font-bold">{churnRisk}%</div>
                        <Progress value={churnRisk} className="h-2" indicatorClassName={getProgressColor(churnRisk)} />
                    </div>
                )}
            </CardContent>
        </Card>
    );
};

export default ChurnPredictionWidget;