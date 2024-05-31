import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import CourseJs10 from "../components/Courses/JS/CourseJs10";

const CourseSingleJs10 = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar />

      {/* Navigation Bar */}
      <Breadcrumb title={"Класи"} />

      {/* Course Page */}
      <CourseJs10/>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default CourseSingleJs10;
