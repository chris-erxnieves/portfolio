import React, { FC } from 'react'
import { Box, Flex, SystemProps, useBreakpointValue } from '@chakra-ui/react'
import { ThemeProvider } from '../components/shared/ThemeProvider'
import { SEO } from '../components/shared/SEO'
import { Side } from '../components/shared/Side'
import { About } from '../components/About'
import { Work } from '../components/work/Work'
import { Showcase } from '../components/showcase/Showcase'
import { Contact } from '../components/Contact'
import { BackgroundBlobs } from '../components/shared/BackgroundBlobs'
import { Footer } from '../components/shared/Footer'

const IndexPage: FC = () => {
  const heightOffset: SystemProps['mt'] = useBreakpointValue(
    {
      base: 497,
      xl: 135,
    },
    { fallback: 'xl' },
  )

  return (
    <ThemeProvider>
      <SEO />
      <Flex
        direction={{
          base: 'column',
          xl: 'row',
        }}
        justify="center"
        bg="darkGreen.500"
      >
        <Side />
        <Box
          borderRadius={10}
          bg="white"
          mt={{
            base: '20px',
            xl: '110px',
          }}
          mb={{
            base: '70px',
            xl: '25px',
          }}
          mx="20px"
          maxW="1200px"
          h={{ base: 'auto', xl: `calc(100vh - ${heightOffset}px)` }}
          overflowY="auto"
          zIndex={2}
          boxShadow="md"
        >
          <About />
          <Work darkBackground />
          <Showcase />
          <Contact darkBackground />
        </Box>
        <BackgroundBlobs />
        <Footer />
      </Flex>
    </ThemeProvider>
  )
}

export default IndexPage
