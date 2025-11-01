/**
 * MOCK: Simula o processamento de OCR que antes estava na API route.
 * Em uma implementação real, isso chamaria uma Cloud Function do Firebase.
 * @param file O arquivo de imagem para extrair texto.
 * @returns O texto extraído.
 */
export const recognizeTextFromImageAPI = async (file: File): Promise<string> => {
    console.log(`Simulando OCR para o arquivo: ${file.name}`);
    
    // Simula a latência da rede
    await new Promise(resolve => setTimeout(resolve, 1000));

    // Lógica do mock que estava na API route
    const mockText = `Texto extraído da imagem "${file.name}".\nEste é um resultado simulado do serviço de OCR. Em uma implementação real, o conteúdo da imagem seria processado para extrair o texto contido nela.`;

    // Simula um possível erro
    if (file.name.includes('error')) {
        throw new Error('Falha simulada ao reconhecer texto.');
    }

    return mockText;
};
