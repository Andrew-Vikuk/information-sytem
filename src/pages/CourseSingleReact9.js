import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import CourseReact9 from "../components/Courses/React/СourseReact9";

const CourseSingleReact9 = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar />

      {/* Navigation Bar */}
      <Breadcrumb title={"Просунуті концепції: Обробка подій"} />

      {/* Course Page */}
      <CourseReact9 />

      {/* Footer */}
      <Footer />
    </>
  );
};

export default CourseSingleReact9;
