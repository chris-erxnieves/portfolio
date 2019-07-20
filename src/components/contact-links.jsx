import React from 'react';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';
import styled from 'styled-components';
import ExternalLink from './external-link';

const ContactLinksWrapper = styled.div`
  margin-top: 1.5rem;
`;

const ExternalLinkSpacer = styled.div`
  display: inline-block;
  margin-left: 0.75rem;
`;

const ContactLinks = () => (
  <ContactLinksWrapper>
    <ExternalLink href="https://www.linkedin.com/in/christopher-erxleben/" iconSize="2rem">
      <FaLinkedin />
    </ExternalLink>
    <ExternalLinkSpacer>
      <ExternalLink href="https://github.com/chris-erxleben" iconSize="2rem">
        <FaGithub />
      </ExternalLink>
    </ExternalLinkSpacer>
    <ExternalLinkSpacer>
      <ExternalLink href="mailto:cerxleben.fhs@gmail.com" iconSize="2rem">
        <FaEnvelope />
      </ExternalLink>
    </ExternalLinkSpacer>
  </ContactLinksWrapper>
);

export default ContactLinks;
