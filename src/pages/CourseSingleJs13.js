import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import CourseJs13 from "../components/Courses/JS/CourseJs13";

const CourseSingleJs13 = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar />

      {/* Navigation Bar */}
      <Breadcrumb title={"Async/Await"} />

      {/* Course Page */}
      <CourseJs13/>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default CourseSingleJs13;
