import React, { useState, useEffect } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

// Gera dados mockados para o gráfico
const generateData = () => {
    const data = [];
    for (let i = 10; i >= 0; i--) {
        data.push({
            time: `-${i}s`,
            usage: Math.floor(Math.random() * (75 - 40 + 1)) + 40,
        });
    }
    return data;
};

const CpuUsageChart: React.FC = () => {
    const [data, setData] = useState(generateData());

    useEffect(() => {
        const interval = setInterval(() => {
            setData(prevData => {
                const newData = [...prevData.slice(1)];
                newData.push({
                    time: '0s',
                    usage: Math.floor(Math.random() * (80 - 35 + 1)) + 35,
                });
                return newData.map((d, i) => ({ ...d, time: `-${newData.length - 1 - i}s` }));
            });
        }, 2000);

        return () => clearInterval(interval);
    }, []);

    return (
        <Card>
            <CardHeader>
                <CardTitle>Uso da CPU em Tempo Real</CardTitle>
                <CardDescription>Últimos segundos de atividade da CPU.</CardDescription>
            </CardHeader>
            <CardContent>
                <ResponsiveContainer width="100%" height={200}>
                    <AreaChart
                        data={data}
                        margin={{
                            top: 10,
                            right: 30,
                            left: 0,
                            bottom: 0,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="time" />
                        <YAxis domain={[0, 100]} unit="%" />
                        <Tooltip />
                        <Area type="monotone" dataKey="usage" stroke="var(--color-primary)" fill="var(--color-primary)" fillOpacity={0.3} />
                    </AreaChart>
                </ResponsiveContainer>
            </CardContent>
        </Card>
    );
};

export default CpuUsageChart;