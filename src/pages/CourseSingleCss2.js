import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import CourseCss2 from "../components/Courses/CSS/CourseCss2";

const CourseSingleCss2 = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar />

      {/* Navigation Bar */}
      <Breadcrumb title={"Розмітка та позиціонування в CSS: Вступ"} />

      {/* Course Page */}
      <CourseCss2 />

      {/* Footer */}
      <Footer />
    </>
  );
};

export default CourseSingleCss2;
