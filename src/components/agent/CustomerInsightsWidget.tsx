import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Skeleton } from '@/components/ui/skeleton';
import { Lightbulb } from 'lucide-react';
import { fetchCustomerInsightsAPI } from '@/services/ai-service';

const CustomerInsightsWidget: React.FC = () => {
    const [insightType, setInsightType] = useState('summary');
    const [insight, setInsight] = useState('');
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const loadInsight = async () => {
            setIsLoading(true);
            try {
                // Em um app real, o customerId viria do contexto da conversa selecionada.
                const data = await fetchCustomerInsightsAPI('cust_1', insightType);
                setInsight(data.insight);
            } catch (error) {
                setInsight('Falha ao carregar insights.');
            } finally {
                setIsLoading(false);
            }
        };
        loadInsight();
    }, [insightType]);

    return (
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <Lightbulb className="h-5 w-5 text-primary" />
                    Insights do Cliente (IA)
                </CardTitle>
                <CardDescription>Análises geradas por IA sobre o cliente atual.</CardDescription>
            </CardHeader>
            <CardContent>
                <Select onValueChange={setInsightType} value={insightType}>
                    <SelectTrigger>
                        <SelectValue placeholder="Selecione um tipo de insight" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="summary">Resumo do Perfil</SelectItem>
                        <SelectItem value="sentiment">Análise de Sentimento</SelectItem>
                        <SelectItem value="churn_prediction">Previsão de Churn</SelectItem>
                    </SelectContent>
                </Select>

                <div className="mt-4 p-3 border rounded-md bg-secondary min-h-[80px]">
                    {isLoading ? (
                         <div className="space-y-2">
                            <Skeleton className="h-4 w-full" />
                            <Skeleton className="h-4 w-5/6" />
                        </div>
                    ) : (
                        <p className="text-sm">{insight}</p>
                    )}
                </div>
            </CardContent>
        </Card>
    );
};

export default CustomerInsightsWidget;