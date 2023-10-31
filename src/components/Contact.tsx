import React, { FC } from 'react'
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  useToast,
} from '@chakra-ui/react'
import { Formik, Form, Field, FieldProps } from 'formik'
import { send } from '@emailjs/browser'
import { MailIcon, PersonIcon } from './shared/Icons'

const INITIAL_VALUES = { name: '', email: '', message: '' }

interface ContactProps {
  darkBackground?: boolean
}

enum IconColor {
  Valid = '#4E383F',
  Invalid = '#E53E3E',
}

export const Contact: FC<ContactProps> = ({ darkBackground }) => {
  const toast = useToast()

  const validateField = (field: string, value: string) => {
    let error

    if (!value.trim()) {
      error = `${field} is required`
    } else if (
      field === 'Email' &&
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)
    ) {
      error = 'Invalid email address'
    }

    return error
  }

  const triggerToast = (title: string, status: 'success' | 'error') => {
    toast({
      title,
      status,
      variant: 'subtle',
      duration: 1500,
    })
  }

  const handleSubmit = async (
    {
      name,
      email,
      message,
    }: {
      name: string
      email: string
      message: string
    },
    actions: any,
  ) => {
    try {
      name = name.trim()
      email = email.trim()
      message = message.trim()
      await send(
        process.env.GATSBY_EMAILJS_SERVICE_ID as string,
        process.env.GATSBY_EMAILJS_TEMPLATE_ID as string,
        { name, email, message },
        process.env.GATSBY_EMAILJS_USER_ID,
      )
      actions.resetForm()
      triggerToast('Message sent!', 'success')
    } catch (error) {
      triggerToast(
        'An error was encountered while sending your message.',
        'error',
      )
    }
  }

  return (
    <Box
      bg={darkBackground ? 'gray.100' : undefined}
      p="30px"
      borderBottomRadius={10}
    >
      <Heading
        size="lg"
        mb="20px"
      >
        Say hello
      </Heading>

      <Formik
        initialValues={INITIAL_VALUES}
        onSubmit={handleSubmit}
      >
        {(props) => (
          <Form>
            <Field
              name="name"
              validate={(value: string) => validateField('Name', value)}
            >
              {({ field, form }: FieldProps) => (
                <FormControl
                  isInvalid={!!(form.errors.name && form.touched.name)}
                  isRequired
                  maxWidth="750px"
                >
                  <FormLabel htmlFor="name">Name</FormLabel>
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      children={
                        <PersonIcon
                          color={
                            form.errors.name && form.touched.name
                              ? IconColor.Invalid
                              : IconColor.Valid
                          }
                        />
                      }
                    />
                    <Input
                      {...field}
                      id="name"
                      bg="white"
                      data-testid="name-input"
                    />
                  </InputGroup>
                  <FormErrorMessage>{`${form.errors.name}`}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field
              name="email"
              validate={(value: string) => validateField('Email', value)}
            >
              {({ field, form }: FieldProps) => (
                <FormControl
                  isInvalid={!!(form.errors.email && form.touched.email)}
                  isRequired
                  mt="25px"
                  maxWidth="750px"
                >
                  <FormLabel htmlFor="email">Email</FormLabel>
                  <InputGroup>
                    <InputLeftElement
                      pointerEvents="none"
                      children={
                        <MailIcon
                          color={
                            form.errors.email && form.touched.email
                              ? IconColor.Invalid
                              : IconColor.Valid
                          }
                        />
                      }
                    />
                    <Input
                      {...field}
                      id="email"
                      bg="white"
                      data-testid="email-input"
                    />
                  </InputGroup>
                  <FormErrorMessage>{`${form.errors.email}`}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Field
              name="message"
              validate={(value: string) => validateField('Message', value)}
            >
              {({ field, form }: FieldProps) => (
                <FormControl
                  isInvalid={!!(form.errors.message && form.touched.message)}
                  isRequired
                  mt="25px"
                  maxWidth="750px"
                >
                  <FormLabel htmlFor="message">Message</FormLabel>
                  <Textarea
                    {...field}
                    id="message"
                    resize="none"
                    bg="white"
                    data-testid="message-input"
                  />
                  <FormErrorMessage>{`${form.errors.message}`}</FormErrorMessage>
                </FormControl>
              )}
            </Field>
            <Button
              mt="20px"
              colorScheme="lightPink"
              isLoading={props.isSubmitting}
              isDisabled={!props.dirty || !props.isValid}
              type="submit"
            >
              Send
            </Button>
          </Form>
        )}
      </Formik>
    </Box>
  )
}
