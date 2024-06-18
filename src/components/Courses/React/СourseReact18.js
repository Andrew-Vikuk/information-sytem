import React from "react";
import {
  FaArrowRight,
} from "react-icons/fa";
import { HashLink as Link } from 'react-router-hash-link';
import courseListReact from "../../../scripts/CoursesListReact";
import { NavLink } from "react-router-dom";


const CourseReact18 = () => {
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
                            <h3>Тестування у React</h3>
                            <p>Тестування є важливою частиною розробки додатків. У цьому розділі ми розглянемо використання Jest та React Testing Library для тестування компонентів та хуків у React.</p>
 <h4>Теоретичні аспекти тестування у React</h4>
  <p>При тестуванні React-компонентів важливо враховувати декілька принципів:</p>
  <ul>
    <li><b>Тестування поведінки:</b> Замість тестування внутрішньої реалізації компонентів, зосередьтесь на їх поведінці. Це робить ваші тести менш крихкими і більш стійкими до змін.</li>
    <li><b>Чисті тести:</b> Уникайте тестування сторонніх ефектів і забезпечте, щоб кожен тест був незалежним від інших.</li>
    <li><b>Актуальність:</b> Регулярно оновлюйте свої тести відповідно до змін у кодовій базі, щоб зберегти їх актуальність.</li>
  </ul>
                            <h4>Jest та React Testing Library</h4>
                            <p>Jest - це фреймворк для тестування JavaScript-коду, який дозволяє писати як синхронні, так і асинхронні тести. React Testing Library - це набір утиліт для тестування React-компонентів, який зосереджується на інтеграційному підході до тестування.</p>
                            <pre>
                                <code>
{`// Встановлення Jest та React Testing Library
npm install --save-dev jest @testing-library/react @testing-library/jest-dom`}
                                </code>
                            </pre>
                            <p>Ці бібліотеки допоможуть вам писати надійні та ефективні тести для ваших React-компонентів.</p>

                            <h4>Написання модульних тестів</h4>
                            <p>Модульні тести перевіряють окремі частини вашого коду. Ось приклад тесту для простого компонента:</p>
                            <pre>
                                <code>
{`import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MyComponent from './MyComponent';

test('renders learn react link', () => {
  render(<MyComponent />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});`}
                                </code>
                            </pre>
                            <p>У цьому прикладі <code>render</code> використовує React Testing Library для рендерингу компонента, а <code>screen</code> допомагає знайти елемент на сторінці та перевірити його наявність.</p>
 
  <h4>Практичні приклади</h4>
  <h5>Тестування асинхронних компонентів</h5>
  <p>Багато компонентів у React працюють асинхронно, наприклад, завантаження даних з API. Ось приклад тесту для асинхронного компонента:</p>
  <pre>
    <code>
{`import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AsyncComponent from './AsyncComponent';
test('loads and displays data', async () => {
render(<AsyncComponent />);
expect(screen.getByText(/loading/i)).toBeInTheDocument();
const dataElement = await waitFor(() => screen.getByText(/data loaded/i));
expect(dataElement).toBeInTheDocument();
});`}
</code>
</pre>

  <p>У цьому прикладі використовується <code>waitFor</code> для очікування завершення асинхронного процесу.</p>
                <h5>Тестування хуків</h5>
  <p>Для тестування користувацьких хуків рекомендується використовувати допоміжні компоненти. Ось приклад тесту для користувацького хука:</p>
  <pre>
    <code>
{`import { renderHook, act } from '@testing-library/react-hooks';
import useCustomHook from './useCustomHook';
test('should increment counter', () => {
const { result } = renderHook(() => useCustomHook());
act(() => {
result.current.increment();
});
expect(result.current.count).toBe(1);
});`}
</code>
</pre>

  <p>Тут <code>renderHook</code> використовується для рендерингу хука, а <code>act</code> допомагає імітувати зміни стану.</p>
  <h4>Ресурси для подальшого вивчення</h4>
  <ul>
    <li><a href="https://jestjs.io/" target="_blank">Офіційний сайт Jest</a></li>
    <li><a href="https://testing-library.com/docs/react-testing-library/intro/" target="_blank">Документація React Testing Library</a></li>
  </ul>

                            <h4>Довідка</h4>
                            <div className='accordion accordion-inner accordion-icon-left mt-3 mb-4' id='testingAccordion'>
                                <div className='accordion-item'>
                                    <h2 className='accordion-header' id='testingHeadingOne'>
                                        <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#testingCollapseOne' aria-expanded='false' aria-controls='testingCollapseOne'>
                                            Jest та React Testing Library
                                        </button>
                                    </h2>
                                    <div id='testingCollapseOne' className='accordion-collapse collapse' aria-labelledby='testingHeadingOne' data-bs-parent='#testingAccordion'>
                                        <div className='accordion-body'>
                                            <p>Jest - це фреймворк для тестування JavaScript-коду, який дозволяє писати як синхронні, так і асинхронні тести. React Testing Library - це набір утиліт для тестування React-компонентів, який зосереджується на інтеграційному підході до тестування.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='accordion-item'>
                                    <h2 className='accordion-header' id='testingHeadingTwo'>
                                        <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#testingCollapseTwo' aria-expanded='false' aria-controls='testingCollapseTwo'>
                                            Написання модульних тестів
                                        </button>
                                    </h2>
                                    <div id='testingCollapseTwo' className='accordion-collapse collapse' aria-labelledby='testingHeadingTwo' data-bs-parent='#testingAccordion'>
                                        <div className='accordion-body'>
                                            <p>Модульні тести перевіряють окремі частини вашого коду. Ось приклад тесту для простого компонента з використанням React Testing Library та Jest.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='accordion-item'>
                                    <h2 className='accordion-header' id='testingHeadingThree'>
                                        <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#testingCollapseThree' aria-expanded='false' aria-controls='testingCollapseThree'>
                                            Тестування компонентів та хуків
                                        </button>
                                    </h2>
                                    <div id='testingCollapseThree' className='accordion-collapse collapse' aria-labelledby='testingHeadingThree' data-bs-parent='#testingAccordion'>
                                        <div className='accordion-body'>
                                            <p>Тестування компонентів включає перевірку рендерингу, взаємодії з користувачем та стану компонентів. Це можна робити за допомогою таких інструментів, як React Testing Library та Jest.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p>Тестування є важливим аспектом розробки додатків. Використовуючи Jest та React Testing Library, ви можете забезпечити високу якість вашого коду та уникнути багатьох потенційних проблем у майбутньому.</p>
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

export default CourseReact18;

