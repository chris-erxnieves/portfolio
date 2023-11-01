import React, { FC } from 'react'
import {
  Box,
  Button,
  Center,
  Heading,
  HStack,
  Link,
  Tag,
  Text,
  useBreakpointValue,
  Wrap,
  Image,
} from '@chakra-ui/react'
import { CalendarIcon, CodeIcon } from '../../shared/Icons'

interface ShowcaseItemProps {
  title: string
  year: string
  summary: string
  techUsed: Array<string>
  sourceCodeUrl: string
  imageNameAndExtension: string
}

interface ShowcaseImageProps {
  imageNameAndExtension: string
}

const ShowcaseImage: FC<ShowcaseImageProps> = ({ imageNameAndExtension }) => (
  <Image
    src={`/${imageNameAndExtension}`}
    alt="Showcase image"
    maxHeight={{
      base: '300px',
      xl: 'auto',
    }}
    maxWidth={{
      base: 'auto',
      xl: '450px',
    }}
    borderRadius={5}
  />
)

export const ShowcaseItem: FC<ShowcaseItemProps> = ({
  title,
  year,
  summary,
  techUsed,
  sourceCodeUrl,
  imageNameAndExtension,
}) => {
  const variant = useBreakpointValue(
    {
      base: 'within',
      xl: 'side',
    },
    { fallback: 'xl' },
  )

  return (
    <HStack
      bg="gray.100"
      borderRadius={10}
      p="20px"
    >
      <Box>
        <Heading fontSize="23px">{title}</Heading>
        <Text
          display="flex"
          mt="10px"
        >
          <CalendarIcon
            mr="7px"
            mt="4px"
          />
          {year}
        </Text>
        {imageNameAndExtension && variant === 'within' && (
          <Center my="15px">
            <ShowcaseImage imageNameAndExtension={imageNameAndExtension} />
          </Center>
        )}
        <Text mt="10px">{summary}</Text>
        <Wrap mt="15px">
          {techUsed.map((techUsedItem, index) => (
            <Tag
              key={index}
              colorScheme="orange"
            >
              {techUsedItem}
            </Tag>
          ))}
        </Wrap>
        {sourceCodeUrl && (
          <Button
            as={Link}
            isExternal
            href={sourceCodeUrl}
            leftIcon={<CodeIcon />}
            colorScheme="lightPink"
            mt="15px"
            size="sm"
          >
            View code
          </Button>
        )}
      </Box>
      {imageNameAndExtension && variant === 'side' && (
        <ShowcaseImage imageNameAndExtension={imageNameAndExtension} />
      )}
    </HStack>
  )
}
