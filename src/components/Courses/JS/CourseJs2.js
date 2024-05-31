import React from "react";
import {
  FaArrowRight,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import courseListJs from "../../../scripts/CoursesListJs";

const CourseJs2 = () => {
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
                    <FaArrowRight /> Інші уроки JavaScript
                  </h5>
                  <ul className='catagory-items'>
                           {courseListJs.map((data, index) => (
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
                    <img src='assets/img/about/about-pages.png' alt='img' className='service-banner-image' />
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
                    <img src='assets/img/about/lesson-image-js_1.jpg' alt='img' className="w-100 h-20"  style={{height: "400px", objectFit: "cover", marginBottom: "20px"}}/>
                  </div>
                  <div className='details'>

<h3>Налаштування середовища</h3>
<p>
  Перш ніж почати розробку з JavaScript або React, важливо налаштувати відповідне середовище для продуктивної роботи. Це включає встановлення Node.js та npm, вибір редактора коду та основи роботи з консоллю.
</p>

<h4>Встановлення Node.js та npm</h4>
<p>
  Node.js - це серверна платформа для виконання JavaScript-коду поза браузером. npm (Node Package Manager) - це менеджер пакетів для JavaScript, який дозволяє встановлювати та керувати бібліотеками та залежностями.
</p>
<p>
  Щоб встановити Node.js та npm, дотримуйтесь наступних кроків:
</p>
<ol>
  <li>Перейдіть на офіційний сайт Node.js <a href="https://nodejs.org" target="_blank" rel="noopener noreferrer">nodejs.org</a>.</li>
  <li>Завантажте версію Node.js, яка підходить для вашої операційної системи.</li>
  <li>Встановіть Node.js, слідуючи інструкціям на екрані. npm буде встановлено разом з Node.js.</li>
  <li>Перевірте успішність встановлення, відкривши консоль і ввівши команди <code>node -v</code> та <code>npm -v</code>, щоб переглянути встановлені версії.</li>
</ol>

<h4>Вибір редактора коду</h4>
<p>
  Редактор коду - це інструмент, який допомагає писати та редагувати код. Ось кілька популярних редакторів коду для JavaScript та React:
</p>
<ul>
  <li><strong>Visual Studio Code (VS Code):</strong> Безкоштовний редактор з відкритим вихідним кодом від Microsoft, який підтримує розширення для різних мов програмування та фреймворків.</li>
  <li><strong>Sublime Text:</strong> Легкий, швидкий редактор коду з потужними функціями та можливістю налаштування.</li>
  <li><strong>Atom:</strong> Безкоштовний редактор з відкритим вихідним кодом від GitHub, який підтримує розширення та налаштування.</li>
</ul>
<p>
  Рекомендується спробувати кілька редакторів, щоб знайти той, який найкраще відповідає вашим потребам та уподобанням.
</p>

<h4>Основи роботи з консоллю</h4>
<p>
  Консоль (або термінал) - це інтерфейс командного рядка, який дозволяє взаємодіяти з операційною системою за допомогою текстових команд. Основи роботи з консоллю включають:
</p>
<ul>
  <li><strong>Навігація по файловій системі:</strong> Використовуйте команди <code>cd</code> (change directory) для зміни директорій та <code>ls</code> (Linux, macOS) або <code>dir</code> (Windows) для відображення вмісту директорій.</li>
  <li><strong>Запуск команд:</strong> Багато інструментів та програм можна запускати прямо з консолі, наприклад, <code>node script.js</code> для виконання JavaScript-файлу.</li>
  <li><strong>Управління пакетами:</strong> Використовуйте npm для встановлення, оновлення та видалення бібліотек, наприклад, <code>npm install react</code> для встановлення React.</li>
</ul>
<p>
  Вивчення основних команд консолі допоможе ефективніше працювати з проектами та інструментами розробки.
</p>

<h4>Довідка</h4>
<div className='accordion accordion-inner accordion-icon-left mt-3 mb-4' id='setupAccordion'>
  <div className='accordion-item'>
    <h2 className='accordion-header' id='setupHeadingOne'>
      <button className='accordion-button' type='button' data-bs-toggle='collapse' data-bs-target='#setupCollapseOne' aria-expanded='true' aria-controls='setupCollapseOne'>
        Як встановити Node.js та npm на Windows?
      </button>
    </h2>
    <div id='setupCollapseOne' className='accordion-collapse collapse show' aria-labelledby='setupHeadingOne' data-bs-parent='#setupAccordion'>
      <div className='accordion-body'>
        Завантажте інсталятор з офіційного сайту Node.js, запустіть його та слідуйте інструкціям на екрані. Після встановлення перевірте версії, ввівши <code>node -v</code> та <code>npm -v</code> у консолі.
      </div>
    </div>
  </div>
  <div className='accordion-item'>
    <h2 className='accordion-header' id='setupHeadingTwo'>
      <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#setupCollapseTwo' aria-expanded='false' aria-controls='setupCollapseTwo'>
        Як налаштувати Visual Studio Code для роботи з JavaScript?
      </button>
    </h2>
    <div id='setupCollapseTwo' className='accordion-collapse collapse' aria-labelledby='setupHeadingTwo' data-bs-parent='#setupAccordion'>
      <div className='accordion-body'>
        Встановіть VS Code з офіційного сайту, потім додайте розширення, такі як "ESLint", "Prettier", "Debugger for Chrome" та "JavaScript (ES6) code snippets" для покращення роботи з JavaScript.
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

export default CourseJs2;

