import React from "react";
import {
  FaAngleDoubleRight,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";
import { HashLink as Link } from 'react-router-hash-link';
import courseListHTML from "../../../scripts/CoursesListHTML";
import { NavLink } from "react-router-dom";


const CourseHtml17 = () => {
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
      <h3>Використання емодзі в HTML</h3>
      <p>
        Емодзі стали популярним способом вираження емоцій та ідей в Інтернеті. У HTML ви можете легко використовувати емодзі, додаючи відповідні символи безпосередньо в код або за допомогою спеціальних кодів.
      </p>

      <h4>HTML Емодзі - Приклади</h4>
      <p>
        Ось кілька прикладів використання емодзі в HTML:
      </p>
      <pre>
        <code>
          {`
            &#128512; - 😀 (сміх)
            &#128515; - 😃 (широкий сміх)
            &#128516; - 😄 (щаслива посмішка)
            &#128513; - 😁 (посмішка із заплющеними очима)
            &#128517; - 😅 (сміх зі сльозами радості)
          `}
        </code>
      </pre>
      <p>
        Ці символи можуть бути додані до будь-якого текстового елементу в HTML, як-от абзац або заголовок.
      </p>

      <h4>Що таке емодзі?</h4>
      <p>
        Емодзі - це невеликі графічні символи, які використовуються для вираження емоцій, об'єктів, ідей та іншого. Вони є частиною набору символів Unicode, що означає, що їх можна використовувати в різних мовах і платформах.
      </p>

      <h4>HTML атрибут charset</h4>
      <p>
        Для правильного відображення емодзі на веб-сторінках важливо використовувати правильний набір символів. Атрибут <code>charset</code> визначає набір символів, який використовується для кодування веб-сторінки.
      </p>
      <pre>
        <code>
          {`
            <head>
              <meta charset="UTF-8">
            </head>
          `}
        </code>
      </pre>
      <p>
        Цей атрибут забезпечує правильне відображення емодзі та інших спеціальних символів на веб-сторінці.
      </p>

      <h4>Набір символів UTF-8</h4>
      <p>
        UTF-8 є найпоширенішим набором символів для веб-сторінок, оскільки він підтримує всі символи Unicode, включаючи емодзі. Використання UTF-8 забезпечує коректне відображення тексту та символів незалежно від мови та платформи.
      </p>
      <pre>
        <code>
          {`
            <meta charset="UTF-8">
          `}
        </code>
      </pre>
      <p>
        Використання цього атрибута у <code>&lt;head&gt;</code> вашого HTML документа допомагає уникнути проблем з відображенням символів.
      </p>

      <h4>Accordion: Детальніше про використання емодзі</h4>
      <div className='accordion accordion-inner accordion-icon-left mt-3 mb-4' id='accordionHtmlEmojis'>
        <div className='accordion-item'>
          <h2 className='accordion-header' id='headingHtmlEmojis1'>
            <button
              className='accordion-button'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#collapseHtmlEmojis1'
              aria-expanded='true'
              aria-controls='collapseHtmlEmojis1'
            >
              HTML Емодзі - Приклади
            </button>
          </h2>
          <div id='collapseHtmlEmojis1' className='accordion-collapse collapse show' aria-labelledby='headingHtmlEmojis1' data-bs-parent='#accordionHtmlEmojis'>
            <div className='accordion-body'>
              Емодзі можуть бути використані в HTML за допомогою їхніх числових кодів. Наприклад, <code>&#128512;</code> відображає смайлик зі сміхом (😀). Інші приклади включають <code>&#128515;</code> (😃), <code>&#128516;</code> (😄), та <code>&#128517;</code> (😅).
            </div>
          </div>
        </div>
        <div className='accordion-item'>
          <h2 className='accordion-header' id='headingHtmlEmojis2'>
            <button
              className='accordion-button collapsed'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#collapseHtmlEmojis2'
              aria-expanded='false'
              aria-controls='collapseHtmlEmojis2'
            >
              HTML атрибут charset
            </button>
          </h2>
          <div id='collapseHtmlEmojis2' className='accordion-collapse collapse' aria-labelledby='headingHtmlEmojis2' data-bs-parent='#accordionHtmlEmojis'>
            <div className='accordion-body'>
              Атрибут <code>charset</code> в елементі <code>&lt;meta&gt;</code> визначає набір символів, який використовується для кодування веб-сторінки. Використання <code>charset="UTF-8"</code> забезпечує правильне відображення емодзі та інших спеціальних символів. Наприклад:
              <pre>
                <code>
                  {`
                    <head>
                      <meta charset="UTF-8">
                    </head>
                  `}
                </code>
              </pre>
            </div>
          </div>
        </div>
        <div className='accordion-item'>
          <h2 className='accordion-header' id='headingHtmlEmojis3'>
            <button
              className='accordion-button collapsed'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#collapseHtmlEmojis3'
              aria-expanded='false'
              aria-controls='collapseHtmlEmojis3'
            >
              Набір символів UTF-8
            </button>
          </h2>
          <div id='collapseHtmlEmojis3' className='accordion-collapse collapse' aria-labelledby='headingHtmlEmojis3' data-bs-parent='#accordionHtmlEmojis'>
            <div className='accordion-body'>
              UTF-8 є найпоширенішим набором символів для веб-сторінок. Він підтримує всі символи Unicode, включаючи емодзі. Використання UTF-8 гарантує, що текст і символи будуть правильно відображатися незалежно від мови та платформи.
              <pre>
                <code>
                  {`
                    <meta charset="UTF-8">
                  `}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>

      <h4>Переваги використання емодзі в HTML</h4>
      <div className='row'>
        <div className='col-md-6'>
          <ul className='single-list-inner style-check style-check mb-3'>
            <li><FaCheckCircle /> Покращення виразності тексту</li>
            <li><FaCheckCircle /> Додавання емоційного забарвлення</li>
            <li><FaCheckCircle /> Підтримка стандартів Unicode</li>
          </ul>
        </div>
        <div className='col-md-6'>
          <ul className='single-list-inner style-check style-check mb-3'>
            <li><FaCheckCircle /> Легке використання у веб-дизайні</li>
            <li><FaCheckCircle /> Широка підтримка у всіх браузерах</li>
            <li><FaCheckCircle /> Підтримка кроссплатформенності</li>
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

export default CourseHtml17;
