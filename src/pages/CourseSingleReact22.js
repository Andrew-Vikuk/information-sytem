import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import CourseReact22 from "../components/Courses/React/СourseReact22";

const CourseSingleReact22 = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar />

      {/* Navigation Bar */}
      <Breadcrumb title={"Додатково: Анімації"} />

      {/* Course Page */}
      <CourseReact22/>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default CourseSingleReact22;
