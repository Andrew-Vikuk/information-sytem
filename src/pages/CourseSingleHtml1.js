import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import CourseHtml1 from "../components/Courses/HTML/CourseHtml1";

const CourseSingleHtml1 = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar />

      {/* Navigation Bar */}
      <Breadcrumb title={"Основи HTML: Поглиблене вивчення"} />

      {/* Course Page */}
      <CourseHtml1 />

      {/* Footer */}
      <Footer />
    </>
  );
};

export default CourseSingleHtml1;
