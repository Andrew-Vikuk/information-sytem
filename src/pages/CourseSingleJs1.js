import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import CourseJs1 from "../components/Courses/JS/CourseJs1";

const CourseSingleJs1 = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar />

      {/* Navigation Bar */}
      <Breadcrumb title={"Що таке JavaScript"} />

      {/* Course Page */}
      <CourseJs1/>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default CourseSingleJs1;
