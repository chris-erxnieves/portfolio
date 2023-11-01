import React, { FC } from 'react'
import {
  Box,
  Text,
  Heading,
  HStack,
  Flex,
  useBreakpointValue,
  Center,
  Image,
} from '@chakra-ui/react'

interface AboutProps {
  darkBackground?: boolean
}

const AboutImage: FC = () => (
  <Image
    src="/running.webp"
    alt="Running at Great Sand Dunes National Park"
    maxHeight={{
      base: 450,
      xl: 350,
    }}
    borderRadius={5}
  />
)

export const About: FC<AboutProps> = ({ darkBackground }) => {
  const variant = useBreakpointValue(
    {
      base: 'within',
      lg: 'side',
    },
    { fallback: 'lg' },
  )

  return (
    <Box
      bg={darkBackground ? 'gray.100' : undefined}
      p="30px"
      borderTopRadius="10px"
    >
      <HStack>
        <Flex
          flexFlow="column"
          alignItems="flex-start"
        >
          <Heading
            size="lg"
            mb="12px"
          >
            About me
          </Heading>
          <Text mt="8px">Hey there—my name is Chris.</Text>
          <Text mt="20px">
            I'm a passionate full-stack software engineer with an emphasis
            currently on front-end development.
          </Text>
          <Text mt="20px">
            I'm originally from Missouri, but decided to come out to Colorado to
            be closer to nature. In my free-time, I enjoy going on hikes and
            runs, biking, drinking coffee, video gaming, and spending time with
            my wife, Karla, our cat (Zora), and dog (Dora). We went to the sand
            dunes this past fall, so I tried to run it (extremely difficult)!
          </Text>
          <Text mt="20px">
            I'm always on the lookout to collaborate with others that get as
            fired up as I do about awesome software. So if that's what you're
            looking for, continue reading to get to know me some more and see if
            we're a match!
          </Text>
          {variant === 'within' && (
            <Center
              mt="15px"
              w="100%"
            >
              <AboutImage />
            </Center>
          )}
        </Flex>
        {variant === 'side' && (
          <Flex
            w="100%"
            ml="30px"
          >
            <AboutImage />
          </Flex>
        )}
      </HStack>
    </Box>
  )
}
