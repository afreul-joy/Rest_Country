import React, { useState } from 'react';
import './Pagination.css';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = [];
  const maxButtonsToShow = 5;
  const [inputPage, setInputPage] = useState('');

  // Generate an array of page numbers to display in the pagination
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  // Calculate the range of buttons to display
  const startRange = Math.max(1, currentPage - Math.floor(maxButtonsToShow / 2));
  const endRange = Math.min(totalPages, startRange + maxButtonsToShow - 1);

  const handleInputChange = (event) => {
    const input = event.target.value;
    setInputPage(input.replace(/[^0-9]/g, '')); // Remove non-numeric characters
  };

  const handleGoButtonClick = () => {
    // Validate the input to be a valid positive number and within the range
    const pageNumber = parseInt(inputPage, 10);
    if (!isNaN(pageNumber) && pageNumber >= 1 && pageNumber <= totalPages) {
      onPageChange(pageNumber);
    }
  };

  return (
    <nav className="flex items-center justify-center my-4">
      <ul className="pagination">
        {/* Previous button */}
        <li
          onClick={() => onPageChange(currentPage - 1)}
          className={`px-3 py-1 cursor-pointer ${
            currentPage === 1 ? 'bg-gray-200' : 'bg-blue-500 text-white'
          }`}
        >
          Previous
        </li>

        {/* Page buttons */}
        {pageNumbers
          .filter((number) => number >= startRange && number <= endRange)
          .map((number) => (
            <li
              key={number}
              onClick={() => onPageChange(number)}
              className={`px-3 py-1 cursor-pointer ${
                currentPage === number ? 'bg-blue-500 text-white' : 'bg-gray-200'
              }`}
            >
              {number}
            </li>
          ))}

        {/* Next button */}
        <li
          onClick={() => onPageChange(currentPage + 1)}
          className={`px-3 py-1 cursor-pointer ${
            currentPage === totalPages ? 'bg-gray-200' : 'bg-blue-500 text-white'
          }`}
        >
          Next
        </li>

        {/* Input field and Go button for manual page input */}
        <div className="flex items-center ml-4">
          <input
            type="text" 
            value={inputPage}
            onChange={handleInputChange}
            className="border px-2 py-1 mr-2"
            placeholder="Page"
          />
          <button
            onClick={handleGoButtonClick}
            className="bg-blue-500 text-white px-3 py-1 rounded cursor-pointer"
          >
            Go
          </button>
        </div>
      </ul>
    </nav>
  );
};

export default Pagination;
