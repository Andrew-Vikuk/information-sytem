import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import CourseHtml3 from "../components/Courses/HTML/CourseHtml3";

const CourseSingleHtml3 = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar />

      {/* Navigation Bar */}
      <Breadcrumb title={"Семантичні теги HTML"} />

      {/* Course Page */}
      <CourseHtml3 />

      {/* Footer */}
      <Footer />
    </>
  );
};

export default CourseSingleHtml3;
