import React from 'react';
import styled from 'styled-components';

const Input = styled.input`
  background-color: transparent;
  border: 0;
  padding: 8px;
  &:hover {
    background-color: #d3d3d3;
    cursor: pointer;
  }
`;

export class InlineEdit extends React.Component {
  constructor(props) {
    super(props);

    this.state = { value: props.value };

    this.changeField = props.changeField;
    this.fieldName = props.fieldName;
    this.companyIndex = props.companyIndex;
  }

  onChange(event) {
    this.setState({ value: event.target.value });
  }

  onKeyDown(event) {
    if (event.key === "Enter" || event.key === "Escape") {
      event.target.blur();
    }
  }

  onBlur(event) {
    if (event.target.value.trim() === "") {
      this.setState({ value: this.props.value });
    } else {
      this.changeField(this.companyIndex, this.fieldName, event.target.value);
    }
  }

  render() {
    return (
      <Input
        type="text"
        aria-label="Field name"
        value={this.state.value}
        onChange={e => this.onChange(e)}
        onKeyDown={e => this.onKeyDown(e)}
        onBlur={e => this.onBlur(e)}
      />
    );
  }
}
