import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import CourseCss6 from "../components/Courses/CSS/CourseCss6";

const CourseSingleCss6 = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar />

      {/* Navigation Bar */}
      <Breadcrumb title={"Як підключити CSS"} />

      {/* Course Page */}
      <CourseCss6 />

      {/* Footer */}
      <Footer />
    </>
  );
};

export default CourseSingleCss6;
