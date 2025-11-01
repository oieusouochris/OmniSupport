import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Ticket, StickyNote, Mail } from 'lucide-react';
import { type HistoryEvent } from '../../lib/definitions';

interface CustomerJourneyProps {
    history: HistoryEvent[];
}

const eventIcons = {
    ticket_created: <Ticket className="h-4 w-4" />,
    note_added: <StickyNote className="h-4 w-4" />,
    status_changed: <Ticket className="h-4 w-4" />,
    email_sent: <Mail className="h-4 w-4" />,
};

const CustomerJourney: React.FC<CustomerJourneyProps> = ({ history }) => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Jornada do Cliente</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="relative pl-6">
                    {/* Vertical line */}
                    <div className="absolute left-3 top-0 h-full w-0.5 bg-border"></div>
                    
                    <ul className="space-y-6">
                        {history.map((event, index) => (
                            <li key={event.id} className="relative">
                                <div className="absolute -left-[30px] top-1 flex h-6 w-6 items-center justify-center rounded-full bg-secondary">
                                    {eventIcons[event.type] || <Ticket className="h-4 w-4" />}
                                </div>
                                <p className="text-sm font-medium">{event.description}</p>
                                <p className="text-xs text-muted-foreground">
                                    {new Date(event.timestamp).toLocaleString('pt-BR')} por {event.author.name}
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>
            </CardContent>
        </Card>
    );
};

export default CustomerJourney;
