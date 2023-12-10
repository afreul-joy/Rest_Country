import React from "react";
import { useLocation } from "react-router-dom";
import CountryCard from "../CountryCard/CountryCard";

const MostPopulatedCountries = () => {
  const location = useLocation();
  const { mostPopulatedCountry } = location.state;

  console.log(mostPopulatedCountry);
  // Check if leastPopulatedCountry is defined and is an array
  if (!mostPopulatedCountry || !Array.isArray(mostPopulatedCountry)) {
    return <div>No data available</div>;
  }

  return (
    <>
      <h2 className="text-xl font-semibold mb-2">Most Populated</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
        {mostPopulatedCountry.map((country) => (
          <CountryCard key={country.cca3} country={country} />
        ))}
      </div>
    </>
  );
};

export default MostPopulatedCountries;
