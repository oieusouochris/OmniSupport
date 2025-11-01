import React from 'react';
import { Button } from '../components/ui/button';
import { PlusCircle } from 'lucide-react';
import { EmptyState } from '../components/ui/empty-state';

const SlaSettingsPage: React.FC = () => {
    const policies: any[] = [];

    return (
        <div className="space-y-6 p-4 md:p-6">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold">Políticas de SLA</h1>
                <Button>
                    <PlusCircle className="mr-2 h-4 w-4" />
                    Nova Política de SLA
                </Button>
            </div>
            
             {policies.length === 0 ? (
                <EmptyState
                    title="Nenhuma política de SLA definida"
                    description="Crie políticas para definir metas de tempo de resposta e resolução para seus tickets."
                    action={<Button><PlusCircle className="mr-2 h-4 w-4" />Criar Primeira Política</Button>}
                />
            ) : (
                <div>{/* Lista de políticas de SLA aqui */}</div>
            )}
        </div>
    );
};

export default SlaSettingsPage;
