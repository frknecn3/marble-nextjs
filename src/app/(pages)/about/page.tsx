import { longText } from '@/constants/constants'
import React from 'react'

type Props = {}

const AboutPage = (props: Props) => {
  return (
    <div className='min-h-[100vh] py-40'>
        <div className='flex items-center px-40 gap-20 text-xl text-center'>
            
            <div className='w-1/3'>
                <img src="/images/logo/pm1.jpg" className='rounded-xl' alt="" />
            </div>
            <div className='w-2/3 flex flex-col gap-10'>
                <h1 className='text-center text-5xl font-extrabold'>PORTA MARBLE</h1>
                <p className=''>
                    {longText}
                </p>
            </div>
        </div>
    </div>
  )
}

export default AboutPage