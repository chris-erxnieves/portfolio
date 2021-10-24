import * as React from 'react'
import {
  Box,
  Text,
  Heading,
  HStack,
  Flex,
  useBreakpointValue,
  Center, Image, SystemProps,
} from '@chakra-ui/react';
import { FunctionComponent } from 'react'

interface AboutProps {
  darkBackground?: boolean
}

const AboutImage: FunctionComponent = () => {
  const maxHeight: SystemProps['height'] = useBreakpointValue({
    base: 450,
    xl: 350,
  })

  return (
    <Image
      src={`/ukelele.jpg`}
      alt="Playing the ukelele"
      maxHeight={maxHeight}
      borderRadius="5px"
    />
  )
}

export const About: FunctionComponent<AboutProps> = ({ darkBackground }) => {
  const variant: 'within' | 'side' = useBreakpointValue({
    base: 'within',
    lg: 'side',
  })

  return (
    <Box bg={darkBackground && 'gray.100'} p="30px" borderTopRadius="10px">
      <HStack>
        <Flex flexFlow="column" alignItems="flex-start">
          <Heading size="lg" mb="12px">
            About me
          </Heading>
          <Text mt="8px">Hey there—my name is Chris.</Text>
          <Text mt="20px">
            I'm a passionate full-stack software engineer with an emphasis
            currently on front-end development.
          </Text>
          <Text mt="20px">
            I'm originally from Missouri, but decided to come out to Colorado to
            be closer to nature. In my free-time, I enjoy going on hikes,
            biking, drinking coffee, playing my uke, video gaming, and spending
            time with my love, Karla, our cat (Zora), and dog (Dora). Here's a
            picture of me with my baby (uke)!
          </Text>
          <Text mt="20px">
            I'm always on the lookout to collaborate with others that get as
            fired up as I do about awesome software. So if that's what you're
            looking for, continue reading to get to know me some more and see if
            we're a match!
          </Text>
          {variant === 'within' && (
            <Center mt="15px" w="100%">
              <AboutImage />
            </Center>
          )}
        </Flex>
        {variant === 'side' && <AboutImage />}
      </HStack>
    </Box>
  )
}
