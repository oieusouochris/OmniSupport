import React from 'react';
import { Checkbox } from '../ui/checkbox';
import { Label } from '../ui/label';

// Mock data
const tasks = [
    { id: 'task-1', label: 'Verificar logs do servidor para o erro 500.', completed: true },
    { id: 'task-2', label: 'Entrar em contato com o cliente para obter mais detalhes.', completed: false },
    { id: 'task-3', label: 'Escalonar para a equipe de engenharia se o problema persistir.', completed: false },
];

const TasksTab: React.FC = () => {
    return (
        <div className="p-4 space-y-4">
            <h3 className="font-semibold">Checklist de Tarefas</h3>
            <div className="space-y-2">
                {tasks.map(task => (
                    <div key={task.id} className="flex items-center space-x-2">
                        <Checkbox id={task.id} checked={task.completed} />
                        <Label
                            htmlFor={task.id}
                            className={`text-sm ${task.completed ? 'line-through text-muted-foreground' : ''}`}
                        >
                            {task.label}
                        </Label>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TasksTab;
