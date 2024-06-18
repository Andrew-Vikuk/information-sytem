import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import CourseReact16 from "../components/Courses/React/СourseReact16";

const CourseSingleReact16 = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar />

      {/* Navigation Bar */}
      <Breadcrumb title={"Маршрутизація: React Router"} />

      {/* Course Page */}
      <CourseReact16 />

      {/* Footer */}
      <Footer />
    </>
  );
};

export default CourseSingleReact16;
