import { Flex, SystemProps, Text, useBreakpointValue } from '@chakra-ui/react'
import { HeartIcon } from './icons'
import * as React from 'react'
import { FunctionComponent } from 'react'

export const Footer: FunctionComponent = () => {
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
      <Text zIndex="2" fontSize="15px" mb={mb} ml={ml}>
        Designed and developed with <HeartIcon color="#FACDD0" mb="3px" /> by
        Chris Erxleben
      </Text>
    </Flex>
  )
}
