import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import CourseCss18 from "../components/Courses/CSS/CourseCss18";

const CourseSingleCss18 = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar />

      {/* Navigation Bar */}
      <Breadcrumb title={"CSS Псевдо-елементи"} />

      {/* Course Page */}
      <CourseCss18 />

      {/* Footer */}
      <Footer />
    </>
  );
};

export default CourseSingleCss18;
