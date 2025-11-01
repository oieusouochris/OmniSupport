// MOCK: Simula a geração de conteúdo de artigos da KB por IA.

export interface GenerateKbContentArgs {
    prompt: string;
    tone: 'professional' | 'friendly' | 'technical';
}

export interface GenerateKbContentResult {
    generatedContent: string;
}

export const generateKbContentFlow = async (args: GenerateKbContentArgs): Promise<GenerateKbContentResult> => {
    console.log(`Gerando conteúdo da KB para o prompt: "${args.prompt}" com tom ${args.tone}`);
    await new Promise(resolve => setTimeout(resolve, 2500));

    return {
        generatedContent: `## Título Gerado por IA\n\nCom base no seu prompt sobre "${args.prompt}", aqui está um rascunho inicial.\n\n### Passo 1: Acesse a Página de Configurações\n\nNavegue até a seção de configurações da sua conta para iniciar o processo.\n\n### Passo 2: Ação Importante\n\nSiga as instruções na tela para completar a ação desejada. Lembre-se de salvar suas alterações.`
    };
};
