import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import CourseHtml7 from "../components/Courses/HTML/CourseHtml7";

const CourseSingleHtml7 = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar />

      {/* Navigation Bar */}
      <Breadcrumb title={"Метадані та SEO "} />

      {/* Course Page */}
      <CourseHtml7 />

      {/* Footer */}
      <Footer />
    </>
  );
};

export default CourseSingleHtml7;
