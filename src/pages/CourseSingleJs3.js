import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import CourseJs3 from "../components/Courses/JS/CourseJs3";

const CourseSingleJs3 = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar />

      {/* Navigation Bar */}
      <Breadcrumb title={"Синтаксис та основні оператори"} />

      {/* Course Page */}
      <CourseJs3/>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default CourseSingleJs3;
