// FIX: Atualiza a importação do Zustand para o padrão moderno.
import { create } from 'zustand';
import { type AuditItem } from '../lib/definitions';

type ModalType = 'addAuditItem' | 'auditDetail' | 'auditHistory' | null;

interface InteractionStoreState {
    modal: ModalType;
    selectedAudit: AuditItem | null;
    openModal: (modal: ModalType) => void;
    closeModal: () => void;
    setSelectedAudit: (audit: AuditItem | null) => void;
}

export const useInteractionStore = create<InteractionStoreState>((set) => ({
    modal: null,
    selectedAudit: null,
    openModal: (modal) => set({ modal }),
    closeModal: () => set({ modal: null, selectedAudit: null }),
    setSelectedAudit: (audit) => set({ selectedAudit: audit }),
}));