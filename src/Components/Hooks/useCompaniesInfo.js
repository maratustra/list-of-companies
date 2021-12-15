import { useState } from 'react';

export function useCompaniesInfo() {
  const [companiesInfo, setCompaniesInfo] = useState([]);

  return { companiesInfo, setCompaniesInfo };
}