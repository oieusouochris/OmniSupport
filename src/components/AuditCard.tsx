import React from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardDescription, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { type AuditItem } from '@/lib/definitions';
import { Button } from '@/components/ui/button';

interface AuditCardProps {
    audit: AuditItem;
    onViewDetails: (auditId: string) => void;
}

type BadgeVariant = 'default' | 'secondary' | 'destructive' | 'outline';

// Mapeamento de status para cores para melhor visualização
const statusVariantMap: { [key in AuditItem['status']]: BadgeVariant } = {
    'Concluída': 'default', // Verde (shadcn default é mais para um azul primário, mas vamos manter a lógica)
    'Em Progresso': 'secondary', // Cinza/Azul
    'Pendente': 'outline', // Amarelo/Contorno
    'Cancelada': 'destructive' // Vermelho
};

const AuditCard: React.FC<AuditCardProps> = ({ audit, onViewDetails }) => {
    const badgeVariant = statusVariantMap[audit.status] || 'outline';

    return (
        <Card>
            <CardHeader>
                <div className="flex justify-between items-start">
                    <CardTitle className="text-base font-semibold">{audit.category}</CardTitle>
                    <Badge variant={badgeVariant}>{audit.status}</Badge>
                </div>
                <CardDescription>
                    {new Date(audit.timestamp).toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' })}
                </CardDescription>
            </CardHeader>
            <CardContent>
                <p className="text-sm text-muted-foreground line-clamp-2">{audit.description}</p>
            </CardContent>
            <CardFooter>
                <Button variant="ghost" size="sm" onClick={() => onViewDetails(audit.id)}>
                    Ver Detalhes
                </Button>
            </CardFooter>
        </Card>
    );
};

export default AuditCard;