import React from "react";
import {
  FaArrowRight,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import courseListReact from "../../../scripts/CoursesListReact";

const CourseReact19 = () => {
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
                            <h3>Завершальні кроки: Збірка та деплой</h3>
                            <p>Завершення розробки вашого React-додатку включає підготовку до продакшену та деплой на обрану платформу. У цьому розділі ми розглянемо, як підготувати додаток до продакшену та розгорнути його на платформах Netlify, Vercel та Heroku.</p>

                            <h4>Підготовка застосунку до продакшену</h4>
                            <p>Для підготовки вашого React-додатку до продакшену необхідно створити оптимізовану збірку. Це можна зробити за допомогою команди <code>build</code>:</p>
                            <pre>
                                <code>
{`npm run build`}
                                </code>
                            </pre>
                            <p>Ця команда створить папку <code>build</code> у кореневій директорії вашого проекту, яка міститиме мінімізовані файли вашого додатку.</p>
                            <p>Для перевірки локальної збірки можна використовувати пакет <code>serve</code>:</p>
                            <pre>
                                <code>
{`npx serve -s build`}
                                </code>
                            </pre>
                            <p>Ця команда запустить локальний сервер, який буде обслуговувати вашу збірку.</p>

                            <h4>Деплой на Netlify</h4>
                            <p>Netlify - це популярна платформа для деплою статичних сайтів. Ось як можна розгорнути React-додаток на Netlify:</p>
                            <ol>
                                <li>Зареєструйтеся на <a href="https://www.netlify.com/">Netlify</a> і увійдіть в обліковий запис.</li>
                                <li>Створіть новий сайт, підключивши репозиторій з вашим проектом.</li>
                                <li>Вкажіть команду збірки (<code>npm run build</code>) та директорію збірки (<code>build</code>).</li>
                                <li>Натисніть "Deploy" для розгортання додатку.</li>
                            </ol>

                            <h4>Деплой на Vercel</h4>
                            <p>Vercel - це ще одна популярна платформа для деплою. Для деплою React-додатку на Vercel виконайте наступні кроки:</p>
                            <ol>
                                <li>Зареєструйтеся на <a href="https://vercel.com/">Vercel</a> і увійдіть в обліковий запис.</li>
                                <li>Імпортуйте репозиторій з вашим проектом.</li>
                                <li>Vercel автоматично визначить налаштування збірки та директорію збірки.</li>
                                <li>Натисніть "Deploy" для розгортання додатку.</li>
                            </ol>

                            <h4>Деплой на Heroku</h4>
                            <p>Heroku - це платформа для розгортання веб-додатків. Ось як можна розгорнути React-додаток на Heroku:</p>
                            <ol>
                                <li>Зареєструйтеся на <a href="https://www.heroku.com/">Heroku</a> і встановіть <a href="https://devcenter.heroku.com/articles/heroku-cli">Heroku CLI</a>.</li>
                                <li>Увійдіть в обліковий запис за допомогою CLI:
                                    <pre>
                                        <code>
{`heroku login`}
                                        </code>
                                    </pre>
                                </li>
                                <li>Створіть новий додаток на Heroku:
                                    <pre>
                                        <code>
{`heroku create`}
                                        </code>
                                    </pre>
                                </li>
                                <li>Додайте <code>buildpack</code> для Create React App:
                                    <pre>
                                        <code>
{`heroku buildpacks:set mars/create-react-app`}
                                        </code>
                                    </pre>
                                </li>
                                <li>Деплойте додаток:
                                    <pre>
                                        <code>
{`git push heroku main`}
                                        </code>
                                    </pre>
                                </li>
                            </ol>
                            <p>Після успішного деплою ваш додаток буде доступний за URL, наданою Heroku.</p>

                            <h4>Довідка</h4>
                            <div className='accordion accordion-inner accordion-icon-left mt-3 mb-4' id='deploymentAccordion'>
                                <div className='accordion-item'>
                                    <h2 className='accordion-header' id='deploymentHeadingOne'>
                                        <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#deploymentCollapseOne' aria-expanded='false' aria-controls='deploymentCollapseOne'>
                                            Підготовка застосунку до продакшену
                                        </button>
                                    </h2>
                                    <div id='deploymentCollapseOne' className='accordion-collapse collapse' aria-labelledby='deploymentHeadingOne' data-bs-parent='#deploymentAccordion'>
                                        <div className='accordion-body'>
                                            <p>Для підготовки вашого React-додатку до продакшену необхідно створити оптимізовану збірку. Це можна зробити за допомогою команди <code>build</code>.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='accordion-item'>
                                    <h2 className='accordion-header' id='deploymentHeadingTwo'>
                                        <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#deploymentCollapseTwo' aria-expanded='false' aria-controls='deploymentCollapseTwo'>
                                            Деплой на Netlify
                                        </button>
                                    </h2>
                                    <div id='deploymentCollapseTwo' className='accordion-collapse collapse' aria-labelledby='deploymentHeadingTwo' data-bs-parent='#deploymentAccordion'>
                                        <div className='accordion-body'>
                                            <p>Netlify - це популярна платформа для деплою статичних сайтів. Для деплою React-додатку на Netlify виконайте декілька простих кроків.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='accordion-item'>
                                    <h2 className='accordion-header' id='deploymentHeadingThree'>
                                        <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#deploymentCollapseThree' aria-expanded='false' aria-controls='deploymentCollapseThree'>
                                            Деплой на Vercel
                                        </button>
                                    </h2>
                                    <div id='deploymentCollapseThree' className='accordion-collapse collapse' aria-labelledby='deploymentHeadingThree' data-bs-parent='#deploymentAccordion'>
                                        <div className='accordion-body'>
                                            <p>Vercel - це ще одна популярна платформа для деплою. Для деплою React-додатку на Vercel виконайте наступні кроки.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='accordion-item'>
                                    <h2 className='accordion-header' id='deploymentHeadingFour'>
                                        <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#deploymentCollapseFour' aria-expanded='false' aria-controls='deploymentCollapseFour'>
                                            Деплой на Heroku
                                        </button>
                                    </h2>
                                    <div id='deploymentCollapseFour' className='accordion-collapse collapse' aria-labelledby='deploymentHeadingFour' data-bs-parent='#deploymentAccordion'>
                                        <div className='accordion-body'>
                                            <p>Heroku - це платформа для розгортання веб-додатків. Ось як можна розгорнути React-додаток на Heroku.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p>Завершальні кроки розробки вашого React-додатку включають підготовку до продакшену та розгортання на обрану платформу. Використовуючи Netlify, Vercel або Heroku, ви можете легко розгорнути ваш додаток та зробити його доступним для користувачів.</p>
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

export default CourseReact19;

