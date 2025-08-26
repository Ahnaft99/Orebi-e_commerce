import { FaCartPlus, FaHeart } from 'react-icons/fa'
import { IoGitCompareOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

const Post = ({ allpage, filterCategory }) => {
  const [allFilter, setAllFilter] = useState([])
  const [showAll, setShowAll] = useState(true)

  useEffect(() => {
    if (filterCategory && filterCategory.length > 0) {
      setAllFilter(filterCategory)
    } else {
      setAllFilter(allpage)
    }
  }, [allpage, filterCategory])

  if (!allFilter || allFilter.length === 0) return <p>No products found.</p>

  // Determine items to display based on showAll
  const displayItems = showAll ? allFilter : allFilter.slice(0, 5)

  return (
    <div className='flex flex-wrap justify-between gap-4'>
      {displayItems.map((item) => (
        <div key={item.id} className='relative group w-full sm:w-[48%] md:w-[32%] lg:w-[24%] p-2'>
          <Link to={`/Shop/${item.id}`}>
            <img
              src={item.thumbnail}
              alt={item.title}
              className='w-full h-[180px] sm:h-[220px] md:h-[250px] lg:h-[280px] object-cover'
            />
          </Link>

          <div className='flex justify-between mt-2'>
            <p>{item.title}</p>
            <p>${item.price}</p>
          </div>

          {/* Hover actions */}
          <div className='absolute bottom-0 right-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ease-in-out bg-white w-full p-2 flex flex-col gap-1'>
            <p className='flex items-center gap-2 cursor-pointer hover:font-bold text-sm sm:text-[14px]'>
              Add to Wish List <FaHeart />
            </p>
            <p className='flex items-center gap-2 cursor-pointer hover:font-bold text-sm sm:text-[14px]'>
              Compare <IoGitCompareOutline />
            </p>
            <p className='flex items-center gap-2 cursor-pointer hover:font-bold text-sm sm:text-[14px]'>
              Add to Cart <FaCartPlus />
            </p>
          </div>

          {/* Discount badge */}
          {item.discountPercentage && (
            <div className='absolute left-0 top-0 bg-[#262626] px-1'>
              <p className='text-[#fff] text-[12px] sm:text-[14px] font-dm'>
                %{item.discountPercentage}
              </p>
            </div>
          )}
        </div>
      ))}

      {/* Show All / Show Less button */}
      {filterCategory && filterCategory.length > 5 && (
        <div className='w-full text-center mt-4'>
          <button
            className='px-6 py-2 border rounded hover:bg-black hover:text-white duration-300'
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? 'Show Less' : 'Show All'}
          </button>
        </div>
      )}
    </div>
  )
}

export default Post
