import React from 'react'
import './index.css'
import OpacityCover from '@/components/SubComponents/Main/OpacityCover'
import { MotionDiv } from '@/utils/use-client'
import Hero from '@/components/MainComponents/Hero'
import { longText, marbleTypes, responsiveType, sliderImages } from '@/constants/constants'
import Portfolio from '@/components/MainComponents/Portfolio'
import Slider from '@/components/SubComponents/Slider'
import Video from '@/components/MainComponents/Video'
import Carousel from 'react-multi-carousel'
import Image from 'next/image'



const MainPage = () => {
  return (
    <div className='text-center'>

<div className='h-[100vh] pb-5 relative w-full'>
  {/* buraya random resim gelcek */}
  <div className="flex items-center justify-center w-full overflow-visible">
        <Slider
        sliderImages={sliderImages}
        res={responsiveType.singleElement}
        text={true}
        sliderClass="w-full overflow-visible"
        imgStyle='w-full h-[92vh]'
        carouselProps={{
          ssr:true,
          autoPlay:true,
          autoPlaySpeed:2000,
          infinite:true,
          showDots:false,
          renderButtonGroupOutside:false,
          pauseOnHover:false,
          arrows:false
        }}
      >
    </Slider>
    </div>
</div>
      
    <div className='min-h-[100vh] pb-10 relative'>
      <Hero />

      <div className="main-image absolute top-0 left-0 right-0 bottom-0 z-[-1]">
        <OpacityCover />
      </div>
    </div>

    <div className='relative'>
      <h1 className='text-6xl py-20'>ZARİF TASARIMLAR</h1> 
      <div className='flex justify-center gap-10 pb-40  items-center overflow-visible'>
        <Slider sliderImages={sliderImages} res={responsiveType.threeElement}         
        sliderClass="w-full overflow-visible"
        imgStyle='w-full lg:w-[50vw] xl:w-[33vw] h-[80vh] rounded border border-white'
        carouselProps={{
          ssr:true,
          autoPlay:true,
          autoPlaySpeed:1500,
          infinite:true,
          showDots:true,
          renderButtonGroupOutside:true,
          arrows:true
        }}
        />
      </div>
      <div className="secondary-image absolute top-0 left-0 right-0 bottom-0 z-[-1]">
        <OpacityCover />
      </div>
    </div>

    


    <Portfolio />

    <Video />
    
    <div className='flex flex-col-reverse lg:flex-row justify-around items-center py-20 overflow-clip relative'>
        <MotionDiv className='w-full lg:w-2/4' 
        initial={{ opacity: 0, y: -40 }} // Initial state: invisible and positioned above
        whileInView={{ opacity: 1, y: 0 }} // Animation: gradually become visible while staying in place
        transition={{ duration: 1 }} // Animation duration
        viewport={{ once: true, amount: 0 }}
        >
          <pre className='text-2xl leading-8 p-10 lg:p-0 font-sans whitespace-pre-wrap'>{longText}</pre>
        </MotionDiv>
        
        <MotionDiv className='w-full lg:w-1/4 p-10 lg:p-0 flex justify-center'
        initial={{ opacity: 0, x: 400 }} // Initial state: invisible and positioned above
        whileInView={{ opacity: 1, x: 0 }} // Animation: gradually become visible while staying in place
        transition={{ duration: 1 }} // Animation duration
        viewport={{ once: true, amount: 0 }}
        >

          <Image src="/images/longtext.jpg" alt="long text image" className='border-2 rounded-md border-white'  width={400} height={700} />
        </MotionDiv>

        <div className="main-image-bottom absolute top-0 left-0 right-0 bottom-0 z-[-1]">
          <OpacityCover />
        </div>
    </div>

    

    </div>
  )
}

export default MainPage