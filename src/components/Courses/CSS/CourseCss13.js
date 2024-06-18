import React from "react";
import {
  FaAngleDoubleRight,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";
import { HashLink as Link } from 'react-router-hash-link';
import courseListCSS from "../../../scripts/CoursesListCSS";
import { NavLink } from "react-router-dom";



const CourseCss13 = () => {
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
      <h3>CSS Макет - Overflow</h3>
      <p>
        В CSS властивість <code>overflow</code> використовується для управління тим, що відбувається, коли вміст елемента перевищує розміри його контейнера. Ця властивість дозволяє визначити, чи повинен вміст бути обрізаний, прокручуватись або бути видимим.
      </p>

      <h4><code>overflow: visible</code></h4>
      <p>
        Значення <code>visible</code> є значенням за замовчуванням для властивості <code>overflow</code>. Воно означає, що надлишковий вміст буде видимий і вийде за межі контейнера.
      </p>
      <pre>
        <code>
          {`
            div {
              overflow: visible;
            }
          `}
        </code>
      </pre>

      <h4><code>overflow: hidden</code></h4>
      <p>
        Значення <code>hidden</code> означає, що надлишковий вміст буде обрізаний і не буде видимим за межами контейнера. Це корисно, коли ви хочете приховати вміст, який виходить за межі контейнера.
      </p>
      <pre>
        <code>
          {`
            div {
              overflow: hidden;
            }
          `}
        </code>
      </pre>

      <h4><code>overflow: scroll</code></h4>
      <p>
        Значення <code>scroll</code> означає, що надлишковий вміст буде доступний для прокрутки. Це додає прокручувальні панелі до контейнера, навіть якщо весь вміст поміщається всередині.
      </p>
      <pre>
        <code>
          {`
            div {
              overflow: scroll;
            }
          `}
        </code>
      </pre>

      <h4><code>overflow: auto</code></h4>
      <p>
        Значення <code>auto</code> означає, що прокручувальні панелі будуть додані лише у випадку, якщо надлишковий вміст не поміщається всередині контейнера. Це значення автоматично визначає, чи потрібні прокручувальні панелі.
      </p>
      <pre>
        <code>
          {`
            div {
              overflow: auto;
            }
          `}
        </code>
      </pre>

      <h4><code>overflow-x</code> та <code>overflow-y</code></h4>
      <p>
        Властивості <code>overflow-x</code> та <code>overflow-y</code> дозволяють керувати прокруткою по горизонталі та вертикалі відповідно. Це корисно, коли ви хочете окремо контролювати горизонтальне та вертикальне переповнення.
      </p>
      <pre>
        <code>
          {`
            div {
              overflow-x: scroll;
              overflow-y: hidden;
            }
          `}
        </code>
      </pre>

      <h4>Деталі про Overflow</h4>
      <div className='accordion accordion-inner accordion-icon-left mt-3 mb-4' id='accordionCssOverflow'>
        <div className='accordion-item'>
          <h2 className='accordion-header' id='headingCssOverflow1'>
            <button
              className='accordion-button'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#collapseCssOverflow1'
              aria-expanded='true'
              aria-controls='collapseCssOverflow1'
            >
              overflow: visible
            </button>
          </h2>
          <div id='collapseCssOverflow1' className='accordion-collapse collapse show' aria-labelledby='headingCssOverflow1' data-bs-parent='#accordionCssOverflow'>
            <div className='accordion-body'>
              <code>overflow: visible</code> - надлишковий вміст буде видимий і вийде за межі контейнера. Це значення за замовчуванням для властивості <code>overflow</code>.
            </div>
          </div>
        </div>
        <div className='accordion-item'>
          <h2 className='accordion-header' id='headingCssOverflow2'>
            <button
              className='accordion-button collapsed'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#collapseCssOverflow2'
              aria-expanded='false'
              aria-controls='collapseCssOverflow2'
            >
              overflow: hidden
            </button>
          </h2>
          <div id='collapseCssOverflow2' className='accordion-collapse collapse' aria-labelledby='headingCssOverflow2' data-bs-parent='#accordionCssOverflow'>
            <div className='accordion-body'>
              <code>overflow: hidden</code> - надлишковий вміст буде обрізаний і не буде видимим за межами контейнера. Це корисно, коли ви хочете приховати вміст, який виходить за межі контейнера.
            </div>
          </div>
        </div>
        <div className='accordion-item'>
          <h2 className='accordion-header' id='headingCssOverflow3'>
            <button
              className='accordion-button collapsed'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#collapseCssOverflow3'
              aria-expanded='false'
              aria-controls='collapseCssOverflow3'
            >
              overflow: scroll
            </button>
          </h2>
          <div id='collapseCssOverflow3' className='accordion-collapse collapse' aria-labelledby='headingCssOverflow3' data-bs-parent='#accordionCssOverflow'>
            <div className='accordion-body'>
              <code>overflow: scroll</code> - надлишковий вміст буде доступний для прокрутки. Це додає прокручувальні панелі до контейнера, навіть якщо весь вміст поміщається всередині.
            </div>
          </div>
        </div>
        <div className='accordion-item'>
          <h2 className='accordion-header' id='headingCssOverflow4'>
            <button
              className='accordion-button collapsed'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#collapseCssOverflow4'
              aria-expanded='false'
              aria-controls='collapseCssOverflow4'
            >
              overflow: auto
            </button>
          </h2>
          <div id='collapseCssOverflow4' className='accordion-collapse collapse' aria-labelledby='headingCssOverflow4' data-bs-parent='#accordionCssOverflow'>
            <div className='accordion-body'>
              <code>overflow: auto</code> - прокручувальні панелі будуть додані лише у випадку, якщо надлишковий вміст не поміщається всередині контейнера. Це значення автоматично визначає, чи потрібні прокручувальні панелі.
            </div>
          </div>
        </div>
        <div className='accordion-item'>
          <h2 className='accordion-header' id='headingCssOverflow5'>
            <button
              className='accordion-button collapsed'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#collapseCssOverflow5'
              aria-expanded='false'
              aria-controls='collapseCssOverflow5'
            >
              overflow-x та overflow-y
            </button>
          </h2>
          <div id='collapseCssOverflow5' className='accordion-collapse collapse' aria-labelledby='headingCssOverflow5' data-bs-parent='#accordionCssOverflow'>
            <div className='accordion-body'>
              <code>overflow-x</code> та <code>overflow-y</code> дозволяють керувати прокруткою по горизонталі та вертикалі відповідно. Це корисно, коли ви хочете окремо контролювати горизонтальне та вертикальне переповнення.
            </div>
          </div>
        </div>
      </div>

      <h4>Переваги правильного використання властивості overflow</h4>
      <div className='row'>
        <div className='col-md-6'>
          <ul className='single-list-inner style-check style-check mb-3'>
            <li><FaCheckCircle /> Забезпечує кращу читабельність вмісту</li>
            <li><FaCheckCircle /> Покращує візуальний вигляд сторінки</li>
            <li><FaCheckCircle /> Допомагає уникнути переповнення елементів</li>
          </ul>
        </div>
        <div className='col-md-6'>
          <ul className='single-list-inner style-check style-check mb-3'>
            <li><FaCheckCircle /> Дозволяє створювати адаптивні дизайни</li>
            <li><FaCheckCircle /> Підвищує зручність користування</li>
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

export default CourseCss13;
