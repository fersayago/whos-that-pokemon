import { useEffect } from 'react';

export function useKeydown(key: string, callback: () => void) {
  useEffect(() => {
    function handleKeydown(e: KeyboardEvent) {
      if (e.key === key) {
        callback();
      }
    }

    window.addEventListener('keydown', handleKeydown);

    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  }, [callback, key]);
}