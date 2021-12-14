import React from 'react';
import styled from 'styled-components';
import { Button } from './Style/Button';

const TableStyled = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
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

export const MainTable = ({ setModalState }) => (
  <>
    <Button onClick={() => setModalState(true)}>Добавить организацию</Button>
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
  </>
);