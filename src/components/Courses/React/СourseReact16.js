import React from "react";
import {
  FaArrowRight,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import courseListReact from "../../../scripts/CoursesListReact";

const CourseReact16 = () => {
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
                            <h3>Маршрутизація у React</h3>
                            <p>React Router - це стандартна бібліотека для маршрутизації у React-додатках. Вона дозволяє створювати маршрути та керувати навігацією у додатку.</p>

                            <h4>Основні концепції</h4>
                            <p>React Router базується на компонентному підході і надає наступні основні компоненти:</p>
                            <ul>
                                <li><code>BrowserRouter</code>: основний компонент для використання HTML5 історії браузера.</li>
                                <li><code>Route</code>: компонент для визначення маршруту.</li>
                                <li><code>Link</code>: компонент для створення навігаційних посилань.</li>
                                <li><code>Switch</code>: рендерить перший <code>Route</code>, який відповідає поточному URL.</li>
                            </ul>

                            <h4>Маршрутизація та навігація</h4>
                            <p>Приклад базової маршрутизації у React Router:</p>
                            <pre>
                                <code>
{`import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';

function Home() {
  return <h2>Home</h2>;
}

function About() {
  return <h2>About</h2>;
}

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;`}
                                </code>
                            </pre>
                            <p>У цьому прикладі використовуються <code>BrowserRouter</code>, <code>Route</code>, <code>Link</code> та <code>Switch</code> для маршрутизації та навігації між сторінками "Home" та "About".</p>

                            <h4>Динамічні маршрути</h4>
                            <p>Динамічні маршрути дозволяють створювати URL з параметрами:</p>
                            <pre>
                                <code>
{`import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link, useParams } from 'react-router-dom';

function User() {
  let { id } = useParams();
  return <h2>User ID: {id}</h2>;
}

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/user/1">User 1</Link>
            </li>
            <li>
              <Link to="/user/2">User 2</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/user/:id">
            <User />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;`}
                                </code>
                            </pre>
                            <p>У цьому прикладі компонент <code>User</code> отримує параметр <code>id</code> з URL за допомогою хука <code>useParams</code>.</p>

                            <h4>Захищені маршрути</h4>
                            <p>Захищені маршрути використовуються для обмеження доступу до певних сторінок тільки для авторизованих користувачів:</p>
                            <pre>
                                <code>
{`import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';

function Login() {
  return <h2>Login Page</h2>;
}

function Dashboard() {
  return <h2>Dashboard</h2>;
}

function PrivateRoute({ component: Component, ...rest }) {
  const isAuthenticated = !!localStorage.getItem('token');
  return (
    <Route
      {...rest}
      render={props =>
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
}

function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
            <li>
              <Link to="/dashboard">Dashboard</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/login" component={Login} />
          <PrivateRoute path="/dashboard" component={Dashboard} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;`}
                                </code>
                            </pre>
                            <p>У цьому прикладі <code>PrivateRoute</code> перевіряє наявність токену у <code>localStorage</code> і перенаправляє неавторизованих користувачів на сторінку входу.</p>
                            
                            <h4>Довідка</h4>
                            <div className='accordion accordion-inner accordion-icon-left mt-3 mb-4' id='routingAccordion'>
                                <div className='accordion-item'>
                                    <h2 className='accordion-header' id='routingHeadingOne'>
                                        <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#routingCollapseOne' aria-expanded='false' aria-controls='routingCollapseOne'>
                                            Основні концепції
                                        </button>
                                    </h2>
                                    <div id='routingCollapseOne' className='accordion-collapse collapse' aria-labelledby='routingHeadingOne' data-bs-parent='#routingAccordion'>
                                        <div className='accordion-body'>
                                            <p>React Router надає компоненти для побудови маршрутизації у додатках, включаючи <code>BrowserRouter</code>, <code>Route</code>, <code>Link</code>, <code>Switch</code> та інші.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='accordion-item'>
                                    <h2 className='accordion-header' id='routingHeadingTwo'>
                                        <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#routingCollapseTwo' aria-expanded='false' aria-controls='routingCollapseTwo'>
                                            Динамічні маршрути
                                        </button>
                                    </h2>
                                    <div id='routingCollapseTwo' className='accordion-collapse collapse' aria-labelledby='routingHeadingTwo' data-bs-parent='#routingAccordion'>
                                        <div className='accordion-body'>
                                            <p>Динамічні маршрути дозволяють створювати URL з параметрами для передачі динамічних значень компонентам.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='accordion-item'>
                                    <h2 className='accordion-header' id='routingHeadingThree'>
                                        <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#routingCollapseThree' aria-expanded='false' aria-controls='routingCollapseThree'>
                                            Захищені маршрути
                                        </button>
                                    </h2>
                                    <div id='routingCollapseThree' className='accordion-collapse collapse' aria-labelledby='routingHeadingThree' data-bs-parent='#routingAccordion'>
                                        <div className='accordion-body'>
                                            <p>Захищені маршрути обмежують доступ до певних сторінок тільки для авторизованих користувачів, перевіряючи наявність токену або іншого ідентифікатора.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p>Маршрутизація є ключовою частиною розробки React-додатків. Використання React Router дозволяє створювати складні та інтерактивні маршрути, забезпечуючи плавну навігацію та контроль доступу до ресурсів додатку.</p>
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

export default CourseReact16;

