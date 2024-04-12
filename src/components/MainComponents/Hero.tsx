import { MotionDiv } from '@/utils/use-client'
import React from 'react'

type Props = {}


const Hero = (props: Props) => {
  return (
    <>
    
    <div className='flex items-center justify-around py-20 overflow-clip min-h-[80vh]'>
        <MotionDiv className='' whileInView={{x:[-500,0],opacity:[0,1]}} viewport={{ once: true, amount: 0 }} transition={{duration:1,delay:1.5}}>
            <h1 className='text-6xl font-bold mb-10'>Eviniz için yeni bir tarz.</h1>
            <p className='text-2xl'>Yeni mermer türleri ile hayatınıza ve yuvanıza zarif ve lüks bir dokunuş yapın.</p>
        </MotionDiv>

        <MotionDiv className='border' whileInView={{x:[500,0],opacity:[0,1]}} viewport={{ once: true, amount: 0 }} transition={{duration:1,delay:1.5}}>
          <img src="/images/kitchen.jpg" alt="" />
        </MotionDiv>
      </div>

      <div className='flex items-center justify-around py-20 overflow-clip'>
        <MotionDiv className='border' whileInView={{x:[-500,0],opacity:[0,1]}} viewport={{ once: true, amount: 0 }} transition={{duration:1,delay:0.5}}>
          <img src="/images/kitchen2.jpeg" alt="" />
        </MotionDiv>
        <MotionDiv className='h-full' whileInView={{x:[500,0],opacity:[0,1]}} viewport={{ once: true, amount: 0 }} transition={{duration:1,delay:0.5}}>
            <h1 className='text-6xl font-bold mb-10'>Eviniz için yeni bir tarz.</h1>
            <p className='text-2xl'>Yeni mermer türleri ile hayatınıza ve yuvanıza zarif ve lüks bir dokunuş yapın.</p>
        </MotionDiv>
      </div>
      </>
  )
}

export default Hero