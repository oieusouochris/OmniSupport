import React from 'react';
import { useAuth } from '../hooks/use-auth';
import { Button } from './ui/button';
// FIX: Utiliza a instância singleton do `auth` para consistência.
import { auth } from '../lib/firebase/client';
import { signOut, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { Skeleton } from './ui/skeleton';
import { useToast } from '../hooks/use-toast';

const AuthButton: React.FC = () => {
    const { user, loading } = useAuth();
    const { toast } = useToast();

    const handleSignIn = async () => {
        const provider = new GoogleAuthProvider();
        try {
            await signInWithPopup(auth, provider);
        } catch (error) {
            console.error('Error signing in with Google', error);
            toast({
                variant: "destructive",
                title: "Erro de Autenticação",
                description: "Não foi possível fazer login com o Google. Por favor, tente novamente.",
            });
        }
    };

    const handleSignOut = async () => {
        try {
            await signOut(auth);
        } catch (error) {
            console.error('Error signing out', error);
            toast({
                variant: "destructive",
                title: "Erro ao Sair",
                description: "Não foi possível fazer o logout. Por favor, tente novamente.",
            });
        }
    };

    if (loading) {
        return <Skeleton className="h-8 w-8 rounded-full" />;
    }

    if (user) {
        return (
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="relative h-8 w-8 rounded-full">
                        <Avatar className="h-8 w-8">
                            <AvatarImage src={user.photoURL ?? ''} alt={user.displayName ?? 'User'} />
                            <AvatarFallback>{user.displayName?.charAt(0).toUpperCase() ?? 'U'}</AvatarFallback>
                        </Avatar>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56" align="end" forceMount>
                    <DropdownMenuLabel className="font-normal">
                        <div className="flex flex-col space-y-1">
                            <p className="text-sm font-medium leading-none">{user.displayName}</p>
                            <p className="text-xs leading-none text-muted-foreground">
                                {user.email}
                            </p>
                        </div>
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={handleSignOut}>
                        Sair
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>
        );
    }

    return <Button onClick={handleSignIn} variant="outline" size="sm">Entrar</Button>;
};

export default AuthButton;