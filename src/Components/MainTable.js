import React from 'react';
import styled from 'styled-components';

const TableStyled = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  ${'' /* max-width: 900px;  */}
`;

const TableRowBlock = styled.div`
  display: flex;
  flex-direction: row;
`;

const TableHeader = styled.div`
  width: 500px;
  border: 1px solid black;
`;

const TableMainArea = styled.div`
  width: 500px;
  border: 1px solid black;
`;

export const MainTable = () => (
  <TableStyled>
    <TableRowBlock>
      <TableHeader>Наименование организации</TableHeader>
      <TableHeader>ИНН</TableHeader>
      <TableHeader>ОГРН</TableHeader>
      <TableHeader>Дата регистрации</TableHeader>
      <TableHeader>Адрес регистрации</TableHeader>
      <TableHeader></TableHeader>
    </TableRowBlock>
    <TableRowBlock>
      <TableMainArea>...</TableMainArea>
      <TableMainArea>...</TableMainArea>
      <TableMainArea>...</TableMainArea>
      <TableMainArea>...</TableMainArea>
      <TableMainArea>...</TableMainArea>
      <TableMainArea>...</TableMainArea>
    </TableRowBlock>
  </TableStyled>
);