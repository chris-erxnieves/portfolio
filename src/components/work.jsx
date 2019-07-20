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
    summary: `TODO`,
    from: 'Nov 2017',
    to: 'Mar 2019',
    techUsed: ['Angular', 'Typescript', 'RxJS', 'Jasmine', 'Karma', 'Protractor', 'Nest.js', 'Node.js', 'Sass', 'CSS3', 'HTML5', 'Git'],
    url: 'https://www.bullhorn.com/crm/',
  },
  {
    company: 'Centene',
    title: 'Software Engineer',
    summary: `TODO`,
    from: 'Sept 2017',
    to: 'Nov 2017',
    techUsed: ['AngularJS', 'Ionic', 'Jasmine', 'Karma', 'Sass', 'CSS3', 'HTML5', 'Git'],
  },
  {
    company: 'Maritz Motivation Solutions',
    title: 'Entry-level Software Engineer',
    summary: `TODO`,
    from: 'May 2016',
    to: 'Sept 2017',
    techUsed: ['AngularJS', 'Less', 'CSS3', 'Pug.js', 'HTML5', 'Jasmine', 'Karma'],
    url: 'https://www.maritzcx.com/gb/lp/culture-next/',
  },
];

const SectionWrapper = styled.section`
  max-width: 1200px;
  margin: 0 auto;
  padding: 3rem 1rem;
`;

const SectionHeading = styled.h1`
  margin: 0;
  border-bottom: 6px solid ${({ theme }) => theme.secondary};
  display: inline-block;
`;

const Work = () => (
  <SectionWrapper>
    <SectionHeading>Work</SectionHeading>
    {workHistory.map((w, i) => (
      <WorkItem info={w} key={i} />
    ))}
  </SectionWrapper>
);

export default Work;
