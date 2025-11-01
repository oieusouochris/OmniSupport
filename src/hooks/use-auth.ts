import { useContext } from 'react';
import { AuthContext, type AuthContextType } from '../components/providers/auth-provider';

/**
 * Hook customizado para acessar o contexto de autenticação.
 * Garante que o hook seja utilizado dentro de um AuthProvider.
 * @returns O valor do contexto de autenticação (usuário e estado de carregamento).
 */
export const useAuth = (): AuthContextType => {
    const context = useContext(AuthContext);
    if (context === undefined) {
        throw new Error('useAuth deve ser usado dentro de um AuthProvider');
    }
    return context;
};
