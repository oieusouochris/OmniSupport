import React from 'react';
import { Card, CardContent } from '../ui/card';
import { Quote } from 'lucide-react';
import { type DailyPhrase } from '../../lib/definitions';

const DailyPhraseWidget: React.FC = () => {
    // MOCK: A frase poderia vir de uma API
    const phrase: DailyPhrase = {
        phrase: "A qualidade do seu trabalho tem tudo a ver com a qualidade da sua vida.",
        author: "Orison Swett Marden"
    };

    return (
        <Card>
            <CardContent className="p-6">
                <div className="flex gap-4">
                    <Quote className="h-6 w-6 text-muted-foreground flex-shrink-0" />
                    <div className="space-y-2">
                        <blockquote className="italic">"{phrase.phrase}"</blockquote>
                        <footer className="text-sm text-muted-foreground text-right">- {phrase.author}</footer>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};

export default DailyPhraseWidget;
