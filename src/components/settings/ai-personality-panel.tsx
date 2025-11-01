import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Label } from '../ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Slider } from '../ui/slider';
import { Button } from '../ui/button';
import { Bot } from 'lucide-react';

const AIPersonalityPanel = () => {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <Bot className="h-5 w-5" />
                    Personalidade e Tom da IA
                </CardTitle>
                <CardDescription>
                    Ajuste como a IA se comunica para alinhar com a voz da sua marca.
                </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="space-y-2">
                    <Label htmlFor="tone">Tom de Voz</Label>
                    <Select defaultValue="friendly">
                        <SelectTrigger id="tone">
                            <SelectValue placeholder="Selecione um tom" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="friendly">Amigável</SelectItem>
                            <SelectItem value="professional">Profissional</SelectItem>
                            <SelectItem value="formal">Formal</SelectItem>
                            <SelectItem value="empathetic">Empático</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className="space-y-2">
                    <Label>Nível de Criatividade</Label>
                    <Slider defaultValue={[50]} max={100} step={10} />
                    <div className="flex justify-between text-xs text-muted-foreground">
                        <span>Preciso</span>
                        <span>Criativo</span>
                    </div>
                </div>
                <div className="flex justify-end">
                    <Button>Salvar Personalidade</Button>
                </div>
            </CardContent>
        </Card>
    );
};

export default AIPersonalityPanel;
