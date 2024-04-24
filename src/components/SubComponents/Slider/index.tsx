'use client'
import { sliderImages } from "@/constants/constants";
import Carousel from "react-multi-carousel";
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
const Slider = ()=>{
  return(
    
          <div className="flex items-center justify-center w-full overflow-visible">
            <Carousel
          responsive={responsive}
          className="w-full overflow-visible"
          autoPlay={true}
          autoPlaySpeed={1500}
          infinite={true}
          ssr={true}
          showDots={true}
          renderDotsOutside={true}
          pauseOnHover={true}
        >
          {sliderImages.map((item,i)=>(
            <div className="flex justify-center p-1 transition-all overflow-visible" key={i}>
              <img src={item}  alt={`kitchen marble ${i}`} className="h-[80vh]  w-[100vw] md:w-[50vw] lg:w-[33vw] border overflow-visibleoverflow-visible" />
            </div>
              
          ))}
        </Carousel>
          </div>

  );
  }

export default Slider