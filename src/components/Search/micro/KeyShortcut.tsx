import { useEffect } from 'react';

const useKeyboardShortcuts = (openModal: () => void, closeModal: () => void) => {
  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === '/') {
      if (event.ctrlKey || event.metaKey) {
        event.preventDefault(); 
        openModal();
      }
    } else if (event.key === 'Escape') {
      closeModal();
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [openModal, closeModal]);
};


export default useKeyboardShortcuts;
