import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { FileUploadZone } from '@/components/ui/file-upload-zone';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import { Upload } from 'lucide-react';

const FileUploadWidget: React.FC = () => {
    const [selectedFile, setSelectedFile] = useState<File | null>(null);
    const [isUploading, setIsUploading] = useState(false);
    const { toast } = useToast();

    const handleDrop = (files: File[]) => {
        if (files.length > 0) {
            setSelectedFile(files[0]);
        }
    };

    const handleUpload = async () => {
        if (!selectedFile) return;

        setIsUploading(true);
        // Simula o upload
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        setIsUploading(false);
        setSelectedFile(null);
        toast({
            title: 'Upload Concluído',
            description: `O arquivo "${selectedFile.name}" foi enviado com sucesso.`,
        });
    };

    return (
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <Upload className="h-5 w-5" />
                    Upload de Arquivo
                </CardTitle>
                <CardDescription>Faça upload de documentos ou outros arquivos para o sistema.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <FileUploadZone
                    onDrop={handleDrop}
                    maxFiles={1}
                    accept={{ 'application/pdf': ['.pdf'], 'text/csv': ['.csv'] }}
                />
                
                {selectedFile && (
                    <div className="text-sm">
                        <p>Arquivo selecionado: <span className="font-semibold">{selectedFile.name}</span></p>
                    </div>
                )}
                
                <Button onClick={handleUpload} disabled={!selectedFile || isUploading} className="w-full">
                    {isUploading ? 'Enviando...' : 'Enviar Arquivo'}
                </Button>
            </CardContent>
        </Card>
    );
};

export default FileUploadWidget;