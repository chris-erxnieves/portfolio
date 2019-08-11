import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FaCode } from 'react-icons/fa';
import MediaQuery from 'react-responsive';
import Fade from 'react-reveal/Fade';
import TechItem from './tech-item';
import ExternalLink from './external-link';

const SectionWrapper = styled.section`
  padding: 1rem;
  margin-top: 1rem;
  background-color: white;
  box-shadow: 2px 3px 4px -2px rgba(0, 0, 0, 0.2);
  display: flex;
`;

const ImageWrapper = styled.div`
  min-width: 450px;
  margin-left: 1.5rem;
  overflow: hidden;
  border-radius: 3px;
`;

const Tech = styled.div`
  display: inline-block;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
`;

const TitleYearWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const Title = styled.h2``;

const Year = styled.h4`
  font-size: 1.2rem;
  margin-left: 0.5rem;
  color: ${({ theme }) => theme.secondary};
`;

const TechUsedLabel = styled.span`
  font-weight: bold;
  display: block;
  margin-bottom: 0.2rem;
`;

const Summary = styled.p`
  margin-bottom: 1rem;
`;

const ShowcaseItem = ({ info, children }) => (
  <Fade bottom>
    <SectionWrapper>
      <div>
        <TitleYearWrapper>
          <Title>{info.title}</Title>
          <Year>- {info.year}</Year>
        </TitleYearWrapper>
        <Summary>{info.summary}</Summary>
        <div style={{ marginBottom: info.sourceCodeUrl ? `.75rem` : `0` }}>
          <TechUsedLabel>Tech used</TechUsedLabel>
          {info.techUsed.map((t, i) => (
            <Tech key={i}>
              <TechItem tech={t} />
            </Tech>
          ))}
        </div>
        {info.sourceCodeUrl ? (
          <ExternalLink text="View code" href={info.sourceCodeUrl} colored>
            <FaCode />
          </ExternalLink>
        ) : null}
      </div>
      <MediaQuery minWidth={900}>
        <ImageWrapper>{children}</ImageWrapper>
      </MediaQuery>
    </SectionWrapper>
  </Fade>
);

ShowcaseItem.propTypes = {
  info: PropTypes.shape({
    title: PropTypes.string.isRequired,
    year: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    techUsed: PropTypes.arrayOf(PropTypes.string).isRequired,
    sourceLink: PropTypes.string.isRequired,
  }).isRequired,
};

export default ShowcaseItem;
