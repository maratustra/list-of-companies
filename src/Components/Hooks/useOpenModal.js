import { useState } from 'react';

export function useOpenModal() {
  const [isModalOpen, setModalState] = useState(false);


  return { isModalOpen, setModalState };
}