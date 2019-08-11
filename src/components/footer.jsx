import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FaHeart } from 'react-icons/fa';
import { IconContext } from 'react-icons';

const FooterWrapper = styled.footer`
  background-color: ${({ theme }) => theme.dark};
  padding: 2rem;
  display: flex;
  flex-flow: column;
  align-items: center;
`;

const BackToTop = styled.span`
  cursor: pointer;
  user-select: none;
  color: white;
  transition: 0.1s all ease-in-out;
  margin-bottom: 1rem;

  &:hover {
    color: ${({ theme }) => theme.yellow};
  }
`;

const style = {
  marginLeft: '.3rem',
  marginRight: '.3rem',
  position: 'relative',
  top: '3.5px',
};

const Footer = ({ scrollFn }) => (
  <FooterWrapper>
    <BackToTop onClick={() => scrollFn()}>Back to top</BackToTop>
    <span>
      Designed and developed with
      <IconContext.Provider value={{ style }}>
        <FaHeart />
      </IconContext.Provider>
      by Chris Erxleben.
    </span>
  </FooterWrapper>
);

Footer.propTypes = {
  scrollFn: PropTypes.func.isRequired,
};

export default Footer;
