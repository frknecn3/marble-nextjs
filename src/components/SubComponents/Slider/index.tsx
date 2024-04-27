'use client'
import { imageTexts, newCarouselProps, random } from "@/constants/constants";
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
            <div className="flex justify-center transition-all overflow-visible" key={i}>
              <img src={item}  alt={`kitchen marble ${i}`} className={`${imgStyle}`} />
              {
                text&&
              <>
              <div className=" bg-black bg-opacity-50 p-10 right-16 bottom-16 rounded-xl absolute ">
                <h1 className="text-4xl font-bold" style={{textShadow:'0px 2px 2px rgba(0,0,0,0.8)'}}>{imageTexts[random(0,imageTexts.length-1)]}</h1>
              </div>
              <img src="/images/logo/pm2.png" alt="porta marble logo" className="w-[150px] h-[150px] absolute top-16 right-16 bg-black p-4 bg-opacity-10 opacity-50 rounded-xl" />
              </>
              }
              
            </div>  
              
          ))}
        </Carousel>
        </div>

  );
  }

export default Slider