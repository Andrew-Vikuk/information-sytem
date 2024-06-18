import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import CourseHtml15 from "../components/Courses/HTML/CourseHtml15";

const CourseSingleHtml15 = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar />

      {/* Navigation Bar */}
      <Breadcrumb title={"HTML Адаптивний веб-дизайн"} />

      {/* Course Page */}
      <CourseHtml15 />

      {/* Footer */}
      <Footer />
    </>
  );
};

export default CourseSingleHtml15;
