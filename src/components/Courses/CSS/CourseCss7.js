import React from "react";
import {
  FaAngleDoubleRight,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import courseListCSS from "../../../scripts/CoursesListCSS";


const CourseCss7 = () => {
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
                    <FaArrowRight /> Інші Уроки по CSS
                  </h5>
                  <ul className='catagory-items'>
                  {courseListCSS.map((data, index) => (
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
                    <img src='assets/img/about/main_1.png' alt='img' className='service-banner-image' />
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
                    <img src='assets/img/service/css_cat.png' alt='img' className="w-100 h-20"  style={{height: "300px", objectFit: "cover", marginBottom: "20px"}}/>
                  </div>
                  <div className='details'>

  <h3>CSS Кольори</h3>

  <p>
    CSS дозволяє задавати кольори для різних елементів веб-сторінки. У цьому уроці ми розглянемо різні способи задання кольорів, включаючи назви кольорів, кольори фону, тексту, межі та різні значення кольорів.
  </p>

  <h4>CSS Назви кольорів</h4>

  <p>
    CSS підтримує стандартні назви кольорів, які можна використовувати для задання кольорів. Наприклад, <code>red</code>, <code>blue</code>, <code>green</code> тощо.
  </p>

  <pre>
    <code>
      {`
        h1 {
          color: red;
        }
      `}
    </code>
  </pre>

  <h4>CSS Background Color - Колір фону</h4>

  <p>
    Властивість <code>background-color</code> використовується для задання кольору фону елемента.
  </p>

  <pre>
    <code>
      {`
        body {
          background-color: lightblue;
        }
      `}
    </code>
  </pre>

  <h4>CSS Text Color - Колір тексту</h4>

  <p>
    Властивість <code>color</code> використовується для задання кольору тексту.
  </p>

  <pre>
    <code>
      {`
        p {
          color: green;
        }
      `}
    </code>
  </pre>

  <h4>CSS Border Color - Колір межі</h4>

  <p>
    Властивість <code>border-color</code> використовується для задання кольору межі елемента.
  </p>

  <pre>
    <code>
      {`
        div {
          border: 2px solid black;
          border-color: red;
        }
      `}
    </code>
  </pre>

  <h4>CSS Значення кольору</h4>

  <p>
    CSS підтримує кілька способів задання кольорів: назви кольорів, HEX-значення, RGB, RGBA, HSL та HSLA.
  </p>

  <pre>
    <code>
      {`
        /* Назви кольорів */
        h1 {
          color: red;
        }

        /* HEX-значення */
        h1 {
          color: #ff0000;
        }

        /* RGB */
        h1 {
          color: rgb(255, 0, 0);
        }

        /* RGBA */
        h1 {
          color: rgba(255, 0, 0, 0.5);
        }

        /* HSL */
        h1 {
          color: hsl(0, 100%, 50%);
        }

        /* HSLA */
        h1 {
          color: hsla(0, 100%, 50%, 0.5);
        }
      `}
    </code>
  </pre>

  <div className='accordion accordion-inner accordion-icon-left mt-3 mb-4' id='accordionCssColors'>
    <div className='accordion-item'>
      <h2 className='accordion-header' id='headingCssColors1'>
        <button className='accordion-button' type='button' data-bs-toggle='collapse' data-bs-target='#collapseCssColors1' aria-expanded='true' aria-controls='collapseCssColors1'>
          CSS Назви кольорів
        </button>
      </h2>
      <div id='collapseCssColors1' className='accordion-collapse collapse show' aria-labelledby='headingCssColors1' data-bs-parent='#accordionCssColors'>
        <div className='accordion-body'>
          CSS підтримує стандартні назви кольорів, які можна використовувати для задання кольорів. Наприклад, <code>red</code>, <code>blue</code>, <code>green</code> тощо.
        </div>
      </div>
    </div>
    <div className='accordion-item'>
      <h2 className='accordion-header' id='headingCssColors2'>
        <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#collapseCssColors2' aria-expanded='false' aria-controls='collapseCssColors2'>
          CSS Background Color - Колір фону
        </button>
      </h2>
      <div id='collapseCssColors2' className='accordion-collapse collapse' aria-labelledby='headingCssColors2' data-bs-parent='#accordionCssColors'>
        <div className='accordion-body'>
          Властивість <code>background-color</code> використовується для задання кольору фону елемента.
        </div>
      </div>
    </div>
    <div className='accordion-item'>
      <h2 className='accordion-header' id='headingCssColors3'>
        <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#collapseCssColors3' aria-expanded='false' aria-controls='collapseCssColors3'>
          CSS Text Color - Колір тексту
        </button>
      </h2>
      <div id='collapseCssColors3' className='accordion-collapse collapse' aria-labelledby='headingCssColors3' data-bs-parent='#accordionCssColors'>
        <div className='accordion-body'>
          Властивість <code>color</code> використовується для задання кольору тексту.
        </div>
      </div>
    </div>
    <div className='accordion-item'>
      <h2 className='accordion-header' id='headingCssColors4'>
        <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#collapseCssColors4' aria-expanded='false' aria-controls='collapseCssColors4'>
          CSS Border Color - Колір межі
        </button>
      </h2>
      <div id='collapseCssColors4' className='accordion-collapse collapse' aria-labelledby='headingCssColors4' data-bs-parent='#accordionCssColors'>
        <div className='accordion-body'>
          Властивість <code>border-color</code> використовується для задання кольору межі елемента.
        </div>
      </div>
    </div>
    <div className='accordion-item'>
      <h2 className='accordion-header' id='headingCssColors5'>
        <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#collapseCssColors5' aria-expanded='false' aria-controls='collapseCssColors5'>
          CSS Значення кольору
        </button>
      </h2>
      <div id='collapseCssColors5' className='accordion-collapse collapse' aria-labelledby='headingCssColors5' data-bs-parent='#accordionCssColors'>
        <div className='accordion-body'>
          CSS підтримує кілька способів задання кольорів: назви кольорів, HEX-значення, RGB, RGBA, HSL та HSLA.
        </div>
      </div>
    </div>
  </div>

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

export default CourseCss7;
