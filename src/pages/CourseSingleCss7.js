import React from "react";
import Breadcrumb from "../components/Breadcrumb";
import Footer from "../components/Footer";
import NavBar from "../components/NavBar";
import CourseCss7 from "../components/Courses/CSS/CourseCss7";

const CourseSingleCss7 = () => {
  return (
    <>
      {/* Navigation Bar */}
      <NavBar />

      {/* Navigation Bar */}
      <Breadcrumb title={"CSS Кольори"} />

      {/* Course Page */}
      <CourseCss7 />

      {/* Footer */}
      <Footer />
    </>
  );
};

export default CourseSingleCss7;
