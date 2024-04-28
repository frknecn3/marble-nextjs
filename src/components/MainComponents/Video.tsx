'use client'

import { Suspense } from "react"
import OpacityCover from "../SubComponents/Main/OpacityCover"
import { motion } from "framer-motion"
import Contact from "@/app/(pages)/contact/page"
import Image from "next/image"

type Props = {}

const Video = (props: Props) => {
  return (
    <div className="min-w-[100vw] h-[120vh]  relative">
      <div className="absolute w-full top-0 left-0 right-0 bottom-0 z-[-1]">
        <Image src="/images/marbles/licoricegrey.jpg" className="w-full object-cover overflow-clip h-full z-[-1]" alt=""  width={500} height={350}/>
        <motion.div className='absolute top-0 bottom-0 left-0 right-0 bg-black' animate={{opacity:[0.1,0.735]}} transition={{duration:1}}/>
      </div>

      <div className="flex items-center h-full justify-center">
        <Contact long={false}/>
      </div>

      
    </div>
  )
}

export default Video