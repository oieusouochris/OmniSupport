import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Skeleton } from '../ui/skeleton';
import { type TechNewsArticle } from '../../lib/definitions';
import { Rss } from 'lucide-react';

const TechNewsFeed: React.FC = () => {
    const [articles, setArticles] = useState<TechNewsArticle[]>([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const fetchNews = async () => {
            setIsLoading(true);
            // MOCK: Simula chamada de API
            await new Promise(resolve => setTimeout(resolve, 1500));
            setArticles([
                { title: 'IA Generativa transforma o setor de Atendimento ao Cliente', link: '#', source: 'TechWorld', published_date: '2023-10-27' },
                { title: 'Novas atualizações de segurança para APIs REST', link: '#', source: 'DevSecOps Weekly', published_date: '2023-10-26' },
                { title: 'O futuro dos micro-frontends com React 19', link: '#', source: 'Frontend Focus', published_date: '2023-10-25' },
            ]);
            setIsLoading(false);
        };
        fetchNews();
    }, []);

    return (
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <Rss className="h-5 w-5" />
                    Feed de Notícias de Tecnologia
                </CardTitle>
                <CardDescription>As últimas notícias do mundo da tecnologia.</CardDescription>
            </CardHeader>
            <CardContent>
                {isLoading ? (
                    <div className="space-y-4">
                        <Skeleton className="h-12 w-full" />
                        <Skeleton className="h-12 w-full" />
                        <Skeleton className="h-12 w-full" />
                    </div>
                ) : (
                    <ul className="space-y-3">
                        {articles.map((article, index) => (
                            <li key={index} className="border-b pb-3 last:border-b-0 last:pb-0">
                                <a href={article.link} target="_blank" rel="noopener noreferrer" className="hover:underline font-medium text-sm">
                                    {article.title}
                                </a>
                                <p className="text-xs text-muted-foreground mt-1">
                                    {article.source} - {new Date(article.published_date).toLocaleDateString('pt-BR')}
                                </p>
                            </li>
                        ))}
                    </ul>
                )}
            </CardContent>
        </Card>
    );
};

export default TechNewsFeed;
