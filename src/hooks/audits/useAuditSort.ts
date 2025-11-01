import { useState, useMemo } from 'react';
import { type AuditItem } from '../../lib/definitions';

type SortKey = 'timestamp' | 'status';
type SortDirection = 'asc' | 'desc';

export const useAuditSort = (audits: AuditItem[]) => {
    const [sortKey, setSortKey] = useState<SortKey>('timestamp');
    const [sortDirection, setSortDirection] = useState<SortDirection>('desc');

    const sortedAudits = useMemo(() => {
        const sorted = [...audits].sort((a, b) => {
            if (a[sortKey] < b[sortKey]) {
                return sortDirection === 'asc' ? -1 : 1;
            }
            if (a[sortKey] > b[sortKey]) {
                return sortDirection === 'asc' ? 1 : -1;
            }
            return 0;
        });
        return sorted;
    }, [audits, sortKey, sortDirection]);

    const handleSort = (key: SortKey) => {
        if (key === sortKey) {
            setSortDirection(prev => (prev === 'asc' ? 'desc' : 'asc'));
        } else {
            setSortKey(key);
            setSortDirection('asc');
        }
    };

    return {
        sortedAudits,
        handleSort,
        sortKey,
        sortDirection,
    };
};
