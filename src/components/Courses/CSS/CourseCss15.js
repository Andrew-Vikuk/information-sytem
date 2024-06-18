import React from "react";
import {
  FaAngleDoubleRight,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";
import { HashLink as Link } from 'react-router-hash-link';
import courseListCSS from "../../../scripts/CoursesListCSS";
import { NavLink } from "react-router-dom";



const CourseCss15 = () => {
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
      <h3>Горизонтальне & Вертикальне вирівнювання</h3>
      <p>
        У CSS існує багато способів для вирівнювання елементів як по горизонталі, так і по вертикалі. Вирівнювання тексту, зображень та інших елементів є важливою частиною створення привабливого та зручного інтерфейсу користувача.
      </p>

      <h4>Вирівняти текст по центру</h4>
      <p>
        Для вирівнювання тексту по центру використовується властивість <code>text-align: center;</code>.
      </p>
      <pre>
        <code>
          {`
            .center-text {
              text-align: center;
            }
          `}
        </code>
      </pre>

      <h4>Центрувати зображення</h4>
      <p>
        Щоб центрувати зображення, можна використовувати CSS властивості <code>display: block;</code> та <code>margin: auto;</code>.
      </p>
      <pre>
        <code>
          {`
            .center-image {
              display: block;
              margin: auto;
            }
          `}
        </code>
      </pre>

      <h4>Вирівнювання по лівому і правому краю - використання position</h4>
      <p>
        Властивість <code>position</code> дозволяє розташовувати елементи з точністю до пікселя. Наприклад, <code>position: absolute;</code> можна використовувати для вирівнювання елементів по краю.
      </p>
      <pre>
        <code>
          {`
            .left-position {
              position: absolute;
              left: 0;
            }

            .right-position {
              position: absolute;
              right: 0;
            }
          `}
        </code>
      </pre>

      <h4>Вирівнювання по лівому і правому краю - використання float</h4>
      <p>
        Властивість <code>float</code> також може бути використана для вирівнювання елементів по лівому або правому краю контейнера.
      </p>
      <pre>
        <code>
          {`
            .left-float {
              float: left;
            }

            .right-float {
              float: right;
            }
          `}
        </code>
      </pre>

      <h4>Вертикальне центрування - використання padding</h4>
      <p>
        Один з найпростіших способів вертикального центрування елемента - використання властивості <code>padding</code>.
      </p>
      <pre>
        <code>
          {`
            .vertical-center {
              padding-top: 50px;
              padding-bottom: 50px;
              height: 200px;
              background-color: #f0f0f0;
            }
          `}
        </code>
      </pre>

      <h4>Деталі про вирівнювання</h4>
      <div className='accordion accordion-inner accordion-icon-left mt-3 mb-4' id='accordionAlignment'>
        <div className='accordion-item'>
          <h2 className='accordion-header' id='headingAlignment1'>
            <button
              className='accordion-button'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#collapseAlignment1'
              aria-expanded='true'
              aria-controls='collapseAlignment1'
            >
              Вирівняти текст по центру
            </button>
          </h2>
          <div id='collapseAlignment1' className='accordion-collapse collapse show' aria-labelledby='headingAlignment1' data-bs-parent='#accordionAlignment'>
            <div className='accordion-body'>
              Використовуйте <code>text-align: center;</code> для вирівнювання тексту по центру.
            </div>
          </div>
        </div>
        <div className='accordion-item'>
          <h2 className='accordion-header' id='headingAlignment2'>
            <button
              className='accordion-button collapsed'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#collapseAlignment2'
              aria-expanded='false'
              aria-controls='collapseAlignment2'
            >
              Центрувати зображення
            </button>
          </h2>
          <div id='collapseAlignment2' className='accordion-collapse collapse' aria-labelledby='headingAlignment2' data-bs-parent='#accordionAlignment'>
            <div className='accordion-body'>
              Для центрування зображень можна використовувати <code>display: block;</code> та <code>margin: auto;</code>.
            </div>
          </div>
        </div>
        <div className='accordion-item'>
          <h2 className='accordion-header' id='headingAlignment3'>
            <button
              className='accordion-button collapsed'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#collapseAlignment3'
              aria-expanded='false'
              aria-controls='collapseAlignment3'
            >
              Вирівнювання по лівому і правому краю - використання position
            </button>
          </h2>
          <div id='collapseAlignment3' className='accordion-collapse collapse' aria-labelledby='headingAlignment3' data-bs-parent='#accordionAlignment'>
            <div className='accordion-body'>
              <code>position: absolute;</code> дозволяє розташовувати елементи з точністю до пікселя, що корисно для вирівнювання по краю.
            </div>
          </div>
        </div>
        <div className='accordion-item'>
          <h2 className='accordion-header' id='headingAlignment4'>
            <button
              className='accordion-button collapsed'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#collapseAlignment4'
              aria-expanded='false'
              aria-controls='collapseAlignment4'
            >
              Вирівнювання по лівому і правому краю - використання float
            </button>
          </h2>
          <div id='collapseAlignment4' className='accordion-collapse collapse' aria-labelledby='headingAlignment4' data-bs-parent='#accordionAlignment'>
            <div className='accordion-body'>
              Використовуйте <code>float</code> для вирівнювання елементів по лівому або правому краю контейнера.
            </div>
          </div>
        </div>
        <div className='accordion-item'>
          <h2 className='accordion-header' id='headingAlignment5'>
            <button
              className='accordion-button collapsed'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#collapseAlignment5'
              aria-expanded='false'
              aria-controls='collapseAlignment5'
            >
              Вертикальне центрування - використання padding
            </button>
          </h2>
          <div id='collapseAlignment5' className='accordion-collapse collapse' aria-labelledby='headingAlignment5' data-bs-parent='#accordionAlignment'>
            <div className='accordion-body'>
              Використовуйте <code>padding</code> для простого вертикального центрування елементів.
            </div>
          </div>
        </div>
      </div>

      <h4>Переваги правильного вирівнювання елементів</h4>
      <div className='row'>
        <div className='col-md-6'>
          <ul className='single-list-inner style-check style-check mb-3'>
            <li><FaCheckCircle /> Покращення естетики веб-сторінки</li>
            <li><FaCheckCircle /> Забезпечення зручності користування</li>
            <li><FaCheckCircle /> Краща організація контенту</li>
          </ul>
        </div>
        <div className='col-md-6'>
          <ul className='single-list-inner style-check style-check mb-3'>
            <li><FaCheckCircle /> Підвищення читабельності тексту</li>
            <li><FaCheckCircle /> Створення адаптивних макетів</li>
            <li><FaCheckCircle /> Професійний вигляд сторінки</li>
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

export default CourseCss15;
