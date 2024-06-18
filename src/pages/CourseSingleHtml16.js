import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import CourseHtml16 from "../components/Courses/HTML/CourseHtml16";

const CourseSingleHtml16 = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar />

      {/* Navigation Bar */}
      <Breadcrumb title={"HTML Сутності"} />

      {/* Course Page */}
      <CourseHtml16 />

      {/* Footer */}
      <Footer />
    </>
  );
};

export default CourseSingleHtml16;
