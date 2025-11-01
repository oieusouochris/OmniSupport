import React from 'react';
import CustomerSnapshot from '@/components/agent/CustomerSnapshot';
import { useDataStore } from '@/store/use-data-store';
import AIAssistantWidget from '@/features/agent/components/AIAssistantWidget';
import CustomerInsightsWidget from '@/features/agent/components/CustomerInsightsWidget';
import { ScrollArea } from '@/components/ui/scroll-area';

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