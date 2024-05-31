import React from "react";
import {
  FaArrowRight,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import courseListJs from "../../../scripts/CoursesListJs";

const CourseJs12 = () => {
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
  <h3>Проміси в JavaScript</h3>
  <p>
    Проміси (Promises) - це об'єкти, які представляють завершення (або невдачу) асинхронної операції та її результат. Проміси допомагають уникнути так званого "callback hell" і полегшують роботу з асинхронним кодом.
  </p>

  <h4>Створення та використання промісів</h4>
  <p>
    Проміс створюється за допомогою конструктора <code>Promise</code>, який приймає функцію з двома параметрами: <code>resolve</code> і <code>reject</code>. <code>resolve</code> викликається у випадку успіху, а <code>reject</code> - у випадку помилки.
  </p>
  <pre>
    <code>
{`const myPromise = new Promise((resolve, reject) => {
  const success = true;

  if (success) {
    resolve('Operation was successful');
  } else {
    reject('Operation failed');
  }
});

myPromise
  .then((message) => {
    console.log(message); // 'Operation was successful'
  })
  .catch((error) => {
    console.error(error); // 'Operation failed'
  });`}
    </code>
  </pre>

  <h4>Методи промісів</h4>
  <p>Проміси мають кілька корисних методів для обробки результатів асинхронних операцій:</p>

  <h5><code>then</code></h5>
  <p>Метод <code>then</code> використовується для обробки успішного результату проміса. Він приймає функцію, яка буде виконана при виклику <code>resolve</code>.</p>
  <pre>
    <code>
{`myPromise.then((message) => {
  console.log(message); // 'Operation was successful'
});`}
    </code>
  </pre>

  <h5><code>catch</code></h5>
  <p>Метод <code>catch</code> використовується для обробки помилок проміса. Він приймає функцію, яка буде виконана при виклику <code>reject</code>.</p>
  <pre>
    <code>
{`myPromise.catch((error) => {
  console.error(error); // 'Operation failed'
});`}
    </code>
  </pre>

  <h5><code>finally</code></h5>
  <p>Метод <code>finally</code> виконується після завершення проміса незалежно від результату (успіх або помилка). Це корисно для виконання коду, який повинен відбутися незалежно від результату асинхронної операції.</p>
  <pre>
    <code>
{`myPromise.finally(() => {
  console.log('Promise has been processed');
});`}
    </code>
  </pre>

  <h4>Приклад використання промісів</h4>
  <p>Нижче наведено приклад використання промісів для виконання асинхронного запиту до API.</p>
  <pre>
    <code>
{`function fetchData(url) {
  return new Promise((resolve, reject) => {
    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => resolve(data))
      .catch((error) => reject(error));
  });
}

fetchData('https://api.example.com/data')
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error('Error:', error);
  })
  .finally(() => {
    console.log('Fetch operation completed');
  });`}
    </code>
  </pre>

  <h4>Довідка</h4>
  <div className='accordion accordion-inner accordion-icon-left mt-3 mb-4' id='promisesAccordion'>
    <div className='accordion-item'>
      <h2 className='accordion-header' id='promisesHeadingOne'>
        <button className='accordion-button' type='button' data-bs-toggle='collapse' data-bs-target='#promisesCollapseOne' aria-expanded='true' aria-controls='promisesCollapseOne'>
          Що таке проміс?
        </button>
      </h2>
      <div id='promisesCollapseOne' className='accordion-collapse collapse show' aria-labelledby='promisesHeadingOne' data-bs-parent='#promisesAccordion'>
        <div className='accordion-body'>
          Проміс - це об'єкт, який представляє результат асинхронної операції. Він може знаходитися в одному з трьох станів: очікування (pending), виконано (fulfilled) або відхилено (rejected).
        </div>
      </div>
    </div>
    <div className='accordion-item'>
      <h2 className='accordion-header' id='promisesHeadingTwo'>
        <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#promisesCollapseTwo' aria-expanded='false' aria-controls='promisesCollapseTwo'>
          Як працюють методи then, catch і finally?
        </button>
      </h2>
      <div id='promisesCollapseTwo' className='accordion-collapse collapse' aria-labelledby='promisesHeadingTwo' data-bs-parent='#promisesAccordion'>
        <div className='accordion-body'>
          Метод <code>then</code> виконується при успішному завершенні проміса, метод <code>catch</code> - при виникненні помилки, а метод <code>finally</code> - після завершення проміса незалежно від результату.
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

export default CourseJs12;

