import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import CourseCss16 from "../components/Courses/CSS/CourseCss16";

const CourseSingleCss16 = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar />

      {/* Navigation Bar */}
      <Breadcrumb title={"CSS Комбінатори"} />

      {/* Course Page */}
      <CourseCss16 />

      {/* Footer */}
      <Footer />
    </>
  );
};

export default CourseSingleCss16;
