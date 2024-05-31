import React from "react";
import AboutArea from "../components/AboutArea";
import Banner from "../components/Banner";
import ContactArea from "../components/ContactArea";
import CounterArea from "../components/CounterArea";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import CoursesAreaCategories from "../components/CoursesAreaCategories";


const HomeOne = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar />

      {/* Banner */}
      <Banner />

      {/* About Area */}
      <AboutArea />

      {/* Courses Area */}
      <CoursesAreaCategories /> 

      {/* Counter Area */}
      <CounterArea />

      {/* Contact Area */}
      <ContactArea />

      {/* Footer */}
      <Footer />
    </>
  );
};

export default HomeOne;
