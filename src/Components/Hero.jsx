import React from "react";
import image from "../images/illustration-intro.svg";

const Hero = () => {
  return (
    <div className="container mx-auto flex mt-[120px] inline-block gap-x-8 justify-between">
      <div className="flex-1/2 ">
        <h1 className="text-6xl">Bring everyone together to build better products.</h1>
        <p className="leading-6">
          Manage makes it simple for software teams<br/> to plan day-to-day tasks
          while keeping the<br/> larger team goals in view.
        </p>
        <button className="bg-[#F25F3A] border-0 text-white font-bold py-3 px-6 rounded-full mt-6">Get Started</button>
      </div>

      <div className="flex-1/2 ">
        <img src={image} alt="" />
      </div>

    </div>
  );
};

export default Hero;
