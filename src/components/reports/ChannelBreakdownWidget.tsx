import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { useDataStore } from '../../store/use-data-store';
import { type Channel } from '../../lib/definitions';

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

const ChannelBreakdownWidget: React.FC = () => {
    const { tickets } = useDataStore();

    const data = Object.entries(tickets.reduce((acc, ticket) => {
        acc[ticket.channel] = (acc[ticket.channel] || 0) + 1;
        return acc;
    }, {} as Record<Channel, number>)).map(([name, value]) => ({ name, value }));
    
    return (
        <Card>
            <CardHeader>
                <CardTitle>Volume por Canal</CardTitle>
                <CardDescription>Distribuição de tickets por canal de origem.</CardDescription>
            </CardHeader>
            <CardContent>
                <ResponsiveContainer width="100%" height={200}>
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
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                        <Legend />
                    </PieChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    );
};

export default ChannelBreakdownWidget;
