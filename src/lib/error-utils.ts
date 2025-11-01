/**
 * Extrai uma mensagem de erro de um objeto de erro desconhecido.
 * @param error O erro capturado.
 * @returns Uma string com a mensagem de erro.
 */
export const getErrorMessage = (error: unknown): string => {
  if (error instanceof Error) {
    return error.message;
  }
  if (typeof error === 'string') {
    return error;
  }
  if (error && typeof error === 'object' && 'message' in error && typeof error.message === 'string') {
    return error.message;
  }
  return 'Ocorreu um erro desconhecido.';
};
