import * as React from 'react'
import { Box, Button, Center, Heading, VStack } from '@chakra-ui/react'
import { FunctionComponent, useState } from 'react'
import { WorkItem } from './work-item'

interface WorkProps {
  darkBackground?: boolean
}

const workHistory = [
  {
    company: 'Charter Communications',
    title: 'Senior Software Engineer',
    summary: `I’m currently working on Charters’ internal testing application, Photon. All teams at Charter are using Photon for their regression testing with E2E automated and manual tests. Photon also provides our users with comprehensive reporting. Currently, we’re utilizing React, Nexus, Typescript, AWS, Mongo, and GraphQL.`,
    from: 'February 2021',
    to: 'Present',
    techUsed: [
      'AWS',
      'React',
      'Typescript',
      'Apollo',
      'GraphQL',
      'Nexus JS',
      'Mongo DB',
      'Bit',
      'Material UI',
      'Git',
    ],
  },
  {
    company: 'Bayer',
    title: 'Senior Software Engineer',
    summary: `While at Bayer, I worked on a project that pilots various business models that have potential for disrupting the agriculture and climate industry. Most of the systems here leveraged AWS Lambda for back-end and React for front-end.`,
    from: 'October 2019',
    to: 'February 2021',
    techUsed: [
      'AWS',
      'React',
      'Typescript',
      'Redux',
      'Material UI',
      'Jest',
      'Postgres',
      'Git',
    ],
  },
  {
    company: 'Wells Fargo Advisors',
    title: 'Senior Software Engineer',
    summary: `Through my tenure at WFA, I worked on a team that was tasked with taking all of the company's internal legacy apps and porting over their capabilities to a new app that's built for the modern web.`,
    from: 'March 2019',
    to: 'October 2019',
    techUsed: [
      'Angular',
      'Typescript',
      'NgRx',
      'RxJS',
      'Less.js',
      'CSS3',
      'Bootstrap',
      'Express',
      'Node.js',
      'D3.js',
      'HTML5',
      'Git',
    ],
  },
  {
    company: 'Bullhorn',
    title: 'Mid-level Software Engineer',
    summary: `My role while at Bullhorn was to help maintain and create new functionality for the company's premiere ATS/CRM offering which allows users to streamline all aspects of their hiring process. I also contributed to the company's open-source components library, novo-elements.`,
    from: 'Nov 2017',
    to: 'Mar 2019',
    techUsed: [
      'Angular',
      'Typescript',
      'RxJS',
      'Jasmine',
      'Karma',
      'Protractor',
      'Nest.js',
      'Node.js',
      'Sass',
      'CSS3',
      'HTML5',
      'Git',
    ],
    url: 'https://www.bullhorn.com/crm/',
  },
  {
    company: 'Centene Corporation',
    title: 'Software Engineer',
    summary: `While at Centene, I was responsible for maintenance and feature-work for one of the company's internal applications-- TruCare Anywhere. It's an offline-first application that ran as an Android app where case workers were able to access and modify a members healthcare information and history.`,
    from: 'Sept 2017',
    to: 'Nov 2017',
    techUsed: [
      'AngularJS',
      'Ionic',
      'Jasmine',
      'Karma',
      'Sass',
      'CSS3',
      'HTML5',
      'Git',
    ],
  },
  {
    company: 'Maritz Motivation Solutions',
    title: 'Entry-level Software Engineer',
    summary: `Right after finishing college, I landed my first job in the field at Maritz, where I was tasked to flush out the functionality of the company's employee engagement solution, CultureNext.`,
    from: 'May 2016',
    to: 'Sept 2017',
    techUsed: [
      'AngularJS',
      'Less',
      'CSS3',
      'Pug.js',
      'HTML5',
      'Jasmine',
      'Karma',
    ],
    url: 'https://www.maritzcx.com/gb/lp/culture-next/',
  },
]

export const Work: FunctionComponent<WorkProps> = ({ darkBackground }) => {
  const [visibleWorkHistory, setVisibleWorkHistory] = useState(
    workHistory.slice(0, 3)
  )
  const [showingAll, setShowingAll] = useState(
    visibleWorkHistory.length === workHistory.length
  )

  const handleShowAll = () => {
    setVisibleWorkHistory(workHistory)
    setShowingAll(true)
  }

  return (
    <Box bg={darkBackground && 'gray.100'} p="30px">
      <Heading size="lg" mb="20px">
        Work
      </Heading>
      <VStack spacing="20px">
        {visibleWorkHistory.map((workHistoryItem, index) => (
          <WorkItem key={index} {...workHistoryItem} />
        ))}
      </VStack>
      {!showingAll && (
        <Center>
          <Button
            colorScheme="lightPink"
            onClick={handleShowAll}
            mt="15px"
            variant="outline"
          >
            Show all
          </Button>
        </Center>
      )}
    </Box>
  )
}
