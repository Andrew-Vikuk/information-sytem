import React from "react";
import {
  FaArrowRight,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import courseListJs from "../../../scripts/CoursesListJs";

const CourseJs1 = () => {
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

<h3>Вступ до JavaScript</h3>
<p>
  JavaScript - це високорівнева, інтерпретована мова програмування, яка використовується для створення інтерактивних елементів на веб-сторінках. Вона є однією з основних технологій веб-розробки поряд з HTML та CSS.
</p>

<h4>Що таке JavaScript</h4>
<p>
  JavaScript дозволяє розробникам додавати динамічні функціональні можливості до веб-сторінок, включаючи інтерактивні форми, анімації, сповіщення та багато іншого. Вона є мовою сценаріїв, що виконується на стороні клієнта, хоча також може бути використана на стороні сервера завдяки платформам, таким як Node.js.
</p>

<h4>Історія та еволюція</h4>
<p>
  JavaScript була створена Бренданом Айком у 1995 році під час його роботи в Netscape. Спочатку вона називалась Mocha, потім була перейменована в LiveScript, і, нарешті, у JavaScript. У 1997 році JavaScript стала стандартизованою мовою завдяки Ecma International під назвою ECMAScript.
</p>
<p>
  З часом JavaScript значно розвинулась, додавши нові функціональні можливості та покращення продуктивності. Сучасний JavaScript (ES6 і новіші версії) включає класи, модулі, стрілкові функції, шаблонні рядки та багато інших вдосконалень.
</p>

<h4>Сфера використання (клієнтська та серверна частина)</h4>
<p>
  JavaScript використовується як на стороні клієнта, так і на стороні сервера:
</p>
<ul>
  <li><strong>Клієнтська частина:</strong> JavaScript працює в браузері, де вона може змінювати HTML та CSS, реагувати на події користувача, виконувати асинхронні запити до сервера (через AJAX або Fetch API) та взаємодіяти з API браузера.</li>
  <li><strong>Серверна частина:</strong> Завдяки Node.js JavaScript може бути використана для створення серверних додатків, обробки запитів, роботи з базами даних, а також для виконання фонових завдань.</li>
</ul>

<h4>Переваги використання JavaScript</h4>
<p>
  JavaScript має кілька переваг, серед яких:
</p>
<ul>
  <li><strong>Широке використання:</strong> JavaScript є однією з найпопулярніших мов програмування у світі, що забезпечує велику кількість ресурсів та підтримки.</li>
  <li><strong>Гнучкість:</strong> JavaScript може бути використана як для фронтенду, так і для бекенду, що робить її універсальною мовою для розробки веб-додатків.</li>
  <li><strong>Активна спільнота:</strong> Велика активна спільнота JavaScript розробників постійно створює нові інструменти, бібліотеки та фреймворки, що спрощують розробку.</li>
</ul>

<h4>Довідка</h4>
<div className='accordion accordion-inner accordion-icon-left mt-3 mb-4' id='javascriptAccordion'>
  <div className='accordion-item'>
    <h2 className='accordion-header' id='javascriptHeadingOne'>
      <button className='accordion-button' type='button' data-bs-toggle='collapse' data-bs-target='#javascriptCollapseOne' aria-expanded='true' aria-controls='javascriptCollapseOne'>
        Як почати роботу з JavaScript?
      </button>
    </h2>
    <div id='javascriptCollapseOne' className='accordion-collapse collapse show' aria-labelledby='javascriptHeadingOne' data-bs-parent='#javascriptAccordion'>
      <div className='accordion-body'>
        Почніть з вивчення основ синтаксису JavaScript, таких як змінні, функції, цикли та умовні оператори. Використовуйте браузер для виконання простих скриптів та експериментів з DOM.
      </div>
    </div>
  </div>
  <div className='accordion-item'>
    <h2 className='accordion-header' id='javascriptHeadingTwo'>
      <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#javascriptCollapseTwo' aria-expanded='false' aria-controls='javascriptCollapseTwo'>
        Що таке ECMAScript?
      </button>
    </h2>
    <div id='javascriptCollapseTwo' className='accordion-collapse collapse' aria-labelledby='javascriptHeadingTwo' data-bs-parent='#javascriptAccordion'>
      <div className='accordion-body'>
        ECMAScript - це стандарт, на якому базується JavaScript. Він визначає синтаксис та основні функції мови. Найновіші версії ECMAScript (ES6 та новіші) включають багато нових функціональних можливостей.
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

export default CourseJs1;

