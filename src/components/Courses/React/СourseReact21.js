import React from "react";
import {
  FaArrowRight,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import courseListReact from "../../../scripts/CoursesListReact";

const CourseReact21 = () => {
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
                            <h3>Додатково: SSR та SSG</h3>
                            <p>Коли ми говоримо про рендеринг на React, ми маємо кілька підходів: серверний рендеринг (SSR), статичне генерування (SSG) та клієнтський рендеринг. У цьому розділі ми розглянемо ці концепції та використання Next.js для реалізації SSR та SSG.</p>

                            <h4>Next.js</h4>
                            <p>Next.js - це популярний фреймворк для React, який дозволяє легко реалізувати серверний рендеринг (SSR) та статичне генерування (SSG). Next.js забезпечує відмінну продуктивність та зручність при розробці сучасних веб-додатків.</p>
                            <p>Основні особливості Next.js:</p>
                            <ul>
                                <li>Автоматичний SSR для кожного маршруту за замовчуванням.</li>
                                <li>Підтримка SSG з можливістю попереднього генерування сторінок під час побудови.</li>
                                <li>Вбудована підтримка API маршрутів.</li>
                                <li>Просте налаштування маршрутизації.</li>
                            </ul>
                            <p>Ось приклад простого Next.js додатка:</p>
                            <pre>
                                <code>
{`// pages/index.js
import React from 'react';

const Home = () => {
  return <h1>Welcome to Next.js!</h1>;
};

export default Home;`}
                                </code>
                            </pre>

                            <h4>Різниця між SSR, SSG та клієнтським рендерингом</h4>
                            <p>Розглянемо основні відмінності між цими підходами:</p>
                            <h5>Server-Side Rendering (SSR)</h5>
                            <p>SSR означає, що HTML сторінки генерується на сервері під час кожного запиту. Це дозволяє забезпечити кращу продуктивність та SEO оптимізацію, оскільки користувач отримує повністю відрендерений HTML з серверу.</p>
                            <p>Приклад реалізації SSR в Next.js:</p>
                            <pre>
                                <code>
{`// pages/index.js
import React from 'react';

export async function getServerSideProps() {
  // Отримання даних на сервері
  const data = await fetchData();

  return { props: { data } };
}

const Home = ({ data }) => {
  return <div>{data}</div>;
};

export default Home;`}
                                </code>
                            </pre>

                            <h5>Static Site Generation (SSG)</h5>
                            <p>SSG генерує HTML сторінки під час побудови (build time). Це дозволяє значно покращити продуктивність, оскільки сторінки сервісуються як статичні файли. Цей підхід підходить для контенту, який не часто змінюється.</p>
                            <p>Приклад реалізації SSG в Next.js:</p>
                            <pre>
                                <code>
{`// pages/index.js
import React from 'react';

export async function getStaticProps() {
  // Отримання даних під час побудови
  const data = await fetchData();

  return { props: { data } };
}

const Home = ({ data }) => {
  return <div>{data}</div>;
};

export default Home;`}
                                </code>
                            </pre>

                            <h5>Клієнтський рендеринг</h5>
                            <p>Клієнтський рендеринг означає, що HTML генерується на клієнті (в браузері) за допомогою JavaScript. Цей підхід дозволяє забезпечити швидкий інтерфейс користувача, але може мати проблеми з SEO та початковою продуктивністю.</p>
                            <p>Приклад простого клієнтського рендеринга:</p>
                            <pre>
                                <code>
{`import React, { useState, useEffect } from 'react';

const Home = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetchData().then(setData);
  }, []);

  return <div>{data}</div>;
};

export default Home;`}
                                </code>
                            </pre>

                            <h4>Довідка</h4>
                            <div className='accordion accordion-inner accordion-icon-left mt-3 mb-4' id='ssrSsgAccordion'>
                                <div className='accordion-item'>
                                    <h2 className='accordion-header' id='ssrSsgHeadingOne'>
                                        <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#ssrSsgCollapseOne' aria-expanded='false' aria-controls='ssrSsgCollapseOne'>
                                            Server-Side Rendering (SSR)
                                        </button>
                                    </h2>
                                    <div id='ssrSsgCollapseOne' className='accordion-collapse collapse' aria-labelledby='ssrSsgHeadingOne' data-bs-parent='#ssrSsgAccordion'>
                                        <div className='accordion-body'>
                                            <p>SSR означає, що HTML сторінки генерується на сервері під час кожного запиту. Це дозволяє забезпечити кращу продуктивність та SEO оптимізацію.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='accordion-item'>
                                    <h2 className='accordion-header' id='ssrSsgHeadingTwo'>
                                        <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#ssrSsgCollapseTwo' aria-expanded='false' aria-controls='ssrSsgCollapseTwo'>
                                            Static Site Generation (SSG)
                                        </button>
                                    </h2>
                                    <div id='ssrSsgCollapseTwo' className='accordion-collapse collapse' aria-labelledby='ssrSsgHeadingTwo' data-bs-parent='#ssrSsgAccordion'>
                                        <div className='accordion-body'>
                                            <p>SSG генерує HTML сторінки під час побудови (build time). Це дозволяє значно покращити продуктивність, оскільки сторінки сервісуються як статичні файли.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='accordion-item'>
                                    <h2 className='accordion-header' id='ssrSsgHeadingThree'>
                                        <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#ssrSsgCollapseThree' aria-expanded='false' aria-controls='ssrSsgCollapseThree'>
                                            Клієнтський рендеринг
                                        </button>
                                    </h2>
                                    <div id='ssrSsgCollapseThree' className='accordion-collapse collapse' aria-labelledby='ssrSsgHeadingThree' data-bs-parent='#ssrSsgAccordion'>
                                        <div className='accordion-body'>
                                            <p>Клієнтський рендеринг означає, що HTML генерується на клієнті (в браузері) за допомогою JavaScript. Цей підхід дозволяє забезпечити швидкий інтерфейс користувача, але може мати проблеми з SEO та початковою продуктивністю.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p>Next.js дозволяє легко реалізувати як SSR, так і SSG, що робить його потужним інструментом для розробки продуктивних React додатків.</p>
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

export default CourseReact21;

