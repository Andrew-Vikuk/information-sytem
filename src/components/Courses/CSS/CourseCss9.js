import React from "react";
import {
  FaAngleDoubleRight,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import courseListCSS from "../../../scripts/CoursesListCSS";


const CourseCss9 = () => {
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

  <h3>Властивості CSS Border - Межа</h3>

  <p>
    CSS дозволяє задавати різні властивості для меж елементів. У цьому уроці ми розглянемо стиль межі та наведемо приклади використання різних властивостей меж.
  </p>

  <h4>Стиль CSS Межі</h4>

  <p>
    Властивість <code>border-style</code> використовується для задання стилю межі. Можливі значення: <code>none</code>, <code>hidden</code>, <code>dotted</code>, <code>dashed</code>, <code>solid</code>, <code>double</code>, <code>groove</code>, <code>ridge</code>, <code>inset</code>, <code>outset</code>.
  </p>

  <pre>
    <code>
      {`
        p.solid {
          border-style: solid;
        }

        p.dotted {
          border-style: dotted;
        }

        p.dashed {
          border-style: dashed;
        }
      `}
    </code>
  </pre>

  <h4>Приклади</h4>

  <p>
    Властивість <code>border</code> дозволяє одночасно задавати стиль, ширину та колір межі. Наприклад:
  </p>

  <pre>
    <code>
      {`
        p.example1 {
          border: 2px solid red;
        }

        p.example2 {
          border: 5px dotted blue;
        }

        p.example3 {
          border: 1px dashed green;
        }
      `}
    </code>
  </pre>

  <div className='accordion accordion-inner accordion-icon-left mt-3 mb-4' id='accordionCssBorder'>
    <div className='accordion-item'>
      <h2 className='accordion-header' id='headingCssBorder1'>
        <button className='accordion-button' type='button' data-bs-toggle='collapse' data-bs-target='#collapseCssBorder1' aria-expanded='true' aria-controls='collapseCssBorder1'>
          Стиль CSS Межі
        </button>
      </h2>
      <div id='collapseCssBorder1' className='accordion-collapse collapse show' aria-labelledby='headingCssBorder1' data-bs-parent='#accordionCssBorder'>
        <div className='accordion-body'>
          Властивість <code>border-style</code> використовується для задання стилю межі. Можливі значення: <code>none</code>, <code>hidden</code>, <code>dotted</code>, <code>dashed</code>, <code>solid</code>, <code>double</code>, <code>groove</code>, <code>ridge</code>, <code>inset</code>, <code>outset</code>.
        </div>
      </div>
    </div>
    <div className='accordion-item'>
      <h2 className='accordion-header' id='headingCssBorder2'>
        <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#collapseCssBorder2' aria-expanded='false' aria-controls='collapseCssBorder2'>
          Приклади
        </button>
      </h2>
      <div id='collapseCssBorder2' className='accordion-collapse collapse' aria-labelledby='headingCssBorder2' data-bs-parent='#accordionCssBorder'>
        <div className='accordion-body'>
          Властивість <code>border</code> дозволяє одночасно задавати стиль, ширину та колір межі. Наприклад: <br />
          <pre>
            <code>
              {`
                p.example1 {
                  border: 2px solid red;
                }

                p.example2 {
                  border: 5px dotted blue;
                }

                p.example3 {
                  border: 1px dashed green;
                }
              `}
            </code>
          </pre>
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

export default CourseCss9;
