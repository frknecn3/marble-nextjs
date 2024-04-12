import React from 'react'
import './index.css'
import OpacityCover from '@/components/SubComponents/Main/OpacityCover'
import { MotionDiv } from '@/utils/use-client'
import Hero from '@/components/MainComponents/Hero'
import { longText, marbleTypes } from '@/constants/constants'
import TiltCard from '@/components/SubComponents/Main/TiltCard'

const MainPage = () => {
  return (
    <div className='text-center'>
      
    <div className='min-h-[100vh] relative'>
      <Hero />

      <div className="main-image absolute top-0 left-0 right-0 bottom-0 z-[-1]">
        <OpacityCover />
      </div>
    </div>

    <h1 className='pt-20 text-6xl'>PORTFOLYO</h1>

    <div className='p-20 w-full h-full grid place-items-center grid-cols-2 lg:grid-cols-3 border-b border-b-gray-500'>
      {marbleTypes.map((item,i)=>(<TiltCard item={item} key={i} i={i}/>))}
    </div>


    <div className='flex justify-around py-20 overflow-clip'>
        <MotionDiv className='w-2/4' 
        initial={{ opacity: 0, y: -40 }} // Initial state: invisible and positioned above
        whileInView={{ opacity: 1, y: 0 }} // Animation: gradually become visible while staying in place
        transition={{ duration: 1 }} // Animation duration
        viewport={{ once: true, amount: 0 }}
        >
          <pre className='text-2xl leading-8 font-sans whitespace-pre-wrap'>{longText}</pre>
        </MotionDiv>
        
        <MotionDiv className='w-1/4'
        initial={{ opacity: 0, x: 400 }} // Initial state: invisible and positioned above
        whileInView={{ opacity: 1, x: 0 }} // Animation: gradually become visible while staying in place
        transition={{ duration: 1 }} // Animation duration
        viewport={{ once: true, amount: 0 }}
        >
          <img src="/images/longtext.jpg" alt="" />
        </MotionDiv>
    </div>


    </div>
  )
}

export default MainPage