import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Skeleton } from '../ui/skeleton';
import { getRadarImageAPI } from '../../services/external-api-service';
import { Map } from 'lucide-react';

const WeatherRadarWidget: React.FC = () => {
    const [imageUrl, setImageUrl] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchRadarImage = async () => {
            setIsLoading(true);
            setError(null);
            try {
                // MOCK: Usando localização fixa para São Paulo
                const response = await getRadarImageAPI('-23.55', '-46.63');
                setImageUrl(response.imageUrl);
            } catch (err) {
                setError(err instanceof Error ? err.message : 'Falha ao carregar imagem do radar.');
            } finally {
                setIsLoading(false);
            }
        };

        fetchRadarImage();
    }, []);

    return (
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <Map className="h-5 w-5" />
                    Radar Meteorológico
                </CardTitle>
                <CardDescription>Imagem de radar para a sua localização.</CardDescription>
            </CardHeader>
            <CardContent className="flex items-center justify-center">
                {isLoading && <Skeleton className="w-full h-48" />}
                {error && <p className="text-sm text-red-500">{error}</p>}
                {imageUrl && !isLoading && (
                    <img src={imageUrl} alt="Radar Meteorológico" className="w-full h-auto rounded-md border" />
                )}
            </CardContent>
        </Card>
    );
};

export default WeatherRadarWidget;
