import React from 'react';
import TagsManagement from '../components/settings/tags-management';

const TagsPage: React.FC = () => {
    return (
        <div className="space-y-6 p-4 md:p-6">
            <h1 className="text-2xl font-bold">Gerenciamento de Tags</h1>
            <p className="text-muted-foreground">
                Crie, edite e organize as tags usadas em toda a plataforma.
            </p>
            <TagsManagement />
        </div>
    );
};

export default TagsPage;
