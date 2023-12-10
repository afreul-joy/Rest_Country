import React, { useState, useEffect } from "react";
import axios from "axios";
import CountryCard from "../CountryCard/CountryCard";
import { Link, useNavigate } from "react-router-dom";

const CountryList = () => {
  const [countries, setCountries] = useState([]);
  
  const navigate = useNavigate();
  console.log(countries);
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


  const findExtremePopulation = (populationComparator) => {
    if (countries.length === 0) {
      return [];
    }

    const sortedCountries = [...countries].sort((a, b) => {
      const populationA = a.population?.population || 0;
      const populationB = b.population?.population || 0;
      return populationComparator(populationA, populationB);
    });
    console.log(sortedCountries[0]);
    return [sortedCountries[0]]; 
  };

  const mostPopulatedCountry = findExtremePopulation((a, b) => b - a);
  console.log(mostPopulatedCountry);
  const leastPopulatedCountry = findExtremePopulation((a, b) => a - b);
  console.log(leastPopulatedCountry);

  const handleLeastPopulatedClick = () => {
    console.log(leastPopulatedCountry);
    navigate("/least-populated", { state: { leastPopulatedCountry } });
  };
  const handleMostPopulatedClick = () => {
    console.log(mostPopulatedCountry);
    navigate("/most-populated", { state: { mostPopulatedCountry } });
  };

  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-8">Country Information</h1>

      <div className="bg-gray-200 p-4">
        <button
          className="bg-yellow-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded m-2"
          onClick={handleMostPopulatedClick}
        >
          Most Populated Country
        </button>

        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded "
          onClick={handleLeastPopulatedClick}
        >
          Least Populated Country
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
        {countries.map((country) => (
          <CountryCard key={country.cca3} country={country} />
        ))}
      </div>
    </div>
  );
};

export default CountryList;
