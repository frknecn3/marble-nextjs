'use client'
import { motion } from 'framer-motion'
import React from 'react'

type Props = {}

const OpacityCover = (props: Props) => {
  return (
    <div className='w-full h-full relative z-[-2]'>
          <motion.div className='absolute top-0 bottom-0 left-0 right-0 bg-black' animate={{opacity:[0.1,0.55]}} transition={{duration:1}}/>
    </div>
  )
}

export default OpacityCover