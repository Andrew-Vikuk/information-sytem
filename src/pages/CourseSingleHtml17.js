import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import CourseHtml17 from "../components/Courses/HTML/CourseHtml17";

const CourseSingleHtml17 = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar />

      {/* Navigation Bar */}
      <Breadcrumb title={"Використання емодзі в HTML"} />

      {/* Course Page */}
      <CourseHtml17 />

      {/* Footer */}
      <Footer />
    </>
  );
};

export default CourseSingleHtml17;
