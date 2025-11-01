import React from 'react';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { Button } from './ui/button';
import { HelpCircle } from 'lucide-react';

// Este é um placeholder para uma funcionalidade de tour mais complexa.
// Em uma aplicação real, você usaria uma biblioteca como 'react-joyride'.

const HelpTour: React.FC = () => {
    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button variant="outline" size="icon">
                    <HelpCircle className="h-4 w-4" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-80">
                <div className="grid gap-4">
                    <div className="space-y-2">
                        <h4 className="font-medium leading-none">Tour Guiado</h4>
                        <p className="text-sm text-muted-foreground">
                           Clique aqui para iniciar um tour pelas principais funcionalidades da plataforma. (Funcionalidade em breve)
                        </p>
                    </div>
                    <Button>Iniciar Tour</Button>
                </div>
            </PopoverContent>
        </Popover>
    );
};

export default HelpTour;
