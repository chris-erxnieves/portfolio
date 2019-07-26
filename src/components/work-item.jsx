import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FaGlobeAmericas } from 'react-icons/fa';
import TechItem from './tech-item';
import ExternalLink from './external-link';

const Section = styled.section`
  padding: 1rem;
  margin-top: 1rem;
  background-color: ${({ theme }) => theme.light};
  box-shadow: 2px 3px 4px -2px rgba(0, 0, 0, 0.2);
`;

const Company = styled.h2`
  display: inline-block;
  margin-bottom: 0.5rem;
`;

const Title = styled.h3`
  font-style: italic;
  margin-top: 0;
  margin-bottom: 1rem;
`;

const Dates = styled.h4`
  margin-bottom: 1rem;
`;

const Summary = styled.p`
  margin-bottom: 1rem;
`;

const TechUsedLabel = styled.span`
  font-weight: bold;
  display: block;
  margin-bottom: 0.2rem;
`;

const Tech = styled.div`
  display: inline-block;
  margin-right: 0.5rem;
  margin-bottom: 0.5rem;
`;

const WorkItem = ({ info }) => (
  <Section>
    <Company>{info.company}</Company>
    <Title>{info.title}</Title>
    <Dates>
      {info.from} - {info.to}
    </Dates>
    <Summary>{info.summary}</Summary>
    <div style={{ marginBottom: info.url ? `.75rem` : `0` }}>
      <TechUsedLabel>Tech used</TechUsedLabel>
      {info.techUsed.map((t, i) => (
        <Tech key={i}>
          <TechItem tech={t} />
        </Tech>
      ))}
    </div>
    {info.url ? (
      <ExternalLink text="View site" href={info.url} colored>
        <FaGlobeAmericas />
      </ExternalLink>
    ) : null}
  </Section>
);

WorkItem.propTypes = {
  info: PropTypes.shape({
    company: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    summary: PropTypes.string.isRequired,
    from: PropTypes.string.isRequired,
    to: PropTypes.string.isRequired,
    techUsed: PropTypes.arrayOf(PropTypes.string).isRequired,
    url: PropTypes.string,
  }).isRequired,
};

export default WorkItem;
