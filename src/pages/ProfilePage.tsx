import React from 'react';
import { useAuth } from '../hooks/use-auth';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { Label } from '../components/ui/label';
import { Skeleton } from '../components/ui/skeleton';

const ProfilePage: React.FC = () => {
    const { user, loading } = useAuth();

    if (loading || !user) {
        return (
            <div className="p-4 md:p-6 space-y-6">
                <Skeleton className="h-8 w-48" />
                <Card>
                    <CardHeader>
                        <Skeleton className="h-6 w-32" />
                        <Skeleton className="h-4 w-64" />
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <div className="flex items-center gap-4">
                            <Skeleton className="h-20 w-20 rounded-full" />
                            <div className="space-y-2">
                                <Skeleton className="h-5 w-40" />
                                <Skeleton className="h-4 w-56" />
                            </div>
                        </div>
                        <Skeleton className="h-10 w-full" />
                        <Skeleton className="h-10 w-full" />
                    </CardContent>
                </Card>
            </div>
        );
    }
    
    return (
        <div className="space-y-6 p-4 md:p-6">
             <h1 className="text-2xl font-bold">Seu Perfil</h1>
             <Card>
                <CardHeader>
                    <CardTitle>Informações Pessoais</CardTitle>
                    <CardDescription>Atualize seu nome, foto e outras informações.</CardDescription>
                </CardHeader>
                 <CardContent className="space-y-4">
                    <div className="flex items-center gap-4">
                        <Avatar className="h-20 w-20">
                            <AvatarImage src={user.photoURL ?? ''} alt={user.displayName ?? ''} />
                            <AvatarFallback>{user.displayName?.charAt(0).toUpperCase() ?? 'U'}</AvatarFallback>
                        </Avatar>
                        <div>
                            <h2 className="text-xl font-semibold">{user.displayName}</h2>
                            <p className="text-sm text-muted-foreground">{user.email}</p>
                            <Button variant="link" className="p-0 h-auto">Alterar foto</Button>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="displayName">Nome de Exibição</Label>
                        <Input id="displayName" defaultValue={user.displayName ?? ''} />
                    </div>
                     <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" type="email" defaultValue={user.email ?? ''} disabled />
                    </div>
                    <div className="flex justify-end">
                        <Button>Salvar Alterações</Button>
                    </div>
                 </CardContent>
             </Card>
        </div>
    );
};

export default ProfilePage;
