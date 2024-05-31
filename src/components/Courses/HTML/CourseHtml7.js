import React from "react";
import {
  FaAngleDoubleRight,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import courseListHTML from "../../../scripts/CoursesListHTML";

const CourseHtml7 = () => {
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
                    <FaArrowRight /> Інші Уроки по HTML
                  </h5>
                  <ul className='catagory-items'>
                  {courseListHTML.map((data, index) => (
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
                    <img src='assets/img/service/html_cat.jpg' alt='img' className="w-100 h-20"  style={{height: "300px", objectFit: "cover", marginBottom: "20px"}}/>
                  </div>

                  <div className='details'>

  <h3>Метадані та SEO в HTML</h3>

  <p>
    Метадані є важливою частиною HTML-документа, яка міститься в тегу <code>&lt;head&gt;</code>. Вони надають інформацію про документ, таку як його заголовок, опис, ключові слова, а також стилі та скрипти. Правильне використання метаданих важливе для SEO (оптимізації для пошукових систем) та соціальних мереж.
  </p>

  <h4>Тег <code>&lt;head&gt;</code> та його вміст</h4>

  <p>
    Тег <code>&lt;head&gt;</code> містить елементи, які не відображаються безпосередньо на сторінці, але важливі для браузера і пошукових систем. Основні елементи <code>&lt;head&gt;</code> включають:
  </p>

  <ul>
    <li><code>&lt;title&gt;</code>: Визначає заголовок документа, який відображається в заголовку вікна браузера або на вкладці.</li>
    <li><code>&lt;meta&gt;</code>: Використовується для зберігання метаінформації про документ, наприклад, опису та ключових слів.</li>
    <li><code>&lt;link&gt;</code>: Використовується для підключення зовнішніх ресурсів, таких як CSS-файли.</li>
    <li><code>&lt;style&gt;</code>: Містить CSS-стилі, які застосовуються до документа.</li>
    <li><code>&lt;script&gt;</code>: Використовується для включення JavaScript-коду.</li>
  </ul>

  <pre>
    <code>
      {`
        <head>
          <title>Приклад сторінки</title>
          <meta charset="UTF-8">
          <meta name="description" content="Опис сторінки">
          <meta name="keywords" content="ключові слова, seo, html">
          <meta name="author" content="Автор">
          <link rel="stylesheet" href="styles.css">
          <style>
            body { font-family: Arial, sans-serif; }
          </style>
          <script src="script.js"></script>
        </head>
      `}
    </code>
  </pre>

  <h4>Мета-теги для SEO</h4>

  <p>
    Мета-теги відіграють важливу роль у SEO, оскільки вони надають інформацію про сторінку пошуковим системам. Основні мета-теги для SEO включають:
  </p>

  <ul>
    <li><code>&lt;meta name="description" content="Опис сторінки"&gt;</code>: Надає короткий опис сторінки, який часто відображається в результатах пошуку.</li>
    <li><code>&lt;meta name="keywords" content="ключові слова"&gt;</code>: Перелічує ключові слова, пов'язані зі змістом сторінки.</li>
    <li><code>&lt;meta name="robots" content="index, follow"&gt;</code>: Вказує пошуковим системам, чи індексувати сторінку і слідувати посиланням на ній.</li>
  </ul>

  <pre>
    <code>
      {`
        <head>
          <meta name="description" content="Це приклад мета-тегу для опису сторінки.">
          <meta name="keywords" content="HTML, мета-теги, SEO">
          <meta name="robots" content="index, follow">
        </head>
      `}
    </code>
  </pre>

  <h4>Соціальні мета-теги</h4>

  <p>
    Соціальні мета-теги допомагають контролювати, як ваші сторінки виглядають при спільному використанні в соціальних мережах. Основні типи соціальних мета-тегів включають Open Graph (OG) для Facebook та Twitter Cards для Twitter.
  </p>

  <h5>Open Graph</h5>

  <p>
    Open Graph теги використовуються для контролю вигляду посилань на вашу сторінку в Facebook та інших соціальних мережах, які підтримують OG. Основні OG теги включають:
  </p>

  <ul>
    <li><code>&lt;meta property="og:title" content="Заголовок сторінки"&gt;</code></li>
    <li><code>&lt;meta property="og:description" content="Опис сторінки"&gt;</code></li>
    <li><code>&lt;meta property="og:image" content="URL до зображення"&gt;</code></li>
    <li><code>&lt;meta property="og:url" content="URL сторінки"&gt;</code></li>
  </ul>

  <pre>
    <code>
      {`
        <head>
          <meta property="og:title" content="Приклад заголовку">
          <meta property="og:description" content="Приклад опису для соціальних мереж">
          <meta property="og:image" content="https://example.com/image.jpg">
          <meta property="og:url" content="https://example.com/page">
        </head>
      `}
    </code>
  </pre>

  <h5>Twitter Cards</h5>

  <p>
    Twitter Cards дозволяють додати багатий медіаконтент до твітів, що посилаються на ваш сайт. Основні теги Twitter Cards включають:
  </p>

  <ul>
    <li><code>&lt;meta name="twitter:card" content="summary_large_image"&gt;</code></li>
    <li><code>&lt;meta name="twitter:title" content="Заголовок сторінки"&gt;</code></li>
    <li><code>&lt;meta name="twitter:description" content="Опис сторінки"&gt;</code></li>
    <li><code>&lt;meta name="twitter:image" content="URL до зображення"&gt;</code></li>
  </ul>

  <pre>
    <code>
      {`
        <head>
          <meta name="twitter:card" content="summary_large_image">
          <meta name="twitter:title" content="Приклад заголовку для Twitter">
          <meta name="twitter:description" content="Приклад опису для Twitter">
          <meta name="twitter:image" content="https://example.com/image.jpg">
        </head>
      `}
    </code>
  </pre>

  <div className='accordion accordion-inner accordion-icon-left mt-3 mb-4' id='accordionMeta'>
    <div className='accordion-item'>
      <h2 className='accordion-header' id='headingMetaOne'>
        <button className='accordion-button' type='button' data-bs-toggle='collapse' data-bs-target='#collapseMetaOne' aria-expanded='true' aria-controls='collapseMetaOne'>
          Що таке мета-теги та як вони впливають на SEO?
        </button>
      </h2>
      <div id='collapseMetaOne' className='accordion-collapse collapse show' aria-labelledby='headingMetaOne' data-bs-parent='#accordionMeta'>
        <div className='accordion-body'>
          Мета-теги є частиною HTML-документа і знаходяться в секції <code>&lt;head&gt;</code>. Вони надають пошуковим системам інформацію про зміст сторінки. Наприклад, мета-теги <code>&lt;meta name="description" content="Опис сторінки"&gt;</code> та <code>&lt;meta name="keywords" content="ключові слова"&gt;</code> допомагають покращити видимість сторінки в результатах пошуку.
        </div>
      </div>
    </div>
    <div className='accordion-item'>
      <h2 className='accordion-header' id='headingMetaTwo'>
        <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#collapseMetaTwo' aria-expanded='false' aria-controls='collapseMetaTwo'>
          Як використовувати Open Graph теги для соціальних мереж?
        </button>
      </h2>
      <div id='collapseMetaTwo' className='accordion-collapse collapse' aria-labelledby='headingMetaTwo' data-bs-parent='#accordionMeta'>
        <div className='accordion-body'>
          Open Graph теги дозволяють контролювати, як ваша сторінка виглядає при спільному використанні в соціальних мережах. Вони включають <code>&lt;meta property="og:title" content="Заголовок сторінки"&gt;</code>, <code>&lt;meta property="og:description" content="Опис сторінки"&gt;</code>, <code>&lt;meta property="og:image" content="URL до зображення"&gt;</code> та <code>&lt;meta property="og:url" content="URL сторінки"&gt;</code>.
        </div>
      </div>
    </div>
    <div className='accordion-item'>
      <h2 className='accordion-header' id='headingMetaThree'>
        <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#collapseMetaThree' aria-expanded='false' aria-controls='collapseMetaThree'>
          Як налаштувати Twitter Cards?
        </button>
      </h2>
      <div id='collapseMetaThree' className='accordion-collapse collapse' aria-labelledby='headingMetaThree' data-bs-parent='#accordionMeta'>
        <div className='accordion-body'>
          Twitter Cards дозволяють додати до твіту додаткову інформацію, як-от заголовок, опис та зображення. Основні теги включають <code>&lt;meta name="twitter:card" content="summary_large_image"&gt;</code>, <code>&lt;meta name="twitter:title" content="Заголовок сторінки"&gt;</code>, <code>&lt;meta name="twitter:description" content="Опис сторінки"&gt;</code> та <code>&lt;meta name="twitter:image" content="URL до зображення"&gt;</code>.
        </div>
      </div>
    </div>
  </div>

  <h4>Заключення</h4>
  <p>
    Метадані є важливою частиною HTML-документа, яка допомагає покращити SEO та вигляд сторінки в соціальних мережах. Використання мета-тегів, таких як <code>&lt;meta&gt;</code> для SEO та Open Graph і Twitter Cards для соціальних мереж, може значно підвищити видимість та привабливість вашої веб-сторінки.
  </p>

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

export default CourseHtml7;
