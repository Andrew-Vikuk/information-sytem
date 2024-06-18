import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import CourseHtml13 from "../components/Courses/HTML/CourseHtml13";

const CourseSingleHtml13 = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar />

      {/* Navigation Bar */}
      <Breadcrumb title={"HTML Елемент Head"} />

      {/* Course Page */}
      <CourseHtml13 />

      {/* Footer */}
      <Footer />
    </>
  );
};

export default CourseSingleHtml13;
