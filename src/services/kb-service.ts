import { mockKbArticles } from '../store/use-data-store';
import { type KbArticle } from '../lib/definitions';

// Simula uma chamada de API para buscar na knowledge base.
// Em um aplicativo real, isso faria uma chamada de rede para o seu backend.
export const searchKnowledgeBase = async (query: string): Promise<KbArticle[]> => {
    console.log(`Buscando na KB por: "${query}"`);

    // Os dados mockados são importados diretamente (em vez de usar um hook do Zustand)
    // para permitir que esta função de serviço seja agnóstica ao React e reutilizável.
    const allArticles = mockKbArticles;

    if (!query) {
        return allArticles.filter(a => a.status === 'published').slice(0, 5); // Retorna alguns artigos se a busca estiver vazia
    }

    const lowerCaseQuery = query.toLowerCase();

    const results = allArticles.filter(article =>
        article.status === 'published' &&
        (article.title.toLowerCase().includes(lowerCaseQuery) ||
         article.content.toLowerCase().includes(lowerCaseQuery) ||
         article.tags.some(tag => tag.toLowerCase().includes(lowerCaseQuery)))
    );

    // Simula a latência da rede
    await new Promise(resolve => setTimeout(resolve, 300));

    return results;
};

// Outras funções de serviço da KB podem ser adicionadas aqui
// ex: getArticleById, createArticle, updateArticle, etc.