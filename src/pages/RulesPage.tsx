import React from 'react';
import { Button } from '../components/ui/button';
import { PlusCircle } from 'lucide-react';
import { EmptyState } from '../components/ui/empty-state';

const RulesPage: React.FC = () => {
    // Mock data - em uma aplicação real, viria de um store ou API
    const rules: any[] = [];

    return (
        <div className="space-y-6 p-4 md:p-6">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold">Regras de Automação</h1>
                <Button>
                    <PlusCircle className="mr-2 h-4 w-4" />
                    Nova Regra
                </Button>
            </div>
            
            {rules.length === 0 ? (
                <EmptyState
                    title="Nenhuma regra de automação criada"
                    description="Crie regras para automatizar tarefas repetitivas e agilizar seu fluxo de trabalho."
                    action={<Button><PlusCircle className="mr-2 h-4 w-4" />Criar Primeira Regra</Button>}
                />
            ) : (
                <div>{/* Lista de regras aqui */}</div>
            )}
        </div>
    );
};

export default RulesPage;
