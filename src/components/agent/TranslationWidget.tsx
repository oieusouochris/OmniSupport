import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { ArrowRightLeft } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';
import { translateTextAPI } from '@/services/ai-service';


const TranslationWidget: React.FC = () => {
    const [textToTranslate, setTextToTranslate] = useState('');
    const [translatedText, setTranslatedText] = useState('');
    const [targetLang, setTargetLang] = useState('en');
    const [isLoading, setIsLoading] = useState(false);

    const handleTranslate = async () => {
        if (!textToTranslate.trim()) return;
        setIsLoading(true);
        setTranslatedText('');
        try {
            const result = await translateTextAPI(textToTranslate, targetLang);
            setTranslatedText(result.translatedText);
        } catch (error) {
            setTranslatedText('Falha na tradução.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <ArrowRightLeft className="h-5 w-5" />
                    Tradução Rápida
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                <Textarea
                    value={textToTranslate}
                    onChange={(e) => setTextToTranslate(e.target.value)}
                    placeholder="Digite ou cole o texto para traduzir..."
                    rows={4}
                />
                <div className="flex items-center gap-4">
                    <Select onValueChange={setTargetLang} value={targetLang}>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Idioma de destino" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="en">Inglês</SelectItem>
                            <SelectItem value="es">Espanhol</SelectItem>
                            <SelectItem value="fr">Francês</SelectItem>
                        </SelectContent>
                    </Select>
                    <Button onClick={handleTranslate} disabled={isLoading || !textToTranslate.trim()}>
                        {isLoading ? 'Traduzindo...' : 'Traduzir'}
                    </Button>
                </div>
                {isLoading ? (
                     <Skeleton className="h-16 w-full" />
                ) : translatedText && (
                    <div className="p-3 border rounded-md bg-secondary text-sm">
                        <p>{translatedText}</p>
                    </div>
                )}
            </CardContent>
        </Card>
    );
};

export default TranslationWidget;