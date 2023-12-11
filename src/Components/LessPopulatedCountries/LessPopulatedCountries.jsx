import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import CountryCard from "../CountryCard/CountryCard";
import Pagination from "../Pagination/Pagination";

const LessPopulatedCountries = () => {
  const location = useLocation();
  const { LessPopulatedCountry } = location.state;

  console.log(LessPopulatedCountry);
  // Check if LessPopulatedCountry is defined and is an array
  if (!LessPopulatedCountry || !Array.isArray(LessPopulatedCountry)) {
    return <div>No data available</div>;
  }

  // Pagination
  const itemsPerPage = 8;
  // Update the number of total pages based on the filtered blogs
  const totalPages = Math.ceil(LessPopulatedCountry.length / itemsPerPage);

  // State to keep track of the current page
  const [currentPage, setCurrentPage] = useState(1);

  // Get the current page's data to display
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = LessPopulatedCountry.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  // Function to handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <h2 className="text-xl font-semibold mb-2 text-center p-2 bg-slate-300">
        Less Populated Countries
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 gap-8">
        {currentData.map((country) => (
          <CountryCard key={country.cca3} country={country} />
        ))}
      </div>
      <div className="mx-auto">
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </>
  );
};

export default LessPopulatedCountries;
