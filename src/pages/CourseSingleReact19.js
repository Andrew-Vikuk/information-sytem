import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import CourseReact19 from "../components/Courses/React/СourseReact19";

const CourseSingleReact19 = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar />

      {/* Navigation Bar */}
      <Breadcrumb title={"Завершальні кроки: Збірка та деплой"} />

      {/* Course Page */}
      <CourseReact19/>

      {/* Footer */}
      <Footer />
    </>
  );
};

export default CourseSingleReact19;
