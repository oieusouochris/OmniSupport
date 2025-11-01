import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import AIPersonalityPanel from '../components/settings/ai-personality-panel';

const CopilotPage: React.FC = () => {
    return (
        <div className="space-y-6 p-4 md:p-6">
            <div>
                <h1 className="text-2xl font-bold">Configurações do Copiloto de IA</h1>
                <p className="text-muted-foreground">
                    Personalize o comportamento, o tom e as capacidades do seu assistente de IA.
                </p>
            </div>
            
            <AIPersonalityPanel />

            <Card>
                <CardHeader>
                    <CardTitle>Capacidades da IA</CardTitle>
                    <CardDescription>
                        Habilite ou desabilite funcionalidades específicas do copiloto. (Em breve)
                    </CardDescription>
                </CardHeader>
                <CardContent>
                    <div className="p-8 border rounded-lg flex items-center justify-center bg-muted">
                        <p className="text-muted-foreground">Controles de capacidades da IA.</p>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default CopilotPage;
