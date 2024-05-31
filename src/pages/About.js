import React from "react";
import AboutArea from "../components/AboutArea";
import Breadcrumb from "../components/Breadcrumb";
import ContactArea from "../components/ContactArea";
import CounterArea from "../components/CounterArea";
import FaqAreaOne from "../components/FaqArea";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";


const About = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar />

      {/* Navigation Bar */}
      <Breadcrumb title={"Про Нас"} />

      {/* About Area */}
      <AboutArea />

      {/* FAQ Area*/}
      <FaqAreaOne />

      {/* Counter Area*/}
      <CounterArea />

      {/* Contact Area */}
      <ContactArea />

      {/* FooterArea */}
      <Footer />
    </>
  );
};

export default About;
