import { MotionDiv } from '@/utils/use-client'
import React from 'react'

type Props = {}


const Hero = (props: Props) => {
  return (
    <>
    
    <div className='flex flex-col-reverse lg:flex-row items-center justify-around  overflow-clip min-h-[110vh]'>
        <MotionDiv className='h-full w-full lg:w-2/4' initial={{x:-0,opacity:0}} whileInView={{x:[-500,0],opacity:[0,1]}} viewport={{ once: true, amount: 0 }} transition={{duration:1,delay:1.5}}>
            <h1 className='text-6xl font-bold mb-10'>Eviniz için yeni bir tarz.</h1>
            <p className='text-2xl'>
              Yeni mermer türleri ile hayatınıza ve yuvanıza zarif ve lüks bir dokunuş yapın.
               Mermerlerimiz en kaliteli ocaklardan profesyonel bir biçimde çıkartılıp, atölyelerimizde estetik ve göze hitap edecek şekle getirildikten sonra müşterilerimizle buluşuyor.
               </p>
        </MotionDiv>

        <MotionDiv className='border mb-10 lg:mb-0 lg:mx-0 mx-3' initial={{x:0,opacity:0}} whileInView={{x:[500,0],opacity:[0,1]}} viewport={{ once: true, amount: 0 }} transition={{duration:1,delay:1.5}}>
          <img src="/images/kitchen.jpg" alt="main image first" />
        </MotionDiv>
      </div>

      <div className='flex flex-col lg:flex-row items-center justify-around py-20 overflow-clip'>
        <MotionDiv className='border' initial={{x:0,opacity:0}} whileInView={{x:[-500,0],opacity:[0,1]}} viewport={{ once: true, amount: 0 }} transition={{duration:1,delay:0.5}}>
          <img src="/images/kitchen2.jpeg" alt="main image second" className='lg:mx-0 mx-3' />
        </MotionDiv>
        <MotionDiv className='h-full w-full lg:w-2/4 mt-10 lg:mt-0' initial={{x:0,opacity:0}} whileInView={{x:[500,0],opacity:[0,1]}} viewport={{ once: true, amount: 0 }} transition={{duration:1,delay:0.5}}>
            <h1 className='text-6xl font-bold mb-10'>Mermer mutfak harika bir tercih.</h1>
            <p className='text-2xl'>Yüzyılların birikimiyle gelen mermer, mutfakla buluştuğunda sadece göz zevkini uyandırmakla kalmıyor, temizlenmesi çok kolay olduğu gibi aynı zamanda uzun yıllar boyunca yıpranmayarak mutfaklar için harika bir seçenek sunuyor.
            </p>
        </MotionDiv>
      </div>
      </>
  )
}

export default Hero