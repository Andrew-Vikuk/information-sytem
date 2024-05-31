import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import CourseHtml5 from "../components/Courses/HTML/CourseHtml5";

const CourseSingleHtml5 = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar />

      {/* Navigation Bar */}
      <Breadcrumb title={"Робота із зображеннями та мультимедіа в HTML"} />

      {/* Course Page */}
      <CourseHtml5 />

      {/* Footer */}
      <Footer />
    </>
  );
};

export default CourseSingleHtml5;
