import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import CourseReact23 from "../components/Courses/React/СourseReact23";

const CourseSingleReact23 = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar />

      {/* Navigation Bar */}
      <Breadcrumb title={"Додатково: GraphQL"} />

      {/* Course Page */}
      <CourseReact23/>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default CourseSingleReact23;
