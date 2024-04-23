import { motion } from 'framer-motion'
import React from 'react'
import Logo from '../SubComponents/Header/Logo'
import NavbarElements from '../SubComponents/Header/NavbarElements'
import './index.css'
import Menu from './Menu'

type Props = {}

const Header = (props: Props) => {

  



  return (
    <header className='header flex justify-between items-center border-b-[1px] border-gray-600 min-h-[10vh]'>
        <div className='lg:hidden'/>
        <Logo/>
        <NavbarElements/>
        <Menu />
    </header>
  )
}

export default Header