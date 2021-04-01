import React from "react";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import Philosophy from "../components/Philosophy";
import Hero from "../components/Hero";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Slider />
      <Philosophy />
      <Hero />
    </>
  );
}

export default Home;
