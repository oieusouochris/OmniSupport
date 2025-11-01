import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Button } from '@/components/ui/button';
import AIFlowAnalysisModal from '@/components/flows/AIFlowAnalysisModal';
import { useFlowExecutor } from '@/hooks/use-flow-executor';
import { Bot } from 'lucide-react';
import { analyzeFlowAPI } from '@/services/ai-service';


const AIFlowAnalysisWidget: React.FC = () => {
    const [selectedFlow, setSelectedFlow] = useState<string>('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const { data: analysis, isLoading, execute } = useFlowExecutor(analyzeFlowAPI);

    const handleAnalyze = () => {
        if (!selectedFlow) return;
        execute({ flowId: selectedFlow });
        setIsModalOpen(true);
    };

    return (
        <>
            <Card>
                <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                        <Bot className="h-5 w-5" />
                        Análise de Fluxo com IA
                    </CardTitle>
                    <CardDescription>
                        Selecione um fluxo de automação para receber sugestões de otimização e segurança.
                    </CardDescription>
                </CardHeader>
                <CardContent className="flex flex-col sm:flex-row items-center gap-4">
                    <Select onValueChange={setSelectedFlow} value={selectedFlow}>
                        <SelectTrigger className="w-full sm:w-[280px]">
                            <SelectValue placeholder="Selecione um fluxo..." />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="flow_123">Fluxo de Onboarding de Cliente</SelectItem>
                            <SelectItem value="flow_456">Fluxo de Reset de Senha</SelectItem>
                            <SelectItem value="flow_789">Fluxo de Escalação de Ticket</SelectItem>
                        </SelectContent>
                    </Select>
                    <Button onClick={handleAnalyze} disabled={!selectedFlow || isLoading} className="w-full sm:w-auto">
                        {isLoading ? 'Analisando...' : 'Analisar Fluxo'}
                    </Button>
                </CardContent>
            </Card>

            <AIFlowAnalysisModal
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                analysis={analysis}
                isLoading={isLoading}
            />
        </>
    );
};

export default AIFlowAnalysisWidget;