import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Bot, Sparkles } from 'lucide-react';
import { Skeleton } from '../ui/skeleton';
import { analyzeAuditAPI } from '../../services/ai-service';

interface AuditAIAnalysisWidgetProps {
    auditId: string;
}

const AuditAIAnalysisWidget: React.FC<AuditAIAnalysisWidgetProps> = ({ auditId }) => {
    const [isLoading, setIsLoading] = useState(false);
    const [analysis, setAnalysis] = useState('');
    const [error, setError] = useState('');

    const handleAnalyze = async () => {
        setIsLoading(true);
        setAnalysis('');
        setError('');
        try {
            const data = await analyzeAuditAPI(auditId);
            setAnalysis(data.analysis);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Falha ao analisar a auditoria.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-primary" />
                    Análise de Auditoria com IA
                </CardTitle>
                <CardDescription>Obtenha insights e sugestões da IA para esta auditoria.</CardDescription>
            </CardHeader>
            <CardContent>
                <Button onClick={handleAnalyze} disabled={isLoading} className="w-full">
                    <Bot className="mr-2 h-4 w-4" />
                    {isLoading ? 'Analisando...' : 'Analisar com IA'}
                </Button>

                {isLoading && (
                    <div className="space-y-2 mt-4">
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-5/6" />
                    </div>
                )}

                {error && <p className="text-sm text-red-500 mt-4">{error}</p>}
                
                {analysis && (
                    <div className="mt-4 p-3 border rounded-md bg-secondary text-sm">
                        <p>{analysis}</p>
                    </div>
                )}
            </CardContent>
        </Card>
    );
};

export default AuditAIAnalysisWidget;
