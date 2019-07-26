import React from 'react';
import styled from 'styled-components';
import ShowcaseItem from './showcase-item';
import PortfolioImage from './portfolio-image';

const showcaseItems = [
  {
    title: 'My Portfolio',
    year: '2019',
    summary: `I didn't have a place to showcase my life's work to the rest of the world, so I made one! I really wanted to do something with React, which is what led me to discovering Gatsby: a static site generator that's built on top of React.`,
    techUsed: ['React.js', 'Gatsby', 'GraphQL', 'styled-components', 'AWS Amplify'],
    sourceLink: 'https://github.com/chris-erxleben/portfolio',
    sourceCodeUrl: 'https://github.com/chris-erxleben/portfolio/',
  },
];

const OuterSectionWrapper = styled.section`
  background-color: ${({ theme }) => theme.light};
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

const Showcase = () => (
  <OuterSectionWrapper>
    <InnerSectionWrapper>
      <SectionHeading>Showcase</SectionHeading>
      {showcaseItems.map((item, i) => (
        <ShowcaseItem info={item} key={i}>
          {(function() {
            switch (item.title) {
              case 'My Portfolio':
                return <PortfolioImage />;
              default:
                return null;
            }
          })()}
        </ShowcaseItem>
      ))}
    </InnerSectionWrapper>
  </OuterSectionWrapper>
);

export default Showcase;
