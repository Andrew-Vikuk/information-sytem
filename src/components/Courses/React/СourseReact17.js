import React from "react";
import {
  FaArrowRight,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import courseListReact from "../../../scripts/CoursesListReact";

const CourseReact17 = () => {
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
                            <h3>Оптимізація та Продуктивність у React</h3>
                            <p>Для забезпечення високої продуктивності та оптимальної роботи React-додатків важливо застосовувати різні техніки оптимізації. Ось основні з них:</p>

                            <h4>Code Splitting</h4>
                            <p>Code splitting - це техніка, яка дозволяє розділяти код вашого додатку на менші частини, які завантажуються тільки тоді, коли вони потрібні.</p>
                            <pre>
                                <code>
{`import React, { Suspense, lazy } from 'react';

const OtherComponent = lazy(() => import('./OtherComponent'));

function MyComponent() {
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <OtherComponent />
      </Suspense>
    </div>
  );
}

export default MyComponent;`}
                                </code>
                            </pre>
                            <p>У цьому прикладі компонент <code>OtherComponent</code> буде завантажений тільки тоді, коли він стане потрібен, завдяки <code>React.lazy</code> та <code>Suspense</code>.</p>

                            <h4>Lazy Loading</h4>
                            <p>Lazy loading дозволяє відкладати завантаження компонентів або ресурсів до тих пір, поки вони не стануть необхідними. Це допомагає зменшити початковий об'єм завантаження та покращити час завантаження сторінки.</p>
                            <pre>
                                <code>
{`import React, { lazy, Suspense } from 'react';

const LazyComponent = lazy(() => import('./LazyComponent'));

function App() {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyComponent />
      </Suspense>
    </div>
  );
}

export default App;`}
                                </code>
                            </pre>
                            <p>У цьому прикладі компонент <code>LazyComponent</code> завантажується лише тоді, коли він необхідний, використовуючи <code>React.lazy</code> та <code>Suspense</code> для відображення стану завантаження.</p>

                            <h4>Мемоізація</h4>
                            <p>Мемоізація дозволяє кешувати результати обчислень, щоб уникнути повторного виконання одних і тих самих операцій, що покращує продуктивність додатку.</p>
                            <p>Використовуйте <code>React.memo</code> для мемоізації функціональних компонентів:</p>
                            <pre>
                                <code>
{`import React from 'react';

const MyComponent = React.memo(function MyComponent(props) {
  // компонент буде повторно відрендерений тільки при зміні props
  return <div>{props.value}</div>;
});

export default MyComponent;`}
                                </code>
                            </pre>
                            <p>Використовуйте <code>useMemo</code> для мемоізації значень:</p>
                            <pre>
                                <code>
{`import React, { useMemo } from 'react';

function MyComponent({ items }) {
  const memoizedValue = useMemo(() => {
    return items.reduce((sum, item) => sum + item.value, 0);
  }, [items]);

  return <div>Sum: {memoizedValue}</div>;
}

export default MyComponent;`}
                                </code>
                            </pre>
                            <p>Використовуйте <code>useCallback</code> для мемоізації функцій:</p>
                            <pre>
                                <code>
{`import React, { useCallback } from 'react';

function MyComponent({ onClick }) {
  const memoizedCallback = useCallback(() => {
    onClick();
  }, [onClick]);

  return <button onClick={memoizedCallback}>Click me</button>;
}

export default MyComponent;`}
                                </code>
                            </pre>

                            <h4>Довідка</h4>
                            <div className='accordion accordion-inner accordion-icon-left mt-3 mb-4' id='optimizationAccordion'>
                                <div className='accordion-item'>
                                    <h2 className='accordion-header' id='optimizationHeadingOne'>
                                        <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#optimizationCollapseOne' aria-expanded='false' aria-controls='optimizationCollapseOne'>
                                            Code Splitting
                                        </button>
                                    </h2>
                                    <div id='optimizationCollapseOne' className='accordion-collapse collapse' aria-labelledby='optimizationHeadingOne' data-bs-parent='#optimizationAccordion'>
                                        <div className='accordion-body'>
                                            <p>Code splitting дозволяє розділити код додатку на менші частини, які завантажуються тільки тоді, коли це необхідно, зменшуючи початковий об'єм завантаження.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='accordion-item'>
                                    <h2 className='accordion-header' id='optimizationHeadingTwo'>
                                        <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#optimizationCollapseTwo' aria-expanded='false' aria-controls='optimizationCollapseTwo'>
                                            Lazy Loading
                                        </button>
                                    </h2>
                                    <div id='optimizationCollapseTwo' className='accordion-collapse collapse' aria-labelledby='optimizationHeadingTwo' data-bs-parent='#optimizationAccordion'>
                                        <div className='accordion-body'>
                                            <p>Lazy loading відтерміновує завантаження компонентів або ресурсів до моменту, коли вони стають необхідними, покращуючи продуктивність додатку.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='accordion-item'>
                                    <h2 className='accordion-header' id='optimizationHeadingThree'>
                                        <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#optimizationCollapseThree' aria-expanded='false' aria-controls='optimizationCollapseThree'>
                                            Мемоізація
                                        </button>
                                    </h2>
                                    <div id='optimizationCollapseThree' className='accordion-collapse collapse' aria-labelledby='optimizationHeadingThree' data-bs-parent='#optimizationAccordion'>
                                        <div className='accordion-body'>
                                            <p>Мемоізація дозволяє кешувати результати обчислень та функцій, щоб уникнути повторного виконання одних і тих самих операцій, що покращує продуктивність додатку.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p>Оптимізація продуктивності у React-додатках є важливим аспектом розробки. Використовуючи такі техніки як code splitting, lazy loading та мемоізація, ви можете значно покращити продуктивність вашого додатку, забезпечуючи швидке та плавне користувацьке враження.</p>
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

export default CourseReact17;

