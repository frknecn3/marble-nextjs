'use client'
import { NavbarElementsArray } from '@/constants/constants'
import { motion } from 'framer-motion'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import './index.css'

type Props = {}




const NavbarElements = (props: Props) => {

  const [width,setWidth] = useState<number>(NaN)

  useEffect(()=>{
    setWidth(window.innerWidth)
  },[])
  return (
    
    width>768?
      (<div className='p-20'>
        <ul className='flex gap-10'>
            {NavbarElementsArray.map((element,i)=>(

            <Link href={`./${element.value}`} key={i} className='link-element hover:scale-110 text-xl hover:shadow shadow-white transition-all'>
                <motion.div animate={{opacity:[0,100],y:[-100,0]}} transition={{duration:1,delay:i*1/6}}>{element.label}</motion.div>
            </Link>
        ))}
        </ul>
    </div>):''
  )
}

export default NavbarElements