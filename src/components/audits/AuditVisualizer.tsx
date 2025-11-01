import React from 'react';
import { Card, CardHeader, CardTitle, CardContent, CardDescription } from '../ui/card';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { useDataStore } from '../../store/use-data-store';
import { type AuditStatus } from '../../lib/definitions';

const COLORS: Record<AuditStatus, string> = {
    'Pendente': '#f59e0b', // amber-500
    'Em Progresso': '#3b82f6', // blue-500
    'Concluída': '#22c55e', // green-500
    'Cancelada': '#ef4444', // red-500
};

const AuditVisualizer: React.FC = () => {
  const { auditItems } = useDataStore();

  const data = Object.entries(auditItems.reduce((acc, item) => {
    acc[item.status] = (acc[item.status] || 0) + 1;
    return acc;
  }, {} as Record<AuditStatus, number>)).map(([name, value]) => ({ name, value }));

  return (
    <Card>
      <CardHeader>
        <CardTitle>Visualização de Auditorias</CardTitle>
        <CardDescription>Distribuição de auditorias por status.</CardDescription>
      </CardHeader>
      <CardContent>
        {data.length > 0 ? (
            <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                        nameKey="name"
                        label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
                    >
                        {data.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[entry.name as AuditStatus]} />
                        ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                </PieChart>
            </ResponsiveContainer>
        ) : (
            <div className="flex items-center justify-center h-[250px]">
                <p className="text-muted-foreground">Nenhum dado de auditoria para visualizar.</p>
            </div>
        )}
      </CardContent>
    </Card>
  );
};

export default AuditVisualizer;
