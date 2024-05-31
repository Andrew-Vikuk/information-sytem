import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import CourseCss3 from "../components/Courses/CSS/CourseCss3";

const CourseSingleCss3 = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar />

      {/* Navigation Bar */}
      <Breadcrumb title={"Анімація та переходи в CSS"} />

      {/* Course Page */}
      <CourseCss3 />

      {/* Footer */}
      <Footer />
    </>
  );
};

export default CourseSingleCss3;
