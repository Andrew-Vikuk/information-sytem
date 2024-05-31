import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import CourseReact7 from "../components/Courses/React/СourseReact7";

const CourseSingleReact7 = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar />

      {/* Navigation Bar */}
      <Breadcrumb title={"Просунуті концепції: Списки та ключі"} />

      {/* Course Page */}
      <CourseReact7 />

      {/* Footer */}
      <Footer />
    </>
  );
};

export default CourseSingleReact7;
