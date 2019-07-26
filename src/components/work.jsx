import React from 'react';
import styled from 'styled-components';
import WorkItem from './work-item';

const workHistory = [
  {
    company: 'Wells Fargo Advisors',
    title: 'Senior Software Engineer',
    summary: `I'm currently working on a team that's tasked with taking all of the company's internal legacy apps and porting over their capabilities to a new app that's built for the modern web.`,
    from: 'March 2019',
    to: 'Present',
    techUsed: ['Angular', 'Typescript', 'NgRx', 'RxJS', 'Less.js', 'CSS3', 'Bootstrap', 'Express', 'Node.js', 'D3.js', 'HTML5', 'Git'],
  },
  {
    company: 'Bullhorn',
    title: 'Mid-level Software Engineer',
    summary: `My role while at Bullhorn was to help maintain and create new functionality for the company's premiere ATS/CRM offering which allows users to streamline all aspects of their hiring process. I also contributed to the company's open-source components library, novo-elements.`,
    from: 'Nov 2017',
    to: 'Mar 2019',
    techUsed: ['Angular', 'Typescript', 'RxJS', 'Jasmine', 'Karma', 'Protractor', 'Nest.js', 'Node.js', 'Sass', 'CSS3', 'HTML5', 'Git'],
    url: 'https://www.bullhorn.com/crm/',
  },
  {
    company: 'Centene Corporation',
    title: 'Software Engineer',
    summary: `While at Centene, I was responsible for maintenance and feature-work for one of the company's internal applications, TruCare Anywhere; An offline-first application that ran as an Android app where case workers were able to access and modify a members healthcare information and history.`,
    from: 'Sept 2017',
    to: 'Nov 2017',
    techUsed: ['AngularJS', 'Ionic', 'Jasmine', 'Karma', 'Sass', 'CSS3', 'HTML5', 'Git'],
  },
  {
    company: 'Maritz Motivation Solutions',
    title: 'Entry-level Software Engineer',
    summary: `Right after finishing college I landed my first job in the field at Maritz, where I was tasked to flush out the functionality of the company's employee engagement solution, CultureNext.`,
    from: 'May 2016',
    to: 'Sept 2017',
    techUsed: ['AngularJS', 'Less', 'CSS3', 'Pug.js', 'HTML5', 'Jasmine', 'Karma'],
    url: 'https://www.maritzcx.com/gb/lp/culture-next/',
  },
];

const OuterSectionWrapper = styled.section`
  background-color: white;
  color: ${({ theme }) => theme.dark};
`;

const InnerSectionWrapper = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 1rem;
`;

const SectionHeading = styled.h1`
  margin: 0;
  display: inline-block;
`;

const Work = () => (
  <OuterSectionWrapper>
    <InnerSectionWrapper>
      <SectionHeading>Work</SectionHeading>
      {workHistory.map((w, i) => (
        <WorkItem info={w} key={i} />
      ))}
    </InnerSectionWrapper>
  </OuterSectionWrapper>
);

export default Work;
