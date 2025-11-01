// MOCK: Simula fluxos de IA específicos para administradores.

export interface AnalyzeSystemLogsArgs {
    logPeriod: '1h' | '24h' | '7d';
}

export interface AnalyzeSystemLogsResult {
    summary: string;
    anomalies: {
        timestamp: number;
        description: string;
        severity: 'low' | 'medium' | 'high';
    }[];
}

export const analyzeSystemLogsFlow = async (args: AnalyzeSystemLogsArgs): Promise<AnalyzeSystemLogsResult> => {
    console.log(`Executando fluxo de análise de logs para o período de: ${args.logPeriod}`);
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    return {
        summary: `Análise dos logs das últimas ${args.logPeriod} concluída. Detectado um aumento no número de erros 5xx.`,
        anomalies: [
            {
                timestamp: Date.now() - 3600 * 1000,
                description: "Pico de 50 erros 502 na API de pagamentos.",
                severity: 'high',
            },
            {
                timestamp: Date.now() - 7200 * 1000,
                description: "Múltiplas tentativas de login falhas para o usuário 'admin'.",
                severity: 'medium',
            },
        ]
    };
};
