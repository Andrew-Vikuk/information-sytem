import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import CourseReact5 from "../components/Courses/React/СourseReact5";

const CourseSingleReact5 = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar />

      {/* Navigation Bar */}
      <Breadcrumb title={"Основи: Стилізація компонентів"} />

      {/* Course Page */}
      <CourseReact5 />

      {/* Footer */}
      <Footer />
    </>
  );
};

export default CourseSingleReact5;
