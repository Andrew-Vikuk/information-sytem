import React from "react";
import {
  FaArrowRight,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import courseListReact from "../../../scripts/CoursesListReact";

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

                            <h4>Apollo Client</h4>
                            <p>Apollo Client - це популярна бібліотека для управління GraphQL даними у вашому додатку. Вона забезпечує потужний інструмент для виконання запитів, мутацій та кешування результатів.</p>
                            <p>Приклад використання Apollo Client:</p>
                            <pre>
                                <code>
{`import React from 'react';
import { ApolloProvider, InMemoryCache, ApolloClient, gql, useQuery } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://your-graphql-endpoint.com/graphql',
  cache: new InMemoryCache()
});

const GET_DATA = gql\`
  query GetData {
    data {
      id
      value
    }
  }
\`;

const DataComponent = () => {
  const { loading, error, data } = useQuery(GET_DATA);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

  return (
    <div>
      {data.data.map(({ id, value }) => (
        <div key={id}>
          <p>{\`ID: \${id}, Value: \${value}\`}</p>
        </div>
      ))}
    </div>
  );
};

const App = () => (
  <ApolloProvider client={client}>
    <DataComponent />
  </ApolloProvider>
);

export default App;`}
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

