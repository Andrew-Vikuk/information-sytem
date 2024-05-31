import React from "react";
import {
  FaArrowRight,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import courseListReact from "../../../scripts/CoursesListReact";

const CourseReact13 = () => {
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
                            <h3>Менеджери стану</h3>
                            <p>Менеджери стану допомагають керувати станом у великих додатках, роблячи його передбачуваним і полегшуючи роботу з ним. У цьому розділі ми розглянемо чотири популярні менеджери стану для React: Redux, MobX, Zustand, і React Query.</p>
                            
                            <h4>Redux</h4>
                            <p>Redux - це бібліотека для управління станом, яка забезпечує передбачувану поведінку стану та легку інтеграцію з React.</p>
                            <pre>
                                <code>
{`import { createStore } from 'redux';
import { Provider, useSelector, useDispatch } from 'react-redux';

const initialState = { count: 0 };

function reducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

const store = createStore(reducer);

function Counter() {
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();

  return (
    <div>
      <p>{count}</p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })}>+</button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })}>-</button>
    </div>
  );
}

function App() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}`}
                                </code>
                            </pre>
                            <p>У цьому прикладі ми створюємо магазин Redux, визначаємо редуктор для обробки дій, і використовуємо <code>useSelector</code> і <code>useDispatch</code> для доступу та зміни стану в компоненті.</p>
                            
                            <h4>MobX</h4>
                            <p>MobX - це бібліотека для управління станом, яка використовує реактивне програмування для автоматичного оновлення компонентів, коли змінюється стан.</p>
                            <pre>
                                <code>
{`import { makeAutoObservable } from 'mobx';
import { observer } from 'mobx-react-lite';

class CounterStore {
  count = 0;

  constructor() {
    makeAutoObservable(this);
  }

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }
}

const counterStore = new CounterStore();

const Counter = observer(() => (
  <div>
    <p>{counterStore.count}</p>
    <button onClick={() => counterStore.increment()}>+</button>
    <button onClick={() => counterStore.decrement()}>-</button>
  </div>
));

function App() {
  return <Counter />;
}`}
                                </code>
                            </pre>
                            <p>У цьому прикладі ми створюємо клас MobX для зберігання стану, автоматично робимо його реактивним за допомогою <code>makeAutoObservable</code>, і використовуємо <code>observer</code> для спостереження за станом у компоненті.</p>
                            
                            <h4>Zustand</h4>
                            <p>Zustand - це невелика, швидка і гнучка бібліотека для управління станом, яка поєднує простоту з потужністю.</p>
                            <pre>
                                <code>
{`import create from 'zustand';

const useStore = create(set => ({
  count: 0,
  increment: () => set(state => ({ count: state.count + 1 })),
  decrement: () => set(state => ({ count: state.count - 1 }))
}));

function Counter() {
  const { count, increment, decrement } = useStore();

  return (
    <div>
      <p>{count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}

function App() {
  return <Counter />;
}`}
                                </code>
                            </pre>
                            <p>У цьому прикладі ми створюємо магазин Zustand за допомогою <code>create</code> і визначаємо стан та функції для його оновлення. Компонент <code>Counter</code> використовує хук <code>useStore</code> для доступу та зміни стану.</p>
                            
                            <h4>React Query</h4>
                            <p>React Query - це бібліотека для управління серверним станом, яка спрощує отримання, кешування, синхронізацію та оновлення даних.</p>
                            <pre>
                                <code>
{`import { useQuery } from 'react-query';

function fetchTodos() {
  return fetch('/api/todos').then(response => response.json());
}

function Todos() {
  const { data, error, isLoading } = useQuery('todos', fetchTodos);

  if (isLoading) return <span>Loading...</span>;
  if (error) return <span>Error: {error.message}</span>;

  return (
    <ul>
      {data.map(todo => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
}

function App() {
  return <Todos />;
}`}
                                </code>
                            </pre>
                            <p>У цьому прикладі ми використовуємо хук <code>useQuery</code> для отримання даних з сервера. React Query автоматично обробляє кешування, оновлення та стан завантаження.</p>
                            
                            <h4>Довідка</h4>
                            <div className='accordion accordion-inner accordion-icon-left mt-3 mb-4' id='stateManagementAccordion'>
                                <div className='accordion-item'>
                                    <h2 className='accordion-header' id='stateManagementHeadingOne'>
                                        <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#stateManagementCollapseOne' aria-expanded='false' aria-controls='stateManagementCollapseOne'>
                                            Redux
                                        </button>
                                    </h2>
                                    <div id='stateManagementCollapseOne' className='accordion-collapse collapse' aria-labelledby='stateManagementHeadingOne' data-bs-parent='#stateManagementAccordion'>
                                        <div className='accordion-body'>
                                            <p>Redux надає передбачувану поведінку стану, використовуючи один глобальний магазин та функції-редуктори для обробки дій.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='accordion-item'>
                                    <h2 className='accordion-header' id='stateManagementHeadingTwo'>
                                        <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#stateManagementCollapseTwo' aria-expanded='false' aria-controls='#stateManagementCollapseTwo'>
                                            MobX
                                        </button>
                                    </h2>
                                    <div id='stateManagementCollapseTwo' className='accordion-collapse collapse' aria-labelledby='stateManagementHeadingTwo' data-bs-parent='#stateManagementAccordion'>
                                        <div className='accordion-body'>
                                            <p>MobX використовує реактивне програмування для автоматичного оновлення компонентів, коли змінюється стан.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='accordion-item'>
                                    <h2 className='accordion-header' id='stateManagementHeadingThree'>
                                        <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#stateManagementCollapseThree' aria-expanded='false' aria-controls='stateManagementCollapseThree'>
                                            Zustand
                                        </button>
                                    </h2>
                                    <div id='stateManagementCollapseThree' className='accordion-collapse collapse' aria-labelledby='stateManagementHeadingThree' data-bs-parent='#stateManagementAccordion'>
                                        <div className='accordion-body'>
                                            <p>Zustand поєднує простоту з потужністю, надаючи легку API для управління станом.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='accordion-item'>
                                    <h2 className='accordion-header' id='stateManagementHeadingFour'>
                                        <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#stateManagementCollapseFour' aria-expanded='false' aria-controls='stateManagementCollapseFour'>
                                            React Query
                                        </button>
                                    </h2>
                                    <div id='stateManagementCollapseFour' className='accordion-collapse collapse' aria-labelledby='stateManagementHeadingFour' data-bs-parent='#stateManagementAccordion'>
                                        <div className='accordion-body'>
                                            <p>React Query спрощує управління серверним станом, автоматизуючи отримання, кешування та оновлення даних.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p>Ці менеджери стану допомагають зберігати і керувати станом у React-додатках, кожен з них має свої особливості і підходить для різних випадків використання.</p>
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

export default CourseReact13;

