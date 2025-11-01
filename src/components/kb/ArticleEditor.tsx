import React, { useState } from 'react';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';

interface ArticleEditorProps {
    initialTitle?: string;
    initialContent?: string;
}

const ArticleEditor: React.FC<ArticleEditorProps> = ({ initialTitle = '', initialContent = '' }) => {
    const [title, setTitle] = useState(initialTitle);
    const [content, setContent] = useState(initialContent);

    return (
        <div className="space-y-4">
            <Input
                placeholder="Título do Artigo"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="text-2xl font-bold h-auto p-2 border-0 shadow-none focus-visible:ring-0"
            />
            {/* Em uma aplicação real, este seria um editor de rich text como Tiptap ou TinyMCE */}
            <Textarea
                placeholder="Comece a escrever seu artigo aqui..."
                value={content}
                onChange={(e) => setContent(e.target.value)}
                className="min-h-[60vh] border-0 shadow-none focus-visible:ring-0 text-base"
            />
        </div>
    );
};

export default ArticleEditor;
