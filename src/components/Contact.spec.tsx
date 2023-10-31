import React from 'react'
import { Contact } from './Contact'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'

describe('Contact', () => {
  it("should disable send button if the user hasn't populated any fields", () => {
    render(<Contact />)

    expect(screen.getByRole('button', { name: 'Send' })).toBeDisabled()
  })

  it('should enable send button if the user has populated all fields', async () => {
    render(<Contact />)

    const nameInput = screen.getByTestId('name-input')
    fireEvent.change(nameInput, { target: { value: 'Tester Person' } })

    const emailInput = screen.getByTestId('email-input')
    fireEvent.change(emailInput, { target: { value: 'test@example.com' } })

    const messageInput = screen.getByTestId('message-input')
    fireEvent.change(messageInput, { target: { value: 'Hello there!' } })

    await waitFor(() => {
      expect(screen.getByRole('button', { name: 'Send' })).not.toBeDisabled()
    })
  })

  it('should show error message if the user blurs the name input without entering a value', async () => {
    render(<Contact />)

    const nameInput = screen.getByTestId('name-input')
    fireEvent.blur(nameInput)

    await waitFor(() => {
      expect(screen.getByText('Name is required')).toBeInTheDocument()
    })
  })

  it('should show error message if the user blurs the email address input without entering a value', async () => {
    render(<Contact />)

    const emailInput = screen.getByTestId('email-input')
    fireEvent.blur(emailInput)

    await waitFor(() => {
      expect(screen.getByText('Email is required')).toBeInTheDocument()
    })
  })

  it('should show error message if the user blurs the message input without entering a value', async () => {
    render(<Contact />)

    const messageInput = screen.getByTestId('message-input')
    fireEvent.blur(messageInput)

    await waitFor(() => {
      expect(screen.getByText('Message is required')).toBeInTheDocument()
    })
  })

  it('should show error message if the user enters an invalid email address', async () => {
    render(<Contact />)

    const emailInput = screen.getByTestId('email-input')
    fireEvent.change(emailInput, { target: { value: 'test' } })
    fireEvent.blur(emailInput)

    await waitFor(() => {
      expect(screen.getByText('Invalid email address')).toBeInTheDocument()
    })
  })
})
