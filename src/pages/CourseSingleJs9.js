import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import CourseJs9 from "../components/Courses/JS/CourseJs9";

const CourseSingleJs9 = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar />

      {/* Navigation Bar */}
      <Breadcrumb title={"Прототипне наслідування"} />

      {/* Course Page */}
      <CourseJs9/>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default CourseSingleJs9;
