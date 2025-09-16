import React, { useContext, useEffect, useRef, useState } from 'react'
import Container from './Container'
import { FaAngleDown } from 'react-icons/fa'
import { AiOutlineBars, AiOutlineAppstore } from 'react-icons/ai'

import { ApiData } from './ContextApi'
import Post from './Post'
import Pagienation from './Pagienation'

const ProductDisplay = () => {
  const { info } = useContext(ApiData)
  const categoryRef = useRef()

  const [catshow, setCatShow] = useState(false)
  const [perPage, setPerPage] = useState(6)
  const [currentPage, setCurrentPage] = useState(1)
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [active, setActive] = useState("grid") // for view toggle

  // Filter items by selected category
  const filteredInfo = selectedCategory
    ? info?.filter(item => item.category === selectedCategory)
    : info

  const lastPage = perPage * currentPage
  const firstPage = lastPage - perPage
  const allpage = filteredInfo?.slice(firstPage, lastPage) || []

  const pageNumber = []
  for (let i = 1; i <= Math.ceil((filteredInfo?.length || 0) / perPage); i++) {
    pageNumber.push(i)
  }

  // Handle outside click for category dropdown
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (categoryRef.current && !categoryRef.current.contains(e.target)) {
        setCatShow(false)
      }
    }
    document.addEventListener('click', handleClickOutside)
    return () => document.removeEventListener('click', handleClickOutside)
  }, [])

  // Handle category click
  const handleCategoryClick = (cat) => {
    setSelectedCategory(cat)
    setCurrentPage(1)
    setCatShow(false)
  }

  // Handle "All" categories click
  const handleAllClick = () => {
    setSelectedCategory(null)
    setCurrentPage(1)
    setCatShow(false)
  }

  return (
    <div className='py-5 items-center'>
      <Container>
        <div className='w-full flex items-start'>

          {/* Category Sidebar */}
          <div className='w-3/12'>
            <h1
              ref={categoryRef}
              onClick={() => setCatShow(!catshow)}
              className='cursor-pointer text-[20px] font-dm font-bold'
            >
              Shop By Category
            </h1>
            <ul>
              <li
                onClick={handleAllClick}
                className="text-[#767676] text-[16px] font-dm py-2 hover:font-bold"
              >
                All
              </li>
            </ul>
            {catshow && (
              <ul className='bg-white shadow-lg p-2 mt-2 cursor-pointer'>
                {Array.from(new Set(info?.map(item => item.category))).map((cat, i) => (
                  <li
                    key={i}
                    onClick={() => handleCategoryClick(cat)}
                    className="text-[#767676] text-[16px] font-dm py-2 hover:font-bold"
                  >
                    {cat}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Products Section */}
          <div className='w-9/12'>
            <div className='flex gap-2 items-start mb-4'>
              {/* Toggle View Icons */}
              <AiOutlineAppstore
                onClick={() => setActive("grid")}
                className={`text-[22px] cursor-pointer p-1 rounded ${active === "grid"
                    ? "bg-black text-white"
                    : "hover:bg-black hover:text-white"
                  }`}
              />

              <AiOutlineBars
                onClick={() => setActive("list")}
                className={`text-[22px] cursor-pointer p-1 rounded ${active === "list"
                    ? "bg-black text-white"
                    : "hover:bg-black hover:text-white"
                  }`}
              />


              {/* Sort By */}
              <div className='flex relative ml-[200px]'>
                <h1 className='text-[16px] font-dm text-[#767676]'>Sortby:</h1>
                <input type="text" className='border' />
                <p className='absolute top-[5px] left-[210px] font-dm text-[#767676]'>
                  <FaAngleDown />
                </p>
              </div>

              {/* Show per page */}
              <div className='flex relative'>
                <h1 className='text-[16px] font-dm text-[#767676]'>Show:</h1>
                <select
                  className='border w-[100px]'
                  value={perPage}
                  onChange={(e) => {
                    setPerPage(Number(e.target.value))
                    setCurrentPage(1)
                  }}
                >
                  <option value={6}>6</option>
                  <option value={8}>8</option>
                  <option value={10}>10</option>
                  <option value={12}>12</option>
                </select>
              </div>
            </div>

            {/* Posts */}
            <div className='py-10'>
              <Post allpage={allpage} view={active} />
            </div>

            {/* Pagination */}
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
