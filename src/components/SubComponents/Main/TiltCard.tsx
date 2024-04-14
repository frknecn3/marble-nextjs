'use client'
import { MarbleType } from '@/constants/constants';
import { MotionDiv } from '@/utils/use-client';
import { useMotionValue, useTransform } from 'framer-motion';
import React, { MouseEventHandler } from 'react';

type Props = {
    item:MarbleType
    i:number
}


const TiltCard = ({item,i}:Props) => {
    const x = useMotionValue(0)
    const y = useMotionValue(0)



    const rotateX=useTransform(x,[-0.5,0.5],["-10deg",'10.5deg'])
    const rotateY=useTransform(y,[-0.5,0.5],["-10deg",'10.5deg'])

    const handleMouseMove: MouseEventHandler<HTMLDivElement> = (e) => { 
        const target = e.target as HTMLDivElement;
        const rect = target.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mouseX = e.clientX - rect.left
        const mouseY = e.clientY - rect.top

        const xpct = mouseX/width
        const ypct = mouseY/height

        x.set(xpct)
        y.set(ypct)

        // console.log({mouseX:Math.round(mouseX),mouseY:Math.round(mouseY)})
    };

    const handleMouseOut:MouseEventHandler<HTMLDivElement> = (e) => { 
        const target = e.target as HTMLDivElement
        x.set(0)
        y.set(0)

    }

    return (
        <MotionDiv whileInView={{opacity:[0,1]}} viewport={{ once: true, amount: 0 }} transition={{duration:1,delay:0.3*i}} style={{rotateX,rotateY}} className='hover:shadow shadow-white hover:bg-[#0a0a0a] lg:m-10 border text-center p-2 lg:p-4 rounded-xl flex flex-col items-center justify-center w-[40vw] h-auto lg:w-3/4 gap-4' onMouseMove={handleMouseMove} onMouseOut={handleMouseOut}>
            <div className='w-[150] h-[150px] lg:w-full lg:h-[400px] object-contain overflow-hidden'><img src={item.photo} alt="" className='object-cover' /></div>
            <span className='text-xl'>{item.name}</span>
      </MotionDiv>
    );
};

export default TiltCard;
