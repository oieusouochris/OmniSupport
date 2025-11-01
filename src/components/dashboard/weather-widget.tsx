import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Skeleton } from '../ui/skeleton';
import { Sun, Cloud, CloudRain, Thermometer, Droplets, Wind } from 'lucide-react';
import { type WeatherData } from '../../lib/definitions';

const weatherIcons: { [key: string]: React.ReactNode } = {
    'Sunny': <Sun className="h-8 w-8 text-yellow-400" />,
    'Cloudy': <Cloud className="h-8 w-8 text-gray-400" />,
    'Rainy': <CloudRain className="h-8 w-8 text-blue-400" />,
};

const WeatherWidget: React.FC = () => {
    const [weather, setWeather] = useState<WeatherData | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchWeather = async () => {
            setIsLoading(true);
            // MOCK: Simula chamada de API
            await new Promise(resolve => setTimeout(resolve, 1000));
            setWeather({
                city: 'São Paulo',
                temperature: 22,
                condition: 'Cloudy',
                icon: 'Cloudy',
                humidity: 75,
                wind_speed: 15
            });
            setIsLoading(false);
        };
        fetchWeather();
    }, []);

    if (isLoading) {
        return (
            <Card>
                <CardHeader>
                    <Skeleton className="h-6 w-3/4" />
                </CardHeader>
                <CardContent className="space-y-4">
                    <Skeleton className="h-10 w-1/2" />
                    <Skeleton className="h-4 w-full" />
                    <Skeleton className="h-4 w-full" />
                </CardContent>
            </Card>
        );
    }
    
    if (!weather) return null;

    return (
        <Card>
            <CardHeader>
                <CardTitle>Clima Atual</CardTitle>
                <CardDescription>{weather.city}</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                        {weatherIcons[weather.icon]}
                        <span className="text-4xl font-bold">{weather.temperature}°C</span>
                    </div>
                    <p className="text-muted-foreground">{weather.condition}</p>
                </div>
                <div className="flex justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-1"><Droplets size={14} /> Umidade: {weather.humidity}%</div>
                    <div className="flex items-center gap-1"><Wind size={14} /> Vento: {weather.wind_speed} km/h</div>
                </div>
            </CardContent>
        </Card>
    );
};

export default WeatherWidget;
