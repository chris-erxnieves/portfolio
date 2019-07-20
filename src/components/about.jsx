import React from 'react';
import styled from 'styled-components';

const OuterSection = styled.section`
  background-color: ${({ theme }) => theme.secondary};
`;

const InnerSection = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 1rem;
`;

const SectionHeading = styled.h1`
  margin: 0;
  border-bottom: 6px solid ${({ theme }) => theme.accent};
  display: inline-block;
  margin-bottom: 1.5rem;
`;

const AboutParagraph = styled.p`
  font-size: 1.2rem;
`;

const About = () => (
  <OuterSection>
    <InnerSection>
      <SectionHeading>About me</SectionHeading>
      <AboutParagraph>Hey there-my name is Chris.</AboutParagraph>
      <AboutParagraph>I'm a passionate full-stack developer with an emphasis currently on front-end development.</AboutParagraph>
      <AboutParagraph>
        I'm always on the lookout to collaborate with others that get as fired up as I do about great software; So if that's what you're looking for, continue
        reading to get to know me better and see if we're a match.
      </AboutParagraph>
    </InnerSection>
  </OuterSection>
);

export default About;
