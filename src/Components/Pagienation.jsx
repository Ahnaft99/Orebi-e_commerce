import React from 'react'

const Pagination = ({ pageNumber = [], currentPage, setCurrentPage }) => {
  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1)
  }

  const handleNext = () => {
    if (currentPage < pageNumber.length) setCurrentPage(currentPage + 1)
  }

  return (
    <nav aria-label="Page navigation">
      <ul className="inline-flex -space-x-px text-sm">
        {/* Previous Button */}
        <li>
          <button
            onClick={handlePrev}
            disabled={currentPage === 1}
            className={`flex items-center justify-center px-3 h-8 ms-0 leading-tight border border-gray-300 rounded-l-lg ${
              currentPage === 1
                ? 'text-gray-300 bg-gray-100 cursor-not-allowed'
                : 'text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700'
            }`}
          >
            Previous
          </button>
        </li>

        {/* Page Numbers */}
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

        {/* Next Button */}
        <li>
          <button
            onClick={handleNext}
            disabled={currentPage === pageNumber.length}
            className={`flex items-center justify-center px-3 h-8 leading-tight border border-gray-300 rounded-r-lg ${
              currentPage === pageNumber.length
                ? 'text-gray-300 bg-gray-100 cursor-not-allowed'
                : 'text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700'
            }`}
          >
            Next
          </button>
        </li>
      </ul>
    </nav>
  )
}

export default Pagination
