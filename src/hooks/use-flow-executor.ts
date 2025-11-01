import { useState, useCallback } from 'react';

// Tipagem genérica para a função do fluxo e seu retorno
type FlowFunction<T, R> = (args: T) => Promise<R>;

interface UseFlowExecutorReturn<T, R> {
    data: R | null;
    error: string | null;
    isLoading: boolean;
    execute: (args: T) => Promise<void>;
    reset: () => void;
}

/**
 * Hook customizado para executar uma função de fluxo assíncrona (ex: chamada de API).
 * Gerencia os estados de carregamento, dados e erro.
 *
 * @param flowFunction A função assíncrona a ser executada.
 * @returns Um objeto com o estado da execução e a função para dispará-la.
 */
export function useFlowExecutor<T, R>(flowFunction: FlowFunction<T, R>): UseFlowExecutorReturn<T, R> {
    const [data, setData] = useState<R | null>(null);
    const [error, setError] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const execute = useCallback(async (args: T) => {
        setIsLoading(true);
        setError(null);
        setData(null);
        try {
            const result = await flowFunction(args);
            setData(result);
        } catch (err) {
            const errorMessage = err instanceof Error ? err.message : 'Ocorreu um erro desconhecido.';
            setError(errorMessage);
        } finally {
            setIsLoading(false);
        }
    }, [flowFunction]);

    const reset = useCallback(() => {
        setData(null);
        setError(null);
        setIsLoading(false);
    }, []);

    return { data, error, isLoading, execute, reset };
}
