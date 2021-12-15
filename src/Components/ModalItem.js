import React from 'react';
import styled from 'styled-components';
import { ModalButton } from './Style/ModalButton';

const Modal = styled.div`
    width: 900px;
    height: 550px;
    background-color: #fff;
  `;

const Header = styled.h1`
    margin: 30px 20px 20px;
    font-size: 20px;
    line-height: 20px;
    text-align: center;
  `;

const FormBlock = styled.div`
    display: flex;
    flex-direction: column;
    margin: 40px 30px 20px 30px;
  `;

const FormField = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 20px;
  `;

const FormFieldName = styled.label`
    font-size: 18px;
  `;

const Input = styled.input`
    width: 500px;
    font-size: 18px;
    border: none;
    border-bottom: 1px solid #1890cc;
    color: gray;
  `;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: ${props => (props.isModalOpen ? 'flex' : 'none')};
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,.5);
  z-index: 20;
`;

export const ModalItem = ({ isModalOpen, setModalState, companiesInfo, setCompaniesInfo }) => {

  const company = {
    name: 1,
    inn: 2,
    ogrn: 3,
    registration: 4,
    address: 5,
  };

  const addToCompaniesList = () => {
    setCompaniesInfo([...companiesInfo, company]);
    setModalState(false);
  };

  const closeModal = e => {
    if (e.target.id === 'overlay') setModalState(false);
  };

  const setCompanyInn = inn => company.inn = inn;

  return (
    <Overlay isModalOpen={isModalOpen} id='overlay' onClick={closeModal}>
      <Modal>
        <FormBlock>
          <Header>Добавьте информацию о компании</Header>
          <FormField>
            <FormFieldName>Наименование организации</FormFieldName>
            <Input type="text" name="orgname" required />
          </FormField>
          <FormField>
            <FormFieldName>ИНН</FormFieldName>
            <Input type="number" value={company.inn} onChange={inn => setCompanyInn(inn)} required />
          </FormField>
          <FormField>
            <FormFieldName>ОГРН</FormFieldName>
            <Input type="number" name="ogrn" required />
          </FormField>
          <FormField>
            <FormFieldName>Дата регистрации</FormFieldName>
            <Input type="number" name="registration" required />
          </FormField>
          <FormField>
            <FormFieldName>Адрес регистрации</FormFieldName>
            <Input type="text" name="address" required />
          </FormField>
        </FormBlock>
        <ModalButton type="submit" onClick={addToCompaniesList}>Добавить организацию</ModalButton>
      </Modal>
    </Overlay>
  );
};