import React from "react";
import {
  FaArrowRight,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import courseListReact from "../../../scripts/CoursesListReact";

const CourseReact22 = () => {
  return (
    <>
      {/* ===================== Course Single Page start ===================== */}
    <div className='service-area pd-top-120 pd-bottom-90'>
    <div className='container'>
        <div className='row'>
            <div className='col-lg-4 col-12'>
                <div className='td-sidebar service-sidebar'>
                    <div className='widget widget_catagory'>
                        <h5 className='widget-title'>
                            <FaArrowRight /> Інші уроки ReactJS
                        </h5>
                        <ul className='catagory-items'>
                            {courseListReact.map((data, index) => (
                                <div key={index}>
                                    <li>
                                        <Link to={data.link}>{data.title}</Link>
                                    </li>
                                </div>
                            ))}
                        </ul>
                    </div>
                    <div className='widget widget_author text-center'>
                        <div className='thumb'>
                            <img src='assets/img/about/about-pages.png' alt='img' className='service-banner-image' />
                        </div>
                        <div className='details'>
                            <Link className='btn btn-border-base' to='/about'>
                                Дізнайтесь більше про нас 
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className='col-lg-8'>
                <div className='blog-details-page-content'>
                    <div className='single-blog-inner mb-0'>
                        <div className='thumb'>
                            <img src='assets/img/about/lesson-image-react_4.jpeg' alt='img' className="w-100 h-20"  style={{height: "400px", objectFit: "cover", marginBottom: "20px"}}/>
                        </div>
                        <div className='details'>
                            <h3>Анімації</h3>
                            <p>Анімації додають інтерактивність та динаміку до вашого додатку. У цьому розділі ми розглянемо дві популярні бібліотеки для створення анімацій у React: React Spring та Framer Motion.</p>

                            <h4>React Spring</h4>
                            <p>React Spring - це бібліотека анімацій для React, яка базується на фізичних моделях. Вона дозволяє створювати плавні та реалістичні анімації з мінімальними зусиллями.</p>
                            <p>Приклад використання React Spring:</p>
                            <pre>
                                <code>
{`import React from 'react';
import { useSpring, animated } from 'react-spring';

const SpringAnimation = () => {
  const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } });

  return <animated.div style={props}>Hello, React Spring!</animated.div>;
};

export default SpringAnimation;`}
                                </code>
                            </pre>

                            <h4>Framer Motion</h4>
                            <p>Framer Motion - це потужна бібліотека для анімацій, яка забезпечує простий та інтуїтивний API для створення складних анімацій та взаємодій.</p>
                            <p>Приклад використання Framer Motion:</p>
                            <pre>
                                <code>
{`import React from 'react';
import { motion } from 'framer-motion';

const MotionAnimation = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      Hello, Framer Motion!
    </motion.div>
  );
};

export default MotionAnimation;`}
                                </code>
                            </pre>

                            <h4>Довідка</h4>
                            <div className='accordion accordion-inner accordion-icon-left mt-3 mb-4' id='animationAccordion'>
                                <div className='accordion-item'>
                                    <h2 className='accordion-header' id='animationHeadingOne'>
                                        <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#animationCollapseOne' aria-expanded='false' aria-controls='animationCollapseOne'>
                                            React Spring
                                        </button>
                                    </h2>
                                    <div id='animationCollapseOne' className='accordion-collapse collapse' aria-labelledby='animationHeadingOne' data-bs-parent='#animationAccordion'>
                                        <div className='accordion-body'>
                                            <p>React Spring - це бібліотека анімацій для React, яка використовує фізичні моделі для створення реалістичних та плавних анімацій.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='accordion-item'>
                                    <h2 className='accordion-header' id='animationHeadingTwo'>
                                        <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#animationCollapseTwo' aria-expanded='false' aria-controls='animationCollapseTwo'>
                                            Framer Motion
                                        </button>
                                    </h2>
                                    <div id='animationCollapseTwo' className='accordion-collapse collapse' aria-labelledby='animationHeadingTwo' data-bs-parent='#animationAccordion'>
                                        <div className='accordion-body'>
                                            <p>Framer Motion - це потужна бібліотека для анімацій з простим та інтуїтивним API для створення складних анімацій та взаємодій.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p>Використання бібліотек для анімацій, таких як React Spring та Framer Motion, дозволяє створювати динамічні та привабливі інтерфейси користувача, що покращують загальний досвід взаємодії з вашим додатком.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

      {/* ===================== Course Single Page  End ===================== */}
    </>
  );
};

export default CourseReact22;

