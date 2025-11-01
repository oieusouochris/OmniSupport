import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '../ui/dialog';
import { Button } from '../ui/button';
import { Textarea } from '../ui/textarea';
import { Label } from '../ui/label';
import { Skeleton } from '../ui/skeleton';

interface TestFlowModalProps {
    isOpen: boolean;
    onClose: () => void;
    onTest: (input: string) => Promise<any>;
    flowName: string;
}

const TestFlowModal: React.FC<TestFlowModalProps> = ({ isOpen, onClose, onTest, flowName }) => {
    const [input, setInput] = useState('');
    const [result, setResult] = useState<string | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleTest = async () => {
        setIsLoading(true);
        setResult(null);
        setError(null);
        try {
            const testResult = await onTest(input);
            setResult(JSON.stringify(testResult, null, 2));
        } catch (err) {
            setError(err instanceof Error ? err.message : 'Falha ao testar o fluxo.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[500px]">
                <DialogHeader>
                    <DialogTitle>Testar Fluxo: {flowName}</DialogTitle>
                    <DialogDescription>
                        Insira os dados de entrada para testar a execução deste fluxo.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid gap-2">
                        <Label htmlFor="test-input">Entrada (JSON)</Label>
                        <Textarea
                            id="test-input"
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder='{ "text": "Exemplo de entrada" }'
                            rows={5}
                        />
                    </div>
                </div>

                {isLoading && <Skeleton className="h-24 w-full" />}
                
                {error && <p className="text-sm text-red-500 text-center">{error}</p>}
                
                {result && (
                    <div className="p-4 border rounded-md bg-secondary">
                        <h4 className="font-semibold mb-2">Resultado:</h4>
                        <pre className="text-sm whitespace-pre-wrap overflow-auto max-h-48">{result}</pre>
                    </div>
                )}
                
                <DialogFooter>
                    <Button onClick={onClose} variant="outline">Cancelar</Button>
                    <Button onClick={handleTest} disabled={isLoading}>
                        {isLoading ? 'Testando...' : 'Executar Teste'}
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default TestFlowModal;
