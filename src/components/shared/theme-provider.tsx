import * as React from 'react'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import { FunctionComponent } from 'react'
import '@fontsource/raleway/400.css'
import '@fontsource/open-sans/500.css'
import '@fontsource/open-sans/700.css'

const theme = extendTheme({
  fonts: {
    heading: 'Open Sans',
    body: 'Raleway',
  },
  colors: {
    lightPink: {
      50: '#FEF3F3',
      100: '#FCE6E8',
      200: '#FACDD0',
      300: '#F7AEB3',
      400: '#F4959C',
      500: '#F2828A',
      600: '#CE6F75',
      700: '#9D555A',
      800: '#613437',
      900: '#301A1C',
    },
    darkPink: {
      50: '#F9F4F5',
      100: '#F3E8EC',
      200: '#E7D1D8',
      300: '#D8B5C0',
      400: '#CC9EAD',
      500: '#C38D9E',
      600: '#A67886',
      700: '#7F5C67',
      800: '#4E383F',
      900: '#271C20',
    },
    yellow: {
      50: '#FDF6F2',
      100: '#FAEEE5',
      200: '#F6DCCB',
      300: '#F0C6AA',
      400: '#EBB590',
      500: '#E8A87C',
      600: '#C58F69',
      700: '#976D51',
      800: '#5D4332',
      900: '#2E2219',
    },
    orange: {
      50: '#FCF2EF',
      100: '#F9E5DF',
      200: '#F3CBBF',
      300: '#ECAB98',
      400: '#E69178',
      500: '#E27D60',
      600: '#C06A52',
      700: '#93513E',
      800: '#5A3226',
      900: '#2D1913',
    },
    lightGreen: {
      50: '#F3FAFA',
      100: '#E7F5F4',
      200: '#CEEBE9',
      300: '#B0DFDB',
      400: '#97D5D0',
      500: '#85CDC8',
      600: '#71AEAA',
      700: '#568582',
      800: '#355250',
      900: '#1B2928',
    },
    darkGreen: {
      50: '#ECF7F6',
      100: '#D9F0ED',
      200: '#B3E1DA',
      300: '#84CEC3',
      400: '#5EBEB1',
      500: '#41B3A3',
      600: '#37988B',
      700: '#2A746A',
      800: '#1A4841',
      900: '#0D2421',
    },
  },
})

export const ThemeProvider: FunctionComponent = ({ children }) => (
  <ChakraProvider theme={theme}>{children}</ChakraProvider>
)
