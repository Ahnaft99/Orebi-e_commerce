import React from 'react'
import Container from './Container'
import watch from '../assets/watch.png'

const Banner2 = () => {
  return (
    <div>
      <Container>
        <div className="bg-[#F3F3F3] py-10">
          <div className="w-full flex flex-col md:flex-row items-center md:items-start gap-6">
            {/* Image */}
            <div className="w-full md:w-1/4 flex justify-center md:justify-start">
              <img src={watch} alt="Watch" className="w-[150px] sm:w-[200px] md:w-full object-contain" />
            </div>

            {/* Text Content */}
            <div className="w-full md:w-3/4 text-center md:text-left">
              <h1 className="text-2xl sm:text-3xl md:text-[39px] text-[#262626] font-dm font-bold">
                Phone of the year
              </h1>
              <p className="text-sm sm:text-base md:text-[16px] text-[#262626] font-dm font-normal mt-2">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry orem Ipsum..
              </p>
              <button className="border px-4 py-2 text-sm sm:text-[16px] bg-[#262626] font-dm text-[#fff] font-bold mt-4 cursor-pointer">
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Banner2
