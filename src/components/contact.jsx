import React from 'react';
import styled from 'styled-components';
import ContactForm from './contact-form';
import ContactLinks from './contact-links';

const OuterSectionWrapper = styled.section`
  background-color: white;
  color: ${({ theme }) => theme.dark};
`;

const InnerSectionWrapper = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 1rem;
`;

const SectionHeading = styled.h1`
  margin: 0;
  display: inline-block;
`;

const Contact = () => (
  <OuterSectionWrapper>
    <InnerSectionWrapper>
      <SectionHeading>Let's get in touch</SectionHeading>
      <ContactLinks />
      <ContactForm />
    </InnerSectionWrapper>
  </OuterSectionWrapper>
);

export default Contact;
