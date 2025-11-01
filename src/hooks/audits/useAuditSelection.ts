import { useState, useCallback } from 'react';

export const useAuditSelection = (itemIds: string[] = []) => {
    const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());

    const handleSelect = useCallback((id: string) => {
        setSelectedIds(prev => {
            const newSelection = new Set(prev);
            if (newSelection.has(id)) {
                newSelection.delete(id);
            } else {
                newSelection.add(id);
            }
            return newSelection;
        });
    }, []);

    const handleSelectAll = useCallback((isSelected: boolean) => {
        setSelectedIds(isSelected ? new Set(itemIds) : new Set());
    }, [itemIds]);

    const clearSelection = useCallback(() => {
        setSelectedIds(new Set());
    }, []);

    return {
        selectedIds,
        handleSelect,
        handleSelectAll,
        clearSelection,
    };
};
