import React from 'react';
import { Button } from './button';
import { Calendar } from './calendar';
import { Popover, PopoverContent, PopoverTrigger } from './popover';
import { Calendar as CalendarIcon } from 'lucide-react';
import { cn } from '../../lib/utils';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './select';

type DateFilterPreset = 'today' | 'last7' | 'last30' | 'custom';

interface DateFilterDropdownProps {
    onDateChange: (range: { from: Date; to: Date }) => void;
}

const DateFilterDropdown: React.FC<DateFilterDropdownProps> = ({ onDateChange }) => {
    const [date, setDate] = React.useState<Date | undefined>(new Date());
    const [preset, setPreset] = React.useState<DateFilterPreset>('last7');

    return (
        <div className="flex items-center gap-2">
            <Select onValueChange={(value) => setPreset(value as DateFilterPreset)} value={preset}>
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Selecione o período" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="today">Hoje</SelectItem>
                    <SelectItem value="last7">Últimos 7 dias</SelectItem>
                    <SelectItem value="last30">Últimos 30 dias</SelectItem>
                    <SelectItem value="custom">Personalizado</SelectItem>
                </SelectContent>
            </Select>
            
            {preset === 'custom' && (
                <Popover>
                    <PopoverTrigger asChild>
                        <Button
                            variant={"outline"}
                            className={cn("w-[240px] justify-start text-left font-normal", !date && "text-muted-foreground")}
                        >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {date ? format(date, "PPP", { locale: ptBR }) : <span>Escolha uma data</span>}
                        </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                        <Calendar
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            initialFocus
                        />
                    </PopoverContent>
                </Popover>
            )}
        </div>
    );
};

export default DateFilterDropdown;
