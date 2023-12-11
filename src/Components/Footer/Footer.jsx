import React from "react";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-gray-300 p-8 flex justify-between items-center">
      <div className="flex flex-col">
        <p className="text-lg font-semibold mb-2">Contact Us</p>
        <p className="text-sm">123 Classic Street</p>
        <p className="text-sm">Cityville, State 12345</p>
        <p className="text-sm">info@Country.com</p>
      </div>
      <div className="flex flex-col">
        <p className="text-lg font-semibold mb-2">Follow Us</p>
        <div className="flex space-x-4">
          <SocialLink to="/facebook" icon={<FaFacebook size={24} />} />
          <SocialLink to="/twitter" icon={<FaTwitter size={24} />} />
          <SocialLink to="/instagram" icon={<FaInstagram size={24} />} />
        </div>
      </div>
      <div className="flex flex-col">
        <p className="text-lg font-semibold mb-2">© 2023 Country Info</p>
        <p className="text-sm">All rights reserved.</p>
      </div>
    </footer>
  );
};

const SocialLink = ({ to, icon }) => (
  <Link to={to} className="text-gray-500 hover:text-gray-200">
    {icon}
  </Link>
);

export default Footer;
