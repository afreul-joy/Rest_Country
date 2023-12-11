import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-white hover:text-gray-300">
            <div className="text-white font-bold text-lg">
              Country Information
            </div>
          </Link>

          {/* Navigation Links */}
          <ul className="flex space-x-4">
            <li>
              <Link to="/" className="text-white hover:text-gray-300">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="text-white hover:text-gray-300">
                About
              </Link>
            </li>
            <li>
              <Link to="/services" className="text-white hover:text-gray-300">
                Services
              </Link>
            </li>
            <li>
              <Link to="/contact" className="text-white hover:text-gray-300">
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
