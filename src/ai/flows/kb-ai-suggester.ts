// MOCK: Simula sugestões de IA para a base de conhecimento.

export interface KbAiSuggesterArgs {
    articleContent: string;
}

export interface KbAiSuggesterResult {
    suggestedTitles: string[];
    suggestedTags: string[];
}

export const getKbSuggestions = async (args: KbAiSuggesterArgs): Promise<KbAiSuggesterResult> => {
    console.log("Gerando sugestões de IA para o conteúdo do artigo...");
    await new Promise(resolve => setTimeout(resolve, 1300));

    // Lógica de mock baseada no conteúdo
    const lowerCaseContent = args.articleContent.toLowerCase();
    
    let suggestedTags = ['geral'];
    if (lowerCaseContent.includes('senha') || lowerCaseContent.includes('login')) {
        suggestedTags = ['autenticação', 'segurança', 'senha'];
    } else if (lowerCaseContent.includes('fatura') || lowerCaseContent.includes('pagamento')) {
        suggestedTags = ['faturamento', 'cobrança', 'financeiro'];
    }

    return {
        suggestedTitles: [
            "Guia Completo para Redefinição de Senha",
            "Como Solucionar Problemas de Acesso à Conta",
            "Passo a Passo para Alterar sua Senha com Segurança",
        ],
        suggestedTags: suggestedTags,
    };
};
