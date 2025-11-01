import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ThumbsUp, Goal, Bot } from 'lucide-react';

const AIFeedbackWidget: React.FC = () => {
    // Mock data for AI feedback
    const feedback = {
        strengths: [
            "Excelente tom empático na comunicação com os clientes.",
            "Rápido em identificar a causa raiz dos problemas técnicos."
        ],
        areasForImprovement: [
            "Considerar oferecer uma solução alternativa quando a principal não for viável imediatamente.",
            "Lembrar de documentar os passos de resolução no ticket de forma mais detalhada."
        ]
    };

    return (
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <Bot className="h-5 w-5" />
                    Feedback da IA sobre sua Performance
                </CardTitle>
                <CardDescription>Análise das suas últimas interações.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div>
                    <h4 className="font-semibold text-sm flex items-center gap-2 mb-2">
                        <ThumbsUp className="h-4 w-4 text-green-500" />
                        Pontos Fortes
                    </h4>
                    <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                        {feedback.strengths.map((item, index) => (
                            <li key={`strength-${index}`}>{item}</li>
                        ))}
                    </ul>
                </div>
                 <div>
                    <h4 className="font-semibold text-sm flex items-center gap-2 mb-2">
                        <Goal className="h-4 w-4 text-yellow-500" />
                        Áreas para Melhoria
                    </h4>
                    <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                        {feedback.areasForImprovement.map((item, index) => (
                            <li key={`improvement-${index}`}>{item}</li>
                        ))}
                    </ul>
                </div>
            </CardContent>
        </Card>
    );
};

export default AIFeedbackWidget;