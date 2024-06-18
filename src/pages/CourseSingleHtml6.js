import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import CourseHtml6 from "../components/Courses/HTML/CourseHtml6";

const CourseSingleHtml6 = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar />

      {/* Navigation Bar */}
      <Breadcrumb title={"Таблиці в HTML"} />

      {/* Course Page */}
      <CourseHtml6 />

      {/* Footer */}
      <Footer />
    </>
  );
};

export default CourseSingleHtml6;
