import React, { FC } from 'react'
import {
  Box,
  Button,
  Center,
  Heading,
  HStack,
  Image,
  Link,
  SystemProps,
  Tag,
  Text,
  useBreakpointValue,
  Wrap,
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

const ShowcaseImage: FC<ShowcaseImageProps> = ({ imageNameAndExtension }) => {
  const maxHeight: SystemProps['maxHeight'] = useBreakpointValue(
    {
      base: '300px',
      xl: 'auto',
    },
    { ssr: false },
  )
  const maxWidth: SystemProps['maxWidth'] = useBreakpointValue(
    {
      base: 'auto',
      xl: '450px',
    },
    { ssr: false },
  )

  return (
    <Image
      src={`/${imageNameAndExtension}`}
      alt="Showcase image"
      maxHeight={maxHeight}
      maxWidth={maxWidth}
      borderRadius="5px"
    />
  )
}

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
    { ssr: false },
  )

  return (
    <HStack
      bg="gray.100"
      borderRadius="10px"
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
