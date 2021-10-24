import * as React from 'react'
import { Box, Button, Heading, VStack } from '@chakra-ui/react'
import { FunctionComponent, useState } from 'react'
import { ShowcaseItem } from './showcase-item'

interface ShowcaseProps {
  darkBackground?: boolean
}

const showcaseItems = [
  {
    title: 'Portfolio V2',
    year: '2021',
    summary: `It's been a couple of years since I've last updated my portfolio website, so I decided to re-approach it. I really enjoy using React and Gatsby for simple static websites, so I used those again. This time around, I did everything in typescript instead of javascript, and also tried a new component library, Chakra. I also used Framer Motion a little to animate the colorful blobs in the background.`,
    techUsed: [
      'React',
      'Gatsby',
      'Chakra',
      'AWS',
      'Framer Motion',
    ],
    sourceCodeUrl: 'https://github.com/chris-erxleben/portfolio/',
    imageNameAndExtension: 'portfolio-v2.webp',
  },
  {
    title: 'Portfolio V1',
    year: '2019',
    summary: `I didn't have a place to showcase my life's work to the rest of the world, so I made one! I really wanted to do something with React, which is what led me to discovering Gatsby: a static site generator that's built on top of React.`,
    techUsed: [
      'React',
      'Gatsby',
      'AWS',
      'styled-components',
    ],
    sourceCodeUrl: 'https://github.com/chris-erxleben/portfolio/',
    imageNameAndExtension: 'portfolio-v1.webp',
  },
]

export const Showcase: FunctionComponent<ShowcaseProps> = ({
  darkBackground,
}) => {
  const [visibleShowcaseItems, setVisibleShowcaseItems] = useState(
    showcaseItems.slice(0, 3)
  )
  const [showingAll, setShowingAll] = useState(
    visibleShowcaseItems.length === showcaseItems.length
  )

  const handleShowAll = () => {
    setVisibleShowcaseItems(showcaseItems)
    setShowingAll(true)
  }

  return (
    <Box bg={darkBackground && 'gray.100'} p="30px">
      <Heading size="lg" mb="20px">
        Showcase
      </Heading>
      <VStack spacing="20px">
        {visibleShowcaseItems.map((showcaseItem, index) => (
          <ShowcaseItem key={index} {...showcaseItem} />
        ))}
      </VStack>
      {!showingAll && (
        <Button colorScheme="lightPink" onClick={handleShowAll}>
          Show all
        </Button>
      )}
    </Box>
  )
}
