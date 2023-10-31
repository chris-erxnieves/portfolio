import React, { FC } from 'react'
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
  Center,
  Image,
  useToast,
} from '@chakra-ui/react'
import {
  DownloadIcon,
  GithubIcon,
  LinkedInIcon,
  LocationIcon,
  MailIcon,
} from './Icons'
import { graphql, useStaticQuery } from 'gatsby'

const EMAIL_ADDRESS = 'cerxnieves@gmail.com'

export const Side: FC = () => {
  const {
    allFile: {
      edges: [cv],
    },
  } = useStaticQuery(query)

  const toast = useToast()

  const handleEmailAddressClick = async () => {
    if ('clipboard' in navigator) {
      await navigator.clipboard.writeText(EMAIL_ADDRESS)
    } else {
      document.execCommand('copy', true, EMAIL_ADDRESS)
    }

    toast({
      title: 'Email address copied!',
      status: 'success',
      variant: 'subtle',
      duration: 1500,
    })
  }

  return (
    <VStack
      mt="110px"
      mx="20px"
      spacing="0"
    >
      <Center
        zIndex={3}
        height="0"
      >
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
        borderRadius={10}
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
          Chris <strong>Erxnieves</strong>
        </Heading>
        <HStack
          spacing="4px"
          justify="center"
        >
          <IconButton
            as={Link}
            aria-label="Github profile page"
            icon={
              <GithubIcon
                transition="color 0.05s ease-in-out"
                _groupHover={{ color: 'darkGreen.600' }}
              />
            }
            variant="ghost"
            href="https://github.com/chris-erxnieves"
            isExternal
            role="group"
          />
          <IconButton
            as={Link}
            aria-label="LinkedIn profile page"
            icon={
              <LinkedInIcon
                transition="color 0.05s ease-in-out"
                _groupHover={{ color: 'darkGreen.600' }}
              />
            }
            variant="ghost"
            href="https://www.linkedin.com/in/chris-erxnieves/"
            isExternal
            role="group"
          />
        </HStack>
        <Center>
          <Tag mt="8px">Full-Stack Software Engineer</Tag>
        </Center>
        <VStack
          align="left"
          my="20px"
        >
          <Flex textAlign="center">
            <LocationIcon mt="4px" />
            <Text ml="8px">Colorado Springs, Colorado</Text>
          </Flex>
          <Flex
            align="center"
            cursor="pointer"
            role="group"
            onClick={handleEmailAddressClick}
          >
            <MailIcon
              mt="2px"
              transition="color 0.05s ease-in-out"
              _groupHover={{ color: 'lightPink.600' }}
            />
            <Text
              ml="8px"
              userSelect="none"
              transition="color 0.05s ease-in-out"
              _groupHover={{ color: 'lightPink.600' }}
              data-testid="email-address"
            >
              {EMAIL_ADDRESS}
            </Text>
          </Flex>
        </VStack>
        <Button
          colorScheme="lightPink"
          color="white"
          width="full"
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
