import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import CourseCss12 from "../components/Courses/CSS/CourseCss12";

const CourseSingleCss12 = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar />

      {/* Navigation Bar */}
      <Breadcrumb title={"CSS Значення height/width"} />

      {/* Course Page */}
      <CourseCss12 />

      {/* Footer */}
      <Footer />
    </>
  );
};

export default CourseSingleCss12;
