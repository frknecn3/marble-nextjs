'use client'
import { motion } from 'framer-motion'
import Link from 'next/link'
import React from 'react'
import { BiMenu } from 'react-icons/bi'

type Props = {}

const Logo = (props: Props) => {
  return (
    
    <Link href={'/'} className='ml-10 flex justify-between'>
      <motion.div animate={{x:[-200,0],opacity:[0,100]}} transition={{duration:1}}  className='logo p-10 text-4xl lg:text-7xl font-extrabold'>
          PORTA MARBLE
      </motion.div>      
    </Link>
  )
}

export default Logo