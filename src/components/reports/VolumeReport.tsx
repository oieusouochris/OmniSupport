import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';

const mockData = [
  { name: 'Seg', recebidos: 40, resolvidos: 24 },
  { name: 'Ter', recebidos: 30, resolvidos: 13 },
  { name: 'Qua', recebidos: 20, resolvidos: 38 },
  { name: 'Qui', recebidos: 27, resolvidos: 29 },
  { name: 'Sex', recebidos: 18, resolvidos: 48 },
  { name: 'Sáb', recebidos: 23, resolvidos: 38 },
  { name: 'Dom', recebidos: 34, resolvidos: 43 },
];

const VolumeReport: React.FC = () => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Volume de Tickets (Últimos 7 dias)</CardTitle>
                <CardDescription>Tickets recebidos vs. resolvidos.</CardDescription>
            </CardHeader>
            <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={mockData}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="recebidos" stroke="#8884d8" />
                        <Line type="monotone" dataKey="resolvidos" stroke="#82ca9d" />
                    </LineChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    );
};

export default VolumeReport;
