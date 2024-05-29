import React from "react";
import logoW from "../images/logo-white.svg";
import fb from "../images/icon-facebook.svg";
import yt from "../images/icon-youtube.svg";
import tw from "../images/icon-twitter.svg";
import pi from "../images/icon-pinterest.svg";
import ins from "../images/icon-instagram.svg";

const Footer = () => {
  return (
    <div className="bg-neutral-900 ">
      <div className="flex  container mx-auto  text-[white] justify-between items-center">
        <div className="flex-col space-y-[60px] pt-[140px] pb-[140px] justify-center ">
          <img src={logoW} alt="" />
          <ul className="flex list-none gap-[8px]">
            <li>
              <img src={fb} alt="" />
            </li>
            <li>
              <img src={yt} alt="" />
            </li>
            <li>
              <img src={tw} alt="" />
            </li>
            <li>
              <img src={pi} alt="" />
            </li>
            <li>
              <img src={ins} alt="" />
            </li>
          </ul>
        </div>
        <ul className="list-none space-y-[10px]">
          <li>Home</li>
          <li>Pricing</li>
          <li>Products</li>
          <li>About Us</li>
        </ul>
        <ul className="list-none space-y-[10px]">
          <li>Careers</li>
          <li>Community</li>
          <li>Privacy Policy</li>
        </ul>
        <div className="space-x-[10px]">
          <input
            className="bg-white border-0 text-[#F25F3A] font-bold py-3 px-6 rounded-full mt-6 "
            type="text"
            placeholder="Updates in your inbox… "
          />
          <button className="bg-[#F25F3A] border-0 text-white font-bold py-3 px-8 rounded-full">
            Go
          </button>
          <p>Copyright</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
