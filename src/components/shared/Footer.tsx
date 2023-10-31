import { Flex, SystemProps, Text, useBreakpointValue } from '@chakra-ui/react'
import { HeartIcon } from './Icons'
import React, { FC } from 'react'

export const Footer: FC = () => {
  const justifyContent: SystemProps['justifyContent'] = useBreakpointValue({
    base: 'center',
    xl: 'flex-start',
  })
  const mb: SystemProps['mb'] = useBreakpointValue({
    base: '23px',
    xl: '3px',
  })
  const ml: SystemProps['ml'] = useBreakpointValue({
    base: '0',
    xl: '10px',
  })

  return (
    <Flex
      position="absolute"
      top="0"
      right="0"
      bottom="0"
      left="0"
      overflow="hidden"
      alignItems="flex-end"
      justifyContent={justifyContent}
    >
      <Text
        display="flex"
        zIndex="2"
        fontSize="15px"
        mb={mb}
        ml={ml}
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
}
