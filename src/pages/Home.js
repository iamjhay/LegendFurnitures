import React from "react";
import About from "../components/AboutSection/About";
import Contact from "../components/Contact/Contact";
import Filter from "../components/FilterSection";
import Footer from "../components/Footer/Footer";
import Hero from "../components/HeroSection/Hero";
import Info from "../components/InfoSection/Info";
import ModalPopup from "../components/modal/modal";
// import Modern from "../components/Modern/Modern";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <div className="dark:bg-primary bg-gray-50">
        <Navbar />
        <Hero />
        <About />
        <Info />
        {/* <Modern /> */}
        <Filter />
        <ModalPopup />
        <Contact />
        <Footer />
      </div>
    </>
  );
};

export default Home;
