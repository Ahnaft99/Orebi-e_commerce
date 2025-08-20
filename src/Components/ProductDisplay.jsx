import React, { useContext, useEffect, useRef, useState } from 'react'
import Container from './Container'
import { FaAngleDown } from 'react-icons/fa'
import { AiOutlineBars } from 'react-icons/ai'
import { ApiData } from './ContextApi'
import Post from './Post'
import Pagienation from './Pagienation'

const ProductDisplay = () => {
  const { info } = useContext(ApiData)
  const categoryRef = useRef()
  const [catshow, setcatShow] = useState(false)
  const [perPage, setPerPage] = useState(6)
  const [currentPage, setCurrentPage] = useState(1)

  const lastPage = perPage * currentPage
  const firstPage = lastPage - perPage
  const allpage = info?.slice(firstPage, lastPage) || []

  const pageNumber = []
  for (let i = 1; i <= Math.ceil((info?.length || 0) / perPage); i++) {
    pageNumber.push(i)
  }

  useEffect(() => {
    const handleClick = (e) => {
      if (categoryRef.current?.contains(e.target)) {
        setcatShow(!catshow)
      } else {
        setcatShow(false)
      }
    }
    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [catshow])

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
                {['Category 1','Category 2','Category 3','Category 4','Category 5'].map((cat, i) => (
                  <li key={i} className='text-[#767676] text-[16px] font-dm py-2'>
                    {cat} <span className='ml-[20px]'>+</span>
                  </li>
                ))}
              </ul>
            )}
          </div>

        
          <div className='w-9/12'>
            <div className='flex gap-2 items-start mb-4'>
              <AiOutlineBars className='text-[20px] hover:bg-black hover:text-white ease-in-out' />
              <AiOutlineBars className='text-[20px] hover:bg-black hover:text-white ease-in-out' />
              <div className='flex relative ml-[200px]'>
                <h1 className='text-[16px] font-dm text-[#767676]'>Sortby:</h1>
                <input type="text" className='border' />
                <p className='absolute top-[5px] left-[210px] font-dm text-[#767676]'>
                  <FaAngleDown />
                </p>
              </div>
              <div className='flex relative'>
                <h1 className='text-[16px] font-dm text-[#767676]'>Show:</h1>
                <input type="text" className='border' />
                <p className='absolute top-[5px] left-[210px] font-dm text-[#767676]'>
                  <FaAngleDown />
                </p>
              </div>
            </div>

            <div className='py-10'>
              <Post allpage={allpage} />
            </div>

          
            <Pagienation
              pageNumber={pageNumber}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </div>
        </div>
      </Container>
    </div>
  )
}

export default ProductDisplay
