import React from 'react';
import CustomerSnapshot from '../agent/CustomerSnapshot';
import { useDataStore } from '../../store/use-data-store';
import AIAssistantWidget from '../agent/AIAssistantWidget';
import CustomerInsightsWidget from '../agent/CustomerInsightsWidget';
import { ScrollArea } from '../ui/scroll-area';

const ContextPanel: React.FC = () => {
    const { customers, tickets } = useDataStore();
    const customer = customers[0];
    const ticket = tickets.find(t => t.customer.id === customer.id);

    return (
        <ScrollArea className="h-full">
            <div className="p-4 space-y-4">
                <CustomerSnapshot customer={customer} tags={ticket?.tags} />
                <AIAssistantWidget />
                <CustomerInsightsWidget />
            </div>
        </ScrollArea>
    );
};

export default ContextPanel;
