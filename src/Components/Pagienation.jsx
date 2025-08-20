import React from 'react'

const Pagienation = ({ pageNumber = [], currentPage, setCurrentPage }) => {
  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1)
  }

  const handleNext = () => {
    if (currentPage < pageNumber.length) setCurrentPage(currentPage + 1)
  }

  return (
    <nav aria-label="Page navigation example">
      <ul className="inline-flex -space-x-px text-sm">
        <li>
          <button
            onClick={handlePrev}
            className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700"
          >
            Previous
          </button>
        </li>

        {pageNumber.map((num) => (
          <li key={num}>
            <button
              onClick={() => setCurrentPage(num)}
              className={`flex items-center justify-center px-3 h-8 leading-tight border border-gray-300 ${
                num === currentPage
                  ? 'bg-blue-500 text-white'
                  : 'bg-white text-gray-500 hover:bg-gray-100 hover:text-gray-700'
              }`}
            >
              {num}
            </button>
          </li>
        ))}

        <li>
          <button
            onClick={handleNext}
            className="flex items-center justify-center px-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-e-lg hover:bg-gray-100 hover:text-gray-700"
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default Pagienation
