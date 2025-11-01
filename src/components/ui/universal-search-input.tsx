import React from 'react';
import { Input, type InputProps } from './input';
import { Search } from 'lucide-react';
import { cn } from '../../lib/utils';

interface UniversalSearchInputProps extends InputProps {
    // Adicione props customizadas se necessário
}

export const UniversalSearchInput = React.forwardRef<HTMLInputElement, UniversalSearchInputProps>(
    ({ className, ...props }, ref) => {
        return (
            <div className="relative w-full">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                    ref={ref}
                    className={cn("pl-9", className)}
                    {...props}
                />
            </div>
        );
    }
);

UniversalSearchInput.displayName = 'UniversalSearchInput';
