import React from "react";
import {
  FaArrowRight,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import courseListReact from "../../../scripts/CoursesListReact";

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
                            <h3>Тестування у React</h3>
                            <p>Тестування є важливою частиною розробки додатків. У цьому розділі ми розглянемо використання Jest та React Testing Library для тестування компонентів та хуків у React.</p>

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

                            <h4>Тестування компонентів та хуків</h4>
                            <p>Тестування компонентів включає перевірку рендерингу, взаємодії з користувачем та стану компонентів. Ось приклад тесту компонента з використанням хуків:</p>
                            <pre>
                                <code>
{`import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Counter from './Counter';

test('increments counter', () => {
  const { getByText } = render(<Counter />);
  const button = getByText(/increment/i);
  fireEvent.click(button);
  const counter = getByText(/count: 1/i);
  expect(counter).toBeInTheDocument();
});`}
                                </code>
                            </pre>
                            <p>У цьому прикладі <code>fireEvent</code> використовується для імітації кліку на кнопку, а потім перевіряється, чи оновився лічильник.</p>

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

