import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import CourseReact4 from "../components/Courses/React/СourseReact4";

const CourseSingleReact4 = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar />

      {/* Navigation Bar */}
      <Breadcrumb title={"Основи: Компоненти"} />

      {/* Course Page */}
      <CourseReact4 />

      {/* Footer */}
      <Footer />
    </>
  );
};

export default CourseSingleReact4;
