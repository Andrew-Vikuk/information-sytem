import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import CourseHtml14 from "../components/Courses/HTML/CourseHtml14";

const CourseSingleHtml14 = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar />

      {/* Navigation Bar */}
      <Breadcrumb title={"HTML Макети"} />

      {/* Course Page */}
      <CourseHtml14 />

      {/* Footer */}
      <Footer />
    </>
  );
};

export default CourseSingleHtml14;
