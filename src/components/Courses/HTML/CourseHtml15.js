import React from "react";
import {
  FaAngleDoubleRight,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";
import { HashLink as Link } from 'react-router-hash-link';
import courseListHTML from "../../../scripts/CoursesListHTML";
import { NavLink } from "react-router-dom";


const CourseHtml15 = () => {
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
      <h3>HTML Адаптивний веб-дизайн</h3>
      <p>
        Адаптивний веб-дизайн дозволяє створювати веб-сторінки, які добре виглядають і функціонують на різних пристроях і розмірах екранів. Це забезпечує оптимальний користувацький досвід, незалежно від того, чи використовує відвідувач мобільний телефон, планшет або настільний комп'ютер.
      </p>

      <h4>Налаштування області перегляду (viewport)</h4>
      <p>
        Одним з ключових елементів адаптивного веб-дизайну є налаштування області перегляду (viewport). Це робиться за допомогою мета-тега <code>&lt;meta&gt;</code>, який повідомляє браузеру, як налаштовувати масштабування та розміри сторінки.
      </p>
      <pre>
        <code>
          {`
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
          `}
        </code>
      </pre>

      <h4>Адаптивні зображення</h4>
      <p>
        Адаптивні зображення допомагають забезпечити, щоб зображення виглядали добре на всіх пристроях і не займали надмірно багато місця на екрані. Це можна досягти за допомогою використання відсоткових значень для ширини зображень або CSS медіа-запитів.
      </p>
      <pre>
        <code>
          {`
            <img src="example.jpg" style="width: 100%; max-width: 600px;" alt="Example Image">
          `}
        </code>
      </pre>

      <h4>Показувати різні зображення в залежності від ширини браузера</h4>
      <p>
        Використовуючи елемент <code>&lt;picture&gt;</code> і атрибут <code>&lt;source&gt;</code>, можна показувати різні зображення в залежності від ширини браузера. Це допомагає оптимізувати завантаження зображень для різних пристроїв.
      </p>
      <pre>
        <code>
          {`
            <picture>
              <source srcset="small.jpg" media="(max-width: 600px)">
              <source srcset="large.jpg" media="(min-width: 601px)">
              <img src="default.jpg" alt="Example Image">
            </picture>
          `}
        </code>
      </pre>

      <h4>Адаптивний розмір тексту</h4>
      <p>
        Для забезпечення гарної читабельності на різних пристроях можна використовувати відносні одиниці виміру для розміру тексту, такі як em або rem, або використовувати медіа-запити для налаштування розміру тексту на різних розмірах екранів.
      </p>
      <pre>
        <code>
          {`
            body {
              font-size: 16px;
            }
            @media (max-width: 600px) {
              body {
                font-size: 14px;
              }
            }
          `}
        </code>
      </pre>

      <h4>Accordion: Детальніше про адаптивний веб-дизайн</h4>
      <div className='accordion accordion-inner accordion-icon-left mt-3 mb-4' id='accordionHtmlResponsive'>
        <div className='accordion-item'>
          <h2 className='accordion-header' id='headingHtmlResponsive1'>
            <button
              className='accordion-button'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#collapseHtmlResponsive1'
              aria-expanded='true'
              aria-controls='collapseHtmlResponsive1'
            >
              Налаштування області перегляду (viewport)
            </button>
          </h2>
          <div id='collapseHtmlResponsive1' className='accordion-collapse collapse show' aria-labelledby='headingHtmlResponsive1' data-bs-parent='#accordionHtmlResponsive'>
            <div className='accordion-body'>
              Правильне налаштування області перегляду (viewport) є критичним для адаптивного веб-дизайну. Використання мета-тега <code>&lt;meta name="viewport" content="width=device-width, initial-scale=1.0"&gt;</code> допомагає браузерам налаштувати сторінку для правильного відображення на різних пристроях.
            </div>
          </div>
        </div>
        <div className='accordion-item'>
          <h2 className='accordion-header' id='headingHtmlResponsive2'>
            <button
              className='accordion-button collapsed'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#collapseHtmlResponsive2'
              aria-expanded='false'
              aria-controls='collapseHtmlResponsive2'
            >
              Адаптивні зображення
            </button>
          </h2>
          <div id='collapseHtmlResponsive2' className='accordion-collapse collapse' aria-labelledby='headingHtmlResponsive2' data-bs-parent='#accordionHtmlResponsive'>
            <div className='accordion-body'>
              Адаптивні зображення забезпечують, що зображення автоматично змінюють розмір відповідно до розміру екрана. Використання CSS властивості <code>max-width</code> дозволяє обмежити максимальний розмір зображення, що забезпечує його коректне відображення на будь-якому пристрої.
            </div>
          </div>
        </div>
        <div className='accordion-item'>
          <h2 className='accordion-header' id='headingHtmlResponsive3'>
            <button
              className='accordion-button collapsed'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#collapseHtmlResponsive3'
              aria-expanded='false'
              aria-controls='collapseHtmlResponsive3'
            >
              Показувати різні зображення в залежності від ширини браузера
            </button>
          </h2>
          <div id='collapseHtmlResponsive3' className='accordion-collapse collapse' aria-labelledby='headingHtmlResponsive3' data-bs-parent='#accordionHtmlResponsive'>
            <div className='accordion-body'>
              Використовуючи елемент <code>&lt;picture&gt;</code> і атрибут <code>&lt;source&gt;</code>, можна визначити різні зображення для різних умов перегляду, що забезпечує оптимальну продуктивність і якість відображення зображень на різних пристроях.
            </div>
          </div>
        </div>
        <div className='accordion-item'>
          <h2 className='accordion-header' id='headingHtmlResponsive4'>
            <button
              className='accordion-button collapsed'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#collapseHtmlResponsive4'
              aria-expanded='false'
              aria-controls='collapseHtmlResponsive4'
            >
              Адаптивний розмір тексту
            </button>
          </h2>
          <div id='collapseHtmlResponsive4' className='accordion-collapse collapse' aria-labelledby='headingHtmlResponsive4' data-bs-parent='#accordionHtmlResponsive'>
            <div className='accordion-body'>
              Для забезпечення читабельності тексту на різних пристроях використовуйте відносні одиниці виміру, такі як <code>em</code> або <code>rem</code>, або налаштовуйте розмір тексту за допомогою медіа-запитів, що дозволяє коригувати розмір шрифту відповідно до розміру екрану.
            </div>
          </div>
        </div>
      </div>

      <h4>Переваги адаптивного веб-дизайну</h4>
      <div className='row'>
        <div className='col-md-6'>
          <ul className='single-list-inner style-check style-check mb-3'>
            <li><FaCheckCircle /> Підвищення зручності користувача</li>
            <li><FaCheckCircle /> Оптимізація для різних пристроїв</li>
            <li><FaCheckCircle /> Покращення SEO</li>
          </ul>
        </div>
        <div className='col-md-6'>
          <ul className='single-list-inner style-check style-check mb-3'>
            <li><FaCheckCircle /> Легке обслуговування і оновлення</li>
            <li><FaCheckCircle /> Скорочення часу завантаження сторінок</li>
            <li><FaCheckCircle /> Зниження витрат на розробку</li>
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

export default CourseHtml15;
