import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import CourseJs14 from "../components/Courses/JS/CourseJs14";

const CourseSingleJs14 = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar />

      {/* Navigation Bar */}
      <Breadcrumb title={"CSS Макет - float и clear"} />

      {/* Course Page */}
      <CourseJs14/>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default CourseSingleJs14;
