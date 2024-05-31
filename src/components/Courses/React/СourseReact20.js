import React from "react";
import {
  FaArrowRight,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import courseListReact from "../../../scripts/CoursesListReact";

const CourseReact20 = () => {
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
                            <h3>Найкращі практики: Чистий код, лінтинг та типізація</h3>
                            <p>Дотримання найкращих практик при розробці на React допоможе вам створювати більш надійні та підтримувані додатки. У цьому розділі ми розглянемо такі аспекти, як чистий код, лінтинг та форматування, а також типізація з TypeScript.</p>

                            <h4>Чистий код</h4>
                            <p>Чистий код - це код, який легко читати, розуміти та підтримувати. Дотримання принципів чистого коду допомагає зменшити кількість помилок та покращити якість проекту. Ось деякі рекомендації для написання чистого коду:</p>
                            <ul>
                                <li>Використовуйте зрозумілі імена змінних, функцій та компонентів.</li>
                                <li>Дотримуйтеся принципу DRY (Don't Repeat Yourself) - уникайте дублювання коду.</li>
                                <li>Розділяйте логіку на маленькі, самостійні функції та компоненти.</li>
                                <li>Пишіть коментарі там, де це необхідно, але не більше.</li>
                                <li>Дотримуйтесь єдиного стилю кодування в усьому проекті.</li>
                            </ul>

                            <h4>Лінтинг та форматування (ESLint, Prettier)</h4>
                            <p>Лінтинг та автоматичне форматування коду допомагають забезпечити єдиний стиль кодування та уникнути поширених помилок. Використання таких інструментів, як ESLint та Prettier, значно спрощує цей процес.</p>

                            <h5>Налаштування ESLint</h5>
                            <p>ESLint - це інструмент для аналізу коду, який допомагає знайти та виправити помилки та забезпечити дотримання стилістичних правил:</p>
                            <ol>
                                <li>Встановіть ESLint як залежність:
                                    <pre>
                                        <code>
{`npm install eslint --save-dev`}
                                        </code>
                                    </pre>
                                </li>
                                <li>Ініціалізуйте конфігураційний файл ESLint:
                                    <pre>
                                        <code>
{`npx eslint --init`}
                                        </code>
                                    </pre>
                                </li>
                                <li>Налаштуйте ESLint відповідно до ваших потреб, додавши правила в конфігураційний файл <code>.eslintrc</code>.</li>
                            </ol>

                            <h5>Налаштування Prettier</h5>
                            <p>Prettier - це інструмент для автоматичного форматування коду, який забезпечує єдиний стиль у всьому проекті:</p>
                            <ol>
                                <li>Встановіть Prettier як залежність:
                                    <pre>
                                        <code>
{`npm install prettier --save-dev`}
                                        </code>
                                    </pre>
                                </li>
                                <li>Створіть конфігураційний файл <code>.prettierrc</code> та налаштуйте його відповідно до ваших вимог.</li>
                                <li>Інтегруйте Prettier з ESLint, встановивши додаткові плагіни:
                                    <pre>
                                        <code>
{`npm install eslint-config-prettier eslint-plugin-prettier --save-dev`}
                                        </code>
                                    </pre>
                                </li>
                            </ol>

                            <h4>Типізація з TypeScript</h4>
                            <p>TypeScript - це надбудова над JavaScript, яка додає статичну типізацію. Використання TypeScript допомагає виявляти помилки на ранніх етапах розробки та покращує якість коду:</p>
                            <ol>
                                <li>Встановіть TypeScript як залежність:
                                    <pre>
                                        <code>
{`npm install typescript --save-dev`}
                                        </code>
                                    </pre>
                                </li>
                                <li>Ініціалізуйте конфігураційний файл TypeScript:
                                    <pre>
                                        <code>
{`npx tsc --init`}
                                        </code>
                                    </pre>
                                </li>
                                <li>Змінюйте розширення файлів з <code>.js</code> на <code>.ts</code> або <code>.tsx</code> та починайте використовувати типи у вашому коді.</li>
                            </ol>
                            <p>Ось приклад функціонального компонента з TypeScript:</p>
                            <pre>
                                <code>
{`import React from 'react';

interface Props {
  message: string;
}

const Greeting: React.FC<Props> = ({ message }) => {
  return <h1>{message}</h1>;
};

export default Greeting;`}
                                </code>
                            </pre>
                            <p>Цей приклад показує, як визначити інтерфейс для пропсів та використовувати його у функціональному компоненті.</p>

                            <h4>Довідка</h4>
                            <div className='accordion accordion-inner accordion-icon-left mt-3 mb-4' id='bestPracticesAccordion'>
                                <div className='accordion-item'>
                                    <h2 className='accordion-header' id='bestPracticesHeadingOne'>
                                        <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#bestPracticesCollapseOne' aria-expanded='false' aria-controls='bestPracticesCollapseOne'>
                                            Чистий код
                                        </button>
                                    </h2>
                                    <div id='bestPracticesCollapseOne' className='accordion-collapse collapse' aria-labelledby='bestPracticesHeadingOne' data-bs-parent='#bestPracticesAccordion'>
                                        <div className='accordion-body'>
                                            <p>Чистий код - це код, який легко читати, розуміти та підтримувати. Дотримання принципів чистого коду допомагає зменшити кількість помилок та покращити якість проекту.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='accordion-item'>
                                    <h2 className='accordion-header' id='bestPracticesHeadingTwo'>
                                        <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#bestPracticesCollapseTwo' aria-expanded='false' aria-controls='bestPracticesCollapseTwo'>
                                            Лінтинг та форматування (ESLint, Prettier)
                                        </button>
                                    </h2>
                                    <div id='bestPracticesCollapseTwo' className='accordion-collapse collapse' aria-labelledby='bestPracticesHeadingTwo' data-bs-parent='#bestPracticesAccordion'>
                                        <div className='accordion-body'>
                                            <p>Лінтинг та автоматичне форматування коду допомагають забезпечити єдиний стиль кодування та уникнути поширених помилок. Використання таких інструментів, як ESLint та Prettier, значно спрощує цей процес.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='accordion-item'>
                                    <h2 className='accordion-header' id='bestPracticesHeadingThree'>
                                        <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#bestPracticesCollapseThree' aria-expanded='false' aria-controls='bestPracticesCollapseThree'>
                                            Типізація з TypeScript
                                        </button>
                                    </h2>
                                    <div id='bestPracticesCollapseThree' className='accordion-collapse collapse' aria-labelledby='bestPracticesHeadingThree' data-bs-parent='#bestPracticesAccordion'>
                                        <div className='accordion-body'>
                                            <p>TypeScript - це надбудова над JavaScript, яка додає статичну типізацію. Використання TypeScript допомагає виявляти помилки на ранніх етапах розробки та покращує якість коду.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p>Дотримання найкращих практик при розробці на React допоможе вам створювати більш надійні та підтримувані додатки. У цьому розділі ми розглянули такі аспекти, як чистий код, лінтинг та форматування, а також типізацію з TypeScript.</p>
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

export default CourseReact20;

