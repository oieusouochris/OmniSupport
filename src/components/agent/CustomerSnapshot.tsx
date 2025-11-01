import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { Badge } from '../ui/badge';
import { type Customer, type Ticket } from '../../lib/definitions';

interface CustomerSnapshotProps {
    customer: Customer;
    tags?: string[];
}

const CustomerSnapshot: React.FC<CustomerSnapshotProps> = ({ customer, tags = [] }) => {
    const getInitials = (name: string) => {
        return name.split(' ').map(n => n[0]).join('').toUpperCase();
    };

    return (
        <Card>
            <CardHeader>
                <CardTitle>Resumo do Cliente</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="flex items-center gap-4">
                    <Avatar className="h-16 w-16">
                        <AvatarImage src={customer.avatarUrl} alt={customer.name} />
                        <AvatarFallback>{getInitials(customer.name)}</AvatarFallback>
                    </Avatar>
                    <div>
                        <p className="font-semibold">{customer.name}</p>
                        <p className="text-sm text-muted-foreground">{customer.email}</p>
                    </div>
                </div>
                {tags.length > 0 && (
                    <div className="mt-4 flex flex-wrap gap-2">
                        {tags.map(tag => (
                            <Badge key={tag} variant="secondary">{tag}</Badge>
                        ))}
                    </div>
                )}
            </CardContent>
        </Card>
    );
};

export default CustomerSnapshot;