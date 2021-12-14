import React from 'react';
import styled from 'styled-components';
import { MainButton } from './Style/MainButton';
import { TableList } from './TableList';

const TableStyled = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px;
  border: 1px solid black;
`;

const TableRowBlock = styled.div`
  display: flex;
  flex-direction: row;
`;

const TableHeader = styled.div`
  width: 500px;
  border: 1px solid black;
  font-size: 15px;
  text-align: center;
`;

export const MainTable = ({ setModalState }) => (
  <>
    <MainButton onClick={() => setModalState(true)}>Добавить организацию</MainButton>
    <TableStyled>
      <TableRowBlock>
        <TableHeader>Наименование организации</TableHeader>
        <TableHeader>ИНН</TableHeader>
        <TableHeader>ОГРН</TableHeader>
        <TableHeader>Дата регистрации</TableHeader>
        <TableHeader>Адрес регистрации</TableHeader>
        <TableHeader></TableHeader>
      </TableRowBlock>
      <TableList />
      <TableList />
      <TableList />
    </TableStyled>
  </>
);