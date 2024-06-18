import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import CourseJs8 from "../components/Courses/JS/CourseJs8";

const CourseSingleJs8 = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar />

      {/* Navigation Bar */}
      <Breadcrumb title={"Контекст виклику (this)"} />

      {/* Course Page */}
      <CourseJs8/>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default CourseSingleJs8;
