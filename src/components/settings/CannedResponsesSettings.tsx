import React from 'react';
import { useDataStore } from '@/store/use-data-store';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import { PlusCircle } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const CannedResponsesSettings = () => {
    const { cannedResponses } = useDataStore();

    return (
        <Card>
            <CardHeader>
                <div className="flex justify-between items-center">
                    <div>
                        <CardTitle>Respostas Prontas</CardTitle>
                        <CardDescription>
                            Gerencie respostas pré-definidas para agilizar o atendimento.
                        </CardDescription>
                    </div>
                    <Button size="sm">
                        <PlusCircle className="mr-2 h-4 w-4" />
                        Nova Resposta
                    </Button>
                </div>
            </CardHeader>
            <CardContent>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Atalho</TableHead>
                            <TableHead>Conteúdo</TableHead>
                            <TableHead>Tags</TableHead>
                            <TableHead />
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {cannedResponses.map((response) => (
                            <TableRow key={response.id}>
                                <TableCell className="font-mono">:{response.shortcut}</TableCell>
                                <TableCell className="max-w-xs truncate">{response.content}</TableCell>
                                <TableCell>
                                    <div className="flex gap-1">
                                        {response.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
                                    </div>
                                </TableCell>
                                <TableCell className="text-right">
                                    <Button variant="ghost" size="sm">Editar</Button>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </CardContent>
        </Card>
    );
};

export default CannedResponsesSettings;