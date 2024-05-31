import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import CourseReact6 from "../components/Courses/React/СourseReact6";

const CourseSingleReact6 = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar />

      {/* Navigation Bar */}
      <Breadcrumb title={"Просунуті концепції: Композиція та наслідування"} />

      {/* Course Page */}
      <CourseReact6 />

      {/* Footer */}
      <Footer />
    </>
  );
};

export default CourseSingleReact6;
