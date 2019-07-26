import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import styled from 'styled-components';

const IntroSection = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 5rem 1rem 6rem 1rem;
`;

const IntroMessage = styled.h1`
  font-weight: normal;
`;

const IntroMessageRight = styled(IntroMessage)`
  text-align: right;
  margin: 0;
`;

const EmphasizedText = styled.strong`
  color: ${({ theme }) => theme.yellow};
  border-bottom: 2px solid ${({ theme }) => theme.yellow};
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
        Hi, I'm <EmphasizedText>{data.site.siteMetadata.author}</EmphasizedText>
      </IntroMessage>
      <IntroMessageRight>
        and I'm a <EmphasizedText>Software Engineer</EmphasizedText> located in St. Louis, MO.
      </IntroMessageRight>
    </IntroSection>
  );
};

export default Intro;
