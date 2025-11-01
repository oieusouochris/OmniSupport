import React from 'react';
import TechNewsFeed from '../components/dashboard/TechNewsFeed';

const NewsPage: React.FC = () => {
    return (
        <div className="space-y-6 p-4 md:p-6">
            <h1 className="text-2xl font-bold">Notícias de Tecnologia</h1>
            <p className="text-muted-foreground">
                Mantenha-se atualizado com as últimas tendências e notícias do setor.
            </p>
            <TechNewsFeed />
        </div>
    );
};

export default NewsPage;
