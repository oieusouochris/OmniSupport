import { AIFlowSuggestions, ToneAnalysisResult } from '../lib/definitions';

/**
 * MOCK: Simula uma análise de fluxo por IA.
 */
export const analyzeFlowAPI = async ({ flowId }: { flowId: string }): Promise<AIFlowSuggestions> => {
    console.log(`Analisando fluxo com ID: ${flowId}`);
    await new Promise(resolve => setTimeout(resolve, 1500));

    const mockAnalysis: AIFlowSuggestions = {
        optimization: `O passo "Esperar 5 segundos" pode ser removido se a API subsequente for rápida, reduzindo a latência total do fluxo. Considere adicionar um tratamento de erro para a chamada de API "Enviar Email".`,
        security: `A chave de API no passo "Chamar API Externa" parece estar exposta. Recomenda-se o uso de um gerenciador de segredos para armazenar e acessar essa chave com segurança.`,
        clarity: `Renomear o passo "Variável X" para algo mais descritivo, como "ID do Ticket", melhoraria a legibilidade e manutenção do fluxo para outros membros da equipe.`,
    };

    return mockAnalysis;
};

/**
 * MOCK: Simula a análise de código por IA.
 */
export const analyzeCodeAPI = async (code: string, language: string): Promise<{ analysis: string }> => {
    console.log(`Analisando código ${language}...`);
    await new Promise(resolve => setTimeout(resolve, 1500));
    return {
        analysis: `Análise para o código ${language}:\n- Qualidade: Boa, mas a função 'getUser' poderia ter um tratamento de erro mais robusto.\n- Segurança: Potencial vulnerabilidade de SQL Injection na linha 12. Use prepared statements.\n- Performance: A consulta dentro do loop na linha 25 pode causar problemas de N+1.`,
    };
};

/**
 * MOCK: Simula a tradução de texto por IA.
 */
export const translateTextAPI = async (text: string, targetLang: string): Promise<{ translatedText: string }> => {
    console.log(`Traduzindo "${text}" para ${targetLang}`);
    await new Promise(resolve => setTimeout(resolve, 1000));
    return { translatedText: `[Tradução para ${targetLang}] ${text}` };
};

/**
 * MOCK: Simula as ações do assistente de IA.
 */
export const fetchAIAssistantResponse = async (action: string, context: any): Promise<{ response: string }> => {
    console.log(`Executando ação de IA: ${action}`, context);
    await new Promise(resolve => setTimeout(resolve, 1000));

    const MOCK_RESPONSES: Record<string, string> = {
        summarize: 'O cliente está enfrentando um problema com a fatura #123 e já tentou os passos básicos de solução de problemas. Ele parece frustrado.',
        suggest_reply: 'Olá [Nome do Cliente], lamento saber sobre o problema com sua fatura. Para que eu possa ajudar, você poderia me fornecer o número da fatura e a data de vencimento, por favor?',
        analyze_sentiment: 'O sentimento detectado é predominantemente negativo, com fortes indícios de frustração e urgência.',
    };

    const responseText = MOCK_RESPONSES[action] || 'Ação não reconhecida.';
    return { response: responseText };
};

/**
 * MOCK: Simula a busca de insights de IA sobre um cliente.
 */
export const fetchCustomerInsightsAPI = async (customerId: string, insightType: string): Promise<{ insight: string }> => {
    console.log(`Buscando insight do tipo: ${insightType} para o cliente: ${customerId}`);
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate latency

    const MOCK_INSIGHTS: Record<string, Record<string, string>> = {
        'cust_1': {
            summary: 'Cliente VIP (Alice) com histórico de compras de alto valor. Sensível a problemas de entrega.',
            sentiment: 'O sentimento geral é positivo, mas a última interação mostrou frustração.',
            churn_prediction: 'Risco de churn: Baixo (8%).',
        },
        'default': {
            summary: 'Informações de resumo para este cliente não estão disponíveis.',
            sentiment: 'Análise de sentimento não disponível.',
            churn_prediction: 'Previsão de churn não disponível.',
        }
    };
    
    const customerInsights = MOCK_INSIGHTS[customerId] || MOCK_INSIGHTS['default'];
    const insight = customerInsights[insightType] || `Tipo de insight '${insightType}' não reconhecido.`;
    
    return { insight };
};

/**
 * MOCK: Simula uma análise de tom por IA.
 */
export const analyzeToneAPI = async (text: string): Promise<ToneAnalysisResult> => {
    console.log(`Analisando o tom para o texto: "${text}"`);
    await new Promise(resolve => setTimeout(resolve, 500)); // Simula latência

    const lowerCaseText = text.toLowerCase();

    if (lowerCaseText.includes('obrigado') || lowerCaseText.includes('excelente') || lowerCaseText.includes('perfeito')) {
        return { tone: 'Positivo', emotion: 'Alegria', confidence: 0.92 };
    }
    if (lowerCaseText.includes('não funciona') || lowerCaseText.includes('problema') || lowerCaseText.includes('frustrado')) {
        return { tone: 'Negativo', emotion: 'Frustração', confidence: 0.88 };
    }
    if (lowerCaseText.includes('urgente') || lowerCaseText.includes('agora')) {
        return { tone: 'Negativo', emotion: 'Urgência', confidence: 0.95 };
    }
    if (lowerCaseText.includes('como') || lowerCaseText.includes('não entendi')) {
        return { tone: 'Neutro', emotion: 'Confusão', confidence: 0.76 };
    }
    
    return { tone: 'Neutro', emotion: 'Nenhum', confidence: 0.65 };
};

/**
 * MOCK: Simula uma análise de IA para um item de auditoria.
 */
export const analyzeAuditAPI = async (auditId: string): Promise<{ analysis: string }> => {
    console.log(`Analisando auditoria com ID: ${auditId}`);
    await new Promise(resolve => setTimeout(resolve, 1200));

    if (auditId === 'audit-1') {
        return { analysis: 'A análise de IA sugere focar nas permissões de "escrita" para usuários não-admin, pois parecem excessivamente permissivas. Recomenda-se uma política de privilégio mínimo.' };
    }
    return { analysis: 'A análise de IA não encontrou problemas críticos, mas sugere uma revisão manual para garantir a conformidade com as políticas internas.' };
};