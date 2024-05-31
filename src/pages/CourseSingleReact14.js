import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import CourseReact14 from "../components/Courses/React/СourseReact14";

const CourseSingleReact14 = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar />

      {/* Navigation Bar */}
      <Breadcrumb title={"Робота з сервером: Запити до API"} />

      {/* Course Page */}
      <CourseReact14 />

      {/* Footer */}
      <Footer />
    </>
  );
};

export default CourseSingleReact14;
