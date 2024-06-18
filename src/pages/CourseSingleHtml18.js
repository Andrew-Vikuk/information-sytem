import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import CourseHtml18 from "../components/Courses/HTML/CourseHtml18";

const CourseSingleHtml18 = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar />

      {/* Navigation Bar */}
      <Breadcrumb title={"HTML URL - Уніфіковані локатори ресурсів"} />

      {/* Course Page */}
      <CourseHtml18 />

      {/* Footer */}
      <Footer />
    </>
  );
};

export default CourseSingleHtml18;
