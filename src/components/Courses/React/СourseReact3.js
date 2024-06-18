import React from "react";
import {
  FaArrowRight,
} from "react-icons/fa";
import { HashLink as Link } from 'react-router-hash-link';
import courseListReact from "../../../scripts/CoursesListReact";
import { NavLink } from "react-router-dom";


const CourseReact3 = () => {
  return (
    <>
      {/* ===================== Course Single Page start ===================== */}
      <div className='service-area pd-top-120 pd-bottom-90'>
    <div className='container'>
        <div className='row'>
            <div className='col-lg-4 col-12'>
                <div className='td-sidebar service-sidebar'>
                    <div className='widget widget_catagory'>
                        <Link className='btn btn-border-base' to='/courses#react'>
                      Назад до курсів
                    </Link>
                  <h5 className='widget-title mt-4 mb-2'>
                    Уроки по React JS
                  </h5>
                        <ul className='catagory-items'>
                          {courseListReact.map((data, index) => (
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
                            <h3>Що таке JSX</h3>
                            <p>
                                JSX (JavaScript XML) – це синтаксичне розширення для JavaScript, яке дозволяє використовувати HTML-подібний синтаксис всередині JavaScript коду. JSX використовується в React для опису структури користувацьких інтерфейсів.
                            </p>

                            <h4>Як використовувати JSX</h4>
                            <p>
                                Для використання JSX в React, необхідно враховувати кілька основних принципів:
                            </p>
                            <ul>
                                <li>JSX повинен бути вкладений у один кореневий елемент.</li>
                                <li>JSX може включати JavaScript вирази всередині фігурних дужок <code>{}</code>.</li>
                                <li>JSX повинно компілюватися в JavaScript, наприклад за допомогою Babel.</li>
                            </ul>
                            <p>Ось приклад використання JSX:</p>
                            <pre>
                                <code>
{`const element = (
  <div>
    <h1>Привіт, світе!</h1>
    <p>Це приклад JSX.</p>
  </div>
);`}
                                </code>
                            </pre>

                            <h4>Порівняння JSX та звичайного JavaScript</h4>
                            <p>
                                JSX – це не окрема мова, а синтаксичне розширення для JavaScript. Ось кілька ключових відмінностей між JSX та звичайним JavaScript:
                            </p>
                            <ul>
                                <li><strong>Зручність:</strong> JSX дозволяє писати структури користувацького інтерфейсу у більш зручному та читабельному форматі, схожому на HTML.</li>
                                <li><strong>Компіляція:</strong> JSX повинен компілюватися у звичайний JavaScript за допомогою інструментів на кшталт Babel.</li>
                                <li><strong>Вирази:</strong> Всередині JSX можна використовувати JavaScript вирази, що робить його більш гнучким.</li>
                            </ul>
                            <p>Ось приклад, як JSX компілюється в JavaScript:</p>
                            <pre>
                                <code>
{`// JSX
const element = <h1 className="greeting">Привіт, світе!</h1>;

// Компіляція в JavaScript
const element = React.createElement(
  'h1',
  {className: 'greeting'},
  'Привіт, світе!'
);`}
                                </code>
                            </pre>
                            <h4>Атрибути в JSX</h4>
<p>У JSX атрибути пишуться аналогічно HTML, але є кілька відмінностей:</p>
<ul>
  <li><code>className</code> замість <code>class</code> для додавання CSS класів:</li>
  <pre>
    <code>
{`<div className="container">...</div>`}
</code>
</pre>
<li><code>htmlFor</code> замість <code>for</code> для прив'язки мітки до поля вводу:</li>
<pre>
<code>
{`<label htmlFor="inputId">Введіть значення:</label> <input id="inputId" type="text" />`}
</code>

</pre>
<li>Стилі передаються як об'єкти:</li>
<pre>
<code>
{`<div style={{ color: 'red', fontSize: '20px' }}>Це червоний текст.</div>`}
</code>
</pre>

   </ul>
<h4>Приклади складніших виразів у JSX</h4>
<p>В JSX можна використовувати умовні оператори для рендерингу елементів в залежності від стану.</p>
<pre>
    <code>
        {`
  const user = {
  name: 'Іван',
  isLoggedIn: true,
};

const element = (
  <div>
    <h1>Привіт, {user.isLoggedIn ? user.name : 'Гість'}!</h1>
  </div>
);

// Пояснення:
// Якщо user.isLoggedIn є істинним, рендериться ім'я користувача.
// Інакше, рендериться слово 'Гість'.
        `}
    </code>
</pre>
<p>Використання умовного рендерингу з логічним оператором &&</p>
<pre>
    <code>
        {`
  const user = {
  name: 'Іван',
  age: 30,
  showAge: true,
};

const element = (
  <div>
    <h1>Привіт, {user.name}!</h1>
    {user.showAge && <p>Тобі {user.age} років.</p>}
  </div>
);

// Пояснення:
// Якщо user.showAge є істинним, рендериться абзац з віком користувача.
// Інакше, абзац з віком не рендериться.
        `}
    </code>
</pre>
<p>JSX дозволяє рендерити списки елементів за допомогою методу map.</p>
<pre>
    <code>
        {`
const items = ['яблуко', 'банан', 'вишня'];
const listItems = items.map((item) => <li key={item}>{item}</li>);

const elementWithList = (
  <div>
    <h2>Список фруктів:</h2>
    <ul>{listItems}</ul>
  </div>
);

// Пояснення:
// Метод map створює новий масив елементів <li> з унікальним ключем для кожного елементу масиву items.`}
    </code>
</pre>
<p>Можна також комбінувати умовні оператори та цикли для більш складного рендерингу.</p>
<pre>
    <code>
        {`
   const tasks = [
  { id: 1, text: 'Завдання 1', completed: true },
  { id: 2, text: 'Завдання 2', completed: false },
  { id: 3, text: 'Завдання 3', completed: true },
];

const taskItems = tasks.map((task) => (
  <li key={task.id} style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
    {task.text}
  </li>
));

const elementWithTasks = (
  <div>
    <h2>Список завдань:</h2>
    <ul>{taskItems}</ul>
  </div>
);

// Пояснення:
// Метод map створює новий масив елементів <li> з унікальним ключем для кожного завдання.
// Стиль textDecoration змінюється на 'line-through' для завершених завдань.
`}
    </code>
</pre>
                            <h4>Довідка</h4>
                            <div className='accordion accordion-inner accordion-icon-left mt-3 mb-4' id='jsxAccordion'>
                                <div className='accordion-item'>
                                    <h2 className='accordion-header' id='jsxHeadingOne'>
                                        <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#jsxCollapseOne' aria-expanded='false' aria-controls='jsxCollapseOne'>
                                            Переваги JSX
                                        </button>
                                    </h2>
                                    <div id='jsxCollapseOne' className='accordion-collapse collapse' aria-labelledby='jsxHeadingOne' data-bs-parent='#jsxAccordion'>
                                        <div className='accordion-body'>
                                            <p>JSX спрощує написання та читання React компонентів, дозволяючи використовувати HTML-подібний синтаксис. Це робить код більш інтуїтивно зрозумілим та легким для підтримки.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='accordion-item'>
                                    <h2 className='accordion-header' id='jsxHeadingTwo'>
                                        <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#jsxCollapseTwo' aria-expanded='false' aria-controls='jsxCollapseTwo'>
                                            Недоліки JSX
                                        </button>
                                    </h2>
                                    <div id='jsxCollapseTwo' className='accordion-collapse collapse' aria-labelledby='jsxHeadingTwo' data-bs-parent='#jsxAccordion'>
                                        <div className='accordion-body'>
                                            <p>Одним з недоліків JSX є необхідність додаткового етапу компіляції, що може ускладнити налаштування середовища розробки. Також, JSX може бути незвичним для розробників, які не знайомі з React.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p>Тепер ви маєте основне розуміння про JSX та його використання в React. Це важливий крок на шляху до створення ефективних React додатків!</p>
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

export default CourseReact3;

