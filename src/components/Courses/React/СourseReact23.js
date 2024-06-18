import React from "react";
import {
  FaArrowRight,
} from "react-icons/fa";
import { HashLink as Link } from 'react-router-hash-link';
import courseListReact from "../../../scripts/CoursesListReact";
import { NavLink } from "react-router-dom";


const CourseReact23 = () => {
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
                            <h3>GraphQL</h3>
                            <p>GraphQL - це мова запитів для API та середовище виконання для виконання цих запитів з вашими даними. GraphQL дає клієнтам можливість точно визначити, які дані їм потрібні, а також спрощує агрегацію даних з різних джерел.</p>

                            <h4>Вступ до GraphQL</h4>
                            <p>GraphQL був створений Facebook у 2012 році і відкритий для загального користування у 2015 році. Він пропонує ефективніший та гнучкіший підхід до роботи з API у порівнянні з традиційними REST API.</p>
                            <p>Основні поняття в GraphQL:</p>
                            <ul>
                                <li><strong>Схема:</strong> визначає структуру API, типи даних та взаємозв'язки між ними.</li>
                                <li><strong>Запити (queries):</strong> визначають, які дані потрібні клієнту.</li>
                                <li><strong>Мутації (mutations):</strong> дозволяють клієнтам змінювати дані.</li>
                                <li><strong>Підписки (subscriptions):</strong> дозволяють клієнтам отримувати оновлення в режимі реального часу.</li>
                            </ul>

                            <h4>Переваги GraphQL</h4>
                            <ol>
                              <li>Гнучкість запитів: Клієнти можуть точно визначити, які дані їм потрібні, без перевантаження додатковою інформацією.</li>
                              <li>Агрегація даних: Можливість отримувати дані з декількох джерел в одному запиті.</li>
                              <li>Зменшення кількості запитів: Замість того, щоб робити кілька запитів до різних кінцевих точок, можна виконати один GraphQL запит.</li>
                              <li>Типізація: Строга типізація допомагає уникати помилок і полегшує роботу з даними.</li>
                              <li>Оновлення в реальному часі: Використання підписок (subscriptions) дозволяє отримувати оновлення даних у реальному часі.</li>
                            </ol>

                            <h4>Недоліки GraphQL</h4>
                            <ol>
                              <li>Складність у налаштуванні: GraphQL може бути складнішим у налаштуванні порівняно з REST API.</li>
                              <li>Високе навантаження на сервер: Через те, що клієнти можуть запитувати великі обсяги даних, сервер може зазнавати підвищеного навантаження.</li>
                              <li>Проблеми безпеки: Необхідно правильно налаштувати авторизацію і аутентифікацію, щоб уникнути витоку даних.</li>
                            </ol>

                            <h4>Інструменти для роботи з GraphQL</h4>
                            <ul>
                              <li>GraphQL Playground: Інтерактивна середа для тестування та написання GraphQL запитів.</li>
                              <li>GraphiQL: Веб-інтерфейс для тестування GraphQL запитів.</li>
                              <li>Apollo Studio: Набір інструментів для роботи з GraphQL, включаючи моніторинг, відлагодження та документування API.</li>
                            </ul>

                            <h4>Apollo Client</h4>
                            <p>Apollo Client - це популярна бібліотека для управління GraphQL даними у вашому додатку. Вона забезпечує потужний інструмент для виконання запитів, мутацій та кешування результатів.</p>
                            <ul>
                              <li>Кешування: Apollo Client забезпечує автоматичне кешування результатів запитів, що дозволяє уникати повторних запитів і покращує продуктивність.</li>
                              <li>Фрагменти: Дозволяють повторно використовувати частини запитів у різних компонентах.</li>
                              <li>Оптимістичне оновлення: Дає змогу миттєво оновлювати UI без очікування відповіді сервера.</li>
                              <li>Інтеграція з іншими бібліотеками: Apollo Client добре інтегрується з такими бібліотеками, як React, Angular та Vue.</li>
                            </ul>
                            <p>Приклад використання Apollo Client:</p>
                            <pre>
                                <code>
{`
import React from 'react';
import { ApolloProvider, InMemoryCache, ApolloClient, gql, useMutation } from '@apollo/client';

// Налаштування Apollo Client з вказівкою URI GraphQL сервера та кешуванням
const client = new ApolloClient({
  uri: 'https://your-graphql-endpoint.com/graphql', // URI вашого GraphQL сервера
  cache: new InMemoryCache() // Використання InMemoryCache для кешування даних
});

// Визначення мутації для додавання даних
const ADD_DATA = gql
  mutation AddData($value: String!) {
    addData(value: $value) {
      id
      value
    }
  }
;

const AddDataComponent = () => {
  let input; // Змінна для зберігання посилання на input елемент
  // Використання useMutation для створення мутації addData
  const [addData, { data }] = useMutation(ADD_DATA);

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault(); // Запобігання стандартній поведінці форми
          addData({ variables: { value: input.value } }); // Виконання мутації з переданою змінною
          input.value = ''; // Очищення поля input після відправки форми
        }}
      >
        <input
          ref={node => {
            input = node; // Збереження посилання на input елемент
          }}
        />
        <button type="submit">Add Data</button> {/* Кнопка для відправки форми */}
      </form>
      {data && <p>Added data: {data.addData.value}</p>} {/* Відображення доданих даних, якщо мутація успішна */}
    </div>
  );
};

const App = () => (
  // Обгортка додатка в ApolloProvider для доступу до Apollo Client
  <ApolloProvider client={client}>
    <AddDataComponent /> {/* Виклик компоненту AddDataComponent */}
  </ApolloProvider>
);

export default App;

`}
                                </code>
                            </pre>

                            <h4>Довідка</h4>
                            <div className='accordion accordion-inner accordion-icon-left mt-3 mb-4' id='graphqlAccordion'>
                                <div className='accordion-item'>
                                    <h2 className='accordion-header' id='graphqlHeadingOne'>
                                        <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#graphqlCollapseOne' aria-expanded='false' aria-controls='graphqlCollapseOne'>
                                            Вступ до GraphQL
                                        </button>
                                    </h2>
                                    <div id='graphqlCollapseOne' className='accordion-collapse collapse' aria-labelledby='graphqlHeadingOne' data-bs-parent='#graphqlAccordion'>
                                        <div className='accordion-body'>
                                            <p>GraphQL - це мова запитів для API, яка дозволяє клієнтам точно визначити, які дані їм потрібні, а також спрощує агрегацію даних з різних джерел.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='accordion-item'>
                                    <h2 className='accordion-header' id='graphqlHeadingTwo'>
                                        <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#graphqlCollapseTwo' aria-expanded='false' aria-controls='graphqlCollapseTwo'>
                                            Apollo Client
                                        </button>
                                    </h2>
                                    <div id='graphqlCollapseTwo' className='accordion-collapse collapse' aria-labelledby='graphqlHeadingTwo' data-bs-parent='#graphqlAccordion'>
                                        <div className='accordion-body'>
                                            <p>Apollo Client - це популярна бібліотека для управління GraphQL даними у вашому додатку. Вона забезпечує потужний інструмент для виконання запитів, мутацій та кешування результатів.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p>Використання GraphQL та Apollo Client дозволяє ефективно керувати даними у вашому додатку, забезпечуючи гнучкість та продуктивність.</p>
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

export default CourseReact23;

