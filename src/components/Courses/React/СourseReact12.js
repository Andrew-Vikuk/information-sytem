import React from "react";
import {
  FaArrowRight,
} from "react-icons/fa";
import { HashLink as Link } from 'react-router-hash-link';
import courseListReact from "../../../scripts/CoursesListReact";
import { NavLink } from "react-router-dom";


const CourseReact12 = () => {
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
                            <h3>Керування станом: Контекст (Context API)</h3>
                            <p>
                                Context API в React дозволяє передавати дані через дерево компонентів без необхідності пропускати пропси на кожному рівні. Це особливо корисно для глобальних даних, таких як тема, авторизація користувача або поточна мова інтерфейсу.
                            </p>
                            <h6>Переваги та недоліки Context API</h6>
                            <ul>
                              <p>Переваги:</p>
                              <li>Зменшення "пробросу" пропсів.</li>
                              <li>Простота налаштування та використання.</li>
                              
                              <br></br><p>Недоліки:</p>
                              <li>Можливе зниження продуктивності при частих змінах стану.</li>
                              <li>Ускладнення структури додатка при великій кількості контекстів.</li>

                            </ul>

                            <h4>Створення та використання контексту</h4>
                            <p>
                                Для створення контексту використовують метод <code>React.createContext</code>. Це створює об'єкт контексту, який можна використовувати для надання даних через компонент <code>Provider</code>.
                            </p>
                            <pre>
                                <code>
{`import React, { createContext, useState } from 'react';

const MyContext = createContext();

function MyProvider({ children }) {
  const [value, setValue] = useState('Default Value');

  return (
    <MyContext.Provider value={{ value, setValue }}>
      {children}
    </MyContext.Provider>
  );
}

function App() {
  return (
    <MyProvider>
      <MyComponent />
    </MyProvider>
  );
}

function MyComponent() {
  const { value, setValue } = useContext(MyContext);

  return (
    <div>
      <p>{value}</p>
      <button onClick={() => setValue('New Value')}>Change Value</button>
    </div>
  );
}`}
                                </code>
                            </pre>
                            <p>
                                У цьому прикладі ми створюємо контекст <code>MyContext</code> і використовуємо <code>MyProvider</code> для надання значення <code>value</code> і функції <code>setValue</code> усім дочірнім компонентам.
                            </p>

<p>Приклад використання декількох контекстів</p>
<pre>
  <code>
    {`
import React, { createContext, useContext, useState } from 'react';

// Створюємо два контексти
const ThemeContext = createContext();
const UserContext = createContext();

function App() {
  // Створюємо стан для теми з початковим значенням 'light'
  const [theme, setTheme] = useState('light');
  // Створюємо стан для користувача з початковим значенням { name: 'John Doe' }
  const [user, setUser] = useState({ name: 'John Doe' });

  return (
    // Забезпечуємо компоненти темою і функцією для зміни теми
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {/* Забезпечуємо компоненти користувачем і функцією для зміни користувача */}
      <UserContext.Provider value={{ user, setUser }}>
        <Toolbar />
      </UserContext.Provider>
    </ThemeContext.Provider>
  );
}

function Toolbar() {
  return (
    <div>
      {/* Компонент для перемикання теми */}
      <ThemeToggler />
      {/* Компонент для відображення інформації про користувача */}
      <UserInfo />
    </div>
  );
}

function ThemeToggler() {
  // Використовуємо useContext для доступу до теми і функції для зміни теми
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    // Кнопка для перемикання теми між 'light' і 'dark'
    <button onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
      Toggle Theme
    </button>
  );
}

function UserInfo() {
  // Використовуємо useContext для доступу до інформації про користувача
  const { user } = useContext(UserContext);

  return (
    // Відображаємо ім'я користувача
    <div>{user.name}</div>
  );
}

    `}
  </code>
</pre>
<p>Використання useReducer з Context API</p>
<pre>
  <code>
    {`
import React, { createContext, useContext, useReducer } from 'react';

// Початковий стан лічильника
const initialState = { count: 0 };

// Ред'юсер функція для оновлення стану
function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      // Збільшуємо значення лічильника на 1
      return { count: state.count + 1 };
    case 'decrement':
      // Зменшуємо значення лічильника на 1
      return { count: state.count - 1 };
    default:
      // У випадку невідомої дії кидаємо помилку
      throw new Error();
  }
}

// Створюємо контекст для лічильника
const CountContext = createContext();

function App() {
  // Використовуємо useReducer для управління станом лічильника
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    // Надання значення стану та функції dispatch через контекст
    <CountContext.Provider value={{ state, dispatch }}>
      <Counter />
    </CountContext.Provider>
  );
}

function Counter() {
  // Використовуємо useContext для доступу до стану та dispatch з CountContext
  const { state, dispatch } = useContext(CountContext);

  return (
    <div>
      {/* Відображаємо поточне значення лічильника */}
      <p>Count: {state.count}</p>
      {/* Кнопка для збільшення лічильника */}
      <button onClick={() => dispatch({ type: 'increment' })}>Increment</button>
      {/* Кнопка для зменшення лічильника */}
      <button onClick={() => dispatch({ type: 'decrement' })}>Decrement</button>
    </div>
  );
}

    `}
  </code>
</pre>
                            <h4>Споживання контексту</h4>
                            <p>
                                Споживання контексту можна виконати за допомогою хука <code>useContext</code> або компонента <code>Context.Consumer</code>.
                            </p>
                            <h5>Використання useContext</h5>
                            <p>
                                Хук <code>useContext</code> дозволяє отримати доступ до значення контексту безпосередньо в функціональних компонентах.
                            </p>
                            <pre>
                                <code>
{`import React, { useContext } from 'react';
import { MyContext } from './MyProvider';

function MyComponent() {
  const { value, setValue } = useContext(MyContext);

  return (
    <div>
      <p>{value}</p>
      <button onClick={() => setValue('New Value')}>Change Value</button>
    </div>
  );
}`}
                                </code>
                            </pre>
                            <p>
                                У цьому прикладі <code>useContext</code> використовується для отримання значення з <code>MyContext</code>.
                            </p>

                            <h5>Використання Context.Consumer</h5>
                            <p>
                                Компонент <code>Context.Consumer</code> використовується для доступу до контексту в класових компонентах або в разі необхідності рендер-пропсів.
                            </p>
                            <pre>
                                <code>
{`import React from 'react';
import { MyContext } from './MyProvider';

class MyClassComponent extends React.Component {
  render() {
    return (
      <MyContext.Consumer>
        {({ value, setValue }) => (
          <div>
            <p>{value}</p>
            <button onClick={() => setValue('New Value')}>Change Value</button>
          </div>
        )}
      </MyContext.Consumer>
    );
  }
}`}
                                </code>
                            </pre>
                            <p>
                                У цьому прикладі <code>Context.Consumer</code> використовується для доступу до значення з <code>MyContext</code> у класовому компоненті.
                            </p>

                            <h4>Довідка</h4>
                            <div className='accordion accordion-inner accordion-icon-left mt-3 mb-4' id='contextAccordion'>
                                <div className='accordion-item'>
                                    <h2 className='accordion-header' id='contextHeadingOne'>
                                        <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#contextCollapseOne' aria-expanded='false' aria-controls='contextCollapseOne'>
                                            Створення контексту
                                        </button>
                                    </h2>
                                    <div id='contextCollapseOne' className='accordion-collapse collapse' aria-labelledby='contextHeadingOne' data-bs-parent='#contextAccordion'>
                                        <div className='accordion-body'>
                                            <p>Для створення контексту використовується метод <code>React.createContext</code>, який створює об'єкт контексту з компонентами <code>Provider</code> та <code>Consumer</code>.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='accordion-item'>
                                    <h2 className='accordion-header' id='contextHeadingTwo'>
                                        <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#contextCollapseTwo' aria-expanded='false' aria-controls='#contextCollapseTwo'>
                                            Використання Provider
                                        </button>
                                    </h2>
                                    <div id='contextCollapseTwo' className='accordion-collapse collapse' aria-labelledby='contextHeadingTwo' data-bs-parent='#contextAccordion'>
                                        <div className='accordion-body'>
                                            <p>Компонент <code>Provider</code> надає значення контексту всім дочірнім компонентам, які знаходяться всередині нього.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='accordion-item'>
                                    <h2 className='accordion-header' id='contextHeadingThree'>
                                        <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#contextCollapseThree' aria-expanded='false' aria-controls='contextCollapseThree'>
                                            Споживання контексту
                                        </button>
                                    </h2>
                                    <div id='contextCollapseThree' className='accordion-collapse collapse' aria-labelledby='contextHeadingThree' data-bs-parent='#contextAccordion'>
                                        <div className='accordion-body'>
                                            <p>Контекст можна споживати за допомогою хука <code>useContext</code> або компонента <code>Context.Consumer</code>.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p>Контекст (Context API) спрощує управління станом в React, зменшуючи необхідність передавати пропси через багато рівнів компонентів.</p>
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

export default CourseReact12;

