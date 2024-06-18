import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import CourseCss17 from "../components/Courses/CSS/CourseCss17";

const CourseSingleCss17 = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar />

      {/* Navigation Bar */}
      <Breadcrumb title={"CSS Псевдо-класси"} />

      {/* Course Page */}
      <CourseCss17 />

      {/* Footer */}
      <Footer />
    </>
  );
};

export default CourseSingleCss17;
