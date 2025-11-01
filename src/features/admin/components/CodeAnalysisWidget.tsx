import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Code, Bot } from 'lucide-react';
import { Skeleton } from '@/components/ui/skeleton';
import { analyzeCodeAPI } from '@/services/ai-service';

const CodeAnalysisWidget: React.FC = () => {
    const [code, setCode] = useState('');
    const [language, setLanguage] = useState('javascript');
    const [analysis, setAnalysis] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleAnalyze = async () => {
        if (!code.trim()) return;
        setIsLoading(true);
        setAnalysis('');
        try {
            const result = await analyzeCodeAPI(code, language);
            setAnalysis(result.analysis);
        } catch (error) {
            setAnalysis('Falha ao analisar o código.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <Code className="h-5 w-5" />
                    Análise de Código com IA
                </CardTitle>
                <CardDescription>
                    Cole um trecho de código para receber uma análise de qualidade e segurança.
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                <Textarea
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    placeholder="Cole seu código aqui..."
                    rows={8}
                    className="font-mono"
                />
                <div className="flex items-center gap-4">
                     <Select onValueChange={setLanguage} value={language}>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Linguagem" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="javascript">JavaScript</SelectItem>
                            <SelectItem value="python">Python</SelectItem>
                            <SelectItem value="java">Java</SelectItem>
                        </SelectContent>
                    </Select>
                    <Button onClick={handleAnalyze} disabled={isLoading || !code.trim()}>
                        <Bot className="mr-2 h-4 w-4" />
                        {isLoading ? 'Analisando...' : 'Analisar Código'}
                    </Button>
                </div>
                 {isLoading ? (
                     <Skeleton className="h-20 w-full" />
                ) : analysis && (
                    <div className="p-3 border rounded-md bg-secondary text-sm">
                        <pre className="whitespace-pre-wrap font-sans">{analysis}</pre>
                    </div>
                )}
            </CardContent>
        </Card>
    );
};

export default CodeAnalysisWidget;