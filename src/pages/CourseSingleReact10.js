import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import CourseReact10 from "../components/Courses/React/СourseReact10";

const CourseSingleReact10 = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar />

      {/* Navigation Bar */}
      <Breadcrumb title={"Хуки: Основні хуки"} />

      {/* Course Page */}
      <CourseReact10 />

      {/* Footer */}
      <Footer />
    </>
  );
};

export default CourseSingleReact10;
