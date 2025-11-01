import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '../ui/dialog';
import { Button } from '../ui/button';
import { ScrollArea } from '../ui/scroll-area';
import { Skeleton } from '../ui/skeleton';
import { AIFlowSuggestions } from '../../lib/definitions';
import { Lightbulb, Shield, Zap } from 'lucide-react';

interface AIFlowAnalysisModalProps {
    isOpen: boolean;
    onClose: () => void;
    analysis: AIFlowSuggestions | null;
    isLoading: boolean;
}

const AIFlowAnalysisModal: React.FC<AIFlowAnalysisModalProps> = ({ isOpen, onClose, analysis, isLoading }) => {
    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[625px]">
                <DialogHeader>
                    <DialogTitle>Análise de Fluxo com IA</DialogTitle>
                    <DialogDescription>
                        Sugestões geradas por IA para otimizar seu fluxo de automação.
                    </DialogDescription>
                </DialogHeader>
                <ScrollArea className="max-h-[60vh] p-4">
                    {isLoading ? (
                        <div className="space-y-4">
                            <Skeleton className="h-8 w-1/3" />
                            <Skeleton className="h-20 w-full" />
                            <Skeleton className="h-8 w-1/3" />
                            <Skeleton className="h-20 w-full" />
                        </div>
                    ) : analysis ? (
                        <div className="space-y-6">
                            <div className="space-y-2">
                                <h3 className="font-semibold flex items-center gap-2"><Zap className="h-5 w-5 text-primary"/> Otimização</h3>
                                <p className="text-sm text-muted-foreground">{analysis.optimization}</p>
                            </div>
                            <div className="space-y-2">
                                <h3 className="font-semibold flex items-center gap-2"><Shield className="h-5 w-5 text-primary"/> Segurança</h3>
                                <p className="text-sm text-muted-foreground">{analysis.security}</p>
                            </div>
                            <div className="space-y-2">
                                <h3 className="font-semibold flex items-center gap-2"><Lightbulb className="h-5 w-5 text-primary"/> Clareza</h3>
                                <p className="text-sm text-muted-foreground">{analysis.clarity}</p>
                            </div>
                        </div>
                    ) : (
                        <p className="text-sm text-muted-foreground">Nenhuma análise disponível.</p>
                    )}
                </ScrollArea>
                <div className="flex justify-end pt-4">
                    <Button onClick={onClose} variant="outline">Fechar</Button>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default AIFlowAnalysisModal;
