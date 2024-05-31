import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import CourseCss4 from "../components/Courses/CSS/CourseCss4";

const CourseSingleCss4 = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar />

      {/* Navigation Bar */}
      <Breadcrumb title={"CSS Синтаксис"} />

      {/* Course Page */}
      <CourseCss4 />

      {/* Footer */}
      <Footer />
    </>
  );
};

export default CourseSingleCss4;
