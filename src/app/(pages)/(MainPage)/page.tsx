import React from 'react'
import './index.css'
import OpacityCover from '@/components/SubComponents/Main/OpacityCover'
import { MotionDiv } from '@/utils/use-client'
import Hero from '@/components/MainComponents/Hero'
import { longText, marbleTypes, sliderImages } from '@/constants/constants'
import Portfolio from '@/components/MainComponents/Portfolio'
import Slider from '@/components/SubComponents/Slider'
import Video from '@/components/MainComponents/Video'



const MainPage = () => {
  return (
    <div className='text-center'>

<div className='h-[100vh] pb-5 relative w-full'>
  {/* buraya random resim gelcek */}
  <img src={sliderImages[Math.floor((Math.random() * sliderImages.length))]} className='object-cover w-full h-full' alt="" />
</div>
      
    <div className='min-h-[100vh] pb-10 relative'>
      <Hero />

      <div className="main-image absolute top-0 left-0 right-0 bottom-0 z-[-1]">
        <OpacityCover />
      </div>
    </div>

    <div className='relative'>
      <h1 className='text-6xl py-20'>ZARİF TASARIMLAR</h1> 
      <div className='flex justify-center gap-10 pb-40 items-center overflow-visible'>
        <Slider />
      </div>
      <div className="secondary-image absolute top-0 left-0 right-0 bottom-0 z-[-1]">
        <OpacityCover />
      </div>
    </div>

    <Video />


    <Portfolio />

    
    <div className='flex flex-col-reverse lg:flex-row justify-around items-center py-20 overflow-clip relative'>
        <MotionDiv className='w-full lg:w-2/4' 
        initial={{ opacity: 0, y: -40 }} // Initial state: invisible and positioned above
        whileInView={{ opacity: 1, y: 0 }} // Animation: gradually become visible while staying in place
        transition={{ duration: 1 }} // Animation duration
        viewport={{ once: true, amount: 0 }}
        >
          <pre className='text-2xl leading-8 p-10 lg:p-0 font-sans whitespace-pre-wrap'>{longText}</pre>
        </MotionDiv>
        
        <MotionDiv className='w-full lg:w-1/4 p-10 lg:p-0 '
        initial={{ opacity: 0, x: 400 }} // Initial state: invisible and positioned above
        whileInView={{ opacity: 1, x: 0 }} // Animation: gradually become visible while staying in place
        transition={{ duration: 1 }} // Animation duration
        viewport={{ once: true, amount: 0 }}
        >

          <img src="/images/longtext.jpg" alt="long text image" className='border-2 rounded-md border-white' />
        </MotionDiv>

        <div className="main-image-bottom absolute top-0 left-0 right-0 bottom-0 z-[-1]">
          <OpacityCover />
        </div>
    </div>


    </div>
  )
}

export default MainPage