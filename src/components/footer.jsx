import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  background-color: ${({ theme }) => theme.dark};
  padding: 1rem 2rem;
`;

const Footer = () => <FooterWrapper>TODO: Footer</FooterWrapper>;

export default Footer;
