import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from '../ui/dialog';

interface DiagramModalProps {
    isOpen: boolean;
    onClose: () => void;
    flowName: string;
}

const DiagramModal: React.FC<DiagramModalProps> = ({ isOpen, onClose, flowName }) => {
    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-3xl">
                <DialogHeader>
                    <DialogTitle>Diagrama do Fluxo: {flowName}</DialogTitle>
                    <DialogDescription>
                        Visualização da estrutura e etapas do fluxo de automação.
                    </DialogDescription>
                </DialogHeader>
                <div className="flex items-center justify-center p-8 border rounded-lg bg-muted min-h-[400px]">
                    {/* Em uma aplicação real, aqui seria renderizado um componente de diagrama (ex: React Flow) */}
                    <img
                        src="https://via.placeholder.com/600x400.png?text=Diagrama+do+Fluxo+Aqui"
                        alt={`Diagrama do fluxo ${flowName}`}
                        className="max-w-full h-auto rounded-md"
                    />
                </div>
            </DialogContent>
        </Dialog>
    );
};

export default DiagramModal;
