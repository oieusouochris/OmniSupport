// MOCK: Simula um serviço para interagir com a API do Dynalist.

export interface AddDynalistItemArgs {
    token: string;
    documentId: string;
    content: string;
    note?: string;
}

export interface AddDynalistItemResult {
    success: boolean;
    itemId: string;
}

export const addDynalistItemAPI = async (args: AddDynalistItemArgs): Promise<AddDynalistItemResult> => {
    console.log("Adicionando item ao Dynalist:", args.content);

    if (!args.token || !args.documentId || !args.content) {
        throw new Error("Token, Document ID e Conteúdo são obrigatórios.");
    }
    
    // Simula a latência da rede
    await new Promise(resolve => setTimeout(resolve, 800));

    // Simula uma resposta de sucesso
    return {
        success: true,
        itemId: `dynalist-item-${Date.now()}`
    };
};
