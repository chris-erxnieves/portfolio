import React from 'react';
import PropTypes from 'prop-types';
import MediaQuery from 'react-responsive';
import styled from 'styled-components';
import { FaPaperPlane } from 'react-icons/fa';
import Sidebar from './sidebar';
import ExternalLink from './external-link';

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  padding: 1.45rem 1.0875rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.dark};
  box-shadow: 0 2px 3px -2px rgba(0, 0, 0, 0.2);
  z-index: 1;
`;

const NavigationList = styled.ul`
  list-style: none;
  display: flex;
  align-items: center;
  margin: 0;
`;

const NavigationListItem = styled.li`
  margin: 0;
  cursor: pointer;
  user-select: none;
  margin-left: 4rem;
  transition: 0.1s all ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.yellow};
  }
`;

const SiteHeader = styled.h1`
  cursor: pointer;
  user-select: none;
  position: relative;
  margin: 0;

  transition: 0.1s all ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.yellow};
  }
`;

const Header = ({ scrollFn, headerItems }) => (
  <HeaderWrapper>
    <SiteHeader onClick={() => scrollFn()}>CE</SiteHeader>
    <MediaQuery minWidth={750}>
      <NavigationList>
        {headerItems.map(({ ref, label }, i) => (
          <NavigationListItem onClick={() => scrollFn(ref)} key={i}>
            {label}
          </NavigationListItem>
        ))}
      </NavigationList>
      <ExternalLink text="Email me" href="mailto:cerxleben.fhs@gmail.com" iconSize="1.2rem" colored>
        <FaPaperPlane />
      </ExternalLink>
    </MediaQuery>
    <MediaQuery maxWidth={749}>
      <Sidebar headerItems={headerItems} scrollFn={scrollFn}></Sidebar>
    </MediaQuery>
  </HeaderWrapper>
);

Header.propTypes = {
  scrollFn: PropTypes.func.isRequired,
  headerItems: PropTypes.arrayOf(
    PropTypes.shape({
      ref: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Header;
