export interface User {
    id: string;
    name: string;
    email: string;
    createdAt: Date;
}

export interface Product {
    id: string;
    name: string;
    price: number;
    description?: string;
}

export interface Order {
    id: string;
    userId: string;
    productIds: string[];
    totalAmount: number;
    createdAt: Date;
}