import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { PlusCircle, Inbox, MessageSquare, Phone } from 'lucide-react';

const channels = [
    { name: 'E-mail', icon: Inbox, status: 'Ativo' },
    { name: 'Chat em Tempo Real', icon: MessageSquare, status: 'Ativo' },
    { name: 'Voz (Telefone)', icon: Phone, status: 'Inativo' },
];

const ChannelManagementPage: React.FC = () => {
    return (
        <div className="space-y-6 p-4 md:p-6">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold">Gerenciamento de Canais</h1>
                <Button>
                    <PlusCircle className="mr-2 h-4 w-4" />
                    Adicionar Canal
                </Button>
            </div>
            
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {channels.map(channel => (
                    <Card key={channel.name}>
                        <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                                <channel.icon className="h-5 w-5" />
                                {channel.name}
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="flex items-center justify-between">
                            <p className="text-sm">Status: <span className={channel.status === 'Ativo' ? 'text-green-500' : 'text-muted-foreground'}>{channel.status}</span></p>
                            <Button variant="outline" size="sm">Configurar</Button>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default ChannelManagementPage;
