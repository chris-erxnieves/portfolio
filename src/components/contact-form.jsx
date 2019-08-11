import React, { Component } from 'react';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-flow: column;
  margin-top: 1rem;
`;

const SubmitButton = styled.button`
  max-width: 5rem;
  border-radius: 3px;
  color: white;
  background-color: ${({ theme }) => theme.yellow};
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  border: none;
  height: 2.1rem;
  margin-top: 0.5rem;

  &:disabled {
    background-color: ${({ theme }) => theme.lightGray};
    cursor: not-allowed;
  }

  &:hover:not([disabled]) {
    background-color: ${({ theme }) => theme.yellowDarken10};
  }

  &:focus:not([disabled]) {
    background-color: ${({ theme }) => theme.yellowDarken10};
  }
`;

const NameInput = styled.input`
  max-width: 25rem;
`;

const EmailInput = styled.input`
  max-width: 25rem;
  margin-top: 0.5rem;
`;

const MessageInput = styled.textarea`
  max-width: 35rem;
  min-height: 8rem;
  margin-top: 0.5rem;
`;

export default class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      message: '',
      _gotcha: '',
    };
  }

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  shouldDisable = () => this.state.name === '' || this.state.email === '' || this.state.message === '' || this.state._gotcha !== '';

  render() {
    const { name, email, message, _gotcha } = this.state;
    return (
      <Form action="https://formspree.io/cerxleben.fhs@gmail.com" method="POST">
        <input type="text" name="_gotcha" style={{ display: `none` }} onChange={this.handleChange} value={_gotcha} />
        <NameInput type="text" name="name" placeholder="Name" onChange={this.handleChange} value={name} />
        <EmailInput type="email" name="email" placeholder="Email" onChange={this.handleChange} value={email} />
        <MessageInput name="message" placeholder="Message" rows="5" onChange={this.handleChange} value={message} />
        <SubmitButton type="submit" disabled={this.shouldDisable()}>
          Send
        </SubmitButton>
      </Form>
    );
  }
}
