import styled from 'styled-components';

export const Button = styled.button`
  display: block;
  width: 200px;
  height: 50px;
  margin-bottom: 20px;
  background-color: #299B01;
  font-family: 'Roboto';
  font-size: 15px;
  line-height: 20px;
  color: #FFFFFF;
  border-color: transparent;
  transition-property: color, background-color, border-color;
  transition-duration: .3s;
  &:hover {
    background-color: #FFFFFF;
    color: #299B01;
    border-color: #299B01;
  }
  ${'' /* &:disabled {
    background-color: #FFFFFF;
    color: #aaa;
    border-color: #aaa;
    cursor: not-allowed;
  } */}
`;