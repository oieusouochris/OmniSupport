import React from 'react';
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetDescription } from '../ui/sheet';
import { useNotifications, type Notification } from '../../hooks/use-notifications';
import { Button } from '../ui/button';

interface NotificationPanelProps {
    isOpen: boolean;
    onClose: () => void;
}

const NotificationItem: React.FC<{ notification: Notification }> = ({ notification }) => (
    <div className="p-2 rounded-md hover:bg-muted">
        <p className="font-semibold text-sm">{notification.title}</p>
        <p className="text-xs text-muted-foreground">{notification.description}</p>
    </div>
);

const NotificationPanel: React.FC<NotificationPanelProps> = ({ isOpen, onClose }) => {
    const { notifications, markAllAsRead } = useNotifications();

    return (
        <Sheet open={isOpen} onOpenChange={onClose}>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Notificações</SheetTitle>
                    <SheetDescription>
                        Fique por dentro das últimas atualizações.
                    </SheetDescription>
                </SheetHeader>
                <div className="py-4">
                    <div className="flex justify-end mb-2">
                        <Button variant="link" size="sm" onClick={markAllAsRead}>Marcar todas como lidas</Button>
                    </div>
                    <div className="space-y-2">
                        {notifications.map(n => <NotificationItem key={n.id} notification={n} />)}
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    );
};

export default NotificationPanel;
