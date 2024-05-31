import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import CourseJs4 from "../components/Courses/JS/CourseJs4";

const CourseSingleJs4 = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar />

      {/* Navigation Bar */}
      <Breadcrumb title={"Функції"} />

      {/* Course Page */}
      <CourseJs4/>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default CourseSingleJs4;
