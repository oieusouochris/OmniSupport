import React from 'react';
import TicketsTable from '../components/tickets/tickets-table';
import { Button } from '../components/ui/button';
import { PlusCircle } from 'lucide-react';

const TicketsPage: React.FC = () => {
    return (
        <div className="space-y-6 p-4 md:p-6">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold">Tickets</h1>
                <Button>
                    <PlusCircle className="mr-2 h-4 w-4" />
                    Novo Ticket
                </Button>
            </div>
            <TicketsTable />
        </div>
    );
};

export default TicketsPage;