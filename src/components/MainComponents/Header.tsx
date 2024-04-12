import { motion } from 'framer-motion'
import React from 'react'
import Logo from '../SubComponents/Header/Logo'
import NavbarElements from '../SubComponents/Header/NavbarElements'
import './index.css'

type Props = {}

const Header = (props: Props) => {

  



  return (
    <header className='header flex justify-between items-center border-b-[1px] border-gray-600 min-h-[10vh]'>
        <Logo/>
        <NavbarElements/>
    </header>
  )
}

export default Header