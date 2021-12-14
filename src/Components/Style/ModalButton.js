import styled from 'styled-components';

export const ModalButton = styled.button`
  display: block;
  width: 90%;
  height: 50px;
  margin: 50px;
  background-color: #1890cc;
  font-family: 'Roboto';
  font-size: 15px;
  line-height: 20px;
  color: #FFFFFF;
  border-color: transparent;
  transition-property: color, background-color, border-color;
  transition-duration: .3s;
  &:hover {
    background-color: #FFFFFF;
    color: #1890cc;
    border-color: #1890cc;
  }
`;