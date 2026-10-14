import React from "react";
import Navbar from "../components/shared/Navbar";
import Hero from "../components/Hero";

const Home = () => {
  return (
    <div>
      <div className="min-h-screen bg-white">
        <Navbar />
        <Hero />
      </div>
    </div>
  );
};

export default Home;
