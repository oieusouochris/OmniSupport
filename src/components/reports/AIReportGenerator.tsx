import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Textarea } from '../ui/textarea';
import { Button } from '../ui/button';
import { Bot } from 'lucide-react';
import { Skeleton } from '../ui/skeleton';

const AIReportGenerator: React.FC = () => {
    const [prompt, setPrompt] = useState('');
    const [report, setReport] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleGenerate = async () => {
        if (!prompt.trim()) return;
        setIsLoading(true);
        setReport(null);
        // Simula chamada de API
        await new Promise(resolve => setTimeout(resolve, 2000));
        setReport(`Relatório Gerado por IA para: "${prompt}"\n\n- Métrica principal: CSAT subiu 5% na última semana.\n- Insights: O canal de Chat teve o maior volume, mas o Email teve a maior satisfação.`);
        setIsLoading(false);
    };

    return (
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <Bot className="h-5 w-5" />
                    Gerador de Relatórios com IA
                </CardTitle>
                <CardDescription>
                    Descreva o relatório que você precisa e a IA irá gerá-lo para você.
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <Textarea
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    placeholder="Ex: 'Me mostre uma comparação do volume de tickets por canal nos últimos 30 dias'"
                    rows={3}
                />
                <Button onClick={handleGenerate} disabled={isLoading || !prompt.trim()} className="w-full">
                    {isLoading ? 'Gerando...' : 'Gerar Relatório'}
                </Button>
                {isLoading && <Skeleton className="h-24 w-full" />}
                {report && (
                    <div className="p-4 border rounded-md bg-secondary">
                        <pre className="text-sm whitespace-pre-wrap font-sans">{report}</pre>
                    </div>
                )}
            </CardContent>
        </Card>
    );
};

export default AIReportGenerator;
