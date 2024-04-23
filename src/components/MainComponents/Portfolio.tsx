import { marbleTypes } from '@/constants/constants'
import React from 'react'
import TiltCard from '../SubComponents/Main/TiltCard'

const Portfolio = () => {
  return (
    <div className='bg-black'>
        <h1 className='pt-20 text-6xl'>PORTFOLYO</h1>

        <div className='marble-grid p-10 w-full h-full grid place-items-center grid-cols-2 lg:grid-cols-3 border-b border-b-gray-500'>
        {marbleTypes.map((item,i)=>(<TiltCard item={item} key={i} i={i}/>))}
        </div>
    </div>
  )
}

export default Portfolio