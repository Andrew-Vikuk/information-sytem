import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import CourseReact11 from "../components/Courses/React/СourseReact11";

const CourseSingleReact11 = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar />

      {/* Navigation Bar */}
      <Breadcrumb title={"Хуки: Додаткові хуки"} />

      {/* Course Page */}
      <CourseReact11 />

      {/* Footer */}
      <Footer />
    </>
  );
};

export default CourseSingleReact11;
