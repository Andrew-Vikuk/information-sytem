import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import CourseReact3 from "../components/Courses/React/СourseReact3";

const CourseSingleReact3 = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar />

      {/* Navigation Bar */}
      <Breadcrumb title={"Основи: JSX"} />

      {/* Course Page */}
      <CourseReact3 />

      {/* Footer */}
      <Footer />
    </>
  );
};

export default CourseSingleReact3;
