import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '../ui/dialog';
import { Button } from '../ui/button';
import { Skeleton } from '../ui/skeleton';
import { Bot } from 'lucide-react';

interface ConversationSummaryModalProps {
    isOpen: boolean;
    onClose: () => void;
    summary: string | null;
    isLoading: boolean;
}

const ConversationSummaryModal: React.FC<ConversationSummaryModalProps> = ({ isOpen, onClose, summary, isLoading }) => {
    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className="flex items-center gap-2">
                        <Bot className="h-5 w-5" />
                        Resumo da Conversa (IA)
                    </DialogTitle>
                    <DialogDescription>
                        Um resumo gerado por IA dos pontos principais da conversa.
                    </DialogDescription>
                </DialogHeader>
                <div className="py-4 min-h-[150px]">
                    {isLoading ? (
                        <div className="space-y-2">
                            <Skeleton className="h-4 w-full" />
                            <Skeleton className="h-4 w-full" />
                            <Skeleton className="h-4 w-3/4" />
                        </div>
                    ) : (
                        <p className="text-sm text-muted-foreground">{summary || 'Não foi possível gerar um resumo.'}</p>
                    )}
                </div>
                 <div className="flex justify-end">
                    <Button variant="outline" onClick={onClose}>Fechar</Button>
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default ConversationSummaryModal;
