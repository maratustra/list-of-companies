import React from 'react';
import styled from 'styled-components';
import trashImage from '../image/trash.svg';
import { InlineEdit } from './InlineEdit';

const TableMainArea = styled.div`
  width: 500px;
  border: 1px solid black;
  font-size: 12px;
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

export const TableList = ({ company, deleteCompanyRow, changeCompanyField, index }) => (
  <>
    <InlineEdit value={company.name} fieldName={'name'} companyIndex={index} changeField={changeCompanyField} />
    <TableMainArea>{company.inn}</TableMainArea>
    <TableMainArea>{company.ogrn}</TableMainArea>
    <TableMainArea>{company.registration}</TableMainArea>
    <TableMainArea>{company.address}</TableMainArea>
    <TableMainArea><TrashButton onClick={() => deleteCompanyRow(index)} /></TableMainArea>
  </>
);