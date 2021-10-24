import * as React from 'react'
import { FunctionComponent } from 'react'
import {
  Box,
  Heading,
  IconButton,
  HStack,
  VStack,
  Text,
  Button,
  Flex,
  Link,
  Tag,
  Center, Image,
} from '@chakra-ui/react';
import {
  DownloadIcon,
  GithubIcon,
  LinkedInIcon,
  LocationIcon,
  MailIcon,
} from './icons'
import { graphql, useStaticQuery } from 'gatsby'

export const Side: FunctionComponent = () => {
  const {
    allFile: {
      edges: [cv],
    },
  } = useStaticQuery(query)

  return (
    <VStack mt="110px" mx="20px" spacing="0">
      <Center zIndex={3} height="0">
        <Image
          src={`/profile.jpg`}
          alt="Profile picture"
          boxSize="150px"
          objectFit="cover"
          borderRadius="20px"
        />
      </Center>
      <Box
        px="20px"
        pb="20px"
        pt="80px"
        w={{ base: 'calc(100vw - 40px)', xl: '275px' }}
        h="max-content"
        bg="white"
        borderRadius="10px"
        zIndex="2"
        boxShadow="md"
      >
        <Heading
          size="lg"
          fontWeight="normal"
          textAlign="center"
          mt="4px"
          mb="8px"
        >
          Chris <strong>Erxleben</strong>
        </Heading>
        <HStack spacing="4px" justify="center">
          <IconButton
            as={Link}
            aria-label="Github profile page"
            icon={<GithubIcon _groupHover={{ color: 'darkGreen.600' }} />}
            variant="ghost"
            href="https://github.com/chris-erxleben"
            isExternal
            role="group"
          />
          <IconButton
            as={Link}
            aria-label="LinkedIn profile page"
            icon={<LinkedInIcon _groupHover={{ color: 'darkGreen.600' }} />}
            variant="ghost"
            href="https://www.linkedin.com/in/christopher-erxleben/"
            isExternal
            role="group"
          />
        </HStack>
        <Center>
          <Tag mt="8px">Full-Stack Software Engineer</Tag>
        </Center>
        <VStack align="left" my="20px">
          <Flex textAlign="center">
            <LocationIcon />
            <Text ml="8px">Denver, Colorado</Text>
          </Flex>
          <Flex align="center">
            <MailIcon />
            <Text ml="8px">cerxleben.fhs@gmail.com</Text>
          </Flex>
        </VStack>
        <Button
          colorScheme="lightPink"
          color="white"
          isFullWidth
          leftIcon={<DownloadIcon />}
          as={Link}
          href={cv.node.publicURL}
          isExternal
        >
          Download CV
        </Button>
      </Box>
    </VStack>
  )
}

const query = graphql`
  {
    allFile(filter: { name: { eq: "cv" }, extension: { eq: "pdf" } }) {
      edges {
        node {
          publicURL
        }
      }
    }
  }
`
