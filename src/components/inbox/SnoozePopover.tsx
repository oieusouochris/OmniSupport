import React from 'react';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import { Button } from '../ui/button';
import { Clock } from 'lucide-react';

const SnoozePopover: React.FC = () => {
    const snoozeOptions = [
        { label: 'Mais tarde hoje', value: 'later_today' },
        { label: 'Amanhã', value: 'tomorrow' },
        { label: 'Próxima semana', value: 'next_week' },
    ];

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button variant="ghost" size="sm">
                    <Clock className="mr-2 h-4 w-4" />
                    Adiar
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-56">
                <div className="grid gap-2">
                    {snoozeOptions.map(option => (
                        <Button key={option.value} variant="ghost" className="w-full justify-start">
                            {option.label}
                        </Button>
                    ))}
                </div>
            </PopoverContent>
        </Popover>
    );
};

export default SnoozePopover;
