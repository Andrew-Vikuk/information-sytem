import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import CourseJs12 from "../components/Courses/JS/CourseJs12";

const CourseSingleJs12 = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar />

      {/* Navigation Bar */}
      <Breadcrumb title={"Проміси"} />

      {/* Course Page */}
      <CourseJs12/>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default CourseSingleJs12;
