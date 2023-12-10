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
    <>
      <h2 className="text-xl font-semibold mb-2">Least Populated</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8">
        {leastPopulatedCountry.map((country) => (
          <CountryCard key={country.cca3} country={country} />
        ))}
      </div>
    </>
  );
};

export default LeastPopulatedCountries;
