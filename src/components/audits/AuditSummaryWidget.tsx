import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { useDataStore } from '../../store/use-data-store';
import { type AuditStatus } from '../../lib/definitions';
import { ListChecks } from 'lucide-react';

const AuditSummaryWidget: React.FC = () => {
    const { auditItems } = useDataStore();

    const metrics = auditItems.reduce((acc, item) => {
        acc[item.status] = (acc[item.status] || 0) + 1;
        return acc;
    }, {} as Record<AuditStatus, number>);

    return (
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <ListChecks className="h-5 w-5" />
                    Resumo das Auditorias
                </CardTitle>
                <CardDescription>Status geral das auditorias em andamento.</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex justify-around text-center gap-4">
                    <div>
                        <p className="text-2xl font-bold">{metrics['Pendente'] || 0}</p>
                        <p className="text-xs text-muted-foreground">Pendentes</p>
                    </div>
                    <div>
                        <p className="text-2xl font-bold">{metrics['Em Progresso'] || 0}</p>
                        <p className="text-xs text-muted-foreground">Em Progresso</p>
                    </div>
                    <div>
                        <p className="text-2xl font-bold">{metrics['Concluída'] || 0}</p>
                        <p className="text-xs text-muted-foreground">Concluídas</p>
                    </div>
                    <div>
                        <p className="text-2xl font-bold text-destructive">{metrics['Cancelada'] || 0}</p>
                        <p className="text-xs text-muted-foreground">Canceladas</p>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default AuditSummaryWidget;
