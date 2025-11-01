import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Calendar } from '../ui/calendar';

const CalendarWidget: React.FC = () => {
    const [date, setDate] = React.useState<Date | undefined>(new Date());
    
    return (
        <Card>
            <CardHeader>
                <CardTitle>Calendário</CardTitle>
            </CardHeader>
            <CardContent className="flex justify-center">
                 <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    className="rounded-md"
                />
            </CardContent>
        </Card>
    );
};

export default CalendarWidget;
