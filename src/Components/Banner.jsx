import React from 'react'
import Slider from 'react-slick'
import bannerImg from '../assets/banner.png'
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",

    appendDots: dots => (
      <div
        style={{
          position: "absolute",
          top: "40%",        
          left: "10%",        
        }}
      >
        <ul
          style={{
            margin: 0,
            display: "flex",
            flexDirection: "column", 
            gap: "12px",
          }}
        >
          {dots}
        </ul>
      </div>
    ),

    customPaging: i => (
      <div
        style={{
          width: "30px",
          textAlign: "left",
          color: "#fff",          
          fontWeight: "bold",
          fontSize: "16px",
          borderRight: "3px solid #fff",
          padding: "5px 0",
        }}
      >
        0{i + 1}
      </div>
    ),
  }

  return (
    <div className="w-full relative overflow-hidden">
      <Slider {...settings}>
        <div>
          <img src={bannerImg} alt="Banner 1" className="w-full" />
        </div>
        <div>
          <img src={bannerImg} alt="Banner 2" className="w-full" />
        </div>
        <div>
          <img src={bannerImg} alt="Banner 3" className="w-full" />
        </div>
        <div>
          <img src={bannerImg} alt="Banner 4" className="w-full" />
        </div>
      </Slider>
    </div>
  )
}

export default Banner
