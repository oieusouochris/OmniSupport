import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

const NotificationSettings: React.FC = () => {
    const { toast } = useToast();

    const handleSave = () => {
        toast({
            title: 'Configurações Salvas',
            description: 'Suas preferências de notificação foram atualizadas.',
        });
    };

    return (
        <Card>
            <CardHeader>
                <CardTitle>Notificações</CardTitle>
                <CardDescription>
                    Escolha como você deseja ser notificado sobre as atividades.
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="flex items-center justify-between space-x-2 p-4 border rounded-md">
                    <Label htmlFor="email-notifications" className="flex flex-col space-y-1">
                        <span>Notificações por E-mail</span>
                        <span className="font-normal leading-snug text-muted-foreground">
                            Receba e-mails sobre menções e atualizações importantes.
                        </span>
                    </Label>
                    <Switch id="email-notifications" defaultChecked />
                </div>
                <div className="flex items-center justify-between space-x-2 p-4 border rounded-md">
                    <Label htmlFor="push-notifications" className="flex flex-col space-y-1">
                        <span>Notificações Push</span>
                        <span className="font-normal leading-snug text-muted-foreground">
                            Receba notificações no seu dispositivo.
                        </span>
                    </Label>
                    <Switch id="push-notifications" />
                </div>
                 <div className="flex items-center justify-between space-x-2 p-4 border rounded-md">
                    <Label htmlFor="in-app-notifications" className="flex flex-col space-y-1">
                        <span>Notificações no App</span>
                        <span className="font-normal leading-snug text-muted-foreground">
                            Mostar notificações dentro da plataforma.
                        </span>
                    </Label>
                    <Switch id="in-app-notifications" defaultChecked />
                </div>
                <div className="flex justify-end">
                    <Button onClick={handleSave}>Salvar Alterações</Button>
                </div>
            </CardContent>
        </Card>
    );
};

export default NotificationSettings;