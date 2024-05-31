import React from "react";
import {
  FaArrowRight,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import courseListReact from "../../../scripts/CoursesListReact";

const CourseReact1 = () => {
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

<h3>Вступ до ReactJS</h3>
<p>
  ReactJS - це бібліотека JavaScript для створення користувацьких інтерфейсів. Вона дозволяє розробникам будувати веб-додатки з компонентами, які можуть бути перевикористані та ефективно управляються.
</p>

<h4>Основні концепції ReactJS</h4>
<p>
  React базується на кількох ключових концепціях:
</p>
<ul>
  <li><strong>Компоненти:</strong> React дозволяє розбивати інтерфейс на невеликі незалежні компоненти, які можуть бути повторно використані.</li>
  <li><strong>Віртуальний DOM:</strong> React використовує віртуальний DOM для оптимізації оновлення інтерфейсу, що призводить до покращеної продуктивності.</li>
  <li><strong>Стан:</strong> Кожен компонент може мати власний стан, який визначає його поведінку та відображення в різних ситуаціях.</li>
  <li><strong>Props:</strong> Властивості (props) дозволяють передавати дані в компоненти та забезпечують спосіб взаємодії між компонентами.</li>
</ul>

<h4>Структура React-додатка</h4>
<p>
  React-додаток зазвичай складається з декількох основних частин:
</p>
<ul>
  <li><strong>Кореневий компонент:</strong> Це основний компонент, що відображається на сторінці і містить інші компоненти.</li>
  <li><strong>Компоненти:</strong> Різні частини інтерфейсу розділяються на окремі компоненти для кращої організації та перевикористання коду.</li>
  <li><strong>Маршрутизація:</strong> Для сторінок зазвичай використовуються бібліотеки маршрутизації, такі як React Router, для навігації в додатку.</li>
</ul>

<h4>Переваги використання ReactJS</h4>
<p>
  ReactJS має кілька переваг, серед яких:
</p>
<ul>
  <li><strong>Ефективність:</strong> Завдяки віртуальному DOM та оптимізаціям, React дозволяє створювати продуктивні та швидкі додатки.</li>
  <li><strong>Перевикористання компонентів:</strong> Компонентна архітектура сприяє перевикористанню коду та покращує його підтримку.</li>
  <li><strong>Спільнота та підтримка:</strong> Велика активна спільнота React забезпечує доступ до багатьох ресурсів та допомоги.</li>
</ul>

<h4>Довідка</h4>
<div className='accordion accordion-inner accordion-icon-left mt-3 mb-4' id='reactAccordion'>
  <div className='accordion-item'>
    <h2 className='accordion-header' id='reactHeadingOne'>
      <button className='accordion-button' type='button' data-bs-toggle='collapse' data-bs-target='#reactCollapseOne' aria-expanded='true' aria-controls='reactCollapseOne'>
        Як почати роботу з React?
      </button>
    </h2>
    <div id='reactCollapseOne' className='accordion-collapse collapse show' aria-labelledby='reactHeadingOne' data-bs-parent='#reactAccordion'>
      <div className='accordion-body'>
        Почніть зі створення нового React-проекту за допомогою Create React App або іншого шаблону. Потім вивчайте основи створення компонентів, управління станом та роботу з подіями.
      </div>
    </div>
  </div>
  <div className='accordion-item'>
    <h2 className='accordion-header' id='reactHeadingTwo'>
      <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#reactCollapseTwo' aria-expanded='false' aria-controls='reactCollapseTwo'>
        Що таке JSX?
      </button>
    </h2>
    <div id='reactCollapseTwo' className='accordion-collapse collapse' aria-labelledby='reactHeadingTwo' data-bs-parent='#reactAccordion'>
      <div className='accordion-body'>
        JSX - це розширення синтаксису JavaScript, що використовується в React для опису інтерфейсу користувача у вигляді HTML-подібних елементів прямо в коді JavaScript.
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

export default CourseReact1;

