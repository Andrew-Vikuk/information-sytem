import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import CourseHtml4 from "../components/Courses/HTML/CourseHtml4";

const CourseSingleHtml4 = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar />

      {/* Navigation Bar */}
      <Breadcrumb title={"Основи форматування тексту в HTML"} />

      {/* Course Page */}
      <CourseHtml4 />

      {/* Footer */}
      <Footer />
    </>
  );
};

export default CourseSingleHtml4;
