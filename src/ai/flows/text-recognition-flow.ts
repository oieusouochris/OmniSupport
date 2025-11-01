// MOCK: Simula um fluxo de reconhecimento de texto (OCR).
// Em um app real, isso poderia orquestrar chamadas para um serviço como o Google Cloud Vision.

export interface RecognizeTextArgs {
    imageBase64: string;
    mimeType: string;
}

export interface RecognizeTextResult {
    recognizedText: string;
    confidence: number;
}

export const recognizeTextFlow = async (args: RecognizeTextArgs): Promise<RecognizeTextResult> => {
    console.log(`Executando fluxo de reconhecimento de texto para imagem do tipo: ${args.mimeType}`);
    await new Promise(resolve => setTimeout(resolve, 1500)); // Simula processamento

    // Lógica de mock
    if (args.imageBase64.length < 10) {
        throw new Error("Dados de imagem inválidos.");
    }
    
    return {
        recognizedText: "Este é um texto simulado extraído da imagem. NOTA FISCAL\nProduto: Widget\nValor: R$ 123,45",
        confidence: 0.95
    };
};
