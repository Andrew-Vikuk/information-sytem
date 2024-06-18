import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import CourseHtml10 from "../components/Courses/HTML/CourseHtml10";

const CourseSingleHtml10 = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar />

      {/* Navigation Bar */}
      <Breadcrumb title={"HTML Атрибут ID"} />

      {/* Course Page */}
      <CourseHtml10 />

      {/* Footer */}
      <Footer />
    </>
  );
};

export default CourseSingleHtml10;
