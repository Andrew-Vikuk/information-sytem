import React from "react";
import {
  FaAngleDoubleRight,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";
import { HashLink as Link } from 'react-router-hash-link';
import courseListCSS from "../../../scripts/CoursesListCSS";
import { NavLink } from "react-router-dom";



const CourseCss18= () => {
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
      <h3>CSS Псевдо-елементи</h3>
      <p>
        Псевдо-елементи в CSS дозволяють стилізувати певні частини елементів, як-от перший рядок тексту або першу літеру. Вони використовуються для більш точного контролю над стилізацією.
      </p>

      <h4>Псевдо-елемент ::first-line</h4>
      <p>
        Псевдо-елемент <code>::first-line</code> стилізує перший рядок тексту в елементі.
      </p>
      <pre>
        <code>
          {`
            p::first-line {
              color: blue;
              font-weight: bold;
            }
          `}
        </code>
      </pre>

      <h4>Псевдо-елемент ::first-letter</h4>
      <p>
        Псевдо-елемент <code>::first-letter</code> стилізує першу літеру тексту в елементі.
      </p>
      <pre>
        <code>
          {`
            p::first-letter {
              color: red;
              font-size: 2em;
              font-weight: bold;
            }
          `}
        </code>
      </pre>

      <h4>Псевдо-елементи та CSS класи</h4>
      <p>
        Псевдо-елементи можуть використовуватися разом із CSS класами для надання певних стилів.
      </p>
      <pre>
        <code>
          {`
            .highlight::first-letter {
              color: yellow;
            }
          `}
        </code>
      </pre>

      <h4>Кілька псевдо-елементів</h4>
      <p>
        CSS дозволяє використовувати кілька псевдо-елементів одночасно для стилізації різних частин елементів.
      </p>
      <pre>
        <code>
          {`
            p::first-letter,
            p::first-line {
              color: green;
            }
          `}
        </code>
      </pre>

      <h4>CSS псевдо-елемент - ::before</h4>
      <p>
        Псевдо-елемент <code>::before</code> додає контент перед вмістом елемента.
      </p>
      <pre>
        <code>
          {`
            .note::before {
              content: "Примітка: ";
              font-weight: bold;
              color: red;
            }
          `}
        </code>
      </pre>

      <h4>CSS псевдо-елемент - ::after</h4>
      <p>
        Псевдо-елемент <code>::after</code> додає контент після вмісту елемента.
      </p>
      <pre>
        <code>
          {`
            .note::after {
              content: " (кінець примітки)";
              font-weight: bold;
              color: red;
            }
          `}
        </code>
      </pre>

      <h4>CSS псевдо-елемент - ::selection</h4>
      <p>
        Псевдо-елемент <code>::selection</code> стилізує частину документа, яка виділена користувачем.
      </p>
      <pre>
        <code>
          {`
            ::selection {
              background: yellow;
              color: black;
            }
          `}
        </code>
      </pre>

      <div className='accordion accordion-inner accordion-icon-left mt-3 mb-4' id='accordionPseudoElements'>
        <div className='accordion-item'>
          <h2 className='accordion-header' id='headingPseudoElement1'>
            <button
              className='accordion-button'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#collapsePseudoElement1'
              aria-expanded='true'
              aria-controls='collapsePseudoElement1'
            >
              Псевдо-елемент ::first-line
            </button>
          </h2>
          <div id='collapsePseudoElement1' className='accordion-collapse collapse show' aria-labelledby='headingPseudoElement1' data-bs-parent='#accordionPseudoElements'>
            <div className='accordion-body'>
              Псевдо-елемент <code>::first-line</code> дозволяє стилізувати перший рядок тексту в елементі, додаючи йому особливий вигляд. Це корисно для створення ефектних заголовків або виділення важливих частин тексту.
            </div>
          </div>
        </div>
        <div className='accordion-item'>
          <h2 className='accordion-header' id='headingPseudoElement2'>
            <button
              className='accordion-button collapsed'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#collapsePseudoElement2'
              aria-expanded='false'
              aria-controls='collapsePseudoElement2'
            >
              Псевдо-елемент ::first-letter
            </button>
          </h2>
          <div id='collapsePseudoElement2' className='accordion-collapse collapse' aria-labelledby='headingPseudoElement2' data-bs-parent='#accordionPseudoElements'>
            <div className='accordion-body'>
              Псевдо-елемент <code>::first-letter</code> дозволяє стилізувати першу літеру тексту в елементі, що додає тексту стильний вигляд. Наприклад, можна зробити першу літеру абзацу більшою та кольоровою для створення ефекту заголовку.
            </div>
          </div>
        </div>
        <div className='accordion-item'>
          <h2 className='accordion-header' id='headingPseudoElement3'>
            <button
              className='accordion-button collapsed'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#collapsePseudoElement3'
              aria-expanded='false'
              aria-controls='collapsePseudoElement3'
            >
              Використання ::before та ::after
            </button>
          </h2>
          <div id='collapsePseudoElement3' className='accordion-collapse collapse' aria-labelledby='headingPseudoElement3' data-bs-parent='#accordionPseudoElements'>
            <div className='accordion-body'>
              Псевдо-елементи <code>::before</code> та <code>::after</code> дозволяють додавати контент перед або після вмісту елемента. Вони широко використовуються для додавання іконок, текстових приміток або інших декоративних елементів без зміни HTML структури.
            </div>
          </div>
        </div>
      </div>

      <h4>Переваги використання псевдо-елементів</h4>
      <div className='row'>
        <div className='col-md-6'>
          <ul className='single-list-inner style-check style-check mb-3'>
            <li><FaCheckCircle /> Покращення візуальної привабливості</li>
            <li><FaCheckCircle /> Легка реалізація стилізаційних ефектів</li>
            <li><FaCheckCircle /> Зменшення кількості HTML-коду</li>
          </ul>
        </div>
        <div className='col-md-6'>
          <ul className='single-list-inner style-check style-check mb-3'>
            <li><FaCheckCircle /> Підтримка всіх сучасних браузерів</li>
            <li><FaCheckCircle /> Висока гнучкість у стилізації</li>
            <li><FaCheckCircle /> Підвищення інтерактивності інтерфейсу</li>
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

export default CourseCss18;
