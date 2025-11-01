import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/card';

export const AuditVisualizerWidget: React.FC = () => {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Visualização de Auditoria</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-slate-400">Componente de visualização de auditoria.</p>
      </CardContent>
    </Card>
  );
};