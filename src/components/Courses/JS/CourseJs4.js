import React from "react";
import {
  FaArrowRight,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import courseListJs from "../../../scripts/CoursesListJs";

const CourseJs4 = () => {
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
  <h3>Функції в JavaScript</h3>
  <p>
    Функції - це один з основних будівельних блоків в JavaScript. Вони дозволяють групувати код у багаторазово використовувані блоки.
  </p>

  <h4>Оголошення та виклик функцій</h4>
  <p>
    Функції можна оголосити за допомогою ключового слова <code>function</code> та викликати за допомогою їх імені.
  </p>
  <pre>
    <code>
{`function greet() {
  console.log('Hello, world!');
}

greet(); // Виведе 'Hello, world!'`}
    </code>
  </pre>

  <h4>Параметри та аргументи</h4>
  <p>
    Функції можуть приймати параметри, які є змінними, що передаються у функцію під час її виклику.
  </p>
  <pre>
    <code>
{`function greet(name) {
  console.log('Hello, ' + name + '!');
}

greet('Alice'); // Виведе 'Hello, Alice!'`}
    </code>
  </pre>

  <h4>Повернення значень</h4>
  <p>
    Функції можуть повертати значення за допомогою ключового слова <code>return</code>.
  </p>
  <pre>
    <code>
{`function add(a, b) {
  return a + b;
}

let result = add(2, 3);
console.log(result); // Виведе 5`}
    </code>
  </pre>

  <h4>Функції-вирази та стрілкові функції</h4>
  <p>
    Функції можуть бути оголошені як функціональні вирази або стрілкові функції.
  </p>
  <p>Функціональні вирази:</p>
  <pre>
    <code>
{`const greet = function(name) {
  console.log('Hello, ' + name + '!');
};

greet('Bob'); // Виведе 'Hello, Bob!'`}
    </code>
  </pre>

  <p>Стрілкові функції:</p>
  <pre>
    <code>
{`const add = (a, b) => a + b;

let result = add(5, 7);
console.log(result); // Виведе 12`}
    </code>
  </pre>

  <h4>Довідка</h4>
  <div className='accordion accordion-inner accordion-icon-left mt-3 mb-4' id='jsFunctionsAccordion'>
    <div className='accordion-item'>
      <h2 className='accordion-header' id='jsFunctionsHeadingOne'>
        <button className='accordion-button' type='button' data-bs-toggle='collapse' data-bs-target='#jsFunctionsCollapseOne' aria-expanded='true' aria-controls='jsFunctionsCollapseOne'>
          Як оголосити функцію в JavaScript?
        </button>
      </h2>
      <div id='jsFunctionsCollapseOne' className='accordion-collapse collapse show' aria-labelledby='jsFunctionsHeadingOne' data-bs-parent='#jsFunctionsAccordion'>
        <div className='accordion-body'>
          Функцію можна оголосити за допомогою ключового слова <code>function</code> або за допомогою функціональних виразів і стрілкових функцій.
        </div>
      </div>
    </div>
    <div className='accordion-item'>
      <h2 className='accordion-header' id='jsFunctionsHeadingTwo'>
        <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#jsFunctionsCollapseTwo' aria-expanded='false' aria-controls='jsFunctionsCollapseTwo'>
          Що таке стрілкові функції?
        </button>
      </h2>
      <div id='jsFunctionsCollapseTwo' className='accordion-collapse collapse' aria-labelledby='jsFunctionsHeadingTwo' data-bs-parent='#jsFunctionsAccordion'>
        <div className='accordion-body'>
          Стрілкові функції - це скорочений синтаксис для оголошення функцій в JavaScript, який використовує стрілку <code>=&gt;</code>.
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

export default CourseJs4;

