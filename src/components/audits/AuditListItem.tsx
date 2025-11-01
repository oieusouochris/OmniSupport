import React from 'react';
import { type AuditItem } from '../../lib/definitions';
import { Badge } from '../ui/badge';
import { Button } from '../ui/button';
import { cn } from '../../lib/utils';

interface AuditListItemProps {
  audit: AuditItem;
  onViewDetails: (auditId: string) => void;
}

const statusVariantMap: { [key in AuditItem['status']]: 'default' | 'secondary' | 'destructive' | 'outline' } = {
    'Concluída': 'default',
    'Em Progresso': 'secondary',
    'Pendente': 'outline',
    'Cancelada': 'destructive'
};

const AuditListItem: React.FC<AuditListItemProps> = ({ audit, onViewDetails }) => {
  const badgeVariant = statusVariantMap[audit.status] || 'outline';

  return (
    <div className="flex items-center justify-between p-4 border-b hover:bg-muted/50">
      <div className="flex-1 space-y-1">
        <p className="text-sm font-medium">{audit.category}</p>
        <p className="text-sm text-muted-foreground line-clamp-1">{audit.description}</p>
        <p className="text-xs text-muted-foreground">
          {new Date(audit.timestamp).toLocaleDateString('pt-BR')}
        </p>
      </div>
      <div className="flex items-center gap-4 ml-4">
        <Badge variant={badgeVariant}>{audit.status}</Badge>
        <Button variant="ghost" size="sm" onClick={() => onViewDetails(audit.id)}>
          Detalhes
        </Button>
      </div>
    </div>
  );
};

export default AuditListItem;
