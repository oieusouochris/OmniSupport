import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '../ui/dialog';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Badge } from '../ui/badge';
import { X } from 'lucide-react';

interface ManageTagsModalProps {
    isOpen: boolean;
    onClose: () => void;
    initialTags?: string[];
}

const ManageTagsModal: React.FC<ManageTagsModalProps> = ({ isOpen, onClose, initialTags = [] }) => {
    const [tags, setTags] = useState<string[]>(initialTags);
    const [inputValue, setInputValue] = useState('');

    const handleAddTag = () => {
        if (inputValue && !tags.includes(inputValue)) {
            setTags([...tags, inputValue]);
        }
        setInputValue('');
    };

    const handleRemoveTag = (tagToRemove: string) => {
        setTags(tags.filter(tag => tag !== tagToRemove));
    };

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Gerenciar Tags</DialogTitle>
                    <DialogDescription>Adicione ou remova tags para esta conversa.</DialogDescription>
                </DialogHeader>
                <div className="py-4 space-y-4">
                    <div className="flex gap-2">
                        <Input
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                            onKeyDown={(e) => e.key === 'Enter' && handleAddTag()}
                            placeholder="Adicionar nova tag..."
                        />
                        <Button onClick={handleAddTag}>Adicionar</Button>
                    </div>
                    <div className="flex flex-wrap gap-2">
                        {tags.map(tag => (
                            <Badge key={tag} variant="secondary">
                                {tag}
                                <button onClick={() => handleRemoveTag(tag)} className="ml-1 rounded-full hover:bg-destructive/80 p-0.5">
                                    <X className="h-3 w-3" />
                                </button>
                            </Badge>
                        ))}
                    </div>
                </div>
                 <DialogFooter>
                    <Button variant="outline" onClick={onClose}>Fechar</Button>
                    <Button>Salvar Tags</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default ManageTagsModal;
