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

const FormBlock = styled.form`
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

const AddNewCompanyButton = styled.button`
  display: block;
  width: 185px;
  height: 50px;
  margin: 10px;
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

const Error = styled.span`
  font-size: 10px;
  color: red;
`;

export class AddCompanyModal extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isModalOpen: false,
      company: this.newCompany(),
      errors: {}
    };

    this.addCompany = props.addCompany;
  }

  newCompany() {
    return {
      name: "",
      inn: "",
      ogrn: "",
      registrationDate: "",
      address: "",
    };
  }

  addToCompaniesList() {
    this.addCompany(Object.assign({}, this.state.company));
    this.setState({ isModalOpen: false });
  }

  showModal() {
    this.setState({ company: this.newCompany() });
    this.setState({ isModalOpen: true });
  }

  closeModal(e) {
    if (e.target.id === 'overlay') this.setState({ isModalOpen: false });
  }

  onFieldChange(fieldName) {
    return event =>
      (this.setState(state => ({ company: { ...state.company, [fieldName]: event.target.value } })));
  }

  handleSubmit(e) {
    e.preventDefault();

    if (this.isValid()) {
      this.addToCompaniesList();
      console.log('true');
    } else {
      console.log('false');
    }
  }

  isValid() {
    const input = this.state.company;
    const errors = {};
    let isValid = true;
    console.log('input', input);

    if (input.name === "") {
      isValid = false;
      errors["name"] = "Поле обязательно для заполнения";
    }

    if (input.inn === "") {
      isValid = false;
      errors["inn"] = "Поле обязательно для заполнения";
    }

    if (input.ogrn === "") {
      isValid = false;
      errors["ogrn"] = "Поле обязательно для заполнения";
    }

    if (input.inn !== "" && input.orgn !== "") {

      if (/[^\d]/g.test(input.inn)) {
        isValid = false;
        errors["inn"] = "Пожалуйста, проверьте правильность введеного ИНН";
      } else if (/[^\d]/g.test(input.ogrn)) {
        isValid = false;
        errors["ogrn"] = "Пожалуйста, проверьте правильность введеного ОГРН";
      }
    }

    this.setState({ errors });

    return isValid;
  }


  render() {

    console.log(this.state.errors);

    return (
      <>
        <AddNewCompanyButton onClick={() => this.showModal()}>Добавить организацию</AddNewCompanyButton>

        <Overlay id='overlay' isModalOpen={this.state.isModalOpen} onClick={e => this.closeModal(e)}>
          <Modal>
            <Header>Добавьте информацию о компании</Header>
            <FormBlock>
              <FormField>
                <FormFieldName>Наименование организации</FormFieldName>
                <Input type="text" value={this.state.company.name}
                  onChange={this.onFieldChange('name')} />
                <Error>{this.state.errors.name}</Error>
              </FormField>

              <FormField>
                <FormFieldName>ИНН</FormFieldName>
                <Input type="number" value={this.state.company.inn}
                  onChange={this.onFieldChange('inn')} />
                <Error>{this.state.errors.inn}</Error>
              </FormField>

              <FormField>
                <FormFieldName>ОГРН</FormFieldName>
                <Input type="number" value={this.state.company.ogrn}
                  onChange={this.onFieldChange('ogrn')} />
                <Error>{this.state.errors.ogrn}</Error>
              </FormField>

              <FormField>
                <FormFieldName>Дата регистрации</FormFieldName>
                <Input type="text" value={this.state.company.registrationDate}
                  onChange={this.onFieldChange('registrationDate')} />
              </FormField>
              <FormField>
                <FormFieldName>Адрес регистрации</FormFieldName>
                <Input type="text" value={this.state.company.address}
                  onChange={this.onFieldChange('address')} />
              </FormField>
            </FormBlock>
            <ModalButton type="submit" onClick={e => this.handleSubmit(e)}>
              Добавить организацию
            </ModalButton>
          </Modal>
        </Overlay>
      </>
    );
  }
}
