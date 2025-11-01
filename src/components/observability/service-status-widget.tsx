import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { useDataStore } from '../../store/use-data-store';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip';
import { cn } from '../../lib/utils';
import { CheckCircle2, AlertTriangle, XCircle, PowerOff } from 'lucide-react';
import { type ServiceStatusValue } from '../../lib/definitions';

const statusMap: { [key in ServiceStatusValue | 'disabled']: { icon: React.ElementType, color: string, label: string } } = {
    operational: { icon: CheckCircle2, color: 'text-green-500', label: 'Operacional' },
    degraded: { icon: AlertTriangle, color: 'text-yellow-500', label: 'Degradado' },
    outage: { icon: XCircle, color: 'text-red-500', label: 'Interrupção' },
    disabled: { icon: PowerOff, color: 'text-gray-400', label: 'Desabilitado' }
};

const ServiceStatusWidget: React.FC = () => {
    const { apiIntegrations } = useDataStore();

    return (
        <Card>
            <CardHeader>
                <CardTitle>Status dos Serviços</CardTitle>
                <CardDescription>Status das integrações de API e serviços externos.</CardDescription>
            </CardHeader>
            <CardContent>
                <TooltipProvider>
                    <ul className="space-y-3">
                        {apiIntegrations.map((service) => {
                            const statusInfo = statusMap[service.status];
                            const Icon = statusInfo.icon;
                            return (
                                <li key={service.name} className="flex items-center justify-between">
                                    <span className="text-sm font-medium">{service.name}</span>
                                    <Tooltip>
                                        <TooltipTrigger>
                                            <Icon className={cn("h-5 w-5", statusInfo.color)} />
                                        </TooltipTrigger>
                                        <TooltipContent>
                                            <p>{statusInfo.label}: {service.description}</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </li>
                            );
                        })}
                    </ul>
                </TooltipProvider>
            </CardContent>
        </Card>
    );
};

export default ServiceStatusWidget;
