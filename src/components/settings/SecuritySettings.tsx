import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { Label } from '@/components/ui/label';

const SecuritySettings: React.FC = () => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Segurança</CardTitle>
                <CardDescription>
                    Gerencie as configurações de segurança da sua conta.
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="flex items-center justify-between space-x-2 p-4 border rounded-md">
                    <Label htmlFor="2fa" className="flex flex-col space-y-1">
                        <span>Autenticação de Dois Fatores (2FA)</span>
                        <span className="font-normal leading-snug text-muted-foreground">
                            Adicione uma camada extra de segurança à sua conta.
                        </span>
                    </Label>
                    <Switch id="2fa" />
                </div>
                <div className="flex flex-col space-y-2 p-4 border rounded-md">
                    <Label>Sessões Ativas</Label>
                    <p className="text-sm text-muted-foreground">Você está logado em 1 dispositivo ativo.</p>
                     <div className="flex justify-end">
                       <Button variant="destructive" size="sm">Desconectar de todos os dispositivos</Button>
                    </div>
                </div>
                 <div className="flex justify-end">
                    <Button>Salvar Alterações</Button>
                </div>
            </CardContent>
        </Card>
    );
};

export default SecuritySettings;