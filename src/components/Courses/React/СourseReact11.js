import React from "react";
import {
  FaArrowRight,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import courseListReact from "../../../scripts/CoursesListReact";

const CourseReact11 = () => {
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
                            <h3>Додаткові хуки в React</h3>
                            <p>
                                Окрім основних хуків <code>useState</code> та <code>useEffect</code>, React також пропонує декілька додаткових хуків, які допомагають вирішувати більш специфічні задачі. У цьому розділі ми розглянемо <code>useContext</code>, <code>useReducer</code>, <code>useRef</code>, <code>useMemo</code> та <code>useCallback</code>.
                            </p>

                            <h4>useContext</h4>
                            <p>
                                Хук <code>useContext</code> дозволяє отримувати значення контексту в функціональних компонентах без необхідності використовувати компонент <code>Context.Consumer</code>.
                            </p>
                            <pre>
                                <code>
{`import React, { useContext } from 'react';

const MyContext = React.createContext();

function MyComponent() {
  const value = useContext(MyContext);

  return <div>{value}</div>;
}`}
                                </code>
                            </pre>
                            <p>
                                У цьому прикладі <code>useContext</code> отримує значення з <code>MyContext</code> і відображає його в компоненті.
                            </p>

                            <h4>useReducer</h4>
                            <p>
                                Хук <code>useReducer</code> використовується для управління станом компоненту, який має складну логіку стану, або коли наступний стан залежить від попереднього. Він приймає редуктор і початковий стан.
                            </p>
                            <pre>
                                <code>
{`import React, { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + 1 };
    case 'decrement':
      return { count: state.count - 1 };
    default:
      throw new Error();
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>+</button>
      <button onClick={() => dispatch({ type: 'decrement' })}>-</button>
    </div>
  );
}`}
                                </code>
                            </pre>
                            <p>
                                У цьому прикладі <code>useReducer</code> використовується для управління станом лічильника.
                            </p>

                            <h4>useRef</h4>
                            <p>
                                Хук <code>useRef</code> створює об'єкт з властивістю <code>.current</code>, який зберігає змінне значення, яке зберігається між рендерами. Він також може бути використаний для доступу до DOM-елементів.
                            </p>
                            <pre>
                                <code>
{`import React, { useRef } from 'react';

function TextInput() {
  const inputEl = useRef(null);

  const focusInput = () => {
    inputEl.current.focus();
  };

  return (
    <div>
      <input ref={inputEl} type="text" />
      <button onClick={focusInput}>Focus the input</button>
    </div>
  );
}`}
                                </code>
                            </pre>
                            <p>
                                У цьому прикладі <code>useRef</code> використовується для доступу до DOM-елемента інпуту і фокусування на ньому.
                            </p>

                            <h4>useMemo та useCallback</h4>
                            <p>
                                Хуки <code>useMemo</code> та <code>useCallback</code> використовуються для оптимізації продуктивності, зменшуючи кількість зайвих обчислень та створень функцій.
                            </p>
                            <h5>useMemo</h5>
                            <p>
                                Хук <code>useMemo</code> запам'ятовує значення, обчислене функцією, до тих пір, поки не зміняться залежності.
                            </p>
                            <pre>
                                <code>
{`import React, { useMemo } from 'react';

function ExpensiveComponent({ input }) {
  const expensiveValue = useMemo(() => {
    return computeExpensiveValue(input);
  }, [input]);

  return <div>{expensiveValue}</div>;
}

function computeExpensiveValue(input) {
  // дорогоцінні обчислення
  return input * 2;
}`}
                                </code>
                            </pre>
                            <p>
                                У цьому прикладі <code>useMemo</code> запам'ятовує результат функції <code>computeExpensiveValue</code> до зміни значення <code>input</code>.
                            </p>

                            <h5>useCallback</h5>
                            <p>
                                Хук <code>useCallback</code> повертає запам'ятовану версію функції, яка змінюється лише при зміні залежностей.
                            </p>
                            <pre>
                                <code>
{`import React, { useState, useCallback } from 'react';

function ParentComponent() {
  const [count, setCount] = useState(0);

  const increment = useCallback(() => {
    setCount(c => c + 1);
  }, []);

  return <ChildComponent increment={increment} />;
}

function ChildComponent({ increment }) {
  return <button onClick={increment}>Increment</button>;
}`}
                                </code>
                            </pre>
                            <p>
                                У цьому прикладі <code>useCallback</code> запам'ятовує функцію <code>increment</code>, що зменшує кількість зайвих рендерів дочірнього компонента.
                            </p>

                            <h4>Довідка</h4>
                            <div className='accordion accordion-inner accordion-icon-left mt-3 mb-4' id='additionalHooksAccordion'>
                                <div className='accordion-item'>
                                    <h2 className='accordion-header' id='additionalHooksHeadingOne'>
                                        <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#additionalHooksCollapseOne' aria-expanded='false' aria-controls='additionalHooksCollapseOne'>
                                            useContext
                                        </button>
                                    </h2>
                                    <div id='additionalHooksCollapseOne' className='accordion-collapse collapse' aria-labelledby='additionalHooksHeadingOne' data-bs-parent='#additionalHooksAccordion'>
                                        <div className='accordion-body'>
                                            <p>Хук <code>useContext</code> дозволяє отримувати значення контексту без використання компонента <code>Context.Consumer</code>.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='accordion-item'>
                                    <h2 className='accordion-header' id='additionalHooksHeadingTwo'>
                                        <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#additionalHooksCollapseTwo' aria-expanded='false' aria-controls='additionalHooksCollapseTwo'>
                                            useReducer
                                        </button>
                                    </h2>
                                    <div id='additionalHooksCollapseTwo' className='accordion-collapse collapse' aria-labelledby='additionalHooksHeadingTwo' data-bs-parent='#additionalHooksAccordion'>
                                        <div className='accordion-body'>
                                            <p>Хук <code>useReducer</code> використовується для управління станом зі складною логікою або коли стан залежить від попереднього стану.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='accordion-item'>
                                    <h2 className='accordion-header' id='additionalHooksHeadingThree'>
                                        <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#additionalHooksCollapseThree' aria-expanded='false' aria-controls='additionalHooksCollapseThree'>
                                            useRef
                                        </button>
                                    </h2>
                                    <div id='additionalHooksCollapseThree' className='accordion-collapse collapse' aria-labelledby='additionalHooksHeadingThree' data-bs-parent='#additionalHooksAccordion'>
                                        <div className='accordion-body'>
                                            <p>Хук <code>useRef</code> дозволяє зберігати змінні значення між рендерами або доступ до DOM-елементів.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='accordion-item'>
                                    <h2 className='accordion-header' id='additionalHooksHeadingFour'>
                                        <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#additionalHooksCollapseFour' aria-expanded='false' aria-controls='additionalHooksCollapseFour'>
                                            useMemo та useCallback
                                        </button>
                                    </h2>
                                    <div id='additionalHooksCollapseFour' className='accordion-collapse collapse' aria-labelledby='additionalHooksHeadingFour' data-bs-parent='#additionalHooksAccordion'>
                                        <div className='accordion-body'>
                                            <p>Хуки <code>useMemo</code> та <code>useCallback</code> використовуються для оптимізації продуктивності, зменшуючи кількість зайвих обчислень та створень функцій.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p>Тепер ви знаєте, як використовувати додаткові хуки для розширення можливостей ваших React-компонентів.</p>
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

export default CourseReact11;

