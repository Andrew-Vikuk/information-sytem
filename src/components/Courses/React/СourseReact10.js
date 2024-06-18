import React from "react";
import {
  FaArrowRight,
} from "react-icons/fa";
import { HashLink as Link } from 'react-router-hash-link';
import courseListReact from "../../../scripts/CoursesListReact";
import { NavLink } from "react-router-dom";


const CourseReact10 = () => {
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
                            <h3>Основні хуки в React</h3>
                            <p>
                                Хуки (hooks) в React дозволяють використовувати стан і інші можливості React без написання класів. Найпоширенішими хуками є <code>useState</code> і <code>useEffect</code>. Давайте розглянемо, як вони працюють і як їх використовувати.
                            </p>

                            <h4>useState</h4>
                            <p>
                                Хук <code>useState</code> дозволяє додавати стан до функціональних компонентів. Використання цього хука включає оголошення змінної стану та функції для її оновлення.
                            </p>
                            <pre>
                                <code>
{`import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}`}
                                </code>
                            </pre>
                            <p>
                                У цьому прикладі змінна <code>count</code> зберігає поточне значення лічильника, а функція <code>setCount</code> оновлює це значення.
                            </p>

                            <h4>useEffect</h4>
                            <p>
                                Хук <code>useEffect</code> дозволяє виконувати побічні ефекти у функціональних компонентах, такі як завантаження даних, підписки або ручне маніпулювання DOM. Він виконується після рендерингу компонента.
                            </p>
                            <pre>
                                <code>
{`import React, { useState, useEffect } from 'react';

function Example() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    document.title = \`You clicked \${count} times\`;
  }, [count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
    </div>
  );
}`}
                                </code>
                            </pre>
                            <p>
                                У цьому прикладі хук <code>useEffect</code> оновлює заголовок документа щоразу, коли змінюється значення <code>count</code>.
                            </p>
                             <h5>Масив залежностей у useEffect</h5>
  <p>
    Масив залежностей у <code>useEffect</code> визначає, коли саме слід виконувати побічний ефект. Розглянемо кілька випадків:
  </p>
  <h6>Без масиву залежностей</h6>
  <p>
    Якщо не вказати масив залежностей, <code>useEffect</code> буде виконуватися після кожного рендеру компонента.
  </p>
  <pre>
    <code>
{`useEffect(() => {
  // Виконується після кожного рендеру
});`}
    </code>
  </pre>
  <h6>Порожній масив залежностей</h6>
  <p>
    Якщо вказати порожній масив залежностей, <code>useEffect</code> буде виконуватися лише один раз після першого рендеру компонента.
  </p>
  <pre>
    <code>
{`useEffect(() => {
  // Виконується один раз після першого рендеру
}, []);`}
    </code>
  </pre>
  <h6>Масив із залежностями</h6>
  <p>
    Якщо вказати масив із залежностями, <code>useEffect</code> буде виконуватися кожного разу, коли змінюється хоча б одна з цих залежностей.
  </p>
  <pre>
    <code>
{`const [count, setCount] = useState(0);

useEffect(() => {
  // Виконується кожного разу, коли змінюється count
}, [count]);`}
    </code>
  </pre>

                            <h4>Приклади використання хуків</h4>
                            <p>
                                Додаткові приклади використання <code>useState</code> та <code>useEffect</code>:
                            </p>
                            <h5>Таймер з використанням useEffect</h5>
                            <pre>
                                <code>
{`import React, { useState, useEffect } from 'react';

function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(prevSeconds => prevSeconds + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <p>{seconds} seconds have elapsed.</p>
    </div>
  );
}`}
                                </code>
                            </pre>
                            <p>
                                У цьому прикладі <code>useEffect</code> використовується для створення таймера, який оновлює стан <code>seconds</code> кожну секунду.
                            </p>

                            <h5>Форма з використанням useState</h5>
                            <pre>
                                <code>
{`import React, { useState } from 'react';

function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(\`Name: \${name}, Email: \${email}\`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
      </div>
      <div>
        <label>
          Email:
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </label>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}`}
                                </code>
                            </pre>
                            <p>
                                У цьому прикладі хук <code>useState</code> використовується для керування станом інпутів форми.
                            </p>

                            <h4>Довідка</h4>
                            <div className='accordion accordion-inner accordion-icon-left mt-3 mb-4' id='hooksAccordion'>
                                <div className='accordion-item'>
                                    <h2 className='accordion-header' id='hooksHeadingOne'>
                                        <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#hooksCollapseOne' aria-expanded='false' aria-controls='hooksCollapseOne'>
                                            useState
                                        </button>
                                    </h2>
                                    <div id='hooksCollapseOne' className='accordion-collapse collapse' aria-labelledby='hooksHeadingOne' data-bs-parent='#hooksAccordion'>
                                        <div className='accordion-body'>
                                            <p>Хук <code>useState</code> дозволяє додавати стан до функціональних компонентів. Він повертає масив з двох елементів: поточного стану і функції для його оновлення.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='accordion-item'>
                                    <h2 className='accordion-header' id='hooksHeadingTwo'>
                                        <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#hooksCollapseTwo' aria-expanded='false' aria-controls='hooksCollapseTwo'>
                                            useEffect
                                        </button>
                                    </h2>
                                    <div id='hooksCollapseTwo' className='accordion-collapse collapse' aria-labelledby='hooksHeadingTwo' data-bs-parent='#hooksAccordion'>
                                        <div className='accordion-body'>
                                            <p>Хук <code>useEffect</code> дозволяє виконувати побічні ефекти у функціональних компонентах. Він приймає функцію, яка виконується після рендерингу компонента, і масив залежностей, який визначає, коли ефект має виконуватися.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p>Основні хуки <code>useState</code> та <code>useEffect</code> є потужними інструментами для керування станом та побічними ефектами у функціональних компонентах React, дозволяючи створювати складні та інтерактивні інтерфейси.</p>
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

export default CourseReact10;

