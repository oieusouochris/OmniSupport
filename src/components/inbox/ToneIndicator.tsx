import React, { useState, useEffect } from 'react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip';
import { Smile, Frown, Meh } from 'lucide-react';
import { analyzeToneAPI } from '../../services/ai-service';
import { type ToneAnalysisResult, type Tone } from '../../lib/definitions';

interface ToneIndicatorProps {
    text: string;
}

const toneMap: Record<Tone, { icon: React.ReactNode; color: string }> = {
    'Positivo': { icon: <Smile className="h-4 w-4" />, color: 'text-green-500' },
    'Negativo': { icon: <Frown className="h-4 w-4" />, color: 'text-red-500' },
    'Neutro': { icon: <Meh className="h-4 w-4" />, color: 'text-yellow-500' },
    'Misto': { icon: <Meh className="h-4 w-4" />, color: 'text-blue-500' },
};

const ToneIndicator: React.FC<ToneIndicatorProps> = ({ text }) => {
    const [analysis, setAnalysis] = useState<ToneAnalysisResult | null>(null);

    useEffect(() => {
        if (text) {
            analyzeToneAPI(text).then(setAnalysis);
        }
    }, [text]);

    if (!analysis || analysis.emotion === 'Nenhum') return null;

    const toneInfo = toneMap[analysis.tone];

    return (
        <TooltipProvider>
            <Tooltip>
                <TooltipTrigger>
                    <span className={toneInfo.color}>{toneInfo.icon}</span>
                </TooltipTrigger>
                <TooltipContent>
                    <p>Tom: {analysis.tone} ({analysis.emotion})</p>
                    <p>Confiança: {(analysis.confidence * 100).toFixed(0)}%</p>
                </TooltipContent>
            </Tooltip>
        </TooltipProvider>
    );
};

export default ToneIndicator;
