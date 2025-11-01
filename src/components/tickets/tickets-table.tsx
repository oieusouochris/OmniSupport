import React from 'react';
import { useDataStore } from '../../store/use-data-store';
import { Card, CardContent } from '../ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table';
import { Badge } from '../ui/badge';

const TicketsTable: React.FC = () => {
    const { tickets } = useDataStore();

    return (
        <Card>
            <CardContent className="p-0">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>ID</TableHead>
                            <TableHead>Assunto</TableHead>
                            <TableHead>Cliente</TableHead>
                            <TableHead>Status</TableHead>
                            <TableHead>Prioridade</TableHead>
                            <TableHead>Canal</TableHead>
                            <TableHead>Agente</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {tickets.map(ticket => (
                            <TableRow key={ticket.id}>
                                <TableCell>{ticket.id}</TableCell>
                                <TableCell>{ticket.subject}</TableCell>
                                <TableCell>{ticket.customer.name}</TableCell>
                                <TableCell><Badge variant="outline">{ticket.status}</Badge></TableCell>
                                <TableCell>
                                    <Badge variant={ticket.priority === 'Alta' || ticket.priority === 'Urgente' ? 'destructive' : 'secondary'}>
                                        {ticket.priority}
                                    </Badge>
                                </TableCell>
                                <TableCell>{ticket.channel}</TableCell>
                                <TableCell>{ticket.agent?.displayName || 'N/A'}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    );
};

export default TicketsTable;