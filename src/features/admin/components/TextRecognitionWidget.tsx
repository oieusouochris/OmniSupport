import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { FileUploadZone } from '@/components/ui/file-upload-zone';
import { Button } from '@/components/ui/button';
import { recognizeTextFromImageAPI } from '@/services/ocr-service';
import { Skeleton } from '@/components/ui/skeleton';
import { FileText } from 'lucide-react';

const TextRecognitionWidget: React.FC = () => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [recognizedText, setRecognizedText] = useState<string>('');
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState<string>('');

    const handleDrop = (files: File[]) => {
        if (files.length > 0) {
            setSelectedFile(files[0]);
            setRecognizedText('');
            setError('');
        }
    };

    const handleRecognize = async () => {
        if (!selectedFile) return;

        setIsLoading(true);
        setError('');
        setRecognizedText('');

        try {
            const text = await recognizeTextFromImageAPI(selectedFile);
            setRecognizedText(text);
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Ocorreu um erro desconhecido.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5" />
                    Reconhecimento de Texto (OCR)
                </CardTitle>
                <CardDescription>Extraia texto de uma imagem enviada.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <FileUploadZone onDrop={handleDrop} maxFiles={1} />

                {selectedFile && (
                    <div className="text-sm text-center">
                        Arquivo selecionado: <span className="font-semibold">{selectedFile.name}</span>
                    </div>
                )}

                <Button onClick={handleRecognize} disabled={!selectedFile || isLoading} className="w-full">
                    {isLoading ? 'Reconhecendo...' : 'Reconhecer Texto'}
                </Button>

                {isLoading && <Skeleton className="h-24 w-full" />}
                
                {error && <p className="text-sm text-red-500 text-center">{error}</p>}
                
                {recognizedText && (
                    <div className="p-4 border rounded-md bg-secondary">
                        <h4 className="font-semibold mb-2">Texto Reconhecido:</h4>
                        <p className="text-sm whitespace-pre-wrap">{recognizedText}</p>
                    </div>
                )}
            </CardContent>
        </Card>
    );
};

export default TextRecognitionWidget;