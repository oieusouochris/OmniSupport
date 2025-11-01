import { useCallback } from 'react';
import { useAuth } from './use-auth';

type InteractionType = 'click' | 'view' | 'submit' | 'error';

interface InteractionData {
  component: string;
  element?: string;
  details?: Record<string, any>;
}

/**
 * Hook para registrar interações do usuário.
 * Em um app de produção, isso enviaria dados para um serviço de logging ou analytics.
 */
export const useInteractionLogger = () => {
    const { user } = useAuth();

    const log = useCallback((type: InteractionType, data: InteractionData) => {
        const logEntry = {
            timestamp: new Date().toISOString(),
            userId: user?.uid || 'anonymous',
            type,
            ...data,
        };
        
        // MOCK: Apenas loga no console por enquanto
        console.log('[Interaction Log]', logEntry);
    }, [user]);

    return { log };
};
