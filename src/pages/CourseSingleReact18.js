import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import CourseReact18 from "../components/Courses/React/СourseReact18";

const CourseSingleReact18 = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar />

      {/* Navigation Bar */}
      <Breadcrumb title={"Оптимізація: Тестування"} />

      {/* Course Page */}
      <CourseReact18/>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default CourseSingleReact18;
