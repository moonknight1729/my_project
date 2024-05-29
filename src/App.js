import React from "react";
import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Testimonials from "./Components/Testimonials";
import "./App.css";
import Footer from "./Components/Footer";
import Work from "./Components/Work";

const App = () => {
  return (
    <div className="bg-[#fafafa]  pt-[40px]">
      <Navbar />
      <Hero/>
      <About/>
      <Testimonials/>
      <Work/>
      <Footer/>
    </div>
  );
};

export default App;
