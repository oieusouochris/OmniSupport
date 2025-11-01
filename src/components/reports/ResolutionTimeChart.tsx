import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { useDataStore } from '../../store/use-data-store';
import { Channel } from '../../lib/definitions';

const ResolutionTimeChart: React.FC = () => {
    const { tickets } = useDataStore();

    // Mock data processing
    const processData = () => {
        const dataByChannel: { [key in Channel]?: { total: number, count: number } } = {};
        
        tickets.forEach(ticket => {
            if (!dataByChannel[ticket.channel]) {
                dataByChannel[ticket.channel] = { total: 0, count: 0 };
            }
            // Mock resolution time in hours
            const resolutionTime = (ticket.updatedAt - ticket.createdAt) / (1000 * 60 * 60);
            dataByChannel[ticket.channel]!.total += resolutionTime > 0 ? resolutionTime : 24; // ensure positive time
            dataByChannel[ticket.channel]!.count += 1;
        });

        return Object.entries(dataByChannel).map(([name, { total, count }]) => ({
            name,
            "Tempo Médio (horas)": parseFloat((total / count).toFixed(1)),
        }));
    };
    
    const chartData = processData();

    return (
        <Card>
            <CardHeader>
                <CardTitle>Tempo Médio de Resolução</CardTitle>
                <CardDescription>Tempo médio para resolver tickets por canal.</CardDescription>
            </CardHeader>
            <CardContent>
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart
                        data={chartData}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="Tempo Médio (horas)" fill="var(--color-primary)" />
                    </BarChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    );
};

export default ResolutionTimeChart;
