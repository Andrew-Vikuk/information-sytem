import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import CourseCss9 from "../components/Courses/CSS/CourseCss9";

const CourseSingleCss9 = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar />

      {/* Navigation Bar */}
      <Breadcrumb title={"Властивості CSS Border - Межа"} />

      {/* Course Page */}
      <CourseCss9 />

      {/* Footer */}
      <Footer />
    </>
  );
};

export default CourseSingleCss9;
