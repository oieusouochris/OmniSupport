import type { EmailReputation, IpReputation } from '@/lib/definitions';
import { getErrorMessage } from '@/lib/error-utils';

/**
 * Função genérica para chamar endpoints de segurança no backend.
 * @param endpoint O caminho da API (ex: '/api/security/ip-rep').
 * @param params Os parâmetros de busca a serem enviados.
 * @returns Uma promessa que resolve para os dados da API.
 */
async function fetchSecurityApi<T>(
  endpoint: string,
  params: Record<string, string>
): Promise<T> {
  // Garante que a função só execute no lado do cliente.
  if (typeof window === 'undefined') {
    // Em um ambiente Vite, isso não deve acontecer no código do cliente, mas é uma boa proteção.
    // Lançar um erro aqui pode ser muito agressivo para SSR no futuro, então vamos logar um aviso.
    console.warn('fetchSecurityApi só pode ser chamada no lado do cliente.');
    // Retornar uma promessa rejeitada para manter a assinatura do tipo.
    return Promise.reject(new Error('Função apenas para o lado do cliente.'));
  }

  const url = new URL(endpoint, window.location.origin);
  Object.entries(params).forEach(([key, value]) =>
    url.searchParams.append(key, value)
  );

  try {
    const response = await fetch(url.toString(), {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    });

    const data = await response.json();

    if (!response.ok) {
      // Usa a mensagem de erro da API, se disponível.
      throw new Error(
        data.error || `Falha ao buscar dados de ${endpoint}.`
      );
    }

    return data as T;
  } catch (error) {
    const errorMessage = getErrorMessage(error);
    console.error(
      `Erro ao chamar a API de segurança (${endpoint}):`,
      errorMessage
    );
    throw new Error(errorMessage);
  }
}

/**
 * Busca a reputação de um endereço de e-mail.
 * @param email O e-mail a ser verificado.
 * @returns Os dados de reputação do e-mail.
 */
export async function getEmailReputation(
  email: string
): Promise<EmailReputation> {
  return fetchSecurityApi<EmailReputation>('/api/security/email-rep', {
    email,
  });
}

/**
 * Busca a reputação de um endereço de IP.
 * @param ip O IP a ser verificado.
 * @returns Os dados de reputação do IP.
 */
export async function getIpReputation(ip: string): Promise<IpReputation> {
  return fetchSecurityApi<IpReputation>('/api/security/ip-rep', { ip });
}
