import React from 'react'
import { CgMail } from 'react-icons/cg'
import { CiMail } from 'react-icons/ci'
import { FaWhatsapp } from 'react-icons/fa'
import { FiMail } from 'react-icons/fi'

const Contact = () => {
  return (
    <div className='min-h-[100vh] flex flex-col lg:block'>
        <div className='mt-20 lg:ml-[45vw] mb-[10vh] text-center lg:text-start'><h1 className='text-5xl font-bold'>Bizimle İletişime Geçin</h1></div>

        <div className='flex lg:flex-row flex-col gap-20 justify-between mt-10 mx-[10vw] lg:mx-[20vw]'>
            <div className='text-2xl flex flex-col gap-4'>
                <p>E-posta: lorem@ipsum.com</p>
                <p>Whatsapp: +90 000 000 00 00</p>
                <p>Telefon: +90 212 000 00 00</p>
                <p>E-posta: lorem@ipsum.com</p>
            </div>
            
            <div className='flex flex-col justify-between gap-4'>
                <a target='_blank' href="https://wa.me/0000000001"
                className='text-3xl bg-green-500 p-4 rounded-xl flex gap-2 items-center'> 
                <FaWhatsapp className='text-5xl' />
                WHATSAPP
                </a>

                <a className=' text-white border border-white bg-neutral-700 items-center gap-2 text-3xl flex p-4 rounded-xl' href='mailto:lorem@ipsum.com'>
                <CiMail className='text-5xl text-white '/>
                E-POSTA
                </a>
            </div>
        </div>
        
    </div>
  )
}

export default Contact