import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import CourseJs2 from "../components/Courses/JS/CourseJs2";

const CourseSingleJs2 = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar />

      {/* Navigation Bar */}
      <Breadcrumb title={"Налаштування середовища"} />

      {/* Course Page */}
      <CourseJs2/>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default CourseSingleJs2;
