import React from "react";
import {
  FaArrowRight,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import courseListReact from "../../../scripts/CoursesListReact";

const CourseReact15 = () => {
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
                            <h3>Аутентифікація та авторизація</h3>
                            <p>Аутентифікація та авторизація є важливими аспектами забезпечення безпеки у веб-додатках. У цьому розділі ми розглянемо роботу з токенами та реалізацію приватних маршрутів у React.</p>
                            
                            <h4>Робота з токенами</h4>
                            <p>Токени використовуються для зберігання інформації про сесію користувача. Найчастіше використовується JWT (JSON Web Token). Ось приклад того, як працювати з токенами у React:</p>
                            <pre>
                                <code>
{`import { useState } from 'react';
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('https://example.com/api/login', { email, password });
      setToken(response.data.token);
      localStorage.setItem('token', response.data.token);
    } catch (error) {
      console.error('Error logging in:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type='email'
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder='Email'
      />
      <input
        type='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder='Password'
      />
      <button type='submit'>Login</button>
    </form>
  );
}

function App() {
  return <Login />;
}`}
                                </code>
                            </pre>
                            <p>У цьому прикладі ми використовуємо axios для відправки даних форми на сервер і збереження отриманого токену в localStorage.</p>
                            
                            <h4>Реалізація приватних маршрутів</h4>
                            <p>Приватні маршрути дозволяють обмежити доступ до певних сторінок додатку тільки для аутентифікованих користувачів.</p>
                            <pre>
                                <code>
{`import React from 'react';
import { Route, Redirect } from 'react-router-dom';

function PrivateRoute({ component: Component, ...rest }) {
  const isAuthenticated = !!localStorage.getItem('token');

  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to='/login' />
        )
      }
    />
  );
}

function Dashboard() {
  return <h2>Dashboard</h2>;
}

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path='/login' component={Login} />
        <PrivateRoute path='/dashboard' component={Dashboard} />
      </Switch>
    </BrowserRouter>
  );
}`}
                                </code>
                            </pre>
                            <p>У цьому прикладі ми створюємо компонент <code>PrivateRoute</code>, який перевіряє наявність токену у localStorage і перенаправляє неаутентифікованих користувачів на сторінку входу.</p>
                            
                            <h4>Довідка</h4>
                            <div className='accordion accordion-inner accordion-icon-left mt-3 mb-4' id='authAccordion'>
                                <div className='accordion-item'>
                                    <h2 className='accordion-header' id='authHeadingOne'>
                                        <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#authCollapseOne' aria-expanded='false' aria-controls='authCollapseOne'>
                                            Робота з токенами
                                        </button>
                                    </h2>
                                    <div id='authCollapseOne' className='accordion-collapse collapse' aria-labelledby='authHeadingOne' data-bs-parent='#authAccordion'>
                                        <div className='accordion-body'>
                                            <p>Токени дозволяють зберігати інформацію про сесію користувача і використовуються для аутентифікації запитів на сервер.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='accordion-item'>
                                    <h2 className='accordion-header' id='authHeadingTwo'>
                                        <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#authCollapseTwo' aria-expanded='false' aria-controls='authCollapseTwo'>
                                            Приватні маршрути
                                        </button>
                                    </h2>
                                    <div id='authCollapseTwo' className='accordion-collapse collapse' aria-labelledby='authHeadingTwo' data-bs-parent='#authAccordion'>
                                        <div className='accordion-body'>
                                            <p>Приватні маршрути обмежують доступ до певних сторінок додатку тільки для аутентифікованих користувачів.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p>Аутентифікація та авторизація є важливими для забезпечення безпеки додатків. Робота з токенами і реалізація приватних маршрутів дозволяють ефективно управляти доступом користувачів до ресурсів додатку.</p>
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

export default CourseReact15;

