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
    <div>
      {mostPopulatedCountry.map((country) => (
        <CountryCard key={country.cca3} country={country} />
      ))}
    </div>
  );
};

export default MostPopulatedCountries;
