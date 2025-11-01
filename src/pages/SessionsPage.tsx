import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { useDataStore } from '../store/use-data-store';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../components/ui/table';
import { Badge } from '../components/ui/badge';
import { Button } from '../components/ui/button';

const SessionsPage: React.FC = () => {
    const { sessions } = useDataStore();

    return (
        <div className="space-y-6 p-4 md:p-6">
            <h1 className="text-2xl font-bold">Sessões Ativas</h1>
            <Card>
                <CardHeader>
                    <CardTitle>Sessões de Usuários</CardTitle>
                    <CardDescription>Monitore os logins e atividades dos usuários na plataforma.</CardDescription>
                </CardHeader>
                <CardContent>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Usuário</TableHead>
                                <TableHead>Localização</TableHead>
                                <TableHead>Dispositivo</TableHead>
                                <TableHead>Status</TableHead>
                                <TableHead>Última Atividade</TableHead>
                                <TableHead />
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {sessions.map(session => (
                                <TableRow key={session.id}>
                                    <TableCell>{session.user.displayName}</TableCell>
                                    <TableCell>{session.location}</TableCell>
                                    <TableCell>{session.device}</TableCell>
                                    <TableCell>
                                        <Badge variant={session.status === 'active' ? 'default' : 'secondary'}>
                                            {session.status}
                                        </Badge>
                                    </TableCell>
                                    <TableCell>{new Date(session.lastSeen).toLocaleString('pt-BR')}</TableCell>
                                    <TableCell className="text-right">
                                        <Button variant="destructive" size="sm">Invalidar</Button>
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </CardContent>
            </Card>
        </div>
    );
};

export default SessionsPage;
