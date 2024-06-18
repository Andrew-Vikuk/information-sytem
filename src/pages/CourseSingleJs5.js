import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import CourseJs5 from "../components/Courses/JS/CourseJs5";

const CourseSingleJs5 = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar />

      {/* Navigation Bar */}
      <Breadcrumb title={"Об'єкти та масиви"} />

      {/* Course Page */}
      <CourseJs5/>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default CourseSingleJs5;
