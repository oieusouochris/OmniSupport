import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Tags } from 'lucide-react';

const TagsManagement = () => {
    return (
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <Tags className="h-5 w-5" />
                    Gerenciamento de Tags
                </CardTitle>
                <CardDescription>
                    Crie, edite e organize as tags usadas nos tickets e auditorias. (Em breve)
                </CardDescription>
            </CardHeader>
            <CardContent>
                <div className="h-48 flex items-center justify-center bg-secondary rounded-md">
                    <p className="text-muted-foreground">Gerenciamento de tags.</p>
                </div>
            </CardContent>
        </Card>
    );
};

export default TagsManagement;