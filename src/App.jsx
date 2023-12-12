import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import "./App.css";
import MostPopulatedCountries from "./Components/MostPopulatedCountries/MostPopulatedCountries";
import LessPopulatedCountries from "./Components/LessPopulatedCountries/LessPopulatedCountries";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Asia from "./Components/Asia/Asia";
import Europe from "./Components/Europe/Europe";
import Africa from "./Components/Africa/Africa";

function App() {
  return (
    <>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/most-populated" element={<MostPopulatedCountries />} />
        <Route path="/less-populated" element={<LessPopulatedCountries />} />
        <Route path="/asia" element={<Asia />} />
        <Route path="/europe" element={<Europe />} />
        <Route path="/africa" element={<Africa />} />
      </Routes>
      <Footer></Footer>
    </>
  );
}

export default App;
