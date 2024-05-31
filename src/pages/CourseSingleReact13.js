import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import CourseReact13 from "../components/Courses/React/СourseReact13";

const CourseSingleReact13 = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar />

      {/* Navigation Bar */}
      <Breadcrumb title={"Керування станом: Менеджери стану"} />

      {/* Course Page */}
      <CourseReact13 />

      {/* Footer */}
      <Footer />
    </>
  );
};

export default CourseSingleReact13;
