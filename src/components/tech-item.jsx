import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const TechItemLabel = styled.span`
  padding: 0.25rem 0.5rem;
  border: 2px solid ${({ theme }) => theme.dark};
  background-color: ${({ theme }) => theme.yellowLighten50};
  border-radius: 3px;
  font-family: 'Courier New', Courier, monospace;
  font-size: 0.85rem;
  transition: 0.1s all ease-in-out;

  &:hover {
    background-color: ${({ theme }) => theme.yellowLighten40};
  }
`;

const TechItem = ({ tech }) => <TechItemLabel>{tech}</TechItemLabel>;

TechItem.propTypes = {
  tech: PropTypes.string.isRequired,
};

export default TechItem;
