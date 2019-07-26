import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { IconContext } from 'react-icons';

const Link = styled.a`
  text-decoration: none;
  font-size: 1.1rem;
  color: ${({ colored, theme }) => (colored ? theme.yellow : theme.dark)};
  transition: all 0.1s ease-in-out;
  display: inline-flex;
  align-items: center;

  &:hover {
    color: ${({ colored, theme }) => (colored ? theme.yellowDarken10 : 'black')};
  }
`;

const Text = styled.span`
  margin-left: 0.4rem;
`;

const ExternalLink = ({ text, href, fontSize, iconSize, colored, children }) => (
  <Link href={href} target={href.startsWith('mailto') ? null : '_blank'} rel="noopener noreferrer" colored={colored}>
    <IconContext.Provider value={{ size: iconSize }}>{children}</IconContext.Provider>
    {text ? <Text style={{ fontSize }}>{text}</Text> : null}
  </Link>
);

ExternalLink.propTypes = {
  href: PropTypes.string.isRequired,
  text: PropTypes.string,
  fontSize: PropTypes.string,
  iconSize: PropTypes.string,
  colored: PropTypes.bool,
};

ExternalLink.defaultProps = {
  fontSize: '1.1rem',
  iconSize: '1.5rem',
  colored: false,
};

export default ExternalLink;
