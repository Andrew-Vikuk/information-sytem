import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import CourseReact17 from "../components/Courses/React/СourseReact17";

const CourseSingleReact17 = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar />

      {/* Navigation Bar */}
      <Breadcrumb title={"Оптимізація: Продуктивність"} />

      {/* Course Page */}
      <CourseReact17 />

      {/* Footer */}
      <Footer />
    </>
  );
};

export default CourseSingleReact17;
