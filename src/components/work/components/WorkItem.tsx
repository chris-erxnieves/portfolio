import React, { FC } from 'react'
import { Box, Button, Heading, Link, Tag, Text, Wrap } from '@chakra-ui/react'
import { BriefcaseIcon, CalendarIcon, CodeIcon } from '../../shared/Icons'

interface WorkItemProps {
  company: string
  title: string
  summary: string
  from: string
  to: string
  url?: string
  techUsed: Array<string>
}

export const WorkItem: FC<WorkItemProps> = ({
  company,
  title,
  from,
  to,
  summary,
  techUsed,
  url,
}) => (
  <Box
    bg="white"
    borderRadius={10}
    p="20px"
    data-testid="work-item"
  >
    <Heading fontSize="23px">{company}</Heading>
    <Text
      mt="10px"
      display="flex"
    >
      <BriefcaseIcon
        mr="7px"
        mt="4px"
      />
      {title}
    </Text>
    <Text
      mt="5px"
      display="flex"
    >
      <CalendarIcon
        mr="7px"
        mt="3px"
      />
      {from} - {to}
    </Text>
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
    {url && (
      <Button
        as={Link}
        isExternal
        href={url}
        leftIcon={<CodeIcon />}
        colorScheme="lightPink"
        mt="15px"
        size="sm"
      >
        View site
      </Button>
    )}
  </Box>
)
