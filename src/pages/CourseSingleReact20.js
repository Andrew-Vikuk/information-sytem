import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import CourseReact20 from "../components/Courses/React/СourseReact20";

const CourseSingleReact20 = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar />

      {/* Navigation Bar */}
      <Breadcrumb title={"Завершальні кроки: Найкращі практики"} />

      {/* Course Page */}
      <CourseReact20/>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default CourseSingleReact20;
