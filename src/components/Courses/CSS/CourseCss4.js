import React from "react";
import {
  FaAngleDoubleRight,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";
import { HashLink as Link } from 'react-router-hash-link';
import courseListCSS from "../../../scripts/CoursesListCSS";
import { NavLink } from "react-router-dom";



const CourseCss4 = () => {
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
      <h3>CSS Синтаксис</h3>
      <p>
        CSS (Cascading Style Sheets) використовується для стилізації HTML-документів. Він дозволяє змінювати вигляд і відчуття веб-сторінок за допомогою стилів. Синтаксис CSS складається з селекторів та декларацій.
      </p>

      <h4>Основи синтаксису CSS</h4>
      <p>
        CSS-правило складається з двох основних частин: селектора та декларації. Селектор вказує, який HTML-елемент буде стилізовано, а декларація визначає, які стилі будуть застосовані до цього елемента. Декларація містить властивості та їх значення, розділені двокрапкою, і завершується крапкою з комою.
      </p>
      <pre>
        <code>
          {`
            селектор {
              властивість: значення;
            }
          `}
        </code>
      </pre>
      <p>Приклад:</p>
      <pre>
        <code>
          {`
            h1 {
              color: blue;
              font-size: 24px;
            }
          `}
        </code>
      </pre>

      <h4>CSS Коментарі</h4>
      <p>
        Коментарі в CSS використовуються для пояснення коду або тимчасового відключення стилів. Вони не відображаються в браузері і не впливають на кінцевий результат. Коментарі в CSS розміщуються між <code>/*</code> і <code>*/</code>.
      </p>
      <pre>
        <code>
          {`
            /* Це коментар */
            p {
              color: red; /* Цей стиль застосовується до елементів <p> */
            }
          `}
        </code>
      </pre>

      <h4>Типи селекторів у CSS</h4>
      <p>
        Селектори у CSS використовуються для вибору HTML-елементів, які будуть стилізовані. Ось деякі основні типи селекторів:
      </p>
      <ul>
        <li><strong>Селектори елементів:</strong> вибирають всі елементи заданого типу. Наприклад, <code>p</code> вибирає всі елементи <code>&lt;p&gt;</code>.</li>
        <li><strong>Класові селектори:</strong> вибирають елементи з певним класом. Використовуйте крапку перед ім'ям класу, наприклад, <code>.className</code>.</li>
        <li><strong>ID селектори:</strong> вибирають елемент з певним ідентифікатором. Використовуйте решітку перед іменем ID, наприклад, <code>#idName</code>.</li>
        <li><strong>Селектори атрибутів:</strong> вибирають елементи з певним атрибутом. Наприклад, <code>[type="text"]</code> вибирає всі елементи з атрибутом <code>type="text"</code>.</li>
        <li><strong>Комбіновані селектори:</strong> дозволяють об'єднувати декілька селекторів для більш точного вибору. Наприклад, <code>div p</code> вибирає всі <code>&lt;p&gt;</code> елементи, які знаходяться всередині <code>&lt;div&gt;</code>.</li>
      </ul>
      <pre>
        <code>
          {`
            /* Селектор елементів */
            h2 {
              color: green;
            }

            /* Класовий селектор */
            .highlight {
              background-color: yellow;
            }

            /* ID селектор */
            #unique {
              font-weight: bold;
            }

            /* Селектор атрибутів */
            input[type="text"] {
              border: 1px solid black;
            }

            /* Комбінований селектор */
            div p {
              margin: 10px;
            }
          `}
        </code>
      </pre>

      <h4>Псевдокласи та псевдоелементи</h4>
      <p>
        Псевдокласи і псевдоелементи дозволяють застосовувати стилі до певних станів елементів або їх частин. Вони корисні для інтерактивності та додавання стилів до частин елементів.
      </p>
      <ul>
        <li><strong>Псевдокласи:</strong> застосовуються до елементів у певних станах, наприклад, <code>:hover</code>, <code>:focus</code>, <code>:nth-child()</code>.</li>
        <li><strong>Псевдоелементи:</strong> дозволяють стилізувати частини елементів, наприклад, <code>::before</code>, <code>::after</code>, <code>::first-line</code>.</li>
      </ul>
      <pre>
        <code>
          {`
            /* Псевдоклас :hover */
            a:hover {
              color: red;
            }

            /* Псевдоелемент ::before */
            p::before {
              content: "Перед текстом: ";
              color: blue;
            }

            /* Псевдоклас :nth-child() */
            ul li:nth-child(odd) {
              background-color: #f9f9f9;
            }
          `}
        </code>
      </pre>

      <h4>CSS Властивості та значення</h4>
      <p>
        CSS надає широкий набір властивостей для зміни вигляду HTML-елементів. Деякі з основних властивостей включають:
      </p>
      <ul>
        <li><strong>color:</strong> встановлює колір тексту.</li>
        <li><strong>font-size:</strong> встановлює розмір шрифту.</li>
        <li><strong>background-color:</strong> встановлює колір фону.</li>
        <li><strong>margin:</strong> встановлює зовнішній відступ елемента.</li>
        <li><strong>padding:</strong> встановлює внутрішній відступ елемента.</li>
        <li><strong>border:</strong> встановлює рамку навколо елемента.</li>
      </ul>
      <pre>
        <code>
          {`
            p {
              color: #333;
              font-size: 16px;
              background-color: #f9f9f9;
              margin: 20px;
              padding: 10px;
              border: 1px solid #ccc;
            }
          `}
        </code>
      </pre>

      <h4>Успадкування та каскадність у CSS</h4>
      <p>
        CSS розшифровується як "каскадні таблиці стилів", що означає, що стилі можуть успадковуватися від батьківських елементів до дочірніх і комбінуватися за каскадними правилами. Ось кілька важливих понять:
      </p>
      <ul>
        <li><strong>Успадкування:</strong> Деякі властивості CSS, як-от <code>color</code> і <code>font-family</code>, успадковуються дочірніми елементами від батьківських.</li>
        <li><strong>Специфічність:</strong> CSS правила мають різні рівні специфічності. Правила з вищою специфічністю переважають правила з нижчою специфічністю.</li>
        <li><strong>Важливість:</strong> Використання <code>!important</code> після значення властивості робить це правило найважливішим, переважаючи всі інші правила.</li>
      </ul>
      <pre>
        <code>
          {`
            /* Успадкування */
            body {
              font-family: Arial, sans-serif;
              color: #333;
            }

            /* Специфічність */
            p {
              color: red; /* Менш специфічне правило */
            }
            .main p {
              color: blue; /* Більш специфічне правило */
            }

            /* Важливість */
            p {
              color: red !important; /* Це правило переважає всі інші */
            }
          `}
        </code>
      </pre>

      <h4>Медіа-запити в CSS</h4>
      <p>
        Медіа-запити дозволяють застосовувати різні стилі для різних пристроїв або умов відображення, таких як розмір екрану. Це важливо для створення адаптивного дизайну.
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

            @media (min-width: 600px) {
              body {
                font-size: 18px;
              }
            }
          `}
        </code>
      </pre>

      <h4>Плавні переходи у CSS</h4>
      <p>
        CSS дозволяє створювати плавні переходи між станами елементів за допомогою властивості <code>transition</code>. Це корисно для анімацій та покращення користувацького досвіду.
      </p>
      <pre>
        <code>
          {`
            button {
              background-color: #008CBA;
              color: white;
              padding: 15px 32px;
              font-size: 16px;
              transition: background-color 0.3s ease;
            }

            button:hover {
              background-color: #005f6b;
            }
          `}
        </code>
      </pre>

      <h4>Flexbox та Grid Layout</h4>
      <p>
        CSS надає потужні інструменти для створення макетів сторінок: Flexbox та Grid Layout. Вони дозволяють легко розташовувати елементи на сторінці.
      </p>
      <ul>
        <li><strong>Flexbox:</strong> Відмінно підходить для одновимірних макетів, де елементи розташовуються в ряд або стовпчик. Використовується властивість <code>display: flex;</code>.</li>
        <li><strong>Grid Layout:</strong> Підходить для двовимірних макетів, де елементи розташовуються в сітку. Використовується властивість <code>display: grid;</code>.</li>
      </ul>
      <pre>
        <code>
          {`
            /* Flexbox приклад */
            .container {
              display: flex;
              justify-content: space-between;
            }

            .item {
              flex: 1;
              margin: 10px;
            }

            /* Grid Layout приклад */
            .grid-container {
              display: grid;
              grid-template-columns: repeat(3, 1fr);
              gap: 10px;
            }

            .grid-item {
              background-color: #f9f9f9;
              padding: 20px;
              text-align: center;
            }
          `}
        </code>
      </pre>

      <h4>Відносні та абсолютні одиниці вимірювання</h4>
      <p>
        CSS підтримує різні одиниці вимірювання для встановлення розмірів та відстаней. Ось кілька основних одиниць:
      </p>
      <ul>
        <li><strong>Абсолютні одиниці:</strong> <code>px</code> (пікселі), <code>cm</code> (сантиметри), <code>in</code> (дюйми).</li>
        <li><strong>Відносні одиниці:</strong> <code>%</code> (відсотки), <code>em</code> (відносно розміру шрифту батьківського елемента), <code>rem</code> (відносно розміру шрифту кореневого елемента).</li>
      </ul>
      <pre>
        <code>
          {`
            .box {
              width: 50%;
              padding: 1em;
              font-size: 16px;
              margin: 10px;
            }

            .relative-box {
              width: 10rem;
              height: 5em;
              background-color: #f0f0f0;
            }
          `}
        </code>
      </pre>

      <div className='accordion accordion-inner accordion-icon-left mt-3 mb-4' id='accordionCssSyntax'>
        <div className='accordion-item'>
          <h2 className='accordion-header' id='headingCssSyntax1'>
            <button className='accordion-button' type='button' data-bs-toggle='collapse' data-bs-target='#collapseCssSyntax1' aria-expanded='true' aria-controls='collapseCssSyntax1'>
              CSS Синтаксис
            </button>
          </h2>
          <div id='collapseCssSyntax1' className='accordion-collapse collapse show' aria-labelledby='headingCssSyntax1' data-bs-parent='#accordionCssSyntax'>
            <div className='accordion-body'>
              Синтаксис CSS складається з селектора та декларації. Селектор вказує, який HTML-елемент буде стилізовано, а декларація визначає, які стилі будуть застосовані до цього елемента. Декларація містить властивості та їх значення, розділені двокрапкою, і завершується крапкою з комою.
            </div>
          </div>
        </div>
        <div className='accordion-item'>
          <h2 className='accordion-header' id='headingCssSyntax2'>
            <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#collapseCssSyntax2' aria-expanded='false' aria-controls='collapseCssSyntax2'>
              CSS Коментарі
            </button>
          </h2>
          <div id='collapseCssSyntax2' className='accordion-collapse collapse' aria-labelledby='headingCssSyntax2' data-bs-parent='#accordionCssSyntax'>
            <div className='accordion-body'>
              Коментарі в CSS використовуються для пояснення коду або тимчасового відключення стилів. Вони не відображаються в браузері і не впливають на кінцевий результат. Коментарі в CSS розміщуються між /* і */.
            </div>
          </div>
        </div>
        <div className='accordion-item'>
          <h2 className='accordion-header' id='headingCssSyntax3'>
            <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#collapseCssSyntax3' aria-expanded='false' aria-controls='collapseCssSyntax3'>
              Типи селекторів у CSS
            </button>
          </h2>
          <div id='collapseCssSyntax3' className='accordion-collapse collapse' aria-labelledby='headingCssSyntax3' data-bs-parent='#accordionCssSyntax'>
            <div className='accordion-body'>
              Селектори у CSS використовуються для вибору HTML-елементів, які будуть стилізовані. Основні типи селекторів включають селектори елементів, класові селектори, ID селектори, селектори атрибутів та комбіновані селектори.
            </div>
          </div>
        </div>
        <div className='accordion-item'>
          <h2 className='accordion-header' id='headingCssSyntax4'>
            <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#collapseCssSyntax4' aria-expanded='false' aria-controls='collapseCssSyntax4'>
              Псевдокласи та псевдоелементи
            </button>
          </h2>
          <div id='collapseCssSyntax4' className='accordion-collapse collapse' aria-labelledby='headingCssSyntax4' data-bs-parent='#accordionCssSyntax'>
            <div className='accordion-body'>
              Псевдокласи і псевдоелементи дозволяють застосовувати стилі до певних станів елементів або їх частин. Вони корисні для інтерактивності та додавання стилів до частин елементів.
            </div>
          </div>
        </div>
        <div className='accordion-item'>
          <h2 className='accordion-header' id='headingCssSyntax5'>
            <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#collapseCssSyntax5' aria-expanded='false' aria-controls='collapseCssSyntax5'>
              CSS Властивості та значення
            </button>
          </h2>
          <div id='collapseCssSyntax5' className='accordion-collapse collapse' aria-labelledby='headingCssSyntax5' data-bs-parent='#accordionCssSyntax'>
            <div className='accordion-body'>
              CSS надає широкий набір властивостей для зміни вигляду HTML-елементів. Основні властивості включають color, font-size, background-color, margin, padding, border.
            </div>
          </div>
        </div>
        <div className='accordion-item'>
          <h2 className='accordion-header' id='headingCssSyntax6'>
            <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#collapseCssSyntax6' aria-expanded='false' aria-controls='collapseCssSyntax6'>
              Успадкування та каскадність у CSS
            </button>
          </h2>
          <div id='collapseCssSyntax6' className='accordion-collapse collapse' aria-labelledby='headingCssSyntax6' data-bs-parent='#accordionCssSyntax'>
            <div className='accordion-body'>
              CSS розшифровується як "каскадні таблиці стилів", що означає, що стилі можуть успадковуватися від батьківських елементів до дочірніх і комбінуватися за каскадними правилами. Ось кілька важливих понять:
              <ul>
                <li><strong>Успадкування:</strong> Деякі властивості CSS, як-от <code>color</code> і <code>font-family</code>, успадковуються дочірніми елементами від батьківських.</li>
                <li><strong>Специфічність:</strong> CSS правила мають різні рівні специфічності. Правила з вищою специфічністю переважають правила з нижчою специфічністю.</li>
                <li><strong>Важливість:</strong> Використання <code>!important</code> після значення властивості робить це правило найважливішим, переважаючи всі інші правила.</li>
              </ul>
            </div>
          </div>
        </div>
        <div className='accordion-item'>
          <h2 className='accordion-header' id='headingCssSyntax7'>
            <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#collapseCssSyntax7' aria-expanded='false' aria-controls='collapseCssSyntax7'>
              Медіа-запити в CSS
            </button>
          </h2>
          <div id='collapseCssSyntax7' className='accordion-collapse collapse' aria-labelledby='headingCssSyntax7' data-bs-parent='#accordionCssSyntax'>
            <div className='accordion-body'>
              Медіа-запити дозволяють застосовувати різні стилі для різних пристроїв або умов відображення, таких як розмір екрану. Це важливо для створення адаптивного дизайну.
            </div>
          </div>
        </div>
        <div className='accordion-item'>
          <h2 className='accordion-header' id='headingCssSyntax8'>
            <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#collapseCssSyntax8' aria-expanded='false' aria-controls='collapseCssSyntax8'>
              Плавні переходи у CSS
            </button>
          </h2>
          <div id='collapseCssSyntax8' className='accordion-collapse collapse' aria-labelledby='headingCssSyntax8' data-bs-parent='#accordionCssSyntax'>
            <div className='accordion-body'>
              CSS дозволяє створювати плавні переходи між станами елементів за допомогою властивості <code>transition</code>. Це корисно для анімацій та покращення користувацького досвіду.
            </div>
          </div>
        </div>
        <div className='accordion-item'>
          <h2 className='accordion-header' id='headingCssSyntax9'>
            <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#collapseCssSyntax9' aria-expanded='false' aria-controls='collapseCssSyntax9'>
              Flexbox та Grid Layout
            </button>
          </h2>
          <div id='collapseCssSyntax9' className='accordion-collapse collapse' aria-labelledby='headingCssSyntax9' data-bs-parent='#accordionCssSyntax'>
            <div className='accordion-body'>
              CSS надає потужні інструменти для створення макетів сторінок: Flexbox та Grid Layout. Вони дозволяють легко розташовувати елементи на сторінці.
            </div>
          </div>
        </div>
        <div className='accordion-item'>
          <h2 className='accordion-header' id='headingCssSyntax10'>
            <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#collapseCssSyntax10' aria-expanded='false' aria-controls='collapseCssSyntax10'>
              Відносні та абсолютні одиниці вимірювання
            </button>
          </h2>
          <div id='collapseCssSyntax10' className='accordion-collapse collapse' aria-labelledby='headingCssSyntax10' data-bs-parent='#accordionCssSyntax'>
            <div className='accordion-body'>
              CSS підтримує різні одиниці вимірювання для встановлення розмірів та відстаней. Ось кілька основних одиниць:
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

export default CourseCss4;
