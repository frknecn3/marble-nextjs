'use client'
import React, { useEffect, useState } from 'react'
import { FaArrowCircleUp } from 'react-icons/fa'

type Props = {}

const GoTopButton = (props: Props) => {

    const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) { // Adjust the threshold as needed
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    // Clean up the event listener on unmount
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    
    <button 
    className={`fixed bottom-2 ${isVisible?'opacity-30':'opacity-0'} brightness-50 hover:brightness-125 transition-all rounded-full right-[3.6vw] top-2/3 h-[70px] transform -translate-y-[25%] text-6xl`}
    onClick={()=>window.scrollTo({top:0,behavior:'smooth'})}>
      <FaArrowCircleUp />
      </button>
  )
}

export default GoTopButton