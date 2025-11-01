import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '../ui/dialog';
import { Button } from '../ui/button';
import { Textarea } from '../ui/textarea';
import { Label } from '../ui/label';
import { Skeleton } from '../ui/skeleton';

interface GenerateContentModalProps {
    isOpen: boolean;
    onClose: () => void;
    onGenerate: (prompt: string) => Promise<string>;
}

const GenerateContentModal: React.FC<GenerateContentModalProps> = ({ isOpen, onClose, onGenerate }) => {
    const [prompt, setPrompt] = useState('');
    const [result, setResult] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleGenerate = async () => {
        if (!prompt.trim()) return;
        setIsLoading(true);
        const generatedContent = await onGenerate(prompt);
        setResult(generatedContent);
        setIsLoading(false);
    };

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-lg">
                <DialogHeader>
                    <DialogTitle>Gerar Conteúdo com IA</DialogTitle>
                    <DialogDescription>
                        Descreva o conteúdo que você deseja criar, e a IA irá gerar um rascunho para você.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid gap-2">
                        <Label htmlFor="prompt">Prompt</Label>
                        <Textarea
                            id="prompt"
                            value={prompt}
                            onChange={(e) => setPrompt(e.target.value)}
                            placeholder="Ex: 'Escreva um artigo passo a passo sobre como redefinir uma senha'"
                            rows={3}
                        />
                    </div>
                    {isLoading && <Skeleton className="h-24 w-full" />}
                    {result && (
                         <div className="p-4 border rounded-md bg-secondary">
                            <h4 className="font-semibold mb-2">Conteúdo Gerado:</h4>
                            <p className="text-sm whitespace-pre-wrap">{result}</p>
                        </div>
                    )}
                </div>
                <DialogFooter>
                    <Button variant="outline" onClick={onClose}>Cancelar</Button>
                    <Button onClick={handleGenerate} disabled={isLoading || !prompt.trim()}>
                        {isLoading ? 'Gerando...' : 'Gerar'}
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default GenerateContentModal;
