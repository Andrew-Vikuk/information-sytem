import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import CourseReact1 from "../components/Courses/React/CourseReact1";

const CourseSingleReact1 = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar />

      {/* Navigation Bar */}
      <Breadcrumb title={"Вступ до ReactJS"} />

      {/* Course Page */}
      <CourseReact1 />

      {/* Footer */}
      <Footer />
    </>
  );
};

export default CourseSingleReact1;
