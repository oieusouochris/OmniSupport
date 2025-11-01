import React from 'react';
import KeyboardShortcuts from '../components/settings/KeyboardShortcuts';

const KeyboardPage: React.FC = () => {
    return (
        <div className="p-4 md:p-6">
            <KeyboardShortcuts />
        </div>
    );
};

export default KeyboardPage;
