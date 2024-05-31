import React from "react";
import {
  FaArrowRight,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import courseListReact from "../../../scripts/CoursesListReact";

const CourseReact2 = () => {
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
                    <FaArrowRight /> Інші уроки ReactJS
                  </h5>
                  <ul className='catagory-items'>
                           {courseListReact.map((data, index) => (
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
                    <img src='assets/img/about/lesson-image-react_4.jpeg' alt='img' className="w-100 h-20"  style={{height: "400px", objectFit: "cover", marginBottom: "20px"}}/>
                  </div>
                  <div className='details'>

<h3>Початок роботи з ReactJS</h3>
<p>
Щоб розпочати розробку проекту на React, необхідно встановити Node.js та npm, створити новий проект за допомогою Create React App і зрозуміти структуру проекту. Ось покрокова інструкція:
</p>

<h4>Встановлення Node.js та npm:</h4>
  <ol>
    <li>
      <p>Перейдіть на офіційний сайт Node.js</p>
    </li>
    <li>
          <p>Завантажте і встановіть відповідну версію Node.js для вашої операційної системи. Рекомендовано встановлювати LTS (Long Term Support) версію.</p>
    </li>
    <li>
      <p>Перевірте встановлення:</p>
      <ul>
        <li>
          <p>Відкрийте термінал (або командний рядок) і введіть:</p>
          <pre>
            <code>
              node -v
            </code>
        </pre>
        <p>Це покаже версію Node.js.</p>
        </li>
        <li>
          <p>Перевірте npm (Node Package Manager):</p>
          <pre>
            <code>
              npm -v
            </code>
        </pre>
        <p>Це покаже версію npm.</p>
        </li>
      </ul>
    </li>
  </ol>

<h4>Створення нового проекту за допомогою Create React App</h4>
<ol>
  <li>
    <p>Встановіть Create React App глобально, якщо у вас ще не встановлено:</p>
    <pre>
      <code>
        npm install -g create-react-app
      </code>
    </pre>
  </li>
  <li>
    <p>Створіть новий проект:</p>
    <pre>
      <code>
        npx create-react-app my-app
      </code>
      </pre>
      <p>Замість my-app можете використати будь-яке інше ім'я для вашого проекту.</p>
  </li>
  <li>
    <p>Перейдіть до директорії проекту:</p>
    <pre>
      <code>
        cd my-app
      </code>
    </pre>
  </li>
  <li>
    <p>Запустіть проект:</p>
  <pre>
    <code>
        npm start
    </code>
  </pre>
  <p>Це запустить проект і відкриє його в браузері за адресою http://localhost:3000.</p>
    </li>
</ol>

<h4>Структура проекту</h4>
<p>
Після створення проекту ви побачите наступну структуру директорій та файлів:
</p>
    <pre>
      <code>
      { ` my-app/
├── node_modules/
├── public/
│   ├── favicon.ico
│   ├── index.html
│   ├── logo192.png
│   ├── logo512.png
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── App.css
│   ├── App.js
│   ├── App.test.js
│   ├── index.css
│   ├── index.js
│   ├── logo.svg
│   └── reportWebVitals.js
├── .gitignore
├── package.json
├── README.md
└── yarn.lock `}
      </code>
    </pre>
<ul>
  <li>
    <p>node_modules/: містить всі залежності проекту.</p>
  </li>
  <li>
    <p>public/: містить статичні файли. Основний файл тут – index.html, в який буде вставлятися ваш React додаток.</p>
  </li>
  <li>
    <p>src/: містить вихідний код вашого додатка. Основні файли тут:</p>
    <ul>
      <li>
        App.js: головний компонент додатку.
      </li>
      <li>
        index.js: точка входу додатку.
      </li>
      <li>
        App.css та index.css: файли стилів.
      </li>
      <li>
        App.test.js: тести для App.js.
      </li>
      <li>
        logo.svg: приклад зображення.
      </li>
      <li>
        reportWebVitals.js: файл для вимірювання продуктивності.
      </li>
    </ul>
  </li>
  <li>
    <p>
      .gitignore: файл, що визначає, які файли і директорії ігнорувати в Git.
    </p>
  </li>
  <li>
    <p>
      package.json: файл, що містить інформацію про проект і залежності.
    </p>
  </li>
  <li>
    <p>
      README.md: файл з інформацією про проект.
    </p>
  </li>
  <li>
    <p>
      yarn.lock: файл блокування версій залежностей (якщо використовуєте Yarn замість npm).
    </p>
  </li>
</ul>
<p>Тепер ви готові розпочати розробку свого додатку на React!</p>
<h4>Довідка</h4>
<div className='accordion accordion-inner accordion-icon-left mt-3 mb-4' id='reactAccordion'>
<div className='accordion-item'>
  <h2 className='accordion-header' id='reactHeadingThree'>
    <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#reactCollapseThree' aria-expanded='false' aria-controls='reactCollapseThree'>
      Сreate React App
    </button>
  </h2>
  <div id='reactCollapseThree' className='accordion-collapse collapse' aria-labelledby='reactHeadingThree' data-bs-parent='#reactAccordion'>
    <div className='accordion-body'>
      <p>Create React App (CRA) - це офіційний інструмент від команди React, який спрощує налаштування та запуск нового проекту на React. Він автоматизує рутинні завдання, що дозволяє розробникам швидше почати працювати над функціональністю додатку.</p>
    </div>
  </div>
</div>

<div className='accordion-item'>
  <h2 className='accordion-header' id='reactHeadingFour'>
    <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#reactCollapseFour' aria-expanded='false' aria-controls='reactCollapseFour'>
      NodeJS
    </button>
  </h2>
  <div id='reactCollapseFour' className='accordion-collapse collapse' aria-labelledby='reactHeadingFour' data-bs-parent='#reactAccordion'>
    <div className='accordion-body'>
     <p>Node.js — це однопоточне кросплатформове середовище виконання з відкритим вихідним кодом і бібліотека, яка використовується для запуску вебдодатків, написаних на JavaScript, поза браузером клієнта.</p>
    </div>
  </div>
</div>
<div className='accordion-item'>
  <h2 className='accordion-header' id='reactHeadingFive'>
    <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#reactCollapseFive' aria-expanded='false' aria-controls='reactCollapseFive'>
      NPM
    </button>
  </h2>
  <div id='reactCollapseFive' className='accordion-collapse collapse' aria-labelledby='reactHeadingFive' data-bs-parent='#reactAccordion'>
    <div className='accordion-body'>
     <p>Node Package Manager (npm) — це менеджер пакетів JavaScript, який керує залежностями в проєктах, написаних на Node.js.</p>
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

export default CourseReact2;

