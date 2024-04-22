'use client'
import { NavbarElementsArray } from '@/constants/constants'
import React, { useState } from 'react'
import { MdMenu } from 'react-icons/md'

type Props = {}

const Menu = (props: Props) => {

    const [menuOpen,setMenuOpen] = useState<boolean>(false)

    

  return (
    <div className='text-4xl z-[200000] lg:hidden'>
            <button className='text-5xl ' onClick={()=>{!menuOpen?setMenuOpen(true):null}}>
                <MdMenu />
            </button>

        <div className={`fixed bg-black text-white right-0 left-0 top-0 bottom-0 ${menuOpen?'left-0':'left-[200vw]'} transition-all`}>
            <div >
                <h1 className='mt-6 text-5xl font-bold text-center'>MENÜ</h1>
                <button className='text-white p-4 absolute top-4 right-4' onClick={()=>{setMenuOpen(false),console.log(menuOpen)}}>X</button>
            </div>
            <div className='flex pt-40 items-start justify-center'>
                <ul className='list-disc flex-col flex gap-10'>
                    {NavbarElementsArray.map((item,i)=><li key={i}><a href={`/${item.value}`}>{item.label}</a></li>)}
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Menu