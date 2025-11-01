import React from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';

const ChatPanel: React.FC = () => {
    return (
        <div className="flex flex-col h-full">
            <div className="p-4 border-b">
                <h2 className="font-semibold">Alice - Problema com fatura</h2>
            </div>
            <div className="flex-1 p-4 space-y-4 overflow-y-auto">
                {/* Mensagens do chat aqui */}
                <div className="text-sm">...</div>
            </div>
            <div className="p-4 border-t">
                <Textarea placeholder="Digite sua resposta..." />
                <div className="flex justify-end mt-2">
                    <Button>Enviar</Button>
                </div>
            </div>
        </div>
    );
};

export default ChatPanel;