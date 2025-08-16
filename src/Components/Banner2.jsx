import React from 'react'
import Container from './Container'
import watch from '../assets/watch.png'

const Banner2 = () => {
  return (
   <div>
    <Container>
        <div className='bg-[#F3F3F3] py-10'>
            <div className='w-full flex'>
            <div className='w-1/4 '>
            <img src={watch} alt="" />
            </div>
            <div className='w-3/4'>
            <h1 className='text-[39px] text-[#262626] font-dm font-bold'>Phone of the year</h1>
            <p className='text-[16px] text-[#262626] font-dm font-normal'>Lorem Ipsum is simply dummy text of the printing and typesetting industry orem Ipsum..</p>
            <button className='border px-2 py-1 text-[16px] bg-[#262626] font-dm text-[#fff] font-bold mt-2 cursor-pointer'>Shop Now</button>
            </div>
            </div>
           
        </div>
    </Container>
   </div>
  )
}

export default Banner2