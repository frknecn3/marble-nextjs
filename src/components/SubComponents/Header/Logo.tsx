'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'

type Props = {}

const Logo = (props: Props) => {
  return (
    
    <Link href={'/'} className='ml-10'>
      <motion.div animate={{x:[-200,0],opacity:[0,100]}} transition={{duration:1}}  className='logo p-10 text-7xl font-extrabold'>
          MARBLE
      </motion.div>        
    </Link>
  )
}

export default Logo