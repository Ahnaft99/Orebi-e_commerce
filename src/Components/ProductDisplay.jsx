import React, { useContext, useEffect, useRef, useState } from 'react'
import Container from './Container'
import { FaAngleDown, FaThList } from 'react-icons/fa'

import { AiOutlineBars } from 'react-icons/ai'
import { ApiData } from './ContextApi'

const ProductDisplay = () => {
    let data = useContext(ApiData)
    let categoryRef = useRef()
    let [catshow, setcatShow] = useState(false)

    useEffect(()=>{
        document.addEventListener("click", (e)=>{
            if (categoryRef.current.contains(e.target) == true) {
                setcatShow(!catshow)
            } else {
                setcatShow(false)
            }
        })   
    })
  return (
    <div className='py-5 items-center'>
   <Container>
   <div className='w-full flex items-start'>  
   
    <div className='w-3/12'>
        <h1 
          ref={categoryRef} 
          className='cursor-pointer text-[20px] font-dm font-bold'
        >
          Shop By Category
        </h1>
        {catshow && (
            <ul className='bg-white shadow-lg p-2 mt-2'>
                <li className='text-[#767676] text-[16px] font-dm py-2'>Category 1 <span className='ml-[20px]'>+</span></li>
                <li className='text-[#767676] text-[16px] font-dm py-2'>Category 2 <span className='ml-[20px]'>+</span></li>
                <li className='text-[#767676] text-[16px] font-dm py-2'>Category 3 <span className='ml-[20px]'>+</span></li>
                <li className='text-[#767676] text-[16px] font-dm py-2'>Category 4 <span className='ml-[20px]'>+</span></li>
                <li className='text-[#767676] text-[16px] font-dm py-2'>Category 5 <span className='ml-[20px]'>+</span></li>
            </ul>
        )}
    </div>

    <div className='w-2/12 flex gap-2 items-start'>
        <AiOutlineBars className='text-[20px] hover:bg-black hover:text-white ease-in-out' />
        <AiOutlineBars className='text-[20px] hover:bg-black hover:text-white ease-in-out' />
    </div>

   
    <div className='w-3/12 relative items-start'>
        Sort By:
        <input type="text" placeholder='' className=' bg-white border items-center ml-1' />
        <p className='absolute top-[5px] left-[220px]'><FaAngleDown /></p>
    </div>

  
    <div className='w-4/12'>
        <div className='relative items-start'>
            Sort By:
            <input type="text" placeholder='' className=' bg-white border items-center ml-1 w-[100px]' />
            <p className='absolute top-[5px] left-[140px]'><FaAngleDown /></p>
        </div>
    </div>

</div>

       
    </Container>

    </div>
 
   
  )
}

export default ProductDisplay