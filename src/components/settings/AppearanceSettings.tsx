import React from 'react';
import { useTheme } from 'next-themes';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';

const AppearanceSettings: React.FC = () => {
    const { theme, setTheme } = useTheme();

    return (
        <Card>
            <CardHeader>
                <CardTitle>Aparência</CardTitle>
                <CardDescription>
                    Personalize a aparência da aplicação.
                </CardDescription>
            </CardHeader>
            <CardContent>
                <RadioGroup defaultValue={theme} onValueChange={setTheme}>
                    <div className="space-y-4">
                        <Label className="flex items-center gap-4 cursor-pointer">
                            <RadioGroupItem value="light" />
                            <span>Claro</span>
                        </Label>
                        <Label className="flex items-center gap-4 cursor-pointer">
                            <RadioGroupItem value="dark" />
                            <span>Escuro</span>
                        </Label>
                        <Label className="flex items-center gap-4 cursor-pointer">
                            <RadioGroupItem value="system" />
                            <span>Sistema</span>
                        </Label>
                    </div>
                </RadioGroup>
            </CardContent>
        </Card>
    );
};

export default AppearanceSettings;