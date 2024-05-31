import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import CourseCss8 from "../components/Courses/CSS/CourseCss8";

const CourseSingleCss8 = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar />

      {/* Navigation Bar */}
      <Breadcrumb title={"CSS Background - Фон"} />

      {/* Course Page */}
      <CourseCss8 />

      {/* Footer */}
      <Footer />
    </>
  );
};

export default CourseSingleCss8;
