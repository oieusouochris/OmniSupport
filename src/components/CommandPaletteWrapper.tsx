import React from 'react';
import { CommandPalette } from './command-palette';

// Este componente pode ser usado para envolver a lógica de
// carregar itens dinâmicos para a paleta de comandos.
const CommandPaletteWrapper: React.FC = () => {
    // Exemplo de lógica para carregar itens dinamicamente:
    // const [items, setItems] = React.useState([]);
    // React.useEffect(() => { /* fetch items */ }, []);

    return <CommandPalette />;
};

export default CommandPaletteWrapper;
