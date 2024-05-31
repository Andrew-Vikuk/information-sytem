import React from "react";
import {
  FaAngleDoubleRight,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import courseListCSS from "../../../scripts/CoursesListCSS";


const CourseCss12 = () => {
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

  <h3>CSS Висота, ширина</h3>

  <p>
    В CSS можна налаштувати висоту та ширину елементів за допомогою властивостей <code>height</code> і <code>width</code>. Також можна встановлювати максимальну ширину за допомогою властивості <code>max-width</code>.
  </p>

  <h4>CSS Налаштування висоти і ширини</h4>

  <p>
    Для встановлення висоти та ширини елементів використовуються властивості <code>height</code> і <code>width</code> відповідно. Значення може бути вказане у пікселях (px), відсотках (%), відносних одиницях (em, rem), а також в автоматичному режимі (auto).
  </p>

  <pre>
    <code>
      {`
        div {
          height: 200px;
          width: 300px;
        }
      `}
    </code>
  </pre>

  <h4>CSS Значення height/width</h4>

  <p>
    Властивості <code>height</code> та <code>width</code> визначають висоту та ширину елемента відповідно. Можливі значення: <code>auto</code> (автоматично), <code>inherit</code> (успадковане значення від батьківського елемента), конкретні числові значення (у пікселях, відсотках або інших одиницях виміру).
  </p>

  <pre>
    <code>
      {`
        div {
          height: auto; /* автоматична висота */
          width: inherit; /* ширина успадковується від батьківського елемента */
        }
      `}
    </code>
  </pre>

  <h4>Встановлення максимальної ширини - max-width</h4>

  <p>
    Властивість <code>max-width</code> встановлює максимальну ширину елемента. Це може бути корисно при роботі з адаптивним дизайном, коли потрібно обмежити максимальну ширину елемента на більших екранах.
  </p>

  <pre>
    <code>
      {`
        div {
          max-width: 500px;
        }
      `}
    </code>
  </pre>

  <div className='accordion accordion-inner accordion-icon-left mt-3 mb-4' id='accordionCssWidthHeight'>
    <div className='accordion-item'>
      <h2 className='accordion-header' id='headingCssWidthHeight1'>
        <button className='accordion-button' type='button' data-bs-toggle='collapse' data-bs-target='#collapseCssWidthHeight1' aria-expanded='true' aria-controls='collapseCssWidthHeight1'>
          CSS Налаштування висоти і ширини
        </button>
      </h2>
      <div id='collapseCssWidthHeight1' className='accordion-collapse collapse show' aria-labelledby='headingCssWidthHeight1' data-bs-parent='#accordionCssWidthHeight'>
        <div className='accordion-body'>
          Для встановлення висоти та ширини елементів використовуються властивості <code>height</code> і <code>width</code> відповідно. Значення може бути вказане у пікселях (px), відсотках (%), відносних одиницях (em, rem), а також в автоматичному режимі (auto).
          <pre>
            <code>
              {`
                div {
                  height: 200px;
                  width: 300px;
                }
              `}
            </code>
          </pre>
        </div>
      </div>
    </div>
    <div className='accordion-item'>
      <h2 className='accordion-header' id='headingCssWidthHeight2'>
        <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#collapseCssWidthHeight2' aria-expanded='false' aria-controls='collapseCssWidthHeight2'>
          CSS Значення height/width
        </button>
      </h2>
      <div id='collapseCssWidthHeight2' className='accordion-collapse collapse' aria-labelledby='headingCssWidthHeight2' data-bs-parent='#accordionCssWidthHeight'>
        <div className='accordion-body'>
          Властивості <code>height</code> та <code>width</code> визначають висоту та ширину елемента відповідно. Можливі значення: <code>auto</code> (автоматично), <code>inherit</code> (успадковане значення від батьківського елемента), конкретні числові значення (у пікселях, відсотках або інших одиницях виміру).
          <pre>
            <code>
              {`
                div {
                  height: auto; /* автоматична висота */
                  width: inherit; /* ширина успадковується від батьківського елемента */
                }
              `}
            </code>
          </pre>
        </div>
      </div>
    </div>
    <div className='accordion-item'>
      <h2 className='accordion-header' id='headingCssWidthHeight3'>
        <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#collapseCssWidthHeight3' aria-expanded='false' aria-controls='collapseCssWidthHeight3'>
          Встановлення максимальної ширини - max-width
        </button>
      </h2>
      <div id='collapseCssWidthHeight3' className='accordion-collapse collapse' aria-labelledby='headingCssWidthHeight3' data-bs-parent='#accordionCssWidthHeight'>
        <div className='accordion-body'>
          Властивість <code>max-width</code> встановлює максимальну ширину елемента. Це може бути корисно при роботі з адаптивним дизайном, коли потрібно обмежити максимальну ширину елемента на більших екранах.
          <pre>
            <code>
              {`
                div {
                  max-width: 500px;
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

export default CourseCss12;
