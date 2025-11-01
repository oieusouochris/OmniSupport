import React from 'react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';

const SlackPage: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full p-4 text-center">
      <Card className="w-full max-w-lg">
        <CardHeader>
          <CardTitle>Integração com Slack</CardTitle>
          <CardDescription>
            Conecte sua conta do Slack para receber notificações e gerenciar tickets diretamente do seu workspace.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="mb-4 text-sm text-muted-foreground">
            A funcionalidade de integração com o Slack está em desenvolvimento.
          </p>
          <Button disabled>Conectar com Slack (Em breve)</Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default SlackPage;
