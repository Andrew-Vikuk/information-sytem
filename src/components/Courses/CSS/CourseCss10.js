import React from "react";
import {
  FaAngleDoubleRight,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import courseListCSS from "../../../scripts/CoursesListCSS";


const CourseCss10 = () => {
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

  <h3>CSS Margin - Поля</h3>

  <p>
    CSS Margin використовується для створення простору навколо елементів, зовнішнього відступу від меж елемента до меж його контейнера. У цьому уроці ми розглянемо властивості для задання полів, їх скорочене написання та інші корисні значення.
  </p>

  <h4>Margin - Окремі сторони</h4>

  <p>
    Властивості <code>margin-top</code>, <code>margin-right</code>, <code>margin-bottom</code>, <code>margin-left</code> дозволяють задавати поля окремо для кожної сторони елемента.
  </p>

  <pre>
    <code>
      {`
        div {
          margin-top: 10px;
          margin-right: 15px;
          margin-bottom: 10px;
          margin-left: 15px;
        }
      `}
    </code>
  </pre>

  <h4>Margin - Скорочена властивість</h4>

  <p>
    Властивість <code>margin</code> дозволяє скорочено задавати значення полів для всіх сторін одночасно. Порядок значень: верхнє, праве, нижнє, ліве поле.
  </p>

  <pre>
    <code>
      {`
        div {
          margin: 10px 15px 10px 15px;
        }

        /* Можна задавати і менше значень */
        div {
          margin: 10px 15px; /* верхнє та нижнє поля - 10px, праве та ліве - 15px */
        }
      `}
    </code>
  </pre>

  <h4>Значення auto</h4>

  <p>
    Значення <code>auto</code> використовується для автоматичного встановлення полів. Це особливо корисно для центрування блокових елементів по горизонталі.
  </p>

  <pre>
    <code>
      {`
        div {
          margin: 0 auto; /* центрування елемента по горизонталі */
        }
      `}
    </code>
  </pre>

  <h4>Значення inherit</h4>

  <p>
    Значення <code>inherit</code> дозволяє елементу успадковувати значення полів від його батьківського елемента.
  </p>

  <pre>
    <code>
      {`
        div {
          margin: inherit;
        }
      `}
    </code>
  </pre>

  <div className='accordion accordion-inner accordion-icon-left mt-3 mb-4' id='accordionCssMargin'>
    <div className='accordion-item'>
      <h2 className='accordion-header' id='headingCssMargin1'>
        <button className='accordion-button' type='button' data-bs-toggle='collapse' data-bs-target='#collapseCssMargin1' aria-expanded='true' aria-controls='collapseCssMargin1'>
          Margin - Окремі сторони
        </button>
      </h2>
      <div id='collapseCssMargin1' className='accordion-collapse collapse show' aria-labelledby='headingCssMargin1' data-bs-parent='#accordionCssMargin'>
        <div className='accordion-body'>
          Властивості <code>margin-top</code>, <code>margin-right</code>, <code>margin-bottom</code>, <code>margin-left</code> дозволяють задавати поля окремо для кожної сторони елемента.
          <pre>
            <code>
              {`
                div {
                  margin-top: 10px;
                  margin-right: 15px;
                  margin-bottom: 10px;
                  margin-left: 15px;
                }
              `}
            </code>
          </pre>
        </div>
      </div>
    </div>
    <div className='accordion-item'>
      <h2 className='accordion-header' id='headingCssMargin2'>
        <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#collapseCssMargin2' aria-expanded='false' aria-controls='collapseCssMargin2'>
          Margin - Скорочена властивість
        </button>
      </h2>
      <div id='collapseCssMargin2' className='accordion-collapse collapse' aria-labelledby='headingCssMargin2' data-bs-parent='#accordionCssMargin'>
        <div className='accordion-body'>
          Властивість <code>margin</code> дозволяє скорочено задавати значення полів для всіх сторін одночасно. Порядок значень: верхнє, праве, нижнє, ліве поле.
          <pre>
            <code>
              {`
                div {
                  margin: 10px 15px 10px 15px;
                }

                /* Можна задавати і менше значень */
                div {
                  margin: 10px 15px; /* верхнє та нижнє поля - 10px, праве та ліве - 15px */
                }
              `}
            </code>
          </pre>
        </div>
      </div>
    </div>
    <div className='accordion-item'>
      <h2 className='accordion-header' id='headingCssMargin3'>
        <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#collapseCssMargin3' aria-expanded='false' aria-controls='collapseCssMargin3'>
          Значення auto
        </button>
      </h2>
      <div id='collapseCssMargin3' className='accordion-collapse collapse' aria-labelledby='headingCssMargin3' data-bs-parent='#accordionCssMargin'>
        <div className='accordion-body'>
          Значення <code>auto</code> використовується для автоматичного встановлення полів. Це особливо корисно для центрування блокових елементів по горизонталі.
          <pre>
            <code>
              {`
                div {
                  margin: 0 auto; /* центрування елемента по горизонталі */
                }
              `}
            </code>
          </pre>
        </div>
      </div>
    </div>
    <div className='accordion-item'>
      <h2 className='accordion-header' id='headingCssMargin4'>
        <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#collapseCssMargin4' aria-expanded='false' aria-controls='collapseCssMargin4'>
          Значення inherit
        </button>
      </h2>
      <div id='collapseCssMargin4' className='accordion-collapse collapse' aria-labelledby='headingCssMargin4' data-bs-parent='#accordionCssMargin'>
        <div className='accordion-body'>
          Значення <code>inherit</code> дозволяє елементу успадковувати значення полів від його батьківського елемента.
          <pre>
            <code>
              {`
                div {
                  margin: inherit;
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

export default CourseCss10;
