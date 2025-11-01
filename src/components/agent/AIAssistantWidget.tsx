import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Sparkles, FileText, Bot, Smile } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';
import { fetchAIAssistantResponse } from '@/services/ai-service';

const AIAssistantWidget: React.FC = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [result, setResult] = useState('');
    const [currentAction, setCurrentAction] = useState('');

    const handleAction = async (action: string) => {
        setIsLoading(true);
        setCurrentAction(action);
        setResult('');
        try {
            const context = { ticketId: '123' }; // Exemplo de contexto
            const data = await fetchAIAssistantResponse(action, context);
            setResult(data.response);
        } catch (error) {
            setResult(error instanceof Error ? error.message : "Falha ao executar ação de IA.");
        } finally {
            setIsLoading(false);
            setCurrentAction('');
        }
    };

    return (
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <Sparkles className="h-5 w-5 text-primary" />
                    Assistente de IA
                </CardTitle>
                <CardDescription>Otimize seu fluxo de trabalho com sugestões da IA.</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex flex-wrap gap-2 mb-4">
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleAction('summarize')}
                        disabled={isLoading}
                    >
                        <FileText className="mr-2 h-4 w-4" />
                        {isLoading && currentAction === 'summarize' ? 'Gerando...' : 'Gerar Resumo'}
                    </Button>
                    <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleAction('suggest_reply')}
                        disabled={isLoading}
                    >
                        <Bot className="mr-2 h-4 w-4" />
                        {isLoading && currentAction === 'suggest_reply' ? 'Sugerindo...' : 'Sugerir Resposta'}
                    </Button>
                     <Button
                        variant="outline"
                        size="sm"
                        onClick={() => handleAction('analyze_sentiment')}
                        disabled={isLoading}
                    >
                        <Smile className="mr-2 h-4 w-4" />
                        {isLoading && currentAction === 'analyze_sentiment' ? 'Analisando...' : 'Analisar Sentimento'}
                    </Button>
                </div>

                {isLoading && (
                    <div className="space-y-2">
                        <Skeleton className="h-4 w-full" />
                        <Skeleton className="h-4 w-5/6" />
                    </div>
                )}

                {result && (
                    <div className="p-3 border rounded-md bg-secondary text-sm">
                        <p>{result}</p>
                    </div>
                )}
            </CardContent>
        </Card>
    );
};

export default AIAssistantWidget;