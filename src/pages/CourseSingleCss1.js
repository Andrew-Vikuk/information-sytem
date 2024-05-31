import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import CourseCss1 from "../components/Courses/CSS/CourseCss1";

const CourseSingleCss1 = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar />

      {/* Navigation Bar */}
      <Breadcrumb title={"Основи CSS: Вступ"} />

      {/* Course Page */}
      <CourseCss1 />

      {/* Footer */}
      <Footer />
    </>
  );
};

export default CourseSingleCss1;
