import React from 'react';
import { Button } from '../ui/button';
import { Save, Send, Bot } from 'lucide-react';

interface EditorToolbarProps {
    onSave: () => void;
    onPublish: () => void;
    onGenerate: () => void;
}

const EditorToolbar: React.FC<EditorToolbarProps> = ({ onSave, onPublish, onGenerate }) => {
    return (
        <div className="flex items-center justify-end gap-2 p-2 border-b">
            <Button variant="outline" size="sm" onClick={onGenerate}>
                <Bot className="mr-2 h-4 w-4" />
                Gerar com IA
            </Button>
            <Button variant="secondary" size="sm" onClick={onSave}>
                <Save className="mr-2 h-4 w-4" />
                Salvar Rascunho
            </Button>
            <Button size="sm" onClick={onPublish}>
                <Send className="mr-2 h-4 w-4" />
                Publicar Artigo
            </Button>
        </div>
    );
};

export default EditorToolbar;
