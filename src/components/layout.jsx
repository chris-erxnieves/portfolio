import React from 'react';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import Header from './header';
import './layout.css';

const theme = {
  primary: '#9AEFCF',
  'primary-darken-20': '#67BC9C',
  'primary-darken-40': '#348969',
  'primary-darken-60': '#015636',
  'primary-darken-80': '#002303',
  secondary: '#EED3FB',
  'secondary-darken-20': '#BBA0C8',
  'secondary-darken-40': '#886D95',
  'secondary-darken-60': '#553A62',
  'secondary-darken-80': '#22072F',
  accent: '#FFF1BB',
  'accent-darken-20': '#CCBE88',
  'accent-darken-40': '#998B55',
  'accent-darken-60': '#665822',
  'accent-darken-80': '#332500',
  light: '#FFFFFF',
  dark: '#363636',
  disabled: '#D7D7D7',
};

const Layout = ({ children, scrollFn, headerItems }) => (
  <ThemeProvider theme={theme}>
    <>
      <Header scrollFn={scrollFn} headerItems={headerItems} />
      <div style={{ margin: `8rem auto 0 auto` }}>
        <main>{children}</main>
      </div>
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
