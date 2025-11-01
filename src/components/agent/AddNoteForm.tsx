import React, { useState } from 'react';
import { Button } from '../ui/button';
import { Textarea } from '../ui/textarea';
import { useToast } from '../../hooks/use-toast';

interface AddNoteFormProps {
    onAddNote: (note: string) => void;
}

const AddNoteForm: React.FC<AddNoteFormProps> = ({ onAddNote }) => {
    const [note, setNote] = useState('');
    const { toast } = useToast();

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (note.trim()) {
            onAddNote(note);
            setNote('');
            toast({
                title: "Nota Adicionada",
                description: "Sua nota foi salva com sucesso.",
            });
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-2">
            <Textarea
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="Adicionar uma nota interna..."
                rows={3}
            />
            <Button type="submit" size="sm" disabled={!note.trim()}>
                Adicionar Nota
            </Button>
        </form>
    );
};

export default AddNoteForm;
