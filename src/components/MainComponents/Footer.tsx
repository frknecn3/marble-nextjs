import React from 'react'
import './index.css'
import { FaFacebook, FaInstagram, FaWhatsapp } from 'react-icons/fa'

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer className='flex justify-around footer items-center min-h-[20vh] pt-32 pb-20'>
        <p className='w-1/2'>Adres: Buraya firmanın adres bilgisi girilecek.<br/>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum rerum recusandae, impedit fugiat ipsa blanditiis optio assumenda saepe tenetur quibusdam.</p>
        <ul className=' flex flex-col gap-2 text-xl  '>
          <li><a href="https://wa.me/000000000" target='_blank'><div className='flex items-center gap-2 justify-center'><FaWhatsapp/> Whatsapp</div></a></li>
          <li><a href="mailto:info@portamarble.com" target='_blank'><div className='flex items-center gap-2 justify-center'><FaFacebook /> E-posta</div></a></li>
          <li><a href="https://instagram.com" target='_blank'><div className='flex items-center gap-2 justify-center'><FaInstagram /> <span>Instagram</span></div></a></li>
        </ul>
    </footer>
  )
}

export default Footer