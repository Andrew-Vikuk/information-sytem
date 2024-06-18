import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import CourseReact12 from "../components/Courses/React/СourseReact12";

const CourseSingleReact12 = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar />

      {/* Navigation Bar */}
      <Breadcrumb title={"Керування станом: Контекст (Context API)"} />

      {/* Course Page */}
      <CourseReact12 />

      {/* Footer */}
      <Footer />
    </>
  );
};

export default CourseSingleReact12;
