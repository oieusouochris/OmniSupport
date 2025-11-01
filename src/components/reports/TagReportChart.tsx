import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { useDataStore } from '../../store/use-data-store';

const TagReportChart: React.FC = () => {
    const { tickets } = useDataStore();

    const processData = () => {
        const tagCounts: { [key: string]: number } = {};
        tickets.forEach(ticket => {
            ticket.tags?.forEach(tag => {
                tagCounts[tag] = (tagCounts[tag] || 0) + 1;
            });
        });

        return Object.entries(tagCounts)
            .map(([name, count]) => ({ name, count }))
            .sort((a, b) => b.count - a.count)
            .slice(0, 10); // Mostra as 10 tags mais usadas
    };
    
    const chartData = processData();

    return (
        <Card>
            <CardHeader>
                <CardTitle>Top Tags de Tickets</CardTitle>
                <CardDescription>As tags mais frequentes nos tickets abertos.</CardDescription>
            </CardHeader>
            <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={chartData} layout="vertical">
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis type="number" />
                        <YAxis type="category" dataKey="name" width={80} />
                        <Tooltip />
                        <Bar dataKey="count" fill="var(--color-primary)" name="Contagem" />
                    </BarChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    );
};

export default TagReportChart;
