import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import CourseReact15 from "../components/Courses/React/СourseReact15";

const CourseSingleReact15 = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar />

      {/* Navigation Bar */}
      <Breadcrumb title={"Робота з сервером: Аутентифікація та авторизація"} />

      {/* Course Page */}
      <CourseReact15 />

      {/* Footer */}
      <Footer />
    </>
  );
};

export default CourseSingleReact15;
