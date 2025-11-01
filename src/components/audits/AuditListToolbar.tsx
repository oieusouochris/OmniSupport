import React from 'react';
import { Button } from '../ui/button';
import { Input } from '../ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/select';
import { type AuditFilters } from '../../hooks/audits/useAuditFilters';
import { type AuditCategory, type AuditStatus } from '../../lib/definitions';
import { Filter, Search } from 'lucide-react';

interface AuditListToolbarProps {
    filters: AuditFilters;
    onFilterChange: (filterName: keyof AuditFilters, value: any) => void;
    onSearch: (query: string) => void;
}

const AuditListToolbar: React.FC<AuditListToolbarProps> = ({ filters, onFilterChange, onSearch }) => {
    return (
        <div className="flex flex-col md:flex-row items-center gap-4 p-4 border rounded-lg bg-card">
            <div className="relative w-full md:w-auto md:flex-grow">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                <Input
                    placeholder="Buscar por descrição..."
                    className="pl-9"
                    onChange={(e) => onSearch(e.target.value)}
                />
            </div>
            <div className="flex items-center gap-2 w-full md:w-auto">
                <Filter className="h-4 w-4 text-muted-foreground" />
                <Select
                    value={filters.status}
                    onValueChange={(value: AuditStatus | 'all') => onFilterChange('status', value)}
                >
                    <SelectTrigger className="w-full md:w-[180px]">
                        <SelectValue placeholder="Status" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">Todos os Status</SelectItem>
                        <SelectItem value="Pendente">Pendente</SelectItem>
                        <SelectItem value="Em Progresso">Em Progresso</SelectItem>
                        <SelectItem value="Concluída">Concluída</SelectItem>
                        <SelectItem value="Cancelada">Cancelada</SelectItem>
                    </SelectContent>
                </Select>
                <Select
                    value={filters.category}
                    onValueChange={(value: AuditCategory | 'all') => onFilterChange('category', value)}
                >
                    <SelectTrigger className="w-full md:w-[180px]">
                        <SelectValue placeholder="Categoria" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="all">Todas as Categorias</SelectItem>
                        <SelectItem value="Segurança">Segurança</SelectItem>
                        <SelectItem value="Performance">Performance</SelectItem>
                        <SelectItem value="Qualidade">Qualidade</SelectItem>
                        <SelectItem value="Processo">Processo</SelectItem>
                    </SelectContent>
                </Select>
            </div>
        </div>
    );
};

export default AuditListToolbar;
