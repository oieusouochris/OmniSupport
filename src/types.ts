import { type SVGProps, type ReactNode } from 'react';

/**
 * Propriedades base para componentes de ícone, permitindo customização
 * de tamanho e outras propriedades SVG.
 */
export interface IconProps extends SVGProps<SVGSVGElement> {
  size?: number;
}

/**
 * Tipo genérico para itens em menus suspensos (dropdowns), caixas de seleção, etc.
 * Facilita a padronização de componentes de formulário.
 */
export interface SelectableItem<T = string> {
  value: T;
  label: string;
  icon?: ReactNode;
  disabled?: boolean;
}

/**
 * Define a estrutura para abas (tabs) em componentes de navegação.
 */
export interface TabItem {
    id: string;
    label: string;
    content: ReactNode;
    icon?: ReactNode;
}