import React, { useState, useEffect } from "react";
import axios from "axios";
import CountryCard from "../CountryCard/CountryCard";
import { Link, useNavigate } from "react-router-dom";
import Pagination from "../Pagination/Pagination";

const CountryList = () => {
  const [countries, setCountries] = useState([]);
  const [sortOrder, setSortOrder] = useState("asc");
  const [sortedCountries, setSortedCountries] = useState([]);
  const [searchQuery, setSearchQuery] = useState(""); // Step 1

  const navigate = useNavigate();

  // console.log(countries);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("https://restcountries.com/v3.1/all");
        setCountries(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    const sortedArray = [...countries];

    sortedArray.sort((a, b) => {
      const populationA = a.population || 0;
      const populationB = b.population || 0;

      return sortOrder === "asc"
        ? populationA - populationB
        : populationB - populationA;
    });

    setSortedCountries(sortedArray);
  }, [countries, sortOrder]);

  const handleLessPopulatedClick = () => {
    const sortedArray = [...countries];
    sortedArray.sort((a, b) => a.population - b.population);
    navigate("/less-populated", {
      state: { LessPopulatedCountry: sortedArray },
    });
  };

  const handleMostPopulatedClick = () => {
    const sortedArray = [...countries];
    sortedArray.sort((a, b) => b.population - a.population);
    navigate("/most-populated", {
      state: { mostPopulatedCountry: sortedArray },
    });
  };

  // Pagination
  const itemsPerPage = 8;
  // Update the number of total pages based on the filtered blogs
  const totalPages = Math.ceil(sortedCountries.length / itemsPerPage);

  // State to keep track of the current page
  const [currentPage, setCurrentPage] = useState(1);

  // Get the current page's data to display
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentData = sortedCountries.slice(indexOfFirstItem, indexOfLastItem);

  // Function to handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // console.log(searchQuery);
  const handleSearchInputChange = (event) => {
    const query = event.target.value;
    setSearchQuery(query);

    // Filter countries based on the search query
    const filteredCountries = countries.filter((country) =>
      country.name.common.toLowerCase().includes(query.toLowerCase())
    );

    // Update the sorted countries and reset current page
    setSortedCountries(filteredCountries);
    console.log(filteredCountries);
    setCurrentPage(1);
  };

  return (
    <div className="container mx-auto p-8">
      <div className="bg-gray-200 p-4">
        <h1 className="text-center font-semibold">
          Available Total Countries: {countries.length}
        </h1>
        <input
          type="search"
          placeholder="Search Country"
          className="p-2 rounded"
          value={searchQuery}
          onChange={handleSearchInputChange}
        />
        <button
          className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded m-2"
          onClick={handleMostPopulatedClick}
        >
          Most Populated Country
        </button>

        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded "
          onClick={handleLessPopulatedClick}
        >
          Less Populated Country
        </button>
      </div>

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
    </div>
  );
};

export default CountryList;
