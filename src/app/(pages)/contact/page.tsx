import React from 'react'
import { CiMail } from 'react-icons/ci'
import { FaWhatsapp } from 'react-icons/fa'



const Contact = ({long}:{long?:boolean}) => {
  return (
    <div className={`flex flex-col lg:block items-center justify-center ${long&&'min-h-[100vh]'}`}>
        <div className='mt-20 mb-[10vh]  lg:text-center'><h1 className='text-5xl font-bold'>Bizimle İletişime Geçin</h1></div>

        <div className='flex lg:flex-row flex-col gap-40 justify-between mt-10 mx-[10vw] lg:mx-[20vw]'>
            <div className='text-2xl flex flex-col gap-4'>
                <p>E-posta: info@portamarble.com</p>
                <p>Whatsapp: +90 000 000 00 00</p>
                <p>Telefon: +90 212 000 00 00</p>
                <p>E-posta: lorem@ipsum.com</p>
            </div>
            
            <div className='flex flex-col justify-between gap-4'>
                <a target='_blank' href="https://wa.me/00000000011"
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