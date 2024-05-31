import React from "react";
import {
  FaArrowRight,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import courseListJs from "../../../scripts/CoursesListJs";

const CourseJs11 = () => {
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
  <h3>Колбеки в JavaScript</h3>
  <p>
    Колбек-функції (callback functions) - це функції, які передаються як аргументи в інші функції та викликаються після завершення певної операції. Вони широко використовуються для обробки асинхронних операцій, таких як робота з API або таймерами.
  </p>

  <h4>Що таке колбек-функції?</h4>
  <p>
    Колбек-функція - це функція, яка передається як аргумент в іншу функцію і викликається після завершення певної події або операції. Вона дозволяє забезпечити асинхронну поведінку в JavaScript.
  </p>
  <pre>
    <code>
{`function fetchData(callback) {
  setTimeout(() => {
    const data = { name: 'John', age: 30 };
    callback(data);
  }, 2000);
}

function displayData(data) {
  console.log(\`Name: \${data.name}, Age: \${data.age}\`);
}

fetchData(displayData); // Через 2 секунди виведе 'Name: John, Age: 30'`}
    </code>
  </pre>

  <h4>Приклади використання</h4>
  <p>
    Колбек-функції використовуються в різних ситуаціях, таких як обробка подій, робота з таймерами, асинхронні запити та багато іншого. Нижче наведені кілька прикладів використання колбек-функцій.
  </p>
  <h5>Обробка подій</h5>
  <pre>
    <code>
{`document.getElementById('myButton').addEventListener('click', function() {
  console.log('Button clicked!');
});`}
    </code>
  </pre>
  <p>В цьому прикладі колбек-функція викликається при натисканні на кнопку.</p>

  <h5>Таймери</h5>
  <pre>
    <code>
{`setTimeout(() => {
  console.log('Time is up!');
}, 3000);`}
    </code>
  </pre>
  <p>Колбек-функція викликається через 3 секунди після виклику <code>setTimeout</code>.</p>

  <h5>Асинхронні запити</h5>
  <pre>
    <code>
{`function getData(url, callback) {
  fetch(url)
    .then(response => response.json())
    .then(data => callback(data))
    .catch(error => console.error('Error:', error));
}

getData('https://api.example.com/data', function(data) {
  console.log(data);
});`}
    </code>
  </pre>
  <p>В цьому прикладі колбек-функція обробляє результат асинхронного запиту до API.</p>

  <h4>Довідка</h4>
  <div className='accordion accordion-inner accordion-icon-left mt-3 mb-4' id='callbacksAccordion'>
    <div className='accordion-item'>
      <h2 className='accordion-header' id='callbacksHeadingOne'>
        <button className='accordion-button' type='button' data-bs-toggle='collapse' data-bs-target='#callbacksCollapseOne' aria-expanded='true' aria-controls='callbacksCollapseOne'>
          Що таке колбек-функція?
        </button>
      </h2>
      <div id='callbacksCollapseOne' className='accordion-collapse collapse show' aria-labelledby='callbacksHeadingOne' data-bs-parent='#callbacksAccordion'>
        <div className='accordion-body'>
          Колбек-функція - це функція, яка передається як аргумент іншій функції і викликається після завершення певної події або операції. Це дозволяє забезпечити асинхронну поведінку коду.
        </div>
      </div>
    </div>
    <div className='accordion-item'>
      <h2 className='accordion-header' id='callbacksHeadingTwo'>
        <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#callbacksCollapseTwo' aria-expanded='false' aria-controls='callbacksCollapseTwo'>
          Як використовуються колбек-функції в асинхронних операціях?
        </button>
      </h2>
      <div id='callbacksCollapseTwo' className='accordion-collapse collapse' aria-labelledby='callbacksHeadingTwo' data-bs-parent='#callbacksAccordion'>
        <div className='accordion-body'>
          Колбек-функції часто використовуються для обробки результатів асинхронних операцій, таких як таймери, запити до API та обробка подій. Вони викликаються після завершення операції для подальшої обробки результатів.
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

export default CourseJs11;

