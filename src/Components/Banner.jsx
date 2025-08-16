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
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 5000, 
    cssEase: "linear",

    appendDots: dots => (
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "5%",
          transform: "translateY(-50%)",
        }}
        className="hidden sm:block" 
      >
        <ul
          style={{
            margin: 0,
            display: "flex",
            flexDirection: "column",
            gap: "10px",
          }}
        >
          {dots}
        </ul>
      </div>
    ),

    customPaging: i => (
      <div
        style={{
          width: "25px",
          textAlign: "left",
          color: "#fff",
          fontWeight: "bold",
          fontSize: "14px",
          borderRight: "2px solid #fff",
          padding: "4px 0",
        }}
        className="sm:w-[30px] sm:text-[16px] sm:border-r-[3px]"
      >
        0{i + 1}
      </div>
    ),
  }

  const bannerHeight = "h-[180px] sm:h-[280px] md:h-[360px] lg:h-[450px] xl:h-[500px]"

  return (
    <div className="w-full relative overflow-hidden">
      <Slider {...settings}>
        <div>
          <img
            src={bannerImg}
            alt="Banner 1"
            className={`w-full ${bannerHeight} object-cover`}
          />
        </div>
        <div>
          <img
            src={bannerImg}
            alt="Banner 2"
            className={`w-full ${bannerHeight} object-cover`}
          />
        </div>
        <div>
          <img
            src={bannerImg}
            alt="Banner 3"
            className={`w-full ${bannerHeight} object-cover`}
          />
        </div>
        <div>
          <img
            src={bannerImg}
            alt="Banner 4"
            className={`w-full ${bannerHeight} object-cover`}
          />
        </div>
      </Slider>
    </div>
  )
}

export default Banner
