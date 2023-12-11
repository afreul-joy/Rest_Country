import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import "./App.css";
import MostPopulatedCountries from "./Components/MostPopulatedCountries/MostPopulatedCountries";
import LessPopulatedCountries from "./Components/LeastPopulatedCountries/LeastPopulatedCountries";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/most-populated" element={<MostPopulatedCountries />} />
      <Route path="/less-populated" element={<LessPopulatedCountries />} />
 
    </Routes>
  );
}

export default App;
