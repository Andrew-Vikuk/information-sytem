import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import CourseHtml9 from "../components/Courses/HTML/CourseHtml9";

const CourseSingleHtml9 = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar />

      {/* Navigation Bar */}
      <Breadcrumb title={"HTML Атрибут class"} />

      {/* Course Page */}
      <CourseHtml9 />

      {/* Footer */}
      <Footer />
    </>
  );
};

export default CourseSingleHtml9;
