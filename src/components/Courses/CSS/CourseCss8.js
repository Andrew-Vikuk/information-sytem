import React from "react";
import {
  FaAngleDoubleRight,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import courseListCSS from "../../../scripts/CoursesListCSS";


const CourseCss8 = () => {
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

  <h3>CSS Background - Фон</h3>

  <p>
    CSS дозволяє задавати різні властивості фону для елементів веб-сторінки. У цьому уроці ми розглянемо властивість кольору фону, інші елементи фону, непрозорість та прозорість з використанням RGBA.
  </p>

  <h4>CSS background-color - Колір фону</h4>

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

  <h4>Інші елементи фону</h4>

  <p>
    Крім кольору фону, CSS дозволяє задавати зображення фону, повторення зображення, положення та розмір зображення фону.
  </p>

  <pre>
    <code>
      {`
        body {
          background-image: url('background.jpg');
          background-repeat: no-repeat;
          background-position: center;
          background-size: cover;
        }
      `}
    </code>
  </pre>

  <h4>Opacity / Transparency - Непрозорість / Прозорість</h4>

  <p>
    Властивість <code>opacity</code> використовується для задання прозорості елемента. Значення <code>opacity</code> може бути від 0 (повністю прозорий) до 1 (повністю непрозорий).
  </p>

  <pre>
    <code>
      {`
        div {
          opacity: 0.5;
        }
      `}
    </code>
  </pre>

  <h4>Прозорість з використанням RGBA</h4>

  <p>
    RGBA кольори дозволяють задавати колір з прозорістю. Значення <code>rgba</code> складається з чотирьох параметрів: червоний, зелений, синій та альфа (прозорість).
  </p>

  <pre>
    <code>
      {`
        p {
          background-color: rgba(255, 0, 0, 0.5);
        }
      `}
    </code>
  </pre>

  <div className='accordion accordion-inner accordion-icon-left mt-3 mb-4' id='accordionCssBackground'>
    <div className='accordion-item'>
      <h2 className='accordion-header' id='headingCssBackground1'>
        <button className='accordion-button' type='button' data-bs-toggle='collapse' data-bs-target='#collapseCssBackground1' aria-expanded='true' aria-controls='collapseCssBackground1'>
          CSS background-color - Колір фону
        </button>
      </h2>
      <div id='collapseCssBackground1' className='accordion-collapse collapse show' aria-labelledby='headingCssBackground1' data-bs-parent='#accordionCssBackground'>
        <div className='accordion-body'>
          Властивість <code>background-color</code> використовується для задання кольору фону елемента.
        </div>
      </div>
    </div>
    <div className='accordion-item'>
      <h2 className='accordion-header' id='headingCssBackground2'>
        <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#collapseCssBackground2' aria-expanded='false' aria-controls='collapseCssBackground2'>
          Інші елементи фону
        </button>
      </h2>
      <div id='collapseCssBackground2' className='accordion-collapse collapse' aria-labelledby='headingCssBackground2' data-bs-parent='#accordionCssBackground'>
        <div className='accordion-body'>
          Крім кольору фону, CSS дозволяє задавати зображення фону, повторення зображення, положення та розмір зображення фону.
        </div>
      </div>
    </div>
    <div className='accordion-item'>
      <h2 className='accordion-header' id='headingCssBackground3'>
        <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#collapseCssBackground3' aria-expanded='false' aria-controls='collapseCssBackground3'>
          Opacity / Transparency - Непрозорість / Прозорість
        </button>
      </h2>
      <div id='collapseCssBackground3' className='accordion-collapse collapse' aria-labelledby='headingCssBackground3' data-bs-parent='#accordionCssBackground'>
        <div className='accordion-body'>
          Властивість <code>opacity</code> використовується для задання прозорості елемента. Значення <code>opacity</code> може бути від 0 (повністю прозорий) до 1 (повністю непрозорий).
        </div>
      </div>
    </div>
    <div className='accordion-item'>
      <h2 className='accordion-header' id='headingCssBackground4'>
        <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#collapseCssBackground4' aria-expanded='false' aria-controls='collapseCssBackground4'>
          Прозорість з використанням RGBA
        </button>
      </h2>
      <div id='collapseCssBackground4' className='accordion-collapse collapse' aria-labelledby='headingCssBackground4' data-bs-parent='#accordionCssBackground'>
        <div className='accordion-body'>
          RGBA кольори дозволяють задавати колір з прозорістю. Значення <code>rgba</code> складається з чотирьох параметрів: червоний, зелений, синій та альфа (прозорість).
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

export default CourseCss8;
