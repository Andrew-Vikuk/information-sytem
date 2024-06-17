import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import CourseCss13 from "../components/Courses/CSS/CourseCss13";

const CourseSingleCss13 = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar />

      {/* Navigation Bar */}
      <Breadcrumb title={"CSS Макет - Overflow"} />

      {/* Course Page */}
      <CourseCss13 />

      {/* Footer */}
      <Footer />
    </>
  );
};

export default CourseSingleCss13;
