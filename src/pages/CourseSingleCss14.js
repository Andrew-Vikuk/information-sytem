import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import CourseCss14 from "../components/Courses/CSS/CourseCss14";

const CourseSingleCss14 = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar />

      {/* Navigation Bar */}
      <Breadcrumb title={"CSS Макет - float и clear"} />

      {/* Course Page */}
      <CourseCss14 />

      {/* Footer */}
      <Footer />
    </>
  );
};

export default CourseSingleCss14;
