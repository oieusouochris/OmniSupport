import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card';
import { Label } from '../ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { Input } from '../ui/input';
import { Button } from '../ui/button';
import { type KbArticle } from '../../lib/definitions';

interface ArticleSettingsProps {
    article: KbArticle;
}

const ArticleSettings: React.FC<ArticleSettingsProps> = ({ article }) => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Configurações do Artigo</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="space-y-2">
                    <Label htmlFor="status">Status</Label>
                    <Select defaultValue={article.status}>
                        <SelectTrigger id="status">
                            <SelectValue placeholder="Selecione o status" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="published">Publicado</SelectItem>
                            <SelectItem value="draft">Rascunho</SelectItem>
                            <SelectItem value="archived">Arquivado</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className="space-y-2">
                    <Label htmlFor="author">Autor</Label>
                    <Input id="author" defaultValue={article.author.displayName || ''} disabled />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="tags">Tags (separadas por vírgula)</Label>
                    <Input id="tags" defaultValue={article.tags.join(', ')} />
                </div>
                 <div className="flex justify-end">
                    <Button>Salvar Configurações</Button>
                </div>
            </CardContent>
        </Card>
    );
};

export default ArticleSettings;
