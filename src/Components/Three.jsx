import React from 'react'
import Container from './Container'
import { FaShippingFast } from 'react-icons/fa'
import { PiKeyReturnFill } from 'react-icons/pi'

const Three = () => {
  return (
    <div>
    <Container>
   <div className='w-full flex justify-between'>
   <div className='flex items-center gap-2'>
        <span className='text-[#262626] text-[24px] font-dm text-bold'>2</span>
        <p className='text-[18px] text-[#6D6D6D] font-dm'>Two years warranty</p>
    </div>
    <div className='flex items-center gap-2'>
        <span className='text-[#262626] text-[24px] font-dm text-bold'><FaShippingFast />
        </span>
        <p className='text-[18px] text-[#6D6D6D] font-dm'>Free shipping</p>
    </div>
    <div className='flex items-center gap-2'>
        <span className='text-[#262626] text-[24px] font-dm text-bold'><PiKeyReturnFill />
        </span>
        <p className='text-[18px] text-[#6D6D6D] font-dm'>Return policy in 30 days</p>
    </div>
   </div>
    </Container>
    
</div>
  )
}

export default Three