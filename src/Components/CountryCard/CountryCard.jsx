/* eslint-disable react/prop-types */
import React from "react";

const CountryCard = ({ country }) => {
  console.log(country.population);
  return (
    <div className="bg-white border rounded-lg overflow-hidden shadow-md m-4 max-w-xs">
      <div className="p-4">
        <h2 className="text-xl font-semibold mb-2">{country.name.common}</h2>
        <img src={country.flags.png} alt="" />
        <p>
          <span className="font-bold">Capital:</span> {country.capital}
        </p>
        {country.currencies && (
          <p>
            <span className="font-bold">Currency:</span>{" "}
            {Object.keys(country.currencies).map((item) => {
              const currency = country.currencies[item];
              return (
                <span key={item}>
                  {currency.name} <br />
                  <span className=" font-bold">Currency Sign: </span>(
                  {currency.symbol})
                </span>
              );
            })}
          </p>
        )}
        <p>
          <span className="font-bold">Population:</span> {country.population}
        </p>
      </div>
    </div>
  );
};

export default CountryCard;
