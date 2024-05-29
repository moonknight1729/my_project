import React from "react";
import logo from "../images/logo.svg";

const Navbar = () => {
  return (
    <nav className="container mt-10  mx-auto flex justify-between items-center ">
      <div>
        <img src={logo} alt="" />
      </div>

      <ul className="flex gap-x-4  list-none">
        <li>Pricing</li>
        <li>Products</li>
        <li>About Us</li>
        <li>Community</li>
        <li>Career</li>
      </ul>

      <button className="bg-[#F25F3A] border-0 text-white font-bold py-3 px-4 rounded-full basis-32 ">
        Get Started
      </button>
    </nav>
  );
};

export default Navbar;
