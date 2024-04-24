'use client'

import { Suspense } from "react"
import OpacityCover from "../SubComponents/Main/OpacityCover"
import { motion } from "framer-motion"

type Props = {}

const Video = (props: Props) => {
  return (
    <div className="min-w-[100vw] min-h-[100vh]  relative">
      <div className="absolute w-full top-0 left-0 right-0 bottom-0 z-[-1]">
        <img src="/images/marbles/licoricegrey.jpg" className="w-full h-full z-[-1]" alt="" />
        <motion.div className='absolute top-0 bottom-0 left-0 right-0 bg-black' animate={{opacity:[0.1,0.735]}} transition={{duration:1}}/>
      </div>

      <div>

      </div>

      
    </div>
  )
}

export default Video