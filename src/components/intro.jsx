import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

const IntroSection = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem 3rem 1rem;
`;

const IntroMessage = styled.h1`
  font-weight: normal;
`;

const IntroMessageRight = styled(IntroMessage)`
  text-align: right;
  margin: 0;
`;

const EmphasizedTextSecondary = styled.strong`
  border-bottom: 6px solid ${({ theme }) => theme.secondary};
`;

const EmphasizedTextAccent = styled(EmphasizedTextSecondary)`
  border-bottom-color: ${({ theme }) => theme.accent};
`;

const Intro = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          author
        }
      }
    }
  `);
  return (
    <IntroSection>
      <IntroMessage>
        Hi, I'm <EmphasizedTextSecondary>{data.site.siteMetadata.author}</EmphasizedTextSecondary>
      </IntroMessage>
      <IntroMessageRight>
        and I'm a <EmphasizedTextAccent>Software Engineer</EmphasizedTextAccent> located in St. Louis, MO.
      </IntroMessageRight>
    </IntroSection>
  );
};

export default Intro;
