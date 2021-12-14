import React from 'react';
import styled from 'styled-components';
import trashImage from '../image/trash.svg';

const TableMainArea = styled.div`
  width: 500px;
  border: 1px solid black;
  font-size: 12px;
`;

const TableRowBlock = styled.div`
  display: flex;
  flex-direction: row;
`;

const TrashButton = styled.button`
  width: 24px;
  height: 24px;
  border-color: transparent;
  background-color: transparent;
  background-image: url(${trashImage});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
`;

export const TableList = () => (
  <TableRowBlock>
    <TableMainArea>ООО Технологии</TableMainArea>
    <TableMainArea>1234567</TableMainArea>
    <TableMainArea>1234567899</TableMainArea>
    <TableMainArea>12.12.2020</TableMainArea>
    <TableMainArea>Екатеринбург, ул. Лесная, д.6</TableMainArea>
    <TableMainArea><TrashButton /></TableMainArea>
  </TableRowBlock>
);