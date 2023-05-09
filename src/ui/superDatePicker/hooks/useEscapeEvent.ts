import { useEffect } from 'react';

// Выполняет коллбэк по нажатию 'Escape'
// используется для закрытия модальных окон

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
