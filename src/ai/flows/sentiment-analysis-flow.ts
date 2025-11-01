// MOCK: Simula uma análise de tom e sentimento por IA.

import { type Tone, type Emotion, type ToneAnalysisResult } from '../../lib/definitions';

export const analyzeSentimentFlow = async (text: string): Promise<ToneAnalysisResult> => {
    console.log(`Analisando sentimento para o texto: "${text}"`);
    await new Promise(resolve => setTimeout(resolve, 600)); // Simula latência

    const lowerCaseText = text.toLowerCase();

    if (lowerCaseText.includes('excelente') || lowerCaseText.includes('incrível') || lowerCaseText.includes('muito feliz')) {
        return { tone: 'Positivo', emotion: 'Alegria', confidence: 0.95 };
    }
    if (lowerCaseText.includes('decepcionado') || lowerCaseText.includes('não funciona') || lowerCaseText.includes('péssimo')) {
        return { tone: 'Negativo', emotion: 'Frustração', confidence: 0.92 };
    }
    if (lowerCaseText.includes('ajuda urgente') || lowerCaseText.includes('preciso disso agora')) {
        return { tone: 'Negativo', emotion: 'Urgência', confidence: 0.88 };
    }
    if (lowerCaseText.includes('não entendi') || lowerCaseText.includes('como faço para')) {
        return { tone: 'Neutro', emotion: 'Confusão', confidence: 0.85 };
    }
    
    return { tone: 'Neutro', emotion: 'Nenhum', confidence: 0.70 };
};
