import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { useDataStore } from '@/store/use-data-store';
import { Star } from 'lucide-react';

const RecentFeedback: React.FC = () => {
    const { recentFeedback } = useDataStore();

    return (
        <Card>
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <Star className="h-5 w-5 text-yellow-400" />
                    Feedbacks Recentes
                </CardTitle>
                <CardDescription>As últimas avaliações dos clientes.</CardDescription>
            </CardHeader>
            <CardContent>
                <ul className="space-y-4">
                    {recentFeedback.slice(0, 3).map((feedback) => (
                        <li key={feedback.id} className="border-b pb-4 last:border-b-0 last:pb-0">
                            <div className="flex items-center justify-between mb-1">
                                <span className="text-sm font-semibold">{feedback.customerName}</span>
                                <div className="flex items-center">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className={`h-4 w-4 ${i < feedback.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                                        />
                                    ))}
                                </div>
                            </div>
                            <p className="text-sm text-muted-foreground italic">"{feedback.comment}"</p>
                        </li>
                    ))}
                </ul>
            </CardContent>
        </Card>
    );
};

export default RecentFeedback;