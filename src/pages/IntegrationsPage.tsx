import React from 'react';
import ServiceStatusWidget from '../components/observability/service-status-widget';
import { Button } from '../components/ui/button';
import { PlusCircle } from 'lucide-react';

const IntegrationsPage: React.FC = () => {
    return (
        <div className="space-y-6 p-4 md:p-6">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold">Integrações</h1>
                 <Button>
                    <PlusCircle className="mr-2 h-4 w-4" />
                    Nova Integração
                </Button>
            </div>
            <p className="text-muted-foreground">
                Conecte o Cortex com suas ferramentas favoritas para automatizar e centralizar seu trabalho.
            </p>
            
            <ServiceStatusWidget />
            
        </div>
    );
};

export default IntegrationsPage;
