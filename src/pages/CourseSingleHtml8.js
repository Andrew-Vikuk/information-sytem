import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import CourseHtml8 from "../components/Courses/HTML/CourseHtml8";

const CourseSingleHtml8 = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar />

      {/* Navigation Bar */}
      <Breadcrumb title={"Мультимедійні елементи HTML "} />

      {/* Course Page */}
      <CourseHtml8 />

      {/* Footer */}
      <Footer />
    </>
  );
};

export default CourseSingleHtml8;
