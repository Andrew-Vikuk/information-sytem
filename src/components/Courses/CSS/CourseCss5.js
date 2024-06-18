import React from "react";
import {
  FaAngleDoubleRight,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";
import { HashLink as Link } from 'react-router-hash-link';
import { NavLink } from "react-router-dom";
import courseListCSS from "../../../scripts/CoursesListCSS";


const CourseCss5 = () => {
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

      <h4>Основні поняття CSS</h4>
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
            @media (max-width: 600px) {
              body {
                background-color: lightblue;
              }
              p {
                font-size: 14px;
              }
            }
          `}
        </code>
      </pre>

      <h4>Практичне застосування</h4>
      <p>
        Давайте розглянемо приклад повного CSS-файлу для простої веб-сторінки:
      </p>
      <pre>
        <code>
          {`
            /* Загальні стилі */
            body {
              margin: 0;
              padding: 0;
              font-family: Arial, sans-serif;
              background-color: #f0f0f0;
              color: #333;
            }

            /* Заголовки */
            h1, h2, h3 {
              margin: 10px 0;
              padding: 10px;
            }

            /* Параграфи */
            p {
              margin: 10px 0;
              padding: 10px;
              line-height: 1.6;
            }

            /* Класи */
            .highlight {
              background-color: yellow;
            }

            /* ID */
            #unique {
              font-size: 20px;
              font-weight: bold;
            }

            /* Навігація */
            nav ul {
              list-style: none;
              margin: 0;
              padding: 0;
              display: flex;
              justify-content: space-around;
              background-color: #333;
              color: white;
            }

            nav ul li {
              margin: 0;
              padding: 0;
            }

            nav ul li a {
              color: white;
              text-decoration: none;
              padding: 10px 20px;
              display: block;
            }

            nav ul li a:hover {
              background-color: #575757;
            }

            /* Медіа-запити */
            @media (max-width: 600px) {
              nav ul {
                flex-direction: column;
              }

              nav ul li a {
                padding: 15px;
              }
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
              CSS Властивості та значення
            </button>
          </h2>
          <div id='collapseCssSyntax4' className='accordion-collapse collapse' aria-labelledby='headingCssSyntax4' data-bs-parent='#accordionCssSyntax'>
            <div className='accordion-body'>
              CSS надає широкий набір властивостей для зміни вигляду HTML-елементів. Основні властивості включають color, font-size, background-color, margin, padding, border.
            </div>
          </div>
        </div>
        <div className='accordion-item'>
          <h2 className='accordion-header' id='headingCssSyntax5'>
            <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#collapseCssSyntax5' aria-expanded='false' aria-controls='collapseCssSyntax5'>
              Успадкування та каскадність у CSS
            </button>
          </h2>
          <div id='collapseCssSyntax5' className='accordion-collapse collapse' aria-labelledby='headingCssSyntax5' data-bs-parent='#accordionCssSyntax'>
            <div className='accordion-body'>
              CSS розшифровується як "каскадні таблиці стилів", що означає, що стилі можуть успадковуватися від батьківських елементів до дочірніх і комбінуватися за каскадними правилами. Успадкування, специфічність та важливість є важливими поняттями у CSS.
            </div>
          </div>
        </div>
        <div className='accordion-item'>
          <h2 className='accordion-header' id='headingCssSyntax6'>
            <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#collapseCssSyntax6' aria-expanded='false' aria-controls='collapseCssSyntax6'>
              Медіа-запити в CSS
            </button>
          </h2>
          <div id='collapseCssSyntax6' className='accordion-collapse collapse' aria-labelledby='headingCssSyntax6' data-bs-parent='#accordionCssSyntax'>
            <div className='accordion-body'>
              Медіа-запити дозволяють застосовувати різні стилі для різних пристроїв або умов відображення, таких як розмір екрану. Це важливо для створення адаптивного дизайну.
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

export default CourseCss5;
