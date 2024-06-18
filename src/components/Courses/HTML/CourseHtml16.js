import React from "react";
import {
  FaAngleDoubleRight,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";
import { HashLink as Link } from 'react-router-hash-link';
import courseListHTML from "../../../scripts/CoursesListHTML";
import { NavLink } from "react-router-dom";


const CourseHtml16 = () => {
  return (
    <>
      {/* ===================== Course Single Page start ===================== */}
      <div className='service-area pd-top-120 pd-bottom-90'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-4 col-12'>
              <div className='td-sidebar service-sidebar'>
                <div className='widget widget_catagory'>
                   <Link className='btn btn-border-base' to='/courses#html'>
                      Назад до курсів
                    </Link>
                  <h5 className='widget-title mt-4 mb-2'>
                    Уроки по HTML
                  </h5>
                  <ul className='catagory-items'>
                  {courseListHTML.map((data, index) => (
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
                    <img src='assets/img/service/html_cat.jpg' alt='img' className="w-100 h-20"  style={{height: "300px", objectFit: "cover", marginBottom: "20px"}}/>
                  </div>

                   <div className='details'>
      <h3>HTML Сутності</h3>
      <p>
        HTML сутності використовуються для відображення спеціальних символів на веб-сторінках, які мають спеціальне значення в HTML. Вони починаються з символу &amp; і закінчуються символом ;. Наприклад, щоб відобразити символ &lt;, який використовується для позначення тегів HTML, потрібно використовувати сутність <code>&amp;lt;</code>.
      </p>

      <h4>Нерозривний пробіл</h4>
      <p>
        Нерозривний пробіл є одним з найпоширеніших прикладів HTML сутностей. Він використовується для створення пробілу, який не буде розділений або пропущений браузером.
      </p>
      <pre>
        <code>
          {`
            &nbsp;
          `}
        </code>
      </pre>
      <p>
        Нерозривний пробіл може бути корисним у випадках, коли потрібно зберегти розриви слів або забезпечити правильне форматування тексту.
      </p>

      <h4>Деякі інші корисні символьні об’єкти HTML</h4>
      <p>
        Існує безліч інших символьних об’єктів HTML, які можуть бути корисні для відображення спеціальних символів, які неможливо або незручно вводити з клавіатури.
      </p>
      <ul>
        <li><code>&amp;copy;</code> - ©</li>
        <li><code>&amp;reg;</code> - ®</li>
        <li><code>&amp;euro;</code> - €</li>
        <li><code>&amp;pound;</code> - £</li>
        <li><code>&amp;yen;</code> - ¥</li>
        <li><code>&amp;cent;</code> - ¢</li>
      </ul>

      <h4>Об’єднання діакритичних знаків</h4>
      <p>
        HTML також дозволяє об’єднувати діакритичні знаки (наприклад, акценти) з іншими символами, щоб створити комбінації символів. Це робиться за допомогою коду базового символу, за яким слідує код діакритичного знаку.
      </p>
      <pre>
        <code>
          {`
            &aacute; - á
            &eacute; - é
            &iacute; - í
            &oacute; - ó
            &uacute; - ú
          `}
        </code>
      </pre>
      <p>
        Ці комбінації можуть бути корисними для відображення тексту на різних мовах, які використовують діакритичні знаки.
      </p>

      <h4>Детальніше про HTML сутності</h4>
      <div className='accordion accordion-inner accordion-icon-left mt-3 mb-4' id='accordionHtmlEntities'>
        <div className='accordion-item'>
          <h2 className='accordion-header' id='headingHtmlEntities1'>
            <button
              className='accordion-button'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#collapseHtmlEntities1'
              aria-expanded='true'
              aria-controls='collapseHtmlEntities1'
            >
              Нерозривний пробіл
            </button>
          </h2>
          <div id='collapseHtmlEntities1' className='accordion-collapse collapse show' aria-labelledby='headingHtmlEntities1' data-bs-parent='#accordionHtmlEntities'>
            <div className='accordion-body'>
              Нерозривний пробіл (<code>&amp;nbsp;</code>) використовується для запобігання автоматичного переносу рядка в середині тексту. Він часто застосовується для забезпечення правильного розміщення елементів на сторінці, де звичайний пробіл може бути пропущений або скорочений браузером.
            </div>
          </div>
        </div>
        <div className='accordion-item'>
          <h2 className='accordion-header' id='headingHtmlEntities2'>
            <button
              className='accordion-button collapsed'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#collapseHtmlEntities2'
              aria-expanded='false'
              aria-controls='collapseHtmlEntities2'
            >
              Деякі інші корисні символьні об’єкти HTML
            </button>
          </h2>
          <div id='collapseHtmlEntities2' className='accordion-collapse collapse' aria-labelledby='headingHtmlEntities2' data-bs-parent='#accordionHtmlEntities'>
            <div className='accordion-body'>
              Окрім нерозривного пробілу, HTML надає велику кількість символьних об’єктів для відображення спеціальних символів, таких як авторські права, зареєстровані товарні знаки, валюти та багато інших. Наприклад, <code>&amp;copy;</code> для символу авторських прав (©), <code>&amp;reg;</code> для символу зареєстрованої торгової марки (®) та <code>&amp;euro;</code> для євро (€).
            </div>
          </div>
        </div>
        <div className='accordion-item'>
          <h2 className='accordion-header' id='headingHtmlEntities3'>
            <button
              className='accordion-button collapsed'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#collapseHtmlEntities3'
              aria-expanded='false'
              aria-controls='collapseHtmlEntities3'
            >
              Об’єднання діакритичних знаків
            </button>
          </h2>
          <div id='collapseHtmlEntities3' className='accordion-collapse collapse' aria-labelledby='headingHtmlEntities3' data-bs-parent='#accordionHtmlEntities'>
            <div className='accordion-body'>
              Для відображення тексту з діакритичними знаками в HTML використовуються коди символів, які об'єднують базовий символ з діакритичним знаком. Наприклад, <code>&amp;aacute;</code> для символу á, <code>&amp;eacute;</code> для символу é, та <code>&amp;iacute;</code> для символу í. Це дозволяє відображати текст на різних мовах, які використовують такі знаки.
            </div>
          </div>
        </div>
      </div>

      <h4>Переваги використання HTML сутностей</h4>
      <div className='row'>
        <div className='col-md-6'>
          <ul className='single-list-inner style-check style-check mb-3'>
            <li><FaCheckCircle /> Правильне відображення спеціальних символів</li>
            <li><FaCheckCircle /> Підвищення читабельності тексту</li>
            <li><FaCheckCircle /> Можливість відображення тексту на різних мовах</li>
          </ul>
        </div>
        <div className='col-md-6'>
          <ul className='single-list-inner style-check style-check mb-3'>
            <li><FaCheckCircle /> Забезпечення коректного форматування</li>
            <li><FaCheckCircle /> Легке використання спеціальних символів</li>
            <li><FaCheckCircle /> Підтримка стандартизованого відображення</li>
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

export default CourseHtml16;
