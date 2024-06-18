import React from "react";
import {
  FaAngleDoubleRight,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";
import { HashLink as Link } from 'react-router-hash-link';
import courseListCSS from "../../../scripts/CoursesListCSS";
import { NavLink } from "react-router-dom";



const CourseCss17= () => {
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
      <h3>CSS Псевдо-класи</h3>
      <p>
        Псевдо-класи в CSS дозволяють застосовувати стилі до елементів у певних станах або положеннях, які не можна визначити за допомогою звичайних селекторів. Вони допомагають створювати динамічні ефекти і забезпечують кращу інтерактивність.
      </p>

      <h4>Синтаксис</h4>
      <p>
        Псевдо-класи використовуються з селекторами для стилізації елементів на основі їхнього стану. Вони записуються після селектора, відокремлюючись двокрапкою <code>:</code>.
      </p>
      <pre>
        <code>
          {`
            selector:pseudo-class {
              property: value;
            }
          `}
        </code>
      </pre>

      <h4>Якірні псевдо-класи</h4>
      <p>
        Якірні псевдо-класи застосовуються до елементів <code>&lt;a&gt;</code> на основі їхніх станів.
      </p>
      <pre>
        <code>
          {`
            a:link {
              color: blue;
            }
            a:visited {
              color: purple;
            }
            a:hover {
              color: red;
            }
            a:active {
              color: green;
            }
          `}
        </code>
      </pre>

      <h4>Псевдо-класи та CSS-класи</h4>
      <p>
        Псевдо-класи можуть використовуватися разом із CSS-класами для стилізації елементів у певних станах.
      </p>
      <pre>
        <code>
          {`
            .button:hover {
              background-color: yellow;
            }
          `}
        </code>
      </pre>

      <h4>Наведення курсора на &lt;div&gt;</h4>
      <p>
        Псевдо-класи можуть застосовуватися до будь-яких елементів, включаючи <code>&lt;div&gt;</code>.
      </p>
      <pre>
        <code>
          {`
            div:hover {
              border: 1px solid black;
            }
          `}
        </code>
      </pre>

      <h4>Проста виринаюча підказка</h4>
      <p>
        Використання псевдо-класу <code>:hover</code> для створення простої виринаючої підказки.
      </p>
      <pre>
        <code>
          {`
            .tooltip {
              position: relative;
              display: inline-block;
            }
            
            .tooltip .tooltiptext {
              visibility: hidden;
              width: 120px;
              background-color: black;
              color: #fff;
              text-align: center;
              border-radius: 6px;
              padding: 5px;
              position: absolute;
              z-index: 1;
              bottom: 125%; /* Position the tooltip above the text */
              left: 50%;
              margin-left: -60px;
              opacity: 0;
              transition: opacity 0.3s;
            }
            
            .tooltip:hover .tooltiptext {
              visibility: visible;
              opacity: 1;
            }
          `}
        </code>
      </pre>

      <h4>CSS - Псевдо-клас :first-child</h4>
      <p>
        Псевдо-клас <code>:first-child</code> вибирає перший дочірній елемент у своєму батьківському елементі.
      </p>
      <pre>
        <code>
          {`
            p:first-child {
              color: blue;
            }
          `}
        </code>
      </pre>

      <h4>CSS - Псевдо-клас :lang</h4>
      <p>
        Псевдо-клас <code>:lang</code> вибирає елементи на основі їхньої мови.
      </p>
      <pre>
        <code>
          {`
            p:lang(en) {
              color: blue;
            }
            p:lang(fr) {
              color: red;
            }
          `}
        </code>
      </pre>

      <h4>Більше прикладів</h4>
      <div className='accordion accordion-inner accordion-icon-left mt-3 mb-4' id='accordionPseudoClasses'>
        <div className='accordion-item'>
          <h2 className='accordion-header' id='headingPseudoClass1'>
            <button
              className='accordion-button'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#collapsePseudoClass1'
              aria-expanded='true'
              aria-controls='collapsePseudoClass1'
            >
              Псевдо-класи для лінків
            </button>
          </h2>
          <div id='collapsePseudoClass1' className='accordion-collapse collapse show' aria-labelledby='headingPseudoClass1' data-bs-parent='#accordionPseudoClasses'>
            <div className='accordion-body'>
              Використання псевдо-класів <code>:link</code>, <code>:visited</code>, <code>:hover</code>, <code>:active</code> для стилізації лінків.
            </div>
          </div>
        </div>
        <div className='accordion-item'>
          <h2 className='accordion-header' id='headingPseudoClass2'>
            <button
              className='accordion-button collapsed'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#collapsePseudoClass2'
              aria-expanded='false'
              aria-controls='collapsePseudoClass2'
            >
              Псевдо-класи для форм
            </button>
          </h2>
          <div id='collapsePseudoClass2' className='accordion-collapse collapse' aria-labelledby='headingPseudoClass2' data-bs-parent='#accordionPseudoClasses'>
            <div className='accordion-body'>
              Використання псевдо-класів <code>:focus</code>, <code>:checked</code>, <code>:disabled</code> для стилізації елементів форм.
            </div>
          </div>
        </div>
        <div className='accordion-item'>
          <h2 className='accordion-header' id='headingPseudoClass3'>
            <button
              className='accordion-button collapsed'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#collapsePseudoClass3'
              aria-expanded='false'
              aria-controls='collapsePseudoClass3'
            >
              Псевдо-класи для позиціонування
            </button>
          </h2>
          <div id='collapsePseudoClass3' className='accordion-collapse collapse' aria-labelledby='headingPseudoClass3' data-bs-parent='#accordionPseudoClasses'>
            <div className='accordion-body'>
              Використання псевдо-класів <code>:first-child</code>, <code>:last-child</code>, <code>:nth-child(n)</code> для позиціонування елементів.
            </div>
          </div>
        </div>
      </div>

      <h4>Переваги використання псевдо-класів</h4>
      <div className='row'>
        <div className='col-md-6'>
          <ul className='single-list-inner style-check style-check mb-3'>
            <li><FaCheckCircle /> Покращення інтерфейсу користувача</li>
            <li><FaCheckCircle /> Створення динамічних ефектів</li>
            <li><FaCheckCircle /> Підвищення інтерактивності</li>
          </ul>
        </div>
        <div className='col-md-6'>
          <ul className='single-list-inner style-check style-check mb-3'>
            <li><FaCheckCircle /> Легка реалізація CSS-ефектів</li>
            <li><FaCheckCircle /> Підтримка всіх сучасних браузерів</li>
            <li><FaCheckCircle /> Зменшення використання JavaScript для інтерфейсних завдань</li>
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

export default CourseCss17;
