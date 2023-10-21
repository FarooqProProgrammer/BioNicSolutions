import React from 'react'
import Slider from "react-slick";

import Comapny1 from "../../assets/Companies/1.png"
import Comapny2 from "../../assets/Companies/1.png"
import Comapny3 from "../../assets/Companies/1.png"
import Comapny4 from "../../assets/Companies/1.png"
import Comapny5 from "../../assets/Companies/1.png"
import Comapny6 from "../../assets/Companies/1.png"
import Comapny7 from "../../assets/Companies/1.png"
import Comapny8 from "../../assets/Companies/1.png"
import Comapny9 from "../../assets/Companies/1.png"



export default function Companies() {
    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
  return (
    <div>
            <Slider {...settings}>
                    <div className='w-[100px] h-[100px]'>
                        <img 
                            src={Comapny1}
                            alt=''
                            className='w-full h-full'
                        />
                    </div>
            </Slider>
    </div>
  )
}
