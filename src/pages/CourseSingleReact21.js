import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import CourseReact21 from "../components/Courses/React/СourseReact21";

const CourseSingleReact21 = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar />

      {/* Navigation Bar */}
      <Breadcrumb title={"Додатково: SSR та SSG"} />

      {/* Course Page */}
      <CourseReact21/>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default CourseSingleReact21;
