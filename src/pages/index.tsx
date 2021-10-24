import * as React from 'react'
import {
  About,
  Work,
  Showcase,
  Contact,
  SEO,
  Side,
  BackgroundBlobs,
  Footer, ThemeProvider,
} from '../components';
import { Box, Flex, SystemProps, useBreakpointValue } from '@chakra-ui/react'
import { FunctionComponent } from 'react'

const IndexPage: FunctionComponent = () => {
  const direction: SystemProps['flexDirection'] = useBreakpointValue({
    base: 'column',
    xl: 'row',
  })
  const mt: SystemProps['mt'] = useBreakpointValue({
    base: '20px',
    xl: '110px',
  })
  const heightOffset: SystemProps['mt'] = useBreakpointValue({
    base: 497,
    xl: 135,
  })
  const mb: SystemProps['mb'] = useBreakpointValue({
    base: '70px',
    xl: '25px',
  })

  return (
    <ThemeProvider>
      <SEO />
      <Flex direction={direction} justify="center" bg="darkGreen.500">
        <Side />
        <Box
          borderRadius="10px"
          bg="white"
          mt={mt}
          mb={mb}
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
