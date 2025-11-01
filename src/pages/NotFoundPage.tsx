import React from 'react';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
    return (
        <div className="flex flex-col items-center justify-center h-screen text-center">
            <h1 className="text-4xl font-bold">404 - Página Não Encontrada</h1>
            <p className="mt-4 text-muted-foreground">
                A página que você está procurando não existe ou foi movida.
            </p>
            <Button asChild className="mt-6">
                <Link to="/">Voltar para o Início</Link>
            </Button>
        </div>
    );
};

export default NotFoundPage;
