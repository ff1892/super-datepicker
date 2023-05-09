import { useEffect } from 'react';

export const useEscapeEvent = (callback: () => void): void => {

  function downHandler(e: KeyboardEvent): void {
    if (e.key === 'Escape') {
      callback();
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', downHandler);

    return () => {
      window.removeEventListener('keydown', downHandler);
    };
  }, []);
};
