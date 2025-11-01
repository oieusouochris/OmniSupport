import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';

const SentimentPage: React.FC = () => {
    return (
        <div className="space-y-6 p-4 md:p-6">
            <h1 className="text-2xl font-bold">Análise de Sentimento</h1>
            <Card>
                <CardHeader>
                    <CardTitle>Visão Geral do Sentimento</CardTitle>
                    <CardDescription>
                        Acompanhe o sentimento geral dos seus clientes ao longo do tempo.
                    </CardDescription>
                </CardHeader>
                <CardContent>
                     <div className="p-8 border rounded-lg flex items-center justify-center bg-muted">
                        <p className="text-muted-foreground">Gráficos e relatórios de sentimento em breve.</p>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default SentimentPage;
