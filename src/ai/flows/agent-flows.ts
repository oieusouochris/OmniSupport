// MOCK: Simula fluxos de IA específicos para agentes.

export interface SummarizeTicketArgs {
    ticketId: string;
    conversationHistory: string[];
}

export interface SummarizeTicketResult {
    summary: string;
}

export const summarizeTicketFlow = async (args: SummarizeTicketArgs): Promise<SummarizeTicketResult> => {
    console.log("Executando fluxo de sumarização para o ticket:", args.ticketId);
    await new Promise(resolve => setTimeout(resolve, 800));
    return {
        summary: `Resumo do ticket ${args.ticketId}: O cliente está relatando um problema e já tentou as seguintes soluções: ${args.conversationHistory.join(', ')}. O sentimento parece ser de frustração.`
    };
};


export interface SuggestReplyArgs {
    ticketId: string;
    lastMessage: string;
}

export interface SuggestReplyResult {
    suggestedReply: string;
}

export const suggestReplyFlow = async (args: SuggestReplyArgs): Promise<SuggestReplyResult> => {
    console.log("Executando fluxo de sugestão de resposta para o ticket:", args.ticketId);
    await new Promise(resolve => setTimeout(resolve, 1200));
    return {
        suggestedReply: `Com base na última mensagem: "${args.lastMessage}", sugiro a seguinte resposta: "Prezado cliente, entendemos sua frustração. Para resolver o seu problema, por favor, tente o seguinte passo..."`
    };
};
