import React, { useEffect} from "react";
import { KeyboardNavigationProps } from "../../../types";

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


export const KeyboardNavigation: React.FC<KeyboardNavigationProps> = ({ selectedIndex, setSelectedIndex, itemRefs,}) => {

const handleKeyDown = (event: KeyboardEvent) => {
  if (event.key === 'ArrowUp' && selectedIndex !== null) {
    if (selectedIndex === 0) {
      setSelectedIndex(null);
    } else {
      setSelectedIndex(selectedIndex - 1);
    }
  } else if (event.key === 'ArrowDown') {
    if (selectedIndex === null || selectedIndex === (itemRefs.current?.length ?? 0) - 1) {
      setSelectedIndex(0);
    } else {
      setSelectedIndex(selectedIndex + 1);
    }
  } else if (event.key === 'Enter' && selectedIndex !== null) {
    const selectedElement = itemRefs.current?.[selectedIndex];
    if (selectedElement) {
      selectedElement.click();
    }
  }
};

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      handleKeyDown(event);
    };

    window.addEventListener('keydown', handleKeyPress);

    return () => {
      window.removeEventListener('keydown', handleKeyPress);
    };
  }, [selectedIndex]);

  return null;
};


export default useKeyboardShortcuts
