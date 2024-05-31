import React from "react";
import {
  FaArrowRight,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import courseListReact from "../../../scripts/CoursesListReact";

const CourseReact14 = () => {
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
                            <h3>Робота з сервером: Запити до API</h3>
                            <p>Запити до API дозволяють взаємодіяти з сервером для отримання, надсилання, оновлення або видалення даних. У цьому розділі ми розглянемо, як використовувати Fetch API, Axios, і хуки для асинхронних запитів у React.</p>
                            
                            <h4>Fetch API</h4>
                            <p>Fetch API є вбудованим в сучасні браузери і дозволяє виконувати запити до серверу за допомогою промісів.</p>
                            <pre>
                                <code>
{`import { useState, useEffect } from 'react';

function FetchData() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(data => {
        setData(data);
        setLoading(false);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <ul>
      {data.map(post => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}

function App() {
  return <FetchData />;
}`}
                                </code>
                            </pre>
                            <p>У цьому прикладі ми використовуємо <code>fetch</code> для отримання даних з API, зберігаємо їх у стані за допомогою <code>useState</code> і відображаємо їх після завершення запиту.</p>
                            
                            <h4>Axios</h4>
                            <p>Axios - це популярна бібліотека для виконання HTTP-запитів, яка забезпечує простий інтерфейс і автоматичну обробку JSON.</p>
                            <pre>
                                <code>
{`import { useState, useEffect } from 'react';
import axios from 'axios';

function AxiosData() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        setData(response.data);
        setLoading(false);
      })
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <ul>
      {data.map(post => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}

function App() {
  return <AxiosData />;
}`}
                                </code>
                            </pre>
                            <p>У цьому прикладі ми використовуємо <code>axios.get</code> для отримання даних з API, зберігаємо їх у стані за допомогою <code>useState</code> і відображаємо їх після завершення запиту.</p>
                            
                            <h4>Використання хуків для асинхронних запитів</h4>
                            <p>React-хуки дозволяють зручно обробляти асинхронні запити. Ми можемо створити власний хук для роботи з запитами до API.</p>
                            <pre>
                                <code>
{`import { useState, useEffect } from 'react';
import axios from 'axios';

function useFetch(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setData(response.data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
}

function DataComponent() {
  const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/posts');

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <ul>
      {data.map(post => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}

function App() {
  return <DataComponent />;
}`}
                                </code>
                            </pre>
                            <p>У цьому прикладі ми створюємо власний хук <code>useFetch</code>, який виконує асинхронний запит за допомогою <code>axios</code> і повертає стан даних, завантаження та помилки. Потім ми використовуємо цей хук у компоненті для отримання і відображення даних.</p>
                            
                            <h4>Довідка</h4>
                            <div className='accordion accordion-inner accordion-icon-left mt-3 mb-4' id='apiRequestsAccordion'>
                                <div className='accordion-item'>
                                    <h2 className='accordion-header' id='apiRequestsHeadingOne'>
                                        <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#apiRequestsCollapseOne' aria-expanded='false' aria-controls='apiRequestsCollapseOne'>
                                            Fetch API
                                        </button>
                                    </h2>
                                    <div id='apiRequestsCollapseOne' className='accordion-collapse collapse' aria-labelledby='apiRequestsHeadingOne' data-bs-parent='#apiRequestsAccordion'>
                                        <div className='accordion-body'>
                                            <p>Fetch API - це вбудований інтерфейс для виконання HTTP-запитів у браузері за допомогою промісів.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='accordion-item'>
                                    <h2 className='accordion-header' id='apiRequestsHeadingTwo'>
                                        <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#apiRequestsCollapseTwo' aria-expanded='false' aria-controls='apiRequestsCollapseTwo'>
                                            Axios
                                        </button>
                                    </h2>
                                    <div id='apiRequestsCollapseTwo' className='accordion-collapse collapse' aria-labelledby='apiRequestsHeadingTwo' data-bs-parent='#apiRequestsAccordion'>
                                        <div className='accordion-body'>
                                            <p>Axios - це популярна бібліотека для виконання HTTP-запитів, яка забезпечує простий інтерфейс і автоматичну обробку JSON.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='accordion-item'>
                                    <h2 className='accordion-header' id='apiRequestsHeadingThree'>
                                        <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#apiRequestsCollapseThree' aria-expanded='false' aria-controls='apiRequestsCollapseThree'>
                                            Використання хуків
                                        </button>
                                    </h2>
                                    <div id='apiRequestsCollapseThree' className='accordion-collapse collapse' aria-labelledby='apiRequestsHeadingThree' data-bs-parent='#apiRequestsAccordion'>
                                        <div className='accordion-body'>
                                            <p>Власні хуки дозволяють легко інкапсулювати та повторно використовувати логіку асинхронних запитів у компонентах React.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p>Робота з сервером у React стає більш зручною та ефективною з використанням Fetch API, Axios та власних хуків для асинхронних запитів.</p>
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

export default CourseReact14;

