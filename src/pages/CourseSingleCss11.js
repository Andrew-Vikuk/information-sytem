import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import CourseCss11 from "../components/Courses/CSS/CourseCss11";

const CourseSingleCss11 = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar />

      {/* Navigation Bar */}
      <Breadcrumb title={"CSS Padding - Внутрішній відступ"} />

      {/* Course Page */}
      <CourseCss11 />

      {/* Footer */}
      <Footer />
    </>
  );
};

export default CourseSingleCss11;
