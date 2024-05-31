import React from "react";
import {
  FaAngleDoubleRight,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import courseListCSS from "../../../scripts/CoursesListCSS";


const CourseCss4 = () => {
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

  <h3>CSS Синтаксис</h3>

  <p>
    CSS (Cascading Style Sheets) використовується для стилізації HTML-документів. Він дозволяє змінювати вигляд і відчуття веб-сторінок за допомогою стилів. Синтаксис CSS складається з селекторів та декларацій.
  </p>

  <h4>CSS Синтаксис</h4>

  <p>
    CSS-правило складається з двох основних частин: селектора та декларації. Селектор вказує, який HTML-елемент буде стилізовано, а декларація визначає, які стилі будуть застосовані до цього елемента. Декларація містить властивості та їх значення, розділені двокрапкою, і завершується крапкою з комою.
  </p>

  <pre>
    <code>
      {`
        селектор {
          властивість: значення;
        }
      `}
    </code>
  </pre>

  <p>Приклад:</p>

  <pre>
    <code>
      {`
        h1 {
          color: blue;
          font-size: 24px;
        }
      `}
    </code>
  </pre>

  <h4>CSS Коментарі</h4>

  <p>
    Коментарі в CSS використовуються для пояснення коду або тимчасового відключення стилів. Вони не відображаються в браузері і не впливають на кінцевий результат. Коментарі в CSS розміщуються між /* і */.
  </p>

  <pre>
    <code>
      {`
        /* Це коментар */
        p {
          color: red; /* Цей стиль застосовується до елементів <p> */
        }
      `}
    </code>
  </pre>

  <div className='accordion accordion-inner accordion-icon-left mt-3 mb-4' id='accordionCssSyntax'>
    <div className='accordion-item'>
      <h2 className='accordion-header' id='headingCssSyntax1'>
        <button className='accordion-button' type='button' data-bs-toggle='collapse' data-bs-target='#collapseCssSyntax1' aria-expanded='true' aria-controls='collapseCssSyntax1'>
          CSS Синтаксис
        </button>
      </h2>
      <div id='collapseCssSyntax1' className='accordion-collapse collapse show' aria-labelledby='headingCssSyntax1' data-bs-parent='#accordionCssSyntax'>
        <div className='accordion-body'>
          Синтаксис CSS складається з селектора та декларації. Селектор вказує, який HTML-елемент буде стилізовано, а декларація визначає, які стилі будуть застосовані до цього елемента. Декларація містить властивості та їх значення, розділені двокрапкою, і завершується крапкою з комою.
        </div>
      </div>
    </div>
    <div className='accordion-item'>
      <h2 className='accordion-header' id='headingCssSyntax2'>
        <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#collapseCssSyntax2' aria-expanded='false' aria-controls='collapseCssSyntax2'>
          CSS Коментарі
        </button>
      </h2>
      <div id='collapseCssSyntax2' className='accordion-collapse collapse' aria-labelledby='headingCssSyntax2' data-bs-parent='#accordionCssSyntax'>
        <div className='accordion-body'>
          Коментарі в CSS використовуються для пояснення коду або тимчасового відключення стилів. Вони не відображаються в браузері і не впливають на кінцевий результат. Коментарі в CSS розміщуються між /* і */.
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

export default CourseCss4;
