
import React, { useEffect, useRef, useState } from 'react'
import Container from './Container'
import { FaCaretDown, FaListUl, FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa'
import { IoChevronForward } from 'react-icons/io5'
import { AiOutlineBars } from 'react-icons/ai'
const Navbar = () => {
    let cateRef = useRef()
    let accRef = useRef()
    let [show, setShow] = useState(false)
    let [accshow, setAccShow] = useState(false)
    useEffect(() => {
        document.addEventListener("click", (e) => {
            if (cateRef.current.contains(e.target) == true) {
                setShow(!show)
            } else {
                setShow(false)
            }
            if (accRef.current.contains(e.target) == true) {
                setAccShow(!accshow)
            } else {
                setAccShow(false)
            }
        })
    }, [show, accshow])
  return (
    <div className='bg-[#F5F5F3] py-3'>
    <Container>
      
        <div className='lg:flex  lg:items-center gap-y-4'>
          
            <div className='w-full lg:w-2/7 relative'>
                <div className='flex items-center gap-x-2'>
                    <div
                         ref={cateRef} className='cursor-pointer' >
                            <AiOutlineBars />

                    </div>
                    <h2 className='font-dm'>Shop by Category</h2>
                </div>
                {show && (
                    <div className='py-3 bg-[#262626] absolute left-0 top-[33px] w-full z-10'>
                        <ul className='gap-x-2'>
                            <li className='text-[rgba(255,255,255,0.7)] font-dm items-center pr-2 border-b border-[#D8D8D8] pl-[20px] hover:pl-[30px] duration-300 ease-in-out'>
                                <div className='flex justify-between'>
                                    <span>Accesories</span> <IoChevronForward />
                                </div>
                            </li>
                            <li className='text-[rgba(255,255,255,0.7)] font-dm items-center pr-2 border-b-[1px] border-[#D8D8D8] pl-[20px] hover:pl-[30px] duration-300 ease-in-out'>
                                <div className='flex justify-between'>
                                    <span>Furniture</span> <IoChevronForward />
                                </div>
                            </li>
                            <li className='text-[rgba(255,255,255,0.7)] font-dm items-center pr-2 border-b-[1px] border-[#D8D8D8] pl-[20px] hover:pl-[30px] duration-300 ease-in-out'>
                                <div className='flex justify-between'>
                                    <span>Electronics</span> <IoChevronForward />
                                </div>
                            </li>
                            <li className='text-[rgba(255,255,255,0.7)] font-dm items-center pr-2 border-b-[1px] border-[#D8D8D8] pl-[20px] hover:pl-[30px] duration-300 ease-in-out'>
                                <div className='flex justify-between'>
                                    <span>Clothes</span> <IoChevronForward />
                                </div>
                            </li>
                            <li className='text-[rgba(255,255,255,0.7)] font-dm items-center pr-2 border-b-[1px] border-[#D8D8D8] pl-[20px] hover:pl-[30px] duration-300 ease-in-out'>
                                <div className='flex justify-between'>
                                    <span>Bags</span> <IoChevronForward />
                                </div>
                            </li>
                            <li className='text-[rgba(255,255,255,0.7)] font-dm items-center pr-2 border-b-[1px] border-[#D8D8D8] pl-[20px] hover:pl-[30px] duration-300 ease-in-out'>
                                <div className='flex justify-between'>
                                    <span>Home appliances</span> <IoChevronForward />
                                </div>
                            </li>
                        </ul>
                    </div>
                )}
            </div>

          
            <div className='w-full lg:w-4/7'>
                <div className='relative py-3 lg:py-0'>
                    <input
                        type="text"
                        placeholder='search...'
                        className='bg-[#fff] font-dm rounded-full pl-4 w-full py-2 text-sm'
                    />
                    <div className='absolute right-6 top-[50%] translate-y-[-50%]'>
                        <FaSearch />
                    </div>
                </div>
            </div>

           
            <div className='w-full lg:w-1/7 relative'>
                <div className='flex items-center justify-between py-2 lg:py-0 lg:justify-end gap-x-5'>
                    <div ref={accRef} className='flex items-center gap-x-1'>
                        <FaUser />
                        <FaCaretDown />
                    </div>
                    <div>
                        <FaShoppingCart />
                    </div>
                </div>
                {accshow &&
                    <div className='bg-[#fff] text-[#262626] absolute left-0 top-[33px] w-full z-50'>
                        <ul>
                            <li className='hover:bg-[#262626] hover:text-[#fff] duration-300 ease-in-out font-dm py-2 text-center'>My Account</li>
                            <li className='hover:bg-[#262626] hover:text-[#fff] duration-300 ease-in-out font-dm py-2 text-center'>Login</li>
                        </ul>
                    </div>
                }
            </div>
        </div>
    </Container>
</div>
  )
}

export default Navbar