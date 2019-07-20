import React from 'react';
import PropTypes from 'prop-types';
import { useStaticQuery, graphql } from 'gatsby';
import MediaQuery from 'react-responsive';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  padding: 1.45rem 1.0875rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ theme }) => theme.accent};
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
  margin-left: 1rem;
  border-bottom: 6px solid ${({ theme }) => theme.accent};
  transition: all 0.15s ease-in-out;
  position: relative;
  top: 6px;

  &:hover {
    border-bottom-color: ${({ theme }) => theme.secondary};
  }
`;

const SiteHeader = styled.h1`
  cursor: pointer;
  user-select: none;
  position: relative;
  border-bottom: 6px solid ${({ theme }) => theme.accent};
  transition: all 0.15s ease-in-out;
  position: relative;
  top: 6px;
  margin: 0;

  &:hover {
    border-bottom-color: ${({ theme }) => theme.secondary};
  }
`;

const Header = ({ scrollFn, headerItems }) => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  return (
    <HeaderWrapper>
      <SiteHeader onClick={() => scrollFn()}>{data.site.siteMetadata.title}</SiteHeader>
      <MediaQuery minWidth={750}>
        <NavigationList>
          {headerItems.map(({ ref, label }, i) => (
            <NavigationListItem onClick={() => scrollFn(ref)} key={i}>
              {label}
            </NavigationListItem>
          ))}
        </NavigationList>
      </MediaQuery>
      <MediaQuery maxWidth={749}>
        <span>TODO</span>
      </MediaQuery>
    </HeaderWrapper>
  );
};

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
