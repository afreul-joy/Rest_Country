import React from "react";
import { useLocation } from "react-router-dom";
import CountryCard from "../CountryCard/CountryCard";

const LeastPopulatedCountries = () => {
  const location = useLocation();
  const { leastPopulatedCountry } = location.state;


  if (!leastPopulatedCountry || !Array.isArray(leastPopulatedCountry)) {
    return <div>No data available</div>;
  }

  return (
    <div>
      {leastPopulatedCountry.map((country) => (
        <CountryCard key={country.cca3} country={country} />
      ))}
    </div>
  );
};

export default LeastPopulatedCountries;
