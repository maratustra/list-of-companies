import React from 'react';
import styled from 'styled-components';
import { Button } from './Style/Button';
//import { useOpenItem } from './Hooks/useOpenItem';

export const ModalItem = ({ isModalOpen, setModalState }) => {

  console.log(isModalOpen);

  const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    display: ${isModalOpen ? 'flex' : 'none'};
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
    background-color: rgba(0,0,0,.5);
    z-index: 20;
  `;

  const Modal = styled.div`
    width: 900px;
    height: 550px;
    background-color: #fff;
  `;

  const Header = styled.h1`
    margin: 20px;
    font-size: 20px;
    line-height: 20px;
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
    border-bottom: 1px solid red;
    color: gray;
  `;

  return (
    <Overlay id='overlay' onClick={() => setModalState(false)}>
      <Modal>
        <Header>Добавьте информацию о компании</Header>
        <FormBlock>
          <FormField>
            <FormFieldName>Наименование организации</FormFieldName>
            <Input type="text" name="orgName" required />
          </FormField>
          <FormField>
            <FormFieldName>ИНН</FormFieldName>
            <Input type="number" name="inn" minlength="10" maxlength="10" required />
          </FormField>
          <FormField>
            <FormFieldName>ОГРН</FormFieldName>
            <Input type="number" name="ogrn" minlength="13" maxlength="13" required />
          </FormField>
          <FormField>
            <FormFieldName>Дата регистрации</FormFieldName>
            <Input type="number" name="registration" required />
          </FormField>
          <FormField>
            <FormFieldName>Адрес регистрации</FormFieldName>
            <Input type="text" name="address" required />
          </FormField>
          <Button type="submit">Добавить организацию</Button>
        </FormBlock>

      </Modal>
    </Overlay>
  );
};