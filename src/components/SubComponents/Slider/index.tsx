'use client'
import { sliderImages } from "@/constants/constants";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
    partialVisibilityGutter: 40
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    partialVisibilityGutter: 40
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    partialVisibilityGutter: 40
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};
const Slider = ()=>{
  return(
    
          <div className="flex items-center justify-center w-full">
            <Carousel
          responsive={responsive}
          className="w-full"
          autoPlay={true}
          autoPlaySpeed={1500}
          infinite={true}
          ssr={true}
          showDots={true}
          pauseOnHover={true}
        >
          {sliderImages.map((item,i)=>(
            <div className="flex justify-center p-1">
              <img src={item} alt={`kitchen marble ${i}`} className="h-[80vh] border" />
            </div>
              
          ))}
        </Carousel>
          </div>

  );
  }

export default Slider