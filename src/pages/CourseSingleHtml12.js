import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import CourseHtml12 from "../components/Courses/HTML/CourseHtml12";

const CourseSingleHtml12 = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar />

      {/* Navigation Bar */}
      <Breadcrumb title={"HTML Шляхи до файлів"} />

      {/* Course Page */}
      <CourseHtml12 />

      {/* Footer */}
      <Footer />
    </>
  );
};

export default CourseSingleHtml12;
