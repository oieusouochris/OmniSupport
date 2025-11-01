import React from 'react';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Button } from '../ui/button';
import { Smile } from 'lucide-react';

// Em uma aplicação real, você usaria uma biblioteca como 'emoji-picker-react'.
// Este é um mock simplificado.
const emojis = ['😀', '😂', '👍', '🙏', '❤️', '🎉'];

interface EmojiPopoverProps {
    onSelectEmoji: (emoji: string) => void;
}

const EmojiPopover: React.FC<EmojiPopoverProps> = ({ onSelectEmoji }) => {
    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button variant="ghost" size="icon" className="h-8 w-8">
                    <Smile className="h-4 w-4" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto">
                <div className="flex gap-2">
                    {emojis.map(emoji => (
                        <button
                            key={emoji}
                            onClick={() => onSelectEmoji(emoji)}
                            className="text-2xl rounded-md p-1 hover:bg-muted"
                        >
                            {emoji}
                        </button>
                    ))}
                </div>
            </PopoverContent>
        </Popover>
    );
};

export default EmojiPopover;
