import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import CourseJs11 from "../components/Courses/JS/CourseJs11";

const CourseSingleJs11 = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar />

      {/* Navigation Bar */}
      <Breadcrumb title={"Колбеки"} />

      {/* Course Page */}
      <CourseJs11/>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default CourseSingleJs11;
