import React from 'react';
import { GlobalStyle } from './Components/Style/GlobalStyle';
import { MainTable } from './Components/MainTable';
import { ModalItem } from './Components/ModalItem';
import { useOpenModal } from './Components/Hooks/useOpenModal';

function App() {

  const { isModalOpen, setModalState } = useOpenModal();

  return (
    <>
      <GlobalStyle />
      <MainTable setModalState={setModalState} />
      <ModalItem isModalOpen={isModalOpen} setModalState={setModalState} />
    </>
  );
}

export default App;
