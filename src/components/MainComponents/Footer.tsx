import React from 'react'
import './index.css'

type Props = {}

const Footer = (props: Props) => {
  return (
    <footer className='flex justify-around footer items-center min-h-[20vh] pt-32 pb-20'>
        <p>Adres: Lorem ipsum dolor sit amet consectetur,<br></br> adipisicing elit. Facere, ratione?</p>
        <ul className='flex flex-col gap-2'>
          <li><a href="">Whatsapp</a></li>
          <li><a href="">Facebook</a></li>
          <li><a href="">Instagram</a></li>
        </ul>
    </footer>
  )
}

export default Footer