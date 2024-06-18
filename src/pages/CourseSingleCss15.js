import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import CourseCss15 from "../components/Courses/CSS/CourseCss15";

const CourseSingleCss15 = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar />

      {/* Navigation Bar */}
      <Breadcrumb title={"Горизонтальне & Вертикальне вирівнювання"} />

      {/* Course Page */}
      <CourseCss15 />

      {/* Footer */}
      <Footer />
    </>
  );
};

export default CourseSingleCss15;
