import { useState, useEffect } from 'react';
import { useToast } from './use-toast';

export interface Notification {
  id: string;
  title: string;
  description: string;
  read: boolean;
  timestamp: number;
}

// Mock data
const mockNotifications: Notification[] = [
  { id: '1', title: 'Nova Auditoria', description: 'Uma nova auditoria de segurança foi atribuída a você.', read: false, timestamp: Date.now() - 1000 * 60 * 5 },
  { id: '2', title: 'Ticket Atualizado', description: 'O ticket #123 foi atualizado por Alice.', read: true, timestamp: Date.now() - 1000 * 60 * 30 },
];

export const useNotifications = () => {
  const [notifications, setNotifications] = useState<Notification[]>(mockNotifications);
  const { toast } = useToast();

  useEffect(() => {
    // Em uma aplicação real, você poderia ouvir por novas notificações via WebSockets.
    // Esta é apenas uma demonstração.
  }, [notifications, toast]);

  const markAsRead = (id: string) => {
    setNotifications(current =>
      current.map(n => (n.id === id ? { ...n, read: true } : n))
    );
  };
  
  const markAllAsRead = () => {
    setNotifications(current => current.map(n => ({ ...n, read: true })));
  };

  return { notifications, markAsRead, markAllAsRead, unreadCount: notifications.filter(n => !n.read).length };
};
