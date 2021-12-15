import React from 'react';
import { GlobalStyle } from './Components/Style/GlobalStyle';
import { MainTable } from './Components/MainTable';
// import { ModalItem } from './Components/ModalItem';
// import { useOpenModal } from './Components/Hooks/useOpenModal';
import { useCompaniesInfo } from './Components/Hooks/useCompaniesInfo';

function App() {

  // const modal = useOpenModal();
  const companiesInfo = useCompaniesInfo();
  console.log(companiesInfo);

  return (
    <>
      <GlobalStyle />
      <MainTable {...companiesInfo} />
      {/* <ModalItem {...modal} {...companiesInfo} /> */}
    </>
  );
}

export default App;
