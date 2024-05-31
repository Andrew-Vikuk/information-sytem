import React from "react";
import {
  FaArrowRight,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import courseListJs from "../../../scripts/CoursesListJs";

const CourseJs13 = () => {
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
                    <FaArrowRight /> Інші уроки JavaScript
                  </h5>
                  <ul className='catagory-items'>
                           {courseListJs.map((data, index) => (
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
                    <img src='assets/img/about/lesson-image-js_1.jpg' alt='img' className="w-100 h-20"  style={{height: "400px", objectFit: "cover", marginBottom: "20px"}}/>
                  </div>
                <div className='details'>
  <h3>Async/Await в JavaScript</h3>
  <p>
    Async/Await - це синтаксичний цукор для роботи з промісами, що робить код більш зрозумілим і читабельним. Він дозволяє писати асинхронний код, який виглядає та поводиться як синхронний.
  </p>

  <h4>Синтаксис та використання</h4>
  <p>
    Ключове слово <code>async</code> перед функцією вказує, що ця функція є асинхронною і повертає проміс. Ключове слово <code>await</code> використовується для очікування виконання проміса і отримання його результату.
  </p>
  <pre>
    <code>
{`async function fetchData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
  }
}

fetchData('https://api.example.com/data')
  .then((data) => {
    console.log(data);
  });`}
    </code>
  </pre>

  <h4>Обробка помилок</h4>
  <p>
    Для обробки помилок в асинхронних функціях використовується блок <code>try...catch</code>. Якщо проміс відхиляється або виникає інша помилка, виконання перейде до блоку <code>catch</code>.
  </p>
  <pre>
    <code>
{`async function fetchDataWithErrorHandling(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error:', error);
    throw error; // Прокидати помилку далі, якщо потрібно
  }
}

fetchDataWithErrorHandling('https://api.example.com/data')
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error('Handled Error:', error);
  });`}
    </code>
  </pre>

  <h4>Приклад використання Async/Await</h4>
  <p>
    Розглянемо приклад використання <code>async</code> та <code>await</code> для виконання послідовних асинхронних запитів до API.
  </p>
  <pre>
    <code>
{`async function fetchMultipleData() {
  try {
    const userResponse = await fetch('https://api.example.com/user');
    const user = await userResponse.json();
    
    const postsResponse = await fetch('https://api.example.com/posts?userId=' + user.id);
    const posts = await postsResponse.json();

    console.log('User:', user);
    console.log('Posts:', posts);
  } catch (error) {
    console.error('Error:', error);
  }
}

fetchMultipleData();`}
    </code>
  </pre>

  <h4>Довідка</h4>
  <div className='accordion accordion-inner accordion-icon-left mt-3 mb-4' id='asyncAwaitAccordion'>
    <div className='accordion-item'>
      <h2 className='accordion-header' id='asyncAwaitHeadingOne'>
        <button className='accordion-button' type='button' data-bs-toggle='collapse' data-bs-target='#asyncAwaitCollapseOne' aria-expanded='true' aria-controls='asyncAwaitCollapseOne'>
          Що таке async/await?
        </button>
      </h2>
      <div id='asyncAwaitCollapseOne' className='accordion-collapse collapse show' aria-labelledby='asyncAwaitHeadingOne' data-bs-parent='#asyncAwaitAccordion'>
        <div className='accordion-body'>
          <code>async/await</code> - це синтаксичний цукор для роботи з промісами. <code>async</code> перед функцією вказує, що вона є асинхронною, а <code>await</code> використовується для очікування виконання проміса.
        </div>
      </div>
    </div>
    <div className='accordion-item'>
      <h2 className='accordion-header' id='asyncAwaitHeadingTwo'>
        <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#asyncAwaitCollapseTwo' aria-expanded='false' aria-controls='asyncAwaitCollapseTwo'>
          Як обробляти помилки з async/await?
        </button>
      </h2>
      <div id='asyncAwaitCollapseTwo' className='accordion-collapse collapse' aria-labelledby='asyncAwaitHeadingTwo' data-bs-parent='#asyncAwaitAccordion'>
        <div className='accordion-body'>
          Для обробки помилок в асинхронних функціях використовуйте блок <code>try...catch</code>. В ньому можна обробити помилки, які виникають при виконанні асинхронних операцій.
        </div>
      </div>
    </div>
  </div>
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

export default CourseJs13;

