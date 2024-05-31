import React from "react";
import {
  FaAngleDoubleRight,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import courseListCSS from "../../../scripts/CoursesListCSS";


const CourseCss6 = () => {
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

  <h3>Як підключити CSS</h3>

  <p>
    CSS (Cascading Style Sheets) використовуються для стилізації HTML-документів. Існує кілька способів підключення CSS до HTML: зовнішні таблиці стилів, внутрішні таблиці стилів та вбудовані стилі. Давайте розглянемо кожен з них.
  </p>

  <h4>Зовнішня таблиця стилів</h4>

  <p>
    Зовнішні таблиці стилів використовуються для підключення CSS з окремого файлу. Це дозволяє розділити HTML і CSS, що робить код більш організованим і зручним для підтримки. Підключення зовнішнього CSS-файлу здійснюється за допомогою тега <code>&lt;link&gt;</code> у секції <code>&lt;head&gt;</code>.
  </p>

  <pre>
    <code>
      {`
        <head>
          <link rel="stylesheet" type="text/css" href="styles.css">
        </head>
      `}
    </code>
  </pre>

  <h4>Внутрішня таблиця стилів</h4>

  <p>
    Внутрішні таблиці стилів використовуються для написання CSS безпосередньо в HTML-документі у секції <code>&lt;head&gt;</code>. Це корисно для стилізації однієї конкретної сторінки.
  </p>

  <pre>
    <code>
      {`
        <head>
          <style>
            body {
              background-color: lightblue;
            }
          </style>
        </head>
      `}
    </code>
  </pre>

  <h4>Вбудовані стилі</h4>

  <p>
    Вбудовані стилі застосовуються безпосередньо до окремих HTML-елементів за допомогою атрибута <code>style</code>. Це найменш ефективний спосіб, оскільки стилі важко підтримувати і змінювати.
  </p>

  <pre>
    <code>
      {`
        <h1 style="color:blue;">Це заголовок</h1>
      `}
    </code>
  </pre>

  <h4>Декілька таблиць стилів</h4>

  <p>
    Ви можете підключати декілька таблиць стилів до одного HTML-документу. Це дозволяє використовувати різні CSS-файли для різних розділів сайту або для різних стилів.
  </p>

  <pre>
    <code>
      {`
        <head>
          <link rel="stylesheet" type="text/css" href="styles.css">
          <link rel="stylesheet" type="text/css" href="theme.css">
        </head>
      `}
    </code>
  </pre>

  <h4>Порядок використання каскадних стилів</h4>

  <p>
    CSS працює за принципом каскаду, де правила стилів застосовуються у певному порядку. Це означає, що стилі з останнього підключеного CSS-файлу можуть перевизначати стилі з попередніх файлів, якщо вони мають однакову специфічність.
  </p>

  <pre>
    <code>
      {`
        <head>
          <link rel="stylesheet" type="text/css" href="styles.css">
          <link rel="stylesheet" type="text/css" href="theme.css">
          <style>
            body {
              background-color: yellow; /* Перевизначає попередні стилі */
            }
          </style>
        </head>
      `}
    </code>
  </pre>

  <div className='accordion accordion-inner accordion-icon-left mt-3 mb-4' id='accordionCssLinking'>
    <div className='accordion-item'>
      <h2 className='accordion-header' id='headingCssLinking1'>
        <button className='accordion-button' type='button' data-bs-toggle='collapse' data-bs-target='#collapseCssLinking1' aria-expanded='true' aria-controls='collapseCssLinking1'>
          Зовнішня таблиця стилів
        </button>
      </h2>
      <div id='collapseCssLinking1' className='accordion-collapse collapse show' aria-labelledby='headingCssLinking1' data-bs-parent='#accordionCssLinking'>
        <div className='accordion-body'>
          Зовнішні таблиці стилів використовуються для підключення CSS з окремого файлу. Це дозволяє розділити HTML і CSS, що робить код більш організованим і зручним для підтримки. Підключення зовнішнього CSS-файлу здійснюється за допомогою тега <code>&lt;link&gt;</code> у секції <code>&lt;head&gt;</code>.
        </div>
      </div>
    </div>
    <div className='accordion-item'>
      <h2 className='accordion-header' id='headingCssLinking2'>
        <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#collapseCssLinking2' aria-expanded='false' aria-controls='collapseCssLinking2'>
          Внутрішня таблиця стилів
        </button>
      </h2>
      <div id='collapseCssLinking2' className='accordion-collapse collapse' aria-labelledby='headingCssLinking2' data-bs-parent='#accordionCssLinking'>
        <div className='accordion-body'>
          Внутрішні таблиці стилів використовуються для написання CSS безпосередньо в HTML-документі у секції <code>&lt;head&gt;</code>. Це корисно для стилізації однієї конкретної сторінки.
        </div>
      </div>
    </div>
    <div className='accordion-item'>
      <h2 className='accordion-header' id='headingCssLinking3'>
        <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#collapseCssLinking3' aria-expanded='false' aria-controls='collapseCssLinking3'>
          Вбудовані стилі
        </button>
      </h2>
      <div id='collapseCssLinking3' className='accordion-collapse collapse' aria-labelledby='headingCssLinking3' data-bs-parent='#accordionCssLinking'>
        <div className='accordion-body'>
          Вбудовані стилі застосовуються безпосередньо до окремих HTML-елементів за допомогою атрибута <code>style</code>. Це найменш ефективний спосіб, оскільки стилі важко підтримувати і змінювати.
        </div>
      </div>
    </div>
    <div className='accordion-item'>
      <h2 className='accordion-header' id='headingCssLinking4'>
        <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#collapseCssLinking4' aria-expanded='false' aria-controls='collapseCssLinking4'>
          Декілька таблиць стилів
        </button>
      </h2>
      <div id='collapseCssLinking4' className='accordion-collapse collapse' aria-labelledby='headingCssLinking4' data-bs-parent='#accordionCssLinking'>
        <div className='accordion-body'>
          Ви можете підключати декілька таблиць стилів до одного HTML-документу. Це дозволяє використовувати різні CSS-файли для різних розділів сайту або для різних стилів.
        </div>
      </div>
    </div>
    <div className='accordion-item'>
      <h2 className='accordion-header' id='headingCssLinking5'>
        <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#collapseCssLinking5' aria-expanded='false' aria-controls='collapseCssLinking5'>
          Порядок використання каскадних стилів
        </button>
      </h2>
      <div id='collapseCssLinking5' className='accordion-collapse collapse' aria-labelledby='headingCssLinking5' data-bs-parent='#accordionCssLinking'>
        <div className='accordion-body'>
          CSS працює за принципом каскаду, де правила стилів застосовуються у певному порядку. Це означає, що стилі з останнього підключеного CSS-файлу можуть перевизначати стилі з попередніх файлів, якщо вони мають однакову специфічність.
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

export default CourseCss6;
