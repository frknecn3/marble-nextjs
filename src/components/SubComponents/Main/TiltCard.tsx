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



    const rotateX=useTransform(x,[-0.5,0.5],["-20.5deg",'20.5deg'])
    const rotateY=useTransform(y,[-0.5,0.5],["-20deg",'20.5deg'])

    const handleMouseMove: MouseEventHandler<HTMLDivElement> = (e) => { 
        const target = e.target as HTMLDivElement;
        const rect = target.getBoundingClientRect();

        const width = rect.width;
        const height = rect.height;

        const mouseX = e.clientX - rect.left
        const mouseY = e.clientY - rect.top

        const xpct = mouseX/width -0.5
        const ypct = mouseY/height -0.5

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
        <MotionDiv whileInView={{opacity:[0,1]}} viewport={{ once: true, amount: 0 }} transition={{duration:1,delay:0.3*i}} style={{rotateX,rotateY}} className='hover:shadow shadow-white hover:bg-[#0a0a0a] m-10 border text-center p-4 rounded-xl flex flex-col gap-4' onMouseMove={handleMouseMove} onMouseOut={handleMouseOut}>
            <div className='w-[20rem] h-[20rem]'><img src={item.photo} alt="" className='w-full h-full' /></div>
            <span className='text-xl'>{item.name}</span>
      </MotionDiv>
    );
};

export default TiltCard;
