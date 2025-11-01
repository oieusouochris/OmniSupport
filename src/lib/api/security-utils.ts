/**
 * Remove tags HTML de uma string para prevenir XSS.
 * Esta é uma implementação muito básica. Em um app de produção,
 * considere usar uma biblioteca robusta como DOMPurify.
 * @param input A string de entrada a ser sanitizada.
 * @returns A string sanitizada.
 */
export function sanitizeInput(input: string): string {
    if (!input) return '';
    return input.replace(/<[^>]*>?/gm, '');
}

/**
 * Valida se uma string é um endereço de e-mail válido.
 * @param email O e-mail a ser validado.
 * @returns `true` se o e-mail for válido, senão `false`.
 */
export function isValidEmail(email: string): boolean {
    if (!email) return false;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/**
 * Valida se uma string é um endereço IP (v4 ou v6) válido.
 * @param ip O endereço IP a ser validado.
 * @returns `true` se o IP for válido, senão `false`.
 */
export function isValidIp(ip: string): boolean {
    if (!ip) return false;
    // Regex simplificado que cobre a maioria dos casos de IPv4 e alguns de IPv6.
    // Para validação robusta, uma biblioteca seria melhor.
    const ipRegex = /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$|^([0-9a-fA-F]{1,4}:){7}[0-9a-fA-F]{1,4}$/;
    return ipRegex.test(ip);
}
