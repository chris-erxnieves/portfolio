import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import Header from './header';
import Footer from './footer';
import './layout.css';

const theme = {
  lightGray: '#929D9E',
  yellowLighten50: '#FFFFE6',
  yellowLighten40: '#FFFFCD',
  yellow: '#F3E367',
  yellowDarken10: '#DACA4E',
  dark: '#2C2E31',
  light: '#EAEAEA',
};

const Layout = ({ children, scrollFn, headerItems }) => (
  <ThemeProvider theme={theme}>
    <>
      <Header scrollFn={scrollFn} headerItems={headerItems} />
      <div style={{ marginTop: `5.35rem` }}>
        <main>{children}</main>
      </div>
      <Footer scrollFn={scrollFn} />
    </>
  </ThemeProvider>
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  scrollFn: PropTypes.func.isRequired,
  headerItems: PropTypes.arrayOf(
    PropTypes.shape({
      ref: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Layout;
