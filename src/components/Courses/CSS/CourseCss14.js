import React from "react";
import {
  FaAngleDoubleRight,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";
import { HashLink as Link } from 'react-router-hash-link';
import courseListCSS from "../../../scripts/CoursesListCSS";
import { NavLink } from "react-router-dom";



const CourseCss14 = () => {
  return (
    <>
      {/* ===================== Course Single Page start ===================== */}
      <div className='service-area pd-top-120 pd-bottom-90'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-4 col-12'>
              <div className='td-sidebar service-sidebar'>
                <div className='widget widget_catagory'>
                  <Link className='btn btn-border-base' to='/courses#css'>
                      Назад до курсів
                    </Link>
                  <h5 className='widget-title mt-4 mb-2'>
                    Уроки по CSS
                  </h5>
                  <ul className='catagory-items'>
                  {courseListCSS.map((data, index) => (
                    <div key={index}>
                      <li>
                            <NavLink to={data.link}  className={({ isActive, isPending }) =>
                              isPending ? "pending" : isActive ? "active" : ""
                            }>{data.title}</NavLink>
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
      <h3>CSS Макет - float и clear</h3>
      <p>
        В CSS властивість <code>float</code> використовується для розміщення елементів поруч один з одним та забезпечення їх обтікання текстом. Властивість <code>clear</code> використовується для припинення обтікання елемента текстом або іншими елементами, які були розміщені за допомогою <code>float</code>.
      </p>

      <h4>Приклад - <code>float: right;</code></h4>
      <p>
        Значення <code>float: right;</code> дозволяє елементу «плавати» праворуч у межах свого контейнера. Текст і інші елементи будуть обтікати його з лівого боку.
      </p>
      <pre>
        <code>
          {`
            .right {
              float: right;
            }
          `}
        </code>
      </pre>

      <h4>Приклад - <code>float: left;</code></h4>
      <p>
        Значення <code>float: left;</code> дозволяє елементу «плавати» ліворуч у межах свого контейнера. Текст і інші елементи будуть обтікати його з правого боку.
      </p>
      <pre>
        <code>
          {`
            .left {
              float: left;
            }
          `}
        </code>
      </pre>

      <h4>Приклад - No float</h4>
      <p>
        Якщо не використовувати <code>float</code>, елементи будуть розташовуватися за стандартним потоком документа. Це означає, що блокові елементи будуть розташовуватися один під одним.
      </p>
      <pre>
        <code>
          {`
            .no-float {
              float: none;
            }
          `}
        </code>
      </pre>

      <h4>Приклад - Елементи розташовуються поруч один з одним</h4>
      <p>
        За допомогою <code>float</code> можна розташовувати елементи поруч один з одним. Це корисно при створенні макетів сторінок, де елементи повинні бути розташовані в один ряд.
      </p>
      <pre>
        <code>
          {`
            .container {
              width: 100%;
            }

            .left {
              float: left;
              width: 50%;
            }

            .right {
              float: right;
              width: 50%;
            }
          `}
        </code>
      </pre>

      <h4>Accordion: Деталі про float та clear</h4>
      <div className='accordion accordion-inner accordion-icon-left mt-3 mb-4' id='accordionCssFloatClear'>
        <div className='accordion-item'>
          <h2 className='accordion-header' id='headingCssFloatClear1'>
            <button
              className='accordion-button'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#collapseCssFloatClear1'
              aria-expanded='true'
              aria-controls='collapseCssFloatClear1'
            >
              float: right
            </button>
          </h2>
          <div id='collapseCssFloatClear1' className='accordion-collapse collapse show' aria-labelledby='headingCssFloatClear1' data-bs-parent='#accordionCssFloatClear'>
            <div className='accordion-body'>
              <code>float: right</code> дозволяє елементу «плавати» праворуч у межах свого контейнера. Текст і інші елементи будуть обтікати його з лівого боку.
            </div>
          </div>
        </div>
        <div className='accordion-item'>
          <h2 className='accordion-header' id='headingCssFloatClear2'>
            <button
              className='accordion-button collapsed'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#collapseCssFloatClear2'
              aria-expanded='false'
              aria-controls='collapseCssFloatClear2'
            >
              float: left
            </button>
          </h2>
          <div id='collapseCssFloatClear2' className='accordion-collapse collapse' aria-labelledby='headingCssFloatClear2' data-bs-parent='#accordionCssFloatClear'>
            <div className='accordion-body'>
              <code>float: left</code> дозволяє елементу «плавати» ліворуч у межах свого контейнера. Текст і інші елементи будуть обтікати його з правого боку.
            </div>
          </div>
        </div>
        <div className='accordion-item'>
          <h2 className='accordion-header' id='headingCssFloatClear3'>
            <button
              className='accordion-button collapsed'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#collapseCssFloatClear3'
              aria-expanded='false'
              aria-controls='collapseCssFloatClear3'
            >
              No float
            </button>
          </h2>
          <div id='collapseCssFloatClear3' className='accordion-collapse collapse' aria-labelledby='headingCssFloatClear3' data-bs-parent='#accordionCssFloatClear'>
            <div className='accordion-body'>
              Якщо не використовувати <code>float</code>, елементи будуть розташовуватися за стандартним потоком документа. Це означає, що блокові елементи будуть розташовуватися один під одним.
            </div>
          </div>
        </div>
        <div className='accordion-item'>
          <h2 className='accordion-header' id='headingCssFloatClear4'>
            <button
              className='accordion-button collapsed'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#collapseCssFloatClear4'
              aria-expanded='false'
              aria-controls='collapseCssFloatClear4'
            >
              Елементи розташовуються поруч один з одним
            </button>
          </h2>
          <div id='collapseCssFloatClear4' className='accordion-collapse collapse' aria-labelledby='headingCssFloatClear4' data-bs-parent='#accordionCssFloatClear'>
            <div className='accordion-body'>
              За допомогою <code>float</code> можна розташовувати елементи поруч один з одним. Це корисно при створенні макетів сторінок, де елементи повинні бути розташовані в один ряд.
            </div>
          </div>
        </div>
      </div>

      <h4>Переваги правильного використання float та clear</h4>
      <div className='row'>
        <div className='col-md-6'>
          <ul className='single-list-inner style-check style-check mb-3'>
            <li><FaCheckCircle /> Забезпечує гнучке розміщення елементів</li>
            <li><FaCheckCircle /> Допомагає створювати складні макети</li>
            <li><FaCheckCircle /> Підвищує зручність користування</li>
          </ul>
        </div>
        <div className='col-md-6'>
          <ul className='single-list-inner style-check style-check mb-3'>
            <li><FaCheckCircle /> Покращує візуальний вигляд сторінки</li>
            <li><FaCheckCircle /> Дозволяє створювати адаптивні дизайни</li>
            <li><FaCheckCircle /> Забезпечує кращу організацію вмісту</li>
          </ul>
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

export default CourseCss14;
