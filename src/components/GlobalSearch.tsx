import React, { useState } from 'react';
import { Input } from './ui/input';
import { Search } from 'lucide-react';

const GlobalSearch: React.FC = () => {
    const [query, setQuery] = useState('');

    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
        setQuery(e.target.value);
        // Lógica de busca seria implementada aqui
    };

    return (
        <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
                type="search"
                placeholder="Buscar tickets, artigos..."
                className="pl-9"
                value={query}
                onChange={handleSearch}
            />
        </div>
    );
};

export default GlobalSearch;
