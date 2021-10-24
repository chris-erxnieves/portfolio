import * as React from 'react'
import { FunctionComponent } from 'react'
import { motion } from 'framer-motion'

const YellowBlob: FunctionComponent = () => (
  <motion.svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="32.15 41.78 138.94 109.56"
    animate={{ rotate: [-330, -690] }}
    transition={{ duration: 300, ease: 'linear', repeat: Infinity }}
    style={{
      display: 'inline-block',
      position: 'relative',
      bottom: '228vh',
      right: '-79vw',
      width: '40vw',
      originX: 'center',
      originY: 'center',
      zIndex: 1,
    }}
  >
    <motion.path
      fill="#FDD1AF"
      d="M150.3 62.8c14.1 14.8 24.2 35.7 19.7 52.3-4.5 16.6-23.7 29-41.6 33.8-18 4.8-34.8 2-54-4.1-19.2-6-40.9-15.3-42.2-27.4C31 105.3 50.3 90.5 65 75.6c14.7-15 24.8-30 39-33.2 14.1-3.1 32.2 5.6 46.3 20.4Z"
    />
  </motion.svg>
)

const PinkBlob: FunctionComponent = () => (
  <motion.svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="34.21 16.04 148.1 145.38"
    animate={{ rotate: [0, 360] }}
    transition={{ duration: 300, ease: 'linear', repeat: Infinity }}
    style={{
      display: 'inline-block',
      position: 'relative',
      top: '-40vh',
      left: '-70vw',
      width: '125vw',
      originX: 'center',
      originY: 'center',
      zIndex: 1,
    }}
  >
    <motion.path
      fill="#C38D9E"
      d="M127.7 50.8c13.2 8.9 32.4 6.2 43.7 12.4 11.4 6.3 14.9 21.5 5.5 31.4-9.4 9.8-31.8 14.2-41.9 22.6-10.1 8.5-7.9 21-11.7 27.5-3.8 6.5-13.5 6.9-25.2 10.2-11.7 3.4-25.3 9.6-32 4.7-6.6-4.8-6.3-20.7-9.3-32.5-3-11.8-9.5-19.4-14.9-30.3C36.4 86 31.8 72 35.6 61.5c3.8-10.6 15.8-17.6 28-27.2 12.1-9.6 24.2-21.6 33.9-17.4 9.7 4.3 17 24.9 30.2 33.9Z"
    />
  </motion.svg>
)

export const BackgroundBlobs: FunctionComponent = () => (
  <div
    style={{
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      overflow: 'hidden',
    }}
  >
    <PinkBlob />
    <YellowBlob />
  </div>
)
