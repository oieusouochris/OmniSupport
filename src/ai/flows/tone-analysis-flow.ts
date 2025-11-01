// MOCK: Simula uma análise de tom por IA.
// Em uma aplicação real, isso faria uma chamada para a API do Gemini.

export type Tone = 'Neutro' | 'Positivo' | 'Negativo' | 'Misto';
export type Emotion = 'Alegria' | 'Frustração' | 'Urgência' | 'Confusão' | 'Nenhum';

export interface ToneAnalysisResult {
    tone: Tone;
    emotion: Emotion;
    confidence: number;
}

export const analyzeTone = async (args: { text: string }): Promise<ToneAnalysisResult> => {
    console.log(`Analisando o tom para o texto: "${args.text}"`);
    await new Promise(resolve => setTimeout(resolve, 500)); // Simula latência

    const text = args.text.toLowerCase();

    if (text.includes('obrigado') || text.includes('excelente') || text.includes('perfeito')) {
        return { tone: 'Positivo', emotion: 'Alegria', confidence: 0.92 };
    }
    if (text.includes('não funciona') || text.includes('problema') || text.includes('frustrado')) {
        return { tone: 'Negativo', emotion: 'Frustração', confidence: 0.88 };
    }
    if (text.includes('urgente') || text.includes('agora')) {
        return { tone: 'Negativo', emotion: 'Urgência', confidence: 0.95 };
    }
    if (text.includes('como') || text.includes('não entendi')) {
        return { tone: 'Neutro', emotion: 'Confusão', confidence: 0.76 };
    }
    
    return { tone: 'Neutro', emotion: 'Nenhum', confidence: 0.65 };
};
