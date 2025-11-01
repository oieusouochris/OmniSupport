import React from 'react';
import { type Ticket } from '../../lib/definitions';
import { Badge } from '../ui/badge';

interface DetailsTabProps {
    ticket: Ticket;
}

const DetailItem: React.FC<{ label: string; children: React.ReactNode }> = ({ label, children }) => (
    <div className="flex justify-between py-2 border-b">
        <span className="text-sm text-muted-foreground">{label}</span>
        <span className="text-sm font-medium text-right">{children}</span>
    </div>
);

const DetailsTab: React.FC<DetailsTabProps> = ({ ticket }) => {
    return (
        <div className="space-y-4 p-4">
            <h3 className="font-semibold">Detalhes do Ticket</h3>
            <div className="space-y-2">
                <DetailItem label="ID do Ticket">{ticket.id}</DetailItem>
                <DetailItem label="Status">
                    <Badge variant="outline">{ticket.status}</Badge>
                </DetailItem>
                <DetailItem label="Prioridade">
                    <Badge variant={ticket.priority === 'Alta' || ticket.priority === 'Urgente' ? 'destructive' : 'secondary'}>
                        {ticket.priority}
                    </Badge>
                </DetailItem>
                <DetailItem label="Canal">{ticket.channel}</DetailItem>
                <DetailItem label="Agente">{ticket.agent?.displayName || 'Não atribuído'}</DetailItem>
                <DetailItem label="Criado em">{new Date(ticket.createdAt).toLocaleString('pt-BR')}</DetailItem>
                <DetailItem label="Atualizado em">{new Date(ticket.updatedAt).toLocaleString('pt-BR')}</DetailItem>
            </div>
        </div>
    );
};

export default DetailsTab;