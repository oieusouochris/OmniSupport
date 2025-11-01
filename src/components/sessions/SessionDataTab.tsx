import React from 'react';
import { type Session } from '../../lib/definitions';

interface SessionDataTabProps {
    session: Session;
}

const DetailItem: React.FC<{ label: string; children: React.ReactNode }> = ({ label, children }) => (
    <div className="flex justify-between py-2 border-b text-sm">
        <span className="text-muted-foreground">{label}</span>
        <span className="font-medium text-right">{children}</span>
    </div>
);


const SessionDataTab: React.FC<SessionDataTabProps> = ({ session }) => {
    return (
        <div className="space-y-4 p-4">
            <h3 className="font-semibold">Detalhes da Sessão</h3>
            <div className="space-y-2">
                <DetailItem label="ID da Sessão">{session.id}</DetailItem>
                <DetailItem label="Usuário">{session.user.displayName}</DetailItem>
                <DetailItem label="Endereço IP">{session.ipAddress}</DetailItem>
                <DetailItem label="Localização">{session.location}</DetailItem>
                <DetailItem label="Dispositivo">{session.device}</DetailItem>
                <DetailItem label="Início da Sessão">{new Date(session.startTime).toLocaleString('pt-BR')}</DetailItem>
                <DetailItem label="Última Atividade">{new Date(session.lastSeen).toLocaleString('pt-BR')}</DetailItem>
            </div>
        </div>
    );
};

export default SessionDataTab;
