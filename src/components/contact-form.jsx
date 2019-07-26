import React, { Component } from 'react';
import styled from 'styled-components';

const encode = data =>
  Object.keys(data)
    .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&');

const Form = styled.form`
  display: flex;
  flex-flow: column;
  margin-top: 1rem;
`;

const SubmitButton = styled.button`
  max-width: 5rem;
  border-radius: 3px;
  color: ${({ theme }) => theme.dark};
  background-color: ${({ theme }) => theme.secondary};
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  border: none;
  height: 2.1rem;
  margin-top: 0.5rem;

  &:disabled {
    background-color: ${({ theme }) => theme.disabled};
    cursor: not-allowed;
  }

  &:hover:not([disabled]) {
    background-color: ${({ theme }) => theme.accent};
  }

  &:focus:not([disabled]) {
    background-color: ${({ theme }) => theme.accent};
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
      bot: '',
      submissionInProgress: false,
    };
  }

  handleSubmit = e => {
    if (this.state.bot === '') {
      this.setState({ submissionInProgress: true });
      const body = encode({
        'form-name': 'content',
        name: this.state.name,
        email: this.state.email,
        message: this.state.message,
      });
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body,
      })
        .then(this.onSubmitSuccess)
        .catch(this.onSubmitFail);
      e.preventDefault();
    }
  };

  handleChange = e => this.setState({ [e.target.name]: e.target.value });

  onSubmitSuccess = () => {
    this.setState({
      name: '',
      email: '',
      message: '',
      bot: '',
      submissionInProgress: false,
    });
  };

  onSubmitFail = () => {
    this.setState({ submissionInProgress: false });
  };

  shouldDisable = () => this.state.submissionInProgress || this.state.name === '' || this.state.email === '' || this.state.message === '';

  render() {
    const { name, email, message, bot } = this.state;
    return (
      <Form onSubmit={this.handleSubmit}>
        <input type="hidden" name="bot" value={bot} onChange={this.handleChange} />
        <NameInput type="text" name="name" placeholder="Name" value={name} onChange={this.handleChange} />
        <EmailInput type="email" name="email" placeholder="Email" value={email} onChange={this.handleChange} />
        <MessageInput name="message" placeholder="Message" rows="5" value={message} onChange={this.handleChange} />
        <SubmitButton type="submit" disabled={this.shouldDisable()}>
          Send
        </SubmitButton>
      </Form>
    );
  }
}
