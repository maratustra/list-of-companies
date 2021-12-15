import React from 'react';
import { GlobalStyle } from './Components/Style/GlobalStyle';
import { MainTable } from './Components/MainTable';
import { useCompaniesInfo } from './Components/Hooks/useCompaniesInfo';


function App() {

  const companiesInfo = useCompaniesInfo();


  return (
    <>
      <GlobalStyle />
      <MainTable {...companiesInfo} />
    </>
  );
}

export default App;
