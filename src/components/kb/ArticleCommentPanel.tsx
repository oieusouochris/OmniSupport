import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Textarea } from '../ui/textarea';
import { Button } from '../ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { ScrollArea } from '../ui/scroll-area';

// Mock data
const comments = [
    { id: 1, author: 'Supervisor Ana', text: 'Ótimo artigo! Apenas sugiro adicionar um exemplo de código.', timestamp: '2h atrás' },
    { id: 2, author: 'Agent Smith', text: 'Isso me ajudou a resolver 3 tickets hoje, obrigado!', timestamp: '4h atrás' },
];

const ArticleCommentPanel: React.FC = () => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Comentários</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    <Textarea placeholder="Adicionar um comentário..." />
                    <Button size="sm">Enviar Comentário</Button>
                </div>
                <ScrollArea className="h-64 mt-4">
                    <ul className="space-y-4">
                        {comments.map(comment => (
                            <li key={comment.id} className="flex gap-3">
                                <Avatar className="h-8 w-8">
                                    <AvatarFallback>{comment.author.charAt(0)}</AvatarFallback>
                                </Avatar>
                                <div>
                                    <div className="flex items-center gap-2">
                                        <p className="font-semibold text-sm">{comment.author}</p>
                                        <p className="text-xs text-muted-foreground">{comment.timestamp}</p>
                                    </div>
                                    <p className="text-sm">{comment.text}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </ScrollArea>
            </CardContent>
        </Card>
    );
};

export default ArticleCommentPanel;
