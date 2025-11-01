// Este arquivo serve como um ponto de entrada conveniente para o hook de toast,
// reexportando a implementação principal do diretório de UI.
// Isso permite importações mais limpas nos componentes da aplicação, como `import { useToast } from '@/hooks/use-toast'`.

export { useToast, toast } from '../components/ui/use-toast';
