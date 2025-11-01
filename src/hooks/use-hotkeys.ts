import { useEffect } from 'react';

type HotkeyCallback = (event: KeyboardEvent) => void;

/**
 * Hook para registrar atalhos de teclado.
 * @param key A tecla a ser observada (ex: 'k', 's').
 * @param callback A função a ser executada quando o atalho for pressionado.
 * @param meta Requer que a tecla Meta (Cmd/Win) esteja pressionada.
 * @param ctrl Requer que a tecla Ctrl esteja pressionada.
 */
export const useHotkeys = (
  key: string,
  callback: HotkeyCallback,
  meta: boolean = false,
  ctrl: boolean = false
) => {
    useEffect(() => {
        const handler = (event: KeyboardEvent) => {
            if (event.key.toLowerCase() === key.toLowerCase()) {
                const metaPressed = meta ? event.metaKey : true;
                const ctrlPressed = ctrl ? event.ctrlKey : true;

                if (metaPressed && ctrlPressed) {
                    event.preventDefault();
                    callback(event);
                }
            }
        };

        window.addEventListener('keydown', handler);
        return () => {
            window.removeEventListener('keydown', handler);
        };
    }, [key, callback, meta, ctrl]);
};
