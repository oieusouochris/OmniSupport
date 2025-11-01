import React from 'react';
import { Button } from '@/components/ui/button';
import { auth } from '@/lib/firebase/client';
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { LogoIcon } from '@/components/icons/LogoIcon';

const LoginPage: React.FC = () => {
    const handleSignIn = async () => {
        const provider = new GoogleAuthProvider();
        try {
            await signInWithPopup(auth, provider);
        } catch (error) {
            console.error('Error signing in with Google', error);
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-background">
            <div className="w-full max-w-sm p-8 space-y-8 bg-card rounded-lg shadow-lg border">
                <div className="flex flex-col items-center space-y-2">
                    <LogoIcon className="h-10 w-10" />
                    <h1 className="text-2xl font-bold">Bem-vindo ao OmniSuport</h1>
                    <p className="text-muted-foreground">Faça login para continuar</p>
                </div>
                <Button onClick={handleSignIn} className="w-full">
                    Entrar com Google
                </Button>
            </div>
        </div>
    );
};

export default LoginPage;