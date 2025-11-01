import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { useDataStore } from '@/store/use-data-store';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const TeamPerformance: React.FC = () => {
    const { teamMembers } = useDataStore();

    return (
        <Card>
            <CardHeader>
                <CardTitle>Desempenho da Equipe</CardTitle>
                <CardDescription>Métricas individuais dos agentes no período atual.</CardDescription>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Agente</TableHead>
                            <TableHead>Tickets Resolvidos</TableHead>
                            <TableHead>Tempo Médio de Resposta</TableHead>
                            <TableHead>Satisfação (CSAT)</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {teamMembers.map(member => (
                            <TableRow key={member.id}>
                                <TableCell className="flex items-center gap-2">
                                    <Avatar className="h-8 w-8">
                                        <AvatarImage src={member.avatarUrl} />
                                        <AvatarFallback>{member.name.charAt(0)}</AvatarFallback>
                                    </Avatar>
                                    <span>{member.name}</span>
                                </TableCell>
                                <TableCell>{member.stats.tickets_resolved}</TableCell>
                                <TableCell>{member.stats.avg_response_time} min</TableCell>
                                <TableCell>{member.stats.satisfaction}%</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    );
};

export default TeamPerformance;