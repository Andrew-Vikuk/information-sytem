import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import CourseReact8 from "../components/Courses/React/СourseReact8";

const CourseSingleReact8 = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar />

      {/* Navigation Bar */}
      <Breadcrumb title={"Просунуті концепції: Форми та керування станом форм"} />

      {/* Course Page */}
      <CourseReact8 />

      {/* Footer */}
      <Footer />
    </>
  );
};

export default CourseSingleReact8;
