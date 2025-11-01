import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useDataStore } from '@/store/use-data-store';
import { Target } from 'lucide-react';
import { Progress } from '@/components/ui/progress';

const TeamGoalsWidget: React.FC = () => {
    const { teamGoals } = useDataStore();

    return (
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <Target className="h-5 w-5" />
                    Metas da Equipe
                </CardTitle>
                <CardDescription>Progresso das metas do time no período.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
                {teamGoals.map(goal => (
                    <div key={goal.id} className="space-y-2">
                        <div className="flex justify-between text-sm font-medium">
                            <span>{goal.title}</span>
                            <span>{goal.current}{goal.metric} / {goal.target}{goal.metric}</span>
                        </div>
                        <Progress value={(goal.current / goal.target) * 100} className="h-2" />
                    </div>
                ))}
            </CardContent>
        </Card>
    );
};

export default TeamGoalsWidget;