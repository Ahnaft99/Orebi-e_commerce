import React, { useContext, useRef } from 'react'
import Container from './Container'
import { FaArrowAltCircleLeft, FaArrowAltCircleRight, FaCartPlus, FaHeart } from 'react-icons/fa'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IoGitCompareOutline } from 'react-icons/io5'
import { ApiData } from './ContextApi'

const Products = () => {
    let { info, loading } = useContext(ApiData)
    const sliderRef = useRef(null)

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 3 } },
            { breakpoint: 768, settings: { slidesToShow: 2 } },
            { breakpoint: 480, settings: { slidesToShow: 1 } },
        ]
    }

    if (loading) return <h1>Loading.....</h1>

    return (
        <div className='py-10 relative'>
            <Container>

                {/* Wrap slider and buttons in relative div */}
                <div className='relative'>

                    <button
                        onClick={() => sliderRef.current.slickPrev()}
                        className='absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full hover:bg-black hover:text-white duration-300'
                    >
                        <FaArrowAltCircleLeft />
                    </button>

                    <button
                        onClick={() => sliderRef.current.slickNext()}
                        className='absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow-md w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center rounded-full hover:bg-black hover:text-white duration-300'
                    >
                        <FaArrowAltCircleRight />
                    </button>

                    <Slider ref={sliderRef} {...settings}>
                        {info.map((item) => (
                            <div className='px-2 sm:px-3' key={item.id}>
                                <div className='relative group'>
                                    <img src={item.thumbnail} alt={item.title} className='w-full h-[180px] sm:h-[220px] md:h-[250px] lg:h-[280px] object-cover' />

                                    <div className='absolute bottom-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out bg-white w-full p-2 flex flex-col gap-1'>
                                        <p className='flex items-center gap-2 cursor-pointer hover:font-bold text-sm sm:text-[14px]'>Add to Wish List <FaHeart /></p>
                                        <p className='flex items-center gap-2 cursor-pointer hover:font-bold text-sm sm:text-[14px]'>Compare <IoGitCompareOutline /></p>
                                        <p className='flex items-center gap-2 cursor-pointer hover:font-bold text-sm sm:text-[14px]'>Add to Cart <FaCartPlus /></p>
                                    </div>

                                    <div className='absolute left-0 top-0 bg-[#262626] px-1'>
                                        <p className='text-[#fff] text-[12px] sm:text-[14px] font-dm'>%{item.discountPercentage}</p>
                                    </div>
                                </div>

                                <div className='flex justify-between gap-2 mt-2'>
                                    <h3 className='font-bold text-[16px] sm:text-[18px] md:text-[20px]'>{item.title}</h3>
                                    <p className='font-bold text-[14px] sm:text-[16px] md:text-[18px]'>${item.price}</p>
                                </div>
                            </div>
                        ))}
                    </Slider>
                </div>
            </Container>
        </div>
    )
}

export default Products
