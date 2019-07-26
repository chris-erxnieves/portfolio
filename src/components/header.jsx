import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MediaQuery from 'react-responsive';
import styled from 'styled-components';
import { FaPaperPlane } from 'react-icons/fa';
import { throttle } from 'lodash';
import Sidebar from './sidebar';
import ExternalLink from './external-link';

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  right: 0;
  left: 0;
  padding-left: 1.0875rem;
  padding-right: 1.0875rem;
  padding-top: ${({ atTopOfPage }) => (atTopOfPage ? '2rem' : '1.45rem')};
  padding-bottom: ${({ atTopOfPage }) => (atTopOfPage ? '2rem' : '1.45rem')};
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${({ atTopOfPage, theme }) => (atTopOfPage ? theme.lightGray : theme.dark)};
  box-shadow: ${({ atTopOfPage }) => (atTopOfPage ? null : '0 2px 3px -2px rgba(0, 0, 0, 0.2)')};
  z-index: 1;
  transition: all 0.2s ease-in-out;
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

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      atTopOfPage: window.scrollY === 0,
    };
  }

  componentDidMount = () => {
    window.addEventListener('scroll', throttle(() => this.setState({ atTopOfPage: window.scrollY === 0 }), 150));
  };

  render() {
    return (
      <HeaderWrapper atTopOfPage={this.state.atTopOfPage}>
        <SiteHeader onClick={() => this.props.scrollFn()}>CE</SiteHeader>
        <MediaQuery minWidth={750}>
          <NavigationList>
            {this.props.headerItems.map(({ ref, label }, i) => (
              <NavigationListItem onClick={() => this.props.scrollFn(ref)} key={i}>
                {label}
              </NavigationListItem>
            ))}
          </NavigationList>
          <ExternalLink text="Email me" href="mailto:cerxleben.fhs@gmail.com" iconSize="1.2rem" colored>
            <FaPaperPlane />
          </ExternalLink>
        </MediaQuery>
        <MediaQuery maxWidth={749}>
          <Sidebar headerItems={this.props.headerItems} scrollFn={this.props.scrollFn}></Sidebar>
        </MediaQuery>
      </HeaderWrapper>
    );
  }
}

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
