// FIX: Atualiza a importação do Zustand para o padrão moderno.
import { create } from 'zustand';
import { type BaseAppUser } from '../lib/definitions';
import { mockUsers } from './use-data-store';

interface Message {
    id: string;
    text: string;
    sender: BaseAppUser;
    timestamp: number;
}

interface ChatStoreState {
    messages: Message[];
    users: BaseAppUser[];
    sendMessage: (text: string, sender: BaseAppUser) => void;
}

const mockMessages: Message[] = [
    { id: 'msg-1', text: 'Olá equipe, alguma atualização sobre o ticket #123?', sender: mockUsers[1], timestamp: Date.now() - 1000 * 60 * 5 },
    { id: 'msg-2', text: 'Estou trabalhando nele agora. Parece ser um problema de cache do lado do cliente.', sender: mockUsers[0], timestamp: Date.now() - 1000 * 60 * 3 },
];

export const useChatStore = create<ChatStoreState>((set) => ({
    messages: mockMessages,
    users: mockUsers,
    sendMessage: (text, sender) => set((state) => ({
        messages: [
            ...state.messages,
            { id: `msg-${Date.now()}`, text, sender, timestamp: Date.now() }
        ],
    })),
}));