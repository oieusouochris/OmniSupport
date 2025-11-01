// MOCK: Simula a geração de sugestões de resolução por IA.

import { type KbArticle } from "../../lib/definitions";

export interface SmartResolutionArgs {
    ticketSubject: string;
    ticketDescription: string;
}

export interface SmartResolutionResult {
    suggestedSteps: string[];
    relevantKbArticles: Pick<KbArticle, 'id' | 'title'>[];
    confidence: number;
}

export const getSmartResolutionSuggestions = async (args: SmartResolutionArgs): Promise<SmartResolutionResult> => {
    console.log(`Gerando sugestões para o ticket: "${args.ticketSubject}"`);
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    const lowerCaseDesc = args.ticketDescription.toLowerCase();

    if (lowerCaseDesc.includes('senha') || lowerCaseDesc.includes('resetar')) {
        return {
            suggestedSteps: [
                "Verificar se o e-mail do usuário está correto no sistema.",
                "Enviar um link de redefinição de senha para o e-mail cadastrado.",
                "Instruir o usuário a verificar a caixa de spam caso não receba o e-mail."
            ],
            relevantKbArticles: [
                { id: 'kb-4', title: 'Como redefinir sua senha' }
            ],
            confidence: 0.95,
        };
    }

    return {
        suggestedSteps: [
            "Acusar o recebimento do ticket e informar que está em análise.",
            "Escalonar o ticket para o time de Nível 2 para uma análise mais aprofundada."
        ],
        relevantKbArticles: [],
        confidence: 0.60,
    };
};
