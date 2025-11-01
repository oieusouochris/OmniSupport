import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Lightbulb, AlertTriangle, CheckCircle } from 'lucide-react';

const DailyBriefing: React.FC = () => {
    // Mock data
    const briefing = {
        priorities: [
            "Resolver o ticket urgente #123 do cliente VIP Alice.",
            "Analisar o pico de tickets sobre 'problemas de login'."
        ],
        insights: [
            "O CSAT caiu 2% ontem, principalmente em tickets de chat.",
            "A nova KB sobre API reduziu as dúvidas relacionadas em 15%."
        ],
        celebrations: [
            "Parabéns ao Agente Smith por atingir 98% de CSAT!"
        ]
    };

    return (
        <Card>
            <CardHeader>
                <CardTitle>Seu Briefing Diário (IA)</CardTitle>
                <CardDescription>Resumo e prioridades para hoje.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <div>
                    <h4 className="font-semibold text-sm flex items-center gap-2 mb-2">
                        <AlertTriangle className="h-4 w-4 text-yellow-500" />
                        Prioridades
                    </h4>
                    <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                        {briefing.priorities.map((item, i) => <li key={i}>{item}</li>)}
                    </ul>
                </div>
                 <div>
                    <h4 className="font-semibold text-sm flex items-center gap-2 mb-2">
                        <Lightbulb className="h-4 w-4 text-blue-500" />
                        Insights
                    </h4>
                    <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                       {briefing.insights.map((item, i) => <li key={i}>{item}</li>)}
                    </ul>
                </div>
                <div>
                    <h4 className="font-semibold text-sm flex items-center gap-2 mb-2">
                        <CheckCircle className="h-4 w-4 text-green-500" />
                        Celebrações
                    </h4>
                    <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1">
                        {briefing.celebrations.map((item, i) => <li key={i}>{item}</li>)}
                    </ul>
                </div>
            </CardContent>
        </Card>
    );
};

export default DailyBriefing;
