'use client'
import { imageTexts, newCarouselProps, random } from "@/constants/constants";
import Image from "next/image";
import Carousel from "react-multi-carousel";
import {CarouselProps} from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const Slider = ({sliderImages,res=responsive,imgStyle,sliderClass,carouselProps,text=false}:{sliderImages:string[],res?:any,imgStyle?:string,sliderClass?:string,carouselProps?:newCarouselProps,text?:boolean})=>{
  return(
    
          <div className="flex items-center justify-center w-full relative overflow-visible">
            <Carousel
          responsive={res}
          className={sliderClass}
          {...carouselProps}
        >
          {sliderImages.map((item,i)=>(
            <div className="flex justify-center transition-all overflow-visible" key={i} >
              <Image src={item}  alt={`kitchen marble ${i}`} className={`${imgStyle}`} width={500} height={250} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"/>
              {
                text&&
              <>
              <div className=" bg-black bg-opacity-50 py-10 px-5 w-full lg:w-auto lg:right-16 bottom-16 transform right-1/2 translate-x-[50%] lg:translate-x-0 rounded-xl absolute max-h-[50px] lg:max-h-full">
                <h1 className="text-4xl font-bold" style={{textShadow:'0px 2px 2px rgba(0,0,0,0.8)'}}>{imageTexts[random(0,imageTexts.length-1)]}</h1>
              </div>
              <Image src="/images/logo/pm2.png" alt="porta marble logo" className="absolute top-16 right-16 bg-black p-4 bg-opacity-10 opacity-50 rounded-xl"  width={150} height={150}/>
              </>
              }
              
            </div>  
              
          ))}
        </Carousel>
        </div>

  );
  }

export default Slider