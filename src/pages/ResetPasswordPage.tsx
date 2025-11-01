import React, { useState } from 'react';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { LogoIcon } from '../components/icons/LogoIcon';
import { Link } from 'react-router-dom';
import { useToast } from '../hooks/use-toast';

const ResetPasswordPage: React.FC = () => {
    const [email, setEmail] = useState('');
    const { toast } = useToast();

    const handleReset = (e: React.FormEvent) => {
        e.preventDefault();
        // Lógica de reset de senha com Firebase aqui
        console.log('Reset de senha solicitado para:', email);
        toast({
            title: 'Instruções Enviadas',
            description: 'Se houver uma conta associada a este e-mail, você receberá um link para redefinir sua senha.',
        });
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-background">
            <div className="w-full max-w-sm p-8 space-y-6 bg-card rounded-lg shadow-lg border">
                <div className="flex flex-col items-center space-y-2">
                    <LogoIcon className="h-10 w-10" />
                    <h1 className="text-2xl font-bold">Redefinir Senha</h1>
                    <p className="text-muted-foreground">Digite seu e-mail para continuar</p>
                </div>
                <form onSubmit={handleReset} className="space-y-4">
                     <div className="space-y-2">
                        <Label htmlFor="email">E-mail</Label>
                        <Input
                            id="email"
                            type="email"
                            placeholder="seu@email.com"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>
                    <Button type="submit" className="w-full">
                        Enviar Link de Redefinição
                    </Button>
                </form>
                <div className="text-center text-sm">
                    <Link to="/login" className="text-primary hover:underline">
                        Voltar para o Login
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ResetPasswordPage;
