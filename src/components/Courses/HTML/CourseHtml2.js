import React from "react";
import {
  FaAngleDoubleRight,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import courseListHTML from "../../../scripts/CoursesListHTML";

const CourseHtml2 = () => {
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

  <h3>Форми в HTML: Основні концепції</h3>
  <p>
    Форми - це важливий елемент веб-сторінок, який дозволяє користувачам взаємодіяти з вмістом та надсилати дані на сервер.
  </p>

  <h4>Створення форм та їх елементів</h4>
  <p>
    HTML надає ряд вбудованих елементів для створення форм:
  </p>
  <ul>
    <li><code>&lt;form&gt;</code> - контейнер для всіх елементів форми</li>
    <li><code>&lt;input&gt;</code> - елемент для введення тексту, чекбоксів, радіокнопок, кнопок тощо</li>
    <li><code>&lt;textarea&gt;</code> - багаторядкове поле для введення тексту</li>
    <li><code>&lt;button&gt;</code> - кнопка для відправлення форми</li>
    <li><code>&lt;select&gt;</code> та <code>&lt;option&gt;</code> - випадаючий список та його варіанти</li>
  </ul>

  <h4>Валідація форм на клієнтському рівні</h4>
  <p>
    HTML також дозволяє використовувати атрибути для валідації даних, введених користувачем:
  </p>
  <ul>
    <li><code>required</code> - обов'язкове поле</li>
    <li><code>pattern</code> - шаблон для перевірки введеного значення</li>
    <li><code>min</code> та <code>max</code> - мінімальне та максимальне значення для числових полів</li>
  </ul>

  <h4>Використання атрибутів для встановлення властивостей форм</h4>
  <p>
    Для налаштування різних властивостей форм використовуються атрибути:
  </p>
  <ul>
    <li><code>action</code> - URL, до якого буде відправлений результат форми</li>
    <li><code>method</code> - метод відправлення даних (<code>GET</code> або <code>POST</code>)</li>
    <li><code>enctype</code> - тип кодування для передачі файлів</li>
    <li><code>autocomplete</code> - включення або виключення автозаповнення для форми</li>
  </ul>

  <h4>Розширення можливостей форм в HTML</h4>
  <div className='accordion accordion-inner accordion-icon-left mt-3 mb-4' id='accordionForms'>
    <div className='accordion-item'>
      <h2 className='accordion-header' id='headingFormsOne'>
        <button className='accordion-button' type='button' data-bs-toggle='collapse' data-bs-target='#collapseFormsOne' aria-expanded='true' aria-controls='collapseFormsOne'>
          Як використовувати checkbox та radio кнопки в HTML формах?
        </button>
      </h2>
      <div id='collapseFormsOne' className='accordion-collapse collapse show' aria-labelledby='headingFormsOne' data-bs-parent='#accordionForms'>
        <div className='accordion-body'>
          Елементи <code>&lt;input type="checkbox"&gt;</code> та <code>&lt;input type="radio"&gt;</code> використовуються для вибору одного або декількох значень. Checkbox дозволяє користувачам вибирати більше одного значення, тоді як radio кнопки дозволяють вибрати тільки одне значення зі списку.
        </div>
      </div>
    </div>
    <div className='accordion-item'>
      <h2 className='accordion-header' id='headingFormsTwo'>
        <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#collapseFormsTwo' aria-expanded='false' aria-controls='collapseFormsTwo'>
          Як створити випадаючий список (select) в HTML?
        </button>
      </h2>
      <div id='collapseFormsTwo' className='accordion-collapse collapse' aria-labelledby='headingFormsTwo' data-bs-parent='#accordionForms'>
        <div className='accordion-body'>
          Використовуйте елемент <code>&lt;select&gt;</code> для створення випадаючого списку. Внутрішні елементи <code>&lt;option&gt;</code> визначають варіанти вибору для користувача.
        </div>
      </div>
    </div>
    <div className='accordion-item'>
      <h2 className='accordion-header' id='headingFormsThree'>
        <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#collapseFormsThree' aria-expanded='false' aria-controls='collapseFormsThree'>
          Як валідувати форми на клієнтському рівні за допомогою HTML5?
        </button>
      </h2>
      <div id='collapseFormsThree' className='accordion-collapse collapse' aria-labelledby='headingFormsThree' data-bs-parent='#accordionForms'>
        <div className='accordion-body'>
          HTML5 надає ряд нових атрибутів для валідації форм на клієнтському рівні, таких як <code>required</code>, <code>pattern</code>, <code>min</code>, <code>max</code> та інші. Вони дозволяють виконувати базову перевірку даних перед відправленням на сервер.
        </div>
      </div>
    </div>
  </div>

  <h4>Заключення</h4>
  <p>
    Вивчення основ форм в HTML дозволить вам створювати інтерактивні веб-сторінки з введенням користувача та відправленням даних на сервер.
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

export default CourseHtml2;

