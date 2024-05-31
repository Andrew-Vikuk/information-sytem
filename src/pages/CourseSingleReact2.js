import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import CourseReact2 from "../components/Courses/React/CourseReact2";

const CourseSingleReact2 = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar />

      {/* Navigation Bar */}
      <Breadcrumb title={"Початок роботи з ReactJS"} />

      {/* Course Page */}
      <CourseReact2 />

      {/* Footer */}
      <Footer />
    </>
  );
};

export default CourseSingleReact2;
