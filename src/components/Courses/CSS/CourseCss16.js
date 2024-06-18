import React from "react";
import {
  FaAngleDoubleRight,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";
import { HashLink as Link } from 'react-router-hash-link';
import courseListCSS from "../../../scripts/CoursesListCSS";
import { NavLink } from "react-router-dom";



const CourseCss16 = () => {
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
      <h3>CSS Комбінатори</h3>
      <p>
        Комбінатори в CSS дозволяють вам вибирати елементи на основі їхніх взаємозв'язків з іншими елементами в документі. Вони допомагають вам створювати більш точні та ефективні правила стилізації.
      </p>

      <h4>Селектор нащадків</h4>
      <p>
        Селектор нащадків вибирає всі елементи, що є нащадками певного елемента. Наприклад, селектор <code>div p</code> вибере всі елементи <code>&lt;p&gt;</code>, що є нащадками елемента <code>&lt;div&gt;</code>.
      </p>
      <pre>
        <code>
          {`
            div p {
              color: blue;
            }
          `}
        </code>
      </pre>

      <h4>Селектор дочірній (>)</h4>
      <p>
        Селектор дочірній вибирає всі елементи, що є безпосередніми дітьми певного елемента. Наприклад, селектор <code>div &gt; p</code> вибере тільки ті елементи <code>&lt;p&gt;</code>, що є безпосередніми дітьми елемента <code>&lt;div&gt;</code>.
      </p>
      <pre>
        <code>
          {`
            div > p {
              color: green;
            }
          `}
        </code>
      </pre>

      <h4>Сусідній родинний селектор (+)</h4>
      <p>
        Сусідній родинний селектор вибирає елемент, що безпосередньо слідує за певним елементом. Наприклад, селектор <code>h1 + p</code> вибере елемент <code>&lt;p&gt;</code>, що безпосередньо слідує за елементом <code>&lt;h1&gt;</code>.
      </p>
      <pre>
        <code>
          {`
            h1 + p {
              font-weight: bold;
            }
          `}
        </code>
      </pre>

      <h4>Загальний батьківський селектор (~)</h4>
      <p>
        Загальний батьківський селектор вибирає всі елементи, що слідують за певним елементом і є його "сіблінгами" (однорівневими родичами). Наприклад, селектор <code>h1 ~ p</code> вибере всі елементи <code>&lt;p&gt;</code>, що слідують за елементом <code>&lt;h1&gt;</code>.
      </p>
      <pre>
        <code>
          {`
            h1 ~ p {
              color: red;
            }
          `}
        </code>
      </pre>

      <h4>Всі CSS селектори комбінатора</h4>
      <div className='accordion accordion-inner accordion-icon-left mt-3 mb-4' id='accordionCombinators'>
        <div className='accordion-item'>
          <h2 className='accordion-header' id='headingCombinator1'>
            <button
              className='accordion-button'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#collapseCombinator1'
              aria-expanded='true'
              aria-controls='collapseCombinator1'
            >
              Селектор нащадків
            </button>
          </h2>
          <div id='collapseCombinator1' className='accordion-collapse collapse show' aria-labelledby='headingCombinator1' data-bs-parent='#accordionCombinators'>
            <div className='accordion-body'>
              Селектор нащадків вибирає всі елементи, що є нащадками певного елемента, наприклад, <code>div p</code>.
            </div>
          </div>
        </div>
        <div className='accordion-item'>
          <h2 className='accordion-header' id='headingCombinator2'>
            <button
              className='accordion-button collapsed'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#collapseCombinator2'
              aria-expanded='false'
              aria-controls='collapseCombinator2'
            >
              Селектор дочірній (>)
            </button>
          </h2>
          <div id='collapseCombinator2' className='accordion-collapse collapse' aria-labelledby='headingCombinator2' data-bs-parent='#accordionCombinators'>
            <div className='accordion-body'>
              Селектор дочірній вибирає всі елементи, що є безпосередніми дітьми певного елемента, наприклад, <code>div &gt; p</code>.
            </div>
          </div>
        </div>
        <div className='accordion-item'>
          <h2 className='accordion-header' id='headingCombinator3'>
            <button
              className='accordion-button collapsed'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#collapseCombinator3'
              aria-expanded='false'
              aria-controls='collapseCombinator3'
            >
              Сусідній родинний селектор (+)
            </button>
          </h2>
          <div id='collapseCombinator3' className='accordion-collapse collapse' aria-labelledby='headingCombinator3' data-bs-parent='#accordionCombinators'>
            <div className='accordion-body'>
              Сусідній родинний селектор вибирає елемент, що безпосередньо слідує за певним елементом, наприклад, <code>h1 + p</code>.
            </div>
          </div>
        </div>
        <div className='accordion-item'>
          <h2 className='accordion-header' id='headingCombinator4'>
            <button
              className='accordion-button collapsed'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#collapseCombinator4'
              aria-expanded='false'
              aria-controls='collapseCombinator4'
            >
              Загальний батьківський селектор (~)
            </button>
          </h2>
          <div id='collapseCombinator4' className='accordion-collapse collapse' aria-labelledby='headingCombinator4' data-bs-parent='#accordionCombinators'>
            <div className='accordion-body'>
              Загальний батьківський селектор вибирає всі елементи, що слідують за певним елементом і є його "сіблінгами", наприклад, <code>h1 ~ p</code>.
            </div>
          </div>
        </div>
      </div>

      <h4>Переваги використання комбінаторів</h4>
      <div className='row'>
        <div className='col-md-6'>
          <ul className='single-list-inner style-check style-check mb-3'>
            <li><FaCheckCircle /> Точна стилізація елементів</li>
            <li><FaCheckCircle /> Зменшення кількості CSS-коду</li>
            <li><FaCheckCircle /> Підвищення читабельності стилів</li>
          </ul>
        </div>
        <div className='col-md-6'>
          <ul className='single-list-inner style-check style-check mb-3'>
            <li><FaCheckCircle /> Легке обслуговування коду</li>
            <li><FaCheckCircle /> Поліпшення організації CSS-файлів</li>
            <li><FaCheckCircle /> Гнучкість у стилізації</li>
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

export default CourseCss16;
