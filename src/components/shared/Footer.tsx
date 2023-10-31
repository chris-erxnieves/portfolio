import { Flex, Text } from '@chakra-ui/react'
import { HeartIcon } from './Icons'
import React, { FC } from 'react'

export const Footer: FC = () => (
  <Flex
    position="absolute"
    top="0"
    right="0"
    bottom="0"
    left="0"
    overflow="hidden"
    alignItems="flex-end"
    justifyContent={{
      base: 'center',
      xl: 'flex-start',
    }}
  >
    <Text
      display="flex"
      zIndex="2"
      fontSize="15px"
      mb={{
        base: '23px',
        xl: '3px',
      }}
      ml={{
        base: '0',
        xl: '10px',
      }}
    >
      Designed and developed with&nbsp;
      <HeartIcon
        color="#FACDD0"
        mt="3px"
      />
      &nbsp;by Chris Erxnieves
    </Text>
  </Flex>
)
