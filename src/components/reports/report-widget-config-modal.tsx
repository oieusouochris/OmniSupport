import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from '../ui/dialog';
import { Button } from '../ui/button';
import { Label } from '../ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';

interface ReportWidgetConfigModalProps {
    isOpen: boolean;
    onClose: () => void;
    onSave: (config: any) => void;
}

const ReportWidgetConfigModal: React.FC<ReportWidgetConfigModalProps> = ({ isOpen, onClose, onSave }) => {
    
    const handleSave = () => {
        // Lógica de salvamento da configuração
        onSave({ type: 'bar', metric: 'csat' });
        onClose();
    };
    
    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Configurar Widget de Relatório</DialogTitle>
                    <DialogDescription>Personalize o tipo de gráfico e a métrica a ser exibida.</DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="chart-type" className="text-right">Tipo</Label>
                        <Select defaultValue="bar">
                            <SelectTrigger id="chart-type" className="col-span-3">
                                <SelectValue placeholder="Selecione o tipo" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="bar">Barra</SelectItem>
                                <SelectItem value="line">Linha</SelectItem>
                                <SelectItem value="pie">Pizza</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                         <Label htmlFor="metric" className="text-right">Métrica</Label>
                        <Select defaultValue="csat">
                            <SelectTrigger id="metric" className="col-span-3">
                                <SelectValue placeholder="Selecione a métrica" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value="csat">CSAT</SelectItem>
                                <SelectItem value="volume">Volume de Tickets</SelectItem>
                                <SelectItem value="resolution_time">Tempo de Resolução</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                </div>
                <DialogFooter>
                    <Button variant="outline" onClick={onClose}>Cancelar</Button>
                    <Button onClick={handleSave}>Salvar</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default ReportWidgetConfigModal;
