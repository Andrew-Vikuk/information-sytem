import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import CourseCss5 from "../components/Courses/CSS/CourseCss5";

const CourseSingleCss5 = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar />

      {/* Navigation Bar */}
      <Breadcrumb title={"CSS Селектори"} />

      {/* Course Page */}
      <CourseCss5 />

      {/* Footer */}
      <Footer />
    </>
  );
};

export default CourseSingleCss5;
