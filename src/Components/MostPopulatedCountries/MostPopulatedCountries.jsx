import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import CountryCard from "../CountryCard/CountryCard";
import Pagination from "../Pagination/Pagination";

const MostPopulatedCountries = () => {
  const location = useLocation();
  const { mostPopulatedCountry } = location.state;

  console.log(mostPopulatedCountry);
  // Check if LessPopulatedCountry is defined and is an array
  if (!mostPopulatedCountry || !Array.isArray(mostPopulatedCountry)) {
    return <div>No data available</div>;
  }

  // Pagination
  const itemsPerPage = 8;
  // Update the number of total pages based on the filtered blogs
  const totalPages = Math.ceil(mostPopulatedCountry.length / itemsPerPage);

  // State to keep track of the current page
  const [currentPage, setCurrentPage] = useState(1);

  // Get the current page's data to display
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = mostPopulatedCountry.slice(
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
        Most Populated Countries
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

export default MostPopulatedCountries;
