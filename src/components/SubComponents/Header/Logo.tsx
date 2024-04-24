'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { BiMenu } from 'react-icons/bi'

type Props = {}

const Logo = (props: Props) => {
  return (
    
    <Link href={'/'} className='ml-10 flex justify-between'>
      <motion.div animate={{x:[-200,0],opacity:[0,100]}} transition={{duration:1}}  className='border-box logo lg:p-10 text-4xl flex gap-4 justify-center items-center lg:text-7xl font-extrabold'>
          <Image src="/images/logo/pm2.png" width={100} height={100} alt="" />
          <p className='text-10xl hidden lg:block font-extrabold'>PORTA MARBLE</p>
      </motion.div>      
    </Link>
  )
}

export default Logo