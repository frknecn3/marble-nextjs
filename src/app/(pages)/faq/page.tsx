import { qna } from '@/constants/constants'
import './index.css'
import React from 'react'

const FAQ = () => {
  return (
    <div className='min-h-[120vh]'>
      <div className='mt-20 mx-40 flex items-center flex-col text-2xl'>
        <h1 className='text-3xl font-bold'>Sıkça Sorulan Sorular:</h1>
        <br></br>
        <dl className='w-[50vw]'>
          {qna.map((item,i)=>(<React.Fragment key={i}>
            
            <dt className='mb-2'><span className='font-extrabold'>{i+1}:</span> {item.q}</dt>
            <dd>{item.a}</dd>
            <br/>
            </React.Fragment>
          ))}
        </dl>
      </div>
    </div>
  )
}

export default FAQ