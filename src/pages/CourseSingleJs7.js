import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import CourseJs7 from "../components/Courses/JS/CourseJs7";

const CourseSingleJs7 = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar />

      {/* Navigation Bar */}
      <Breadcrumb title={"Замикання (Closures)"} />

      {/* Course Page */}
      <CourseJs7/>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default CourseSingleJs7;
