import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import CourseJs6 from "../components/Courses/JS/CourseJs6";

const CourseSingleJs6 = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar />

      {/* Navigation Bar */}
      <Breadcrumb title={"Умовні оператори та цикли"} />

      {/* Course Page */}
      <CourseJs6/>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default CourseSingleJs6;
