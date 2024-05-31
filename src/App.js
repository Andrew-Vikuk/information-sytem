import { BrowserRouter, Routes, Route, Router } from "react-router-dom";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import AOS from "aos";
import "aos/dist/aos.css";
import StickyBox from "react-sticky-box";
import { useEffect } from "react";
import ScrollToTop from "./scripts/scrollToTop";
import CourseSingleHtml1 from "./pages/CourseSingleHtml1";
import CourseSingleHtml2 from "./pages/CourseSingleHtml2";
import CourseSingleHtml3 from "./pages/CourseSingleHtml3";
import CourseSingleHtml4 from "./pages/CourseSingleHtml4";
import CourseSingleHtml5 from "./pages/CourseSingleHtml5";
import CourseSingleHtml6 from "./pages/CourseSingleHtml6";
import CourseSingleHtml7 from "./pages/CourseSingleHtml7";
import CourseSingleHtml8 from "./pages/CourseSingleHtml8";
import CourseSingleHtml9 from "./pages/CourseSingleHtml9";
import CourseSingleHtml10 from "./pages/CourseSingleHtml10";
import CourseSingleHtml11 from "./pages/CourseSingleHtml11";
import CourseSingleHtml12 from "./pages/CourseSingleHtml12";

import CourseSingleCss1 from "./pages/CourseSingleCss1";
import CourseSingleCss2 from "./pages/CourseSingleCss2";
import CourseSingleCss3 from "./pages/CourseSingleCss3";
import CourseSingleCss4 from "./pages/CourseSingleCss4";
import CourseSingleCss5 from "./pages/CourseSingleCss5";
import CourseSingleCss6 from "./pages/CourseSingleCss6";
import CourseSingleCss7 from "./pages/CourseSingleCss7";
import CourseSingleCss8 from "./pages/CourseSingleCss8";
import CourseSingleCss9 from "./pages/CourseSingleCss9";
import CourseSingleCss10 from "./pages/CourseSingleCss10";
import CourseSingleCss11 from "./pages/CourseSingleCss11";
import CourseSingleCss12 from "./pages/CourseSingleCss12";

import CourseSingleReact1 from "./pages/CourseSingleReact1";
import CourseSingleReact2 from "./pages/CourseSingleReact2";
import CourseSingleReact3 from "./pages/CourseSingleReact3";
import CourseSingleReact4 from "./pages/CourseSingleReact4";
import CourseSingleReact5 from "./pages/CourseSingleReact5";
import CourseSingleReact6 from "./pages/CourseSingleReact6";
import CourseSingleReact7 from "./pages/CourseSingleReact7";
import CourseSingleReact8 from "./pages/CourseSingleReact8";
import CourseSingleReact9 from "./pages/CourseSingleReact9";
import CourseSingleReact10 from "./pages/CourseSingleReact10";
import CourseSingleReact11 from "./pages/CourseSingleReact11";
import CourseSingleReact12 from "./pages/CourseSingleReact12";
import CourseSingleReact13 from "./pages/CourseSingleReact13";
import CourseSingleReact14 from "./pages/CourseSingleReact14";
import CourseSingleReact15 from "./pages/CourseSingleReact15";
import CourseSingleReact16 from "./pages/CourseSingleReact16";
import CourseSingleReact17 from "./pages/CourseSingleReact17";
import CourseSingleReact18 from "./pages/CourseSingleReact18";
import CourseSingleReact19 from "./pages/CourseSingleReact19";
import CourseSingleReact20 from "./pages/CourseSingleReact20";
import CourseSingleReact21 from "./pages/CourseSingleReact21";
import CourseSingleReact22 from "./pages/CourseSingleReact22";
import CourseSingleReact23 from "./pages/CourseSingleReact23";
import CourseSingleJs1 from "./pages/CourseSingleJs1";
import CourseSingleJs2 from "./pages/CourseSingleJs2";
import CourseSingleJs3 from "./pages/CourseSingleJs3";
import CourseSingleJs4 from "./pages/CourseSingleJs4";
import CourseSingleJs5 from "./pages/CourseSingleJs5";
import CourseSingleJs6 from "./pages/CourseSingleJs6";
import CourseSingleJs7 from "./pages/CourseSingleJs7";
import CourseSingleJs8 from "./pages/CourseSingleJs8";
import CourseSingleJs9 from "./pages/CourseSingleJs9";
import CourseSingleJs10 from "./pages/CourseSingleJs10";
import CourseSingleJs11 from "./pages/CourseSingleJs11";
import CourseSingleJs12 from "./pages/CourseSingleJs12";
import CourseSingleJs13 from "./pages/CourseSingleJs13";

function App() {
  useEffect(() => {
    AOS.init({
      offset: 0,
      easing: "ease",
      once: true,
    });
    AOS.refresh();
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        {/* HTML */}
        <Route exact path='/' element={<Home />} />
        <Route exact path='/about' element={<About />} />
        <Route exact path='/contact' element={<Contact />} />
        <Route exact path='/courses' element={<Courses />} />
        <Route exact path='/html-basics' element={<CourseSingleHtml1 />} />
        <Route exact path='/html-forms' element={<CourseSingleHtml2 />} />
        <Route exact path='/html-tags' element={<CourseSingleHtml3 />} />
        <Route exact path='/html-text' element={<CourseSingleHtml4 />} />
        <Route exact path='/html-media' element={<CourseSingleHtml5 />} />
        <Route exact path='/html-tables' element={<CourseSingleHtml6 />} />
        <Route exact path='/html-seo' element={<CourseSingleHtml7 />} />
        <Route exact path='/html-multimedia' element={<CourseSingleHtml8 />} />
        <Route exact path='/html-class' element={<CourseSingleHtml9 />} />
        <Route exact path='/html-id' element={<CourseSingleHtml10 />} />
        <Route exact path='/html-iframe' element={<CourseSingleHtml11 />} />
        <Route exact path='/html-path' element={<CourseSingleHtml12 />} />

        {/* CSS */}
        <Route exact path='/css-basics' element={<CourseSingleCss1 />} />
        <Route exact path='/css-positioning' element={<CourseSingleCss2 />} />
        <Route exact path='/css-animations' element={<CourseSingleCss3 />} />
        <Route exact path='/css-syntacsis' element={<CourseSingleCss4 />} />
        <Route exact path='/css-selector' element={<CourseSingleCss5 />} />
        <Route exact path='/css-connect' element={<CourseSingleCss6 />} />
        <Route exact path='/css-colors' element={<CourseSingleCss7 />} />
        <Route exact path='/css-background' element={<CourseSingleCss8 />} />
        <Route exact path='/css-border' element={<CourseSingleCss9 />} />
        <Route exact path='/css-margin' element={<CourseSingleCss10 />} />
        <Route exact path='/css-padding' element={<CourseSingleCss11 />} />
        <Route exact path='/css-hw' element={<CourseSingleCss12 />} />



        {/* JS */}
        <Route exact path='/js-start' element={<CourseSingleJs1 />} />
        <Route exact path='/js-settings' element={<CourseSingleJs2 />} />
        <Route exact path='/js-syntax' element={<CourseSingleJs3 />} />
        <Route exact path='/js-function' element={<CourseSingleJs4 />} />
        <Route exact path='/js-objects' element={<CourseSingleJs5 />} />
        <Route exact path='/js-cycle' element={<CourseSingleJs6 />} />
        <Route exact path='/js-closures' element={<CourseSingleJs7 />} />
        <Route exact path='/js-contex' element={<CourseSingleJs8 />} />
        <Route exact path='/js-imitation' element={<CourseSingleJs9 />} />
        <Route exact path='/js-classes' element={<CourseSingleJs10 />} />
        <Route exact path='/js-calback' element={<CourseSingleJs11 />} />
        <Route exact path='/js-promise' element={<CourseSingleJs12 />} />
        <Route exact path='/js-async' element={<CourseSingleJs13 />} />

        {/* REACT */}
        <Route exact path='/react-basics' element={<CourseSingleReact1 />} />
        <Route exact path='/react-start' element={<CourseSingleReact2 />} />
        <Route exact path='/react-start-jsx' element={<CourseSingleReact3 />} />
        <Route exact path="/react-start-components" element={<CourseSingleReact4 />}/>
        <Route exact path="/react-start-components-style" element={<CourseSingleReact5/>}/>
        <Route exact path="/react-start-сomposition" element={<CourseSingleReact6/>}/>
        <Route exact path="/react-start-lists" element={<CourseSingleReact7/>}/>
        <Route exact path="/react-start-forms" element={<CourseSingleReact8/>} />
        <Route exact path="/react-start-events" element={<CourseSingleReact9/>} />
        <Route exact path="/react-hooks-basics" element={<CourseSingleReact10/>} />
        <Route exact path="/react-hooks-additional" element={<CourseSingleReact11/>} />
        <Route exact path="/react-state-context" element={<CourseSingleReact12/>} />
        <Route exact path="/react-state-manager" element={<CourseSingleReact13/>} />
        <Route exact path="/react-server-request" element={<CourseSingleReact14/>} />
        <Route exact path="/react-server-authentication" element={<CourseSingleReact15/>} />
        <Route exact path="/react-router" element={<CourseSingleReact16/>} />
        <Route exact path="/react-optimization-productivity" element={<CourseSingleReact17/>} />
        <Route exact path="/react-optimization-testing" element={<CourseSingleReact18/>} />
        <Route exact path="/react-deployment" element={<CourseSingleReact19/>} />
        <Route exact path="/react-best-practices" element={<CourseSingleReact20/>} />
        <Route exact path="/react-ssr-ssg" element={<CourseSingleReact21/>} />
        <Route exact path="/react-animation" element={<CourseSingleReact22/>} />
        <Route exact path="/react-graphl" element={<CourseSingleReact23/>} />
      </Routes>
      <ScrollToTop />
    </BrowserRouter>
  );
}

export default App;
