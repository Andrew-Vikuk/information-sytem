import React from "react";
import {
  FaAngleDoubleRight,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";
import { HashLink as Link } from 'react-router-hash-link';
import courseListHTML from "../../../scripts/CoursesListHTML";
import { NavLink } from "react-router-dom";


const CourseHtml13 = () => {
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
      <h3>HTML Елемент Head</h3>
      <p>
        Елемент <code>&lt;head&gt;</code> містить метаінформацію про HTML-документ. Ця інформація включає в себе заголовок сторінки, посилання на зовнішні стилі та скрипти, метатеги, і багато іншого. Вміст <code>&lt;head&gt;</code> не відображається безпосередньо на веб-сторінці.
      </p>
      
      <h4>HTML елемент <code>&lt;head&gt;</code></h4>
      <p>
        Елемент <code>&lt;head&gt;</code> є контейнером для всіх метаданих (метаінформації) HTML-документа. Вміст всередині <code>&lt;head&gt;</code> не відображається безпосередньо на веб-сторінці.
      </p>
      <pre>
        <code>
          {`
            <!DOCTYPE html>
            <html>
            <head>
              <title>Назва сторінки</title>
              <style>
                body {font-family: Arial, sans-serif;}
              </style>
              <link rel="stylesheet" href="styles.css">
            </head>
            <body>
              <h1>Вітаємо!</h1>
            </body>
            </html>
          `}
        </code>
      </pre>

      <h4>HTML елемент <code>&lt;title&gt;</code></h4>
      <p>
        Елемент <code>&lt;title&gt;</code> визначає назву HTML-документа. Назва відображається на вкладці браузера і використовується пошуковими системами.
      </p>
      <pre>
        <code>
          {`
            <head>
              <title>Моя веб-сторінка</title>
            </head>
          `}
        </code>
      </pre>

      <h4>HTML елемент <code>&lt;style&gt;</code></h4>
      <p>
        Елемент <code>&lt;style&gt;</code> використовується для визначення внутрішніх стилів CSS для HTML-документа. Він дозволяє додавати CSS безпосередньо всередині HTML-файлу.
      </p>
      <pre>
        <code>
          {`
            <head>
              <style>
                body {
                  background-color: #f0f0f0;
                }
                h1 {
                  color: #333;
                }
              </style>
            </head>
          `}
        </code>
      </pre>

      <h4>HTML елемент <code>&lt;link&gt;</code></h4>
      <p>
        Елемент <code>&lt;link&gt;</code> використовується для зв'язку зовнішніх ресурсів з HTML-документом, таких як зовнішні таблиці стилів або шрифти. Він є порожнім елементом і не має закриваючого тега.
      </p>
      <pre>
        <code>
          {`
            <head>
              <link rel="stylesheet" href="styles.css">
            </head>
          `}
        </code>
      </pre>

      <h4>Детальніше про метадані</h4>
      <div className='accordion accordion-inner accordion-icon-left mt-3 mb-4' id='accordionHtmlHead'>
        <div className='accordion-item'>
          <h2 className='accordion-header' id='headingHtmlHead1'>
            <button
              className='accordion-button'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#collapseHtmlHead1'
              aria-expanded='true'
              aria-controls='collapseHtmlHead1'
            >
              Що таке метадані?
            </button>
          </h2>
          <div id='collapseHtmlHead1' className='accordion-collapse collapse show' aria-labelledby='headingHtmlHead1' data-bs-parent='#accordionHtmlHead'>
            <div className='accordion-body'>
              Метадані — це інформація про сам HTML-документ, яка включає заголовок, посилання на зовнішні ресурси, метатеги, які описують вміст сторінки, і т.д. Метадані знаходяться всередині елемента <code>&lt;head&gt;</code>.
            </div>
          </div>
        </div>
        <div className='accordion-item'>
          <h2 className='accordion-header' id='headingHtmlHead2'>
            <button
              className='accordion-button collapsed'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#collapseHtmlHead2'
              aria-expanded='false'
              aria-controls='collapseHtmlHead2'
            >
              Важливість метатегів для SEO
            </button>
          </h2>
          <div id='collapseHtmlHead2' className='accordion-collapse collapse' aria-labelledby='headingHtmlHead2' data-bs-parent='#accordionHtmlHead'>
            <div className='accordion-body'>
              Метатеги відіграють важливу роль у SEO, оскільки вони допомагають пошуковим системам зрозуміти зміст сторінки. Наприклад, метатег <code>&lt;meta name="description" content="Опис вашої сторінки"&gt;</code> дозволяє визначити короткий опис сторінки, який може бути використаний в результатах пошуку.
            </div>
          </div>
        </div>
        <div className='accordion-item'>
          <h2 className='accordion-header' id='headingHtmlHead3'>
            <button
              className='accordion-button collapsed'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#collapseHtmlHead3'
              aria-expanded='false'
              aria-controls='collapseHtmlHead3'
            >
              Використання <code>&lt;link&gt;</code> для підключення стилів та шрифтів
            </button>
          </h2>
          <div id='collapseHtmlHead3' className='accordion-collapse collapse' aria-labelledby='headingHtmlHead3' data-bs-parent='#accordionHtmlHead'>
            <div className='accordion-body'>
              Елемент <code>&lt;link&gt;</code> дозволяє підключати зовнішні ресурси до HTML-документа. Наприклад, можна підключити зовнішню таблицю стилів або веб-шрифт. Приклад:
              <pre>
                <code>
                  {`
                    <head>
                      <link rel="stylesheet" href="styles.css">
                      <link rel="preconnect" href="https://fonts.googleapis.com">
                      <link href="https://fonts.googleapis.com/css2?family=Roboto&display=swap" rel="stylesheet">
                    </head>
                  `}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>

      <h4>Переваги використання елементу <code>&lt;head&gt;</code></h4>
      <div className='row'>
        <div className='col-md-6'>
          <ul className='single-list-inner style-check style-check mb-3'>
            <li><FaCheckCircle /> Поліпшення SEO через використання метатегів</li>
            <li><FaCheckCircle /> Підключення зовнішніх стилів для зручного управління дизайном</li>
            <li><FaCheckCircle /> Вбудовування стилів безпосередньо в HTML-документ</li>
          </ul>
        </div>
        <div className='col-md-6'>
          <ul className='single-list-inner style-check style-check mb-3'>
            <li><FaCheckCircle /> Встановлення заголовку сторінки</li>
            <li><FaCheckCircle /> Підключення шрифтів для покращення типографіки</li>
            <li><FaCheckCircle /> Забезпечення кращої оптимізації для пошукових систем</li>
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

export default CourseHtml13;
