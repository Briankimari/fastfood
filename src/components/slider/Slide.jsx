import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ImageSlider from "./ImageSlide";

const Slide = () => {
    
const settings = {
  
  dots: true,
  infinite: true,
  speed: 5000,
  slidesToShow: 3,
  slidesToScroll: 2,
  autoplay: true,
  autoplaySpeed: 1000,
   initialSlide: 0,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
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
     <>
    <div className="content-0">
     
      <div className="">
        <Slider {...settings}>
          {ImageSlider.map((item) => (
            <div key={item.id} className=' p-4 shadow-2xl space-y-2 '>
              <img src={item.src} alt={item.alt} className="img" />
              <h2 className="title-0 text-xl text-orange-500 font-semibold ">{item.title}</h2>
              <p className="description  text-xl "><span className='text-xl font-semibold'>Price</span>:{item.sale}</p>
             <p className="description  text-xl "><span className='text-xl font-semibold'>Order</span>:{item.order}</p>

            </div>
          ))}
        </Slider>
      </div>
    </div>
  </>
  )
}

export default Slide

