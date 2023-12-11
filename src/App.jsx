import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import "./App.css";
import MostPopulatedCountries from "./Components/MostPopulatedCountries/MostPopulatedCountries";
import LessPopulatedCountries from "./Components/LessPopulatedCountries/LessPopulatedCountries";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/most-populated" element={<MostPopulatedCountries />} />
        <Route path="/less-populated" element={<LessPopulatedCountries />} />
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
