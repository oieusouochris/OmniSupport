// MOCK: Simula um fluxo de geração de relatório via IA.

export interface GenerateReportArgs {
    prompt: string;
    dateRange?: {
        start: number;
        end: number;
    };
}

export interface GenerateReportResult {
    title: string;
    summary: string;
    data: any[];
    chartType: 'bar' | 'line' | 'pie';
}

export const generateReportFlow = async (args: GenerateReportArgs): Promise<GenerateReportResult> => {
    console.log(`Executando fluxo de geração de relatório para o prompt: "${args.prompt}"`);
    await new Promise(resolve => setTimeout(resolve, 2500));
    
    const lowerCasePrompt = args.prompt.toLowerCase();

    if (lowerCasePrompt.includes('csat') && lowerCasePrompt.includes('agente')) {
        return {
            title: 'CSAT por Agente (Últimos 7 dias)',
            summary: 'O agente Smith teve o maior CSAT, enquanto o agente Jones precisa de atenção.',
            chartType: 'bar',
            data: [
                { name: 'Smith', csat: 98 },
                { name: 'Ana', csat: 95 },
                { name: 'Jones', csat: 89 },
            ]
        };
    }
    
    return {
        title: 'Relatório de Volume de Tickets',
        summary: 'O volume de tickets se manteve estável na última semana.',
        chartType: 'line',
        data: [
            { day: 'Seg', volume: 100 },
            { day: 'Ter', volume: 120 },
            { day: 'Qua', volume: 110 },
        ]
    };
};
