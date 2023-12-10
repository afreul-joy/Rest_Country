import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import "./App.css";
import MostPopulatedCountries from "./Components/MostPopulatedCountries/MostPopulatedCountries";
import LeastPopulatedCountries from "./Components/LeastPopulatedCountries/LeastPopulatedCountries";
import SortCountry from "./Components/SortCountry/SortCountry";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/most-populated" element={<MostPopulatedCountries />} />
      <Route path="/least-populated" element={<LeastPopulatedCountries />} />
      <Route path="/sort" element={<SortCountry/>} />
    </Routes>
  );
}

export default App;
