import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import CourseHtml2 from "../components/Courses/HTML/CourseHtml2";

const CourseSingleHtml2 = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar />

      {/* Navigation Bar */}
      <Breadcrumb title={"Форми в HTML: Основні концепції"} />

      {/* Course Page */}
      <CourseHtml2 />

      {/* Footer */}
      <Footer />
    </>
  );
};

export default CourseSingleHtml2;
