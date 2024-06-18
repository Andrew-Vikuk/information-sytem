import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import CourseHtml11 from "../components/Courses/HTML/CourseHtml11";

const CourseSingleHtml11 = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar />

      {/* Navigation Bar */}
      <Breadcrumb title={"HTML Iframes - Фрейми"} />

      {/* Course Page */}
      <CourseHtml11 />

      {/* Footer */}
      <Footer />
    </>
  );
};

export default CourseSingleHtml11;
