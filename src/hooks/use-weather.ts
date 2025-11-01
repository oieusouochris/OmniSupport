import { useState, useEffect } from 'react';
import { type WeatherData } from '../lib/definitions';

// MOCK: Em um app real, a localização poderia ser obtida via API de geolocalização do navegador
const MOCK_LOCATION = { lat: '-23.55', lon: '-46.63' };

export const useWeather = () => {
    const [weather, setWeather] = useState<WeatherData | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchWeather = async () => {
            try {
                setIsLoading(true);
                setError(null);
                // Simula chamada de API - em um app real, seria algo como:
                // const response = await fetch(`/api/weather?lat=${MOCK_LOCATION.lat}&lon=${MOCK_LOCATION.lon}`);
                // const data = await response.json();
                
                await new Promise(resolve => setTimeout(resolve, 1000));
                const mockData: WeatherData = {
                    city: 'São Paulo',
                    temperature: 22,
                    condition: 'Nublado',
                    icon: 'Cloudy',
                    humidity: 75,
                    wind_speed: 15
                };

                setWeather(mockData);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Falha ao buscar dados do clima.');
            } finally {
                setIsLoading(false);
            }
        };

        fetchWeather();
    }, []);

    return { weather, isLoading, error };
};
