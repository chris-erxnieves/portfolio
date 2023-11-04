import React, { FC, useState } from 'react'
import { Box, Button, Center, Heading, VStack } from '@chakra-ui/react'
import { WorkItem } from './components/WorkItem'

interface WorkProps {
  darkBackground?: boolean
}

const workHistory = [
  {
    company: 'Vivian Health',
    title: 'Senior Software Engineer',
    summary: `I'm currently part of the mobile team at Vivian Health, responsible for all things involving the company's Android and iOS app. In addition to working on the company's mobile app, I'm also the team's release engineer, lead our team ceremonies, and occasionally contribute to the company's web app and API. Our mobile app is a React Native app that uses Detox for E2E testing, and our web app is uses Next.js. On the API and database, we use Express and Postgres, using Sequelize as our ORM. In addition to Postgres, we also use Algolia to power our search functionality.`,
    from: 'December 2021',
    to: 'Present',
    techUsed: [
      'React Native',
      'Next.js',
      'React',
      'Typescript',
      'Redux',
      'Detox',
      'Jest',
      'Express',
      'Sequelize',
      'Postgres',
      'Algolia',
      'Git',
    ],
    url: 'https://www.vivian.com/',
  },
  {
    company: 'Charter Communications',
    title: 'Senior Software Engineer',
    summary: `While at Charter, I worked on the company's internal testing application, Photon. All teams at Charter use Photon for their regression testing with E2E automated and manual tests. Photon also provides our users with comprehensive reporting. We utilized React, Nexus, Typescript, AWS, Mongo, and GraphQL.`,
    from: 'February 2021',
    to: 'December 2021',
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
    url: 'https://maritzmotivation.com/culturenext/',
  },
]

export const Work: FC<WorkProps> = ({ darkBackground }) => {
  const [visibleWorkHistory, setVisibleWorkHistory] = useState(
    workHistory.slice(0, 3),
  )
  const [showingAll, setShowingAll] = useState(
    visibleWorkHistory.length === workHistory.length,
  )

  const handleShowAll = () => {
    setVisibleWorkHistory(workHistory)
    setShowingAll(true)
  }

  return (
    <Box
      bg={darkBackground ? 'gray.100' : undefined}
      p="30px"
    >
      <Heading
        size="lg"
        mb="20px"
      >
        Work
      </Heading>
      <VStack spacing="20px">
        {visibleWorkHistory.map((workHistoryItem, index) => (
          <WorkItem
            key={index}
            {...workHistoryItem}
          />
        ))}
      </VStack>
      {!showingAll && (
        <Center>
          <Button
            colorScheme="lightPink"
            onClick={handleShowAll}
            mt="15px"
            variant="outline"
            data-testid="show-all-button"
          >
            Show all
          </Button>
        </Center>
      )}
    </Box>
  )
}
