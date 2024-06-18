import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import CourseCss10 from "../components/Courses/CSS/CourseCss10";

const CourseSingleCss10 = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar />

      {/* Navigation Bar */}
      <Breadcrumb title={"CSS Margin - Поля"} />

      {/* Course Page */}
      <CourseCss10 />

      {/* Footer */}
      <Footer />
    </>
  );
};

export default CourseSingleCss10;
