import { useState, useMemo } from 'react';
import { type AuditItem, type AuditStatus, type AuditCategory } from '../../lib/definitions';

export interface AuditFilters {
    status: AuditStatus | 'all';
    category: AuditCategory | 'all';
}

export const useAuditFilters = (audits: AuditItem[]) => {
    const [filters, setFilters] = useState<AuditFilters>({
        status: 'all',
        category: 'all',
    });

    const filteredAudits = useMemo(() => {
        return audits.filter(audit => {
            const statusMatch = filters.status === 'all' || audit.status === filters.status;
            const categoryMatch = filters.category === 'all' || audit.category === filters.category;
            return statusMatch && categoryMatch;
        });
    }, [audits, filters]);

    const setFilter = (filterName: keyof AuditFilters, value: AuditStatus | AuditCategory | 'all') => {
        setFilters(prev => ({ ...prev, [filterName]: value }));
    };

    return {
        filters,
        setFilter,
        filteredAudits,
    };
};
