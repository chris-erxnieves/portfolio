import React from 'react';
import styled from 'styled-components';
import ContactForm from './contact-form';
import ContactLinks from './contact-links';

const SectionWrapper = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 1rem;
`;

const SectionHeading = styled.h1`
  margin: 0;
  border-bottom: 6px solid ${({ theme }) => theme.secondary};
  display: inline-block;
`;

const Contact = () => (
  <SectionWrapper>
    <SectionHeading>Let's get in touch</SectionHeading>
    <ContactLinks />
    <ContactForm />
  </SectionWrapper>
);

export default Contact;
