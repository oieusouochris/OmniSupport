import React from 'react';
import { Button } from '../components/ui/button';
import { PlusCircle } from 'lucide-react';
import { EmptyState } from '../components/ui/empty-state';

const MacrosPage: React.FC = () => {
    const macros: any[] = [];

    return (
        <div className="space-y-6 p-4 md:p-6">
            <div className="flex justify-between items-center">
                <h1 className="text-2xl font-bold">Macros</h1>
                <Button>
                    <PlusCircle className="mr-2 h-4 w-4" />
                    Nova Macro
                </Button>
            </div>
            
             {macros.length === 0 ? (
                <EmptyState
                    title="Nenhuma macro criada"
                    description="Crie macros para executar uma sequência de ações com um único clique."
                    action={<Button><PlusCircle className="mr-2 h-4 w-4" />Criar Primeira Macro</Button>}
                />
            ) : (
                <div>{/* Lista de macros aqui */}</div>
            )}
        </div>
    );
};

export default MacrosPage;
