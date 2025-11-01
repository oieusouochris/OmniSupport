import React from 'react';
import { type HistoryEvent } from '../../lib/definitions';
import CustomerJourney from './CustomerJourney';

interface HistoryTabProps {
    history: HistoryEvent[];
}

const HistoryTab: React.FC<HistoryTabProps> = ({ history }) => {
    return (
        <div className="p-4">
            {history.length > 0 ? (
                <CustomerJourney history={history} />
            ) : (
                <div className="text-center text-muted-foreground py-8">
                    <p>Nenhum histórico de eventos para este cliente.</p>
                </div>
            )}
        </div>
    );
};

export default HistoryTab;
