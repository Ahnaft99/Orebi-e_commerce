import React, { useContext, useRef } from 'react'
import Container from './Container'
import ad5 from '../assets/ad5.png'
import { FaArrowAltCircleLeft, FaArrowAltCircleRight, FaCartPlus, FaHeart } from 'react-icons/fa'
import { IoIosGitCompare } from 'react-icons/io'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoGitCompareOutline } from 'react-icons/io5'
import { ApiData } from './ContextApi'

const NewArrival = () => {
    let data = useContext(ApiData)
    const sliderRef = useRef(null)

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,

    }

    return (
        <div className='py-10 relative'>
            <Container>
                <h1 className='text-[39px] font-dm font-bold text-[#262626] mb-6'>New Arrivals</h1>


                <button
                    onClick={() => sliderRef.current.slickPrev()}
                    className='absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md w-10 h-10 flex items-center justify-center rounded-full hover:bg-black hover:text-white duration-300'
                >

                    <FaArrowAltCircleLeft />

                </button>


                <button
                    onClick={() => sliderRef.current.slickNext()}
                    className='absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md w-10 h-10 flex items-center justify-center rounded-full hover:bg-black hover:text-white duration-300'
                >
                    <FaArrowAltCircleRight />
                </button>

                <Slider ref={sliderRef} {...settings}>
                    {data.map((item)=>(
                      <div className='px-3'>
                      <div className='relative group'>
                          <img src={item.thumbnail} alt="" className='w-full' />

                          <div className='absolute bottom-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out'>
                              <p className='flex items-center gap-2 cursor-pointer'>Add to Wish List <FaHeart /></p>
                              <p className='flex items-center gap-2 cursor-pointer'>Compare <IoGitCompareOutline /></p>
                              <p className='flex items-center gap-2 cursor-pointer'>Add to Cart <FaCartPlus /></p>
                          </div>
                      </div>

                      <div className='flex gap-2'>
                          <h3>{item.title}</h3>
                          <p>{item.price}</p>
                      </div>
                  </div>
                    ))}
                  

                   

                   

                    

                    
                </Slider>
            </Container>
        </div>
    )
}

export default NewArrival
