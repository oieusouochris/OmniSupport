import React, { useState } from 'react';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Button } from '../ui/button';
import { Textarea } from '../ui/textarea';
import { MessageSquarePlus } from 'lucide-react';
import { useToast } from '../../hooks/use-toast';

interface AuditCommentPopoverProps {
    auditId: string;
    onAddComment: (auditId: string, comment: string) => void;
}

const AuditCommentPopover: React.FC<AuditCommentPopoverProps> = ({ auditId, onAddComment }) => {
    const [comment, setComment] = useState('');
    const { toast } = useToast();

    const handleSubmit = () => {
        if (!comment.trim()) return;
        onAddComment(auditId, comment);
        setComment('');
        toast({ title: 'Comentário adicionado!' });
    };

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button variant="outline" size="sm">
                    <MessageSquarePlus className="mr-2 h-4 w-4" />
                    Comentar
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
                <div className="grid gap-4">
                    <div className="space-y-2">
                        <h4 className="font-medium leading-none">Adicionar Comentário</h4>
                        <p className="text-sm text-muted-foreground">
                            Deixe uma nota ou observação para esta auditoria.
                        </p>
                    </div>
                    <Textarea
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        placeholder="Digite seu comentário..."
                    />
                    <Button onClick={handleSubmit} disabled={!comment.trim()}>
                        Salvar Comentário
                    </Button>
                </div>
            </PopoverContent>
        </Popover>
    );
};

export default AuditCommentPopover;
