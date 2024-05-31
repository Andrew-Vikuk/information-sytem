import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import CoursesArea from "../components/CoursesArea";
import CategoriesNavigation from "../components/CategoriesNavigation";



const Courses = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar />

      {/* Navigation Bar */}
      <Breadcrumb title={"Курси"} />

    
      {/* Categories Navigation */}
      <CategoriesNavigation />

      {/* Courses Area */}
      <CoursesArea />

      {/* Footer */}
      <Footer />
    </>
  );
};

export default Courses;
