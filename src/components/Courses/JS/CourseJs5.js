import React from "react";
import {
  FaArrowRight,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import courseListJs from "../../../scripts/CoursesListJs";

const CourseJs5 = () => {
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
  <h3>Об'єкти та масиви в JavaScript</h3>
  <p>
    Об'єкти та масиви є фундаментальними структурами даних в JavaScript, що дозволяють зберігати та маніпулювати складними даними.
  </p>

  <h4>Створення та використання об'єктів</h4>
  <p>
    Об'єкти в JavaScript використовуються для зберігання колекцій пар ключ-значення.
  </p>
  <pre>
    <code>
{`const person = {
  name: 'John',
  age: 30,
  greet: function() {
    console.log('Hello, my name is ' + this.name);
  }
};

console.log(person.name); // Виведе 'John'
person.greet(); // Виведе 'Hello, my name is John'`}
    </code>
  </pre>

  <h4>Вбудовані методи об'єктів</h4>
  <p>
    JavaScript має кілька вбудованих методів для роботи з об'єктами, таких як <code>Object.keys()</code>, <code>Object.values()</code> та <code>Object.entries()</code>.
  </p>
  <pre>
    <code>
{`const person = {
  name: 'John',
  age: 30
};

console.log(Object.keys(person)); // Виведе ['name', 'age']
console.log(Object.values(person)); // Виведе ['John', 30]
console.log(Object.entries(person)); // Виведе [['name', 'John'], ['age', 30]]`}
    </code>
  </pre>

  <h4>Створення та використання масивів</h4>
  <p>
    Масиви - це список елементів, які можуть бути доступні за їх індексом.
  </p>
  <pre>
    <code>
{`const fruits = ['apple', 'banana', 'cherry'];

console.log(fruits[0]); // Виведе 'apple'
console.log(fruits.length); // Виведе 3`}
    </code>
  </pre>

  <h4>Вбудовані методи масивів</h4>
  <p>
    Масиви мають багато корисних методів для маніпулювання їх вмістом. Деякі з них включають <code>map</code>, <code>filter</code> та <code>reduce</code>.
  </p>

  <h5>Метод <code>map</code></h5>
  <p>
    Метод <code>map</code> створює новий масив, викликаючи функцію зворотного виклику для кожного елементу масиву.
  </p>
  <pre>
    <code>
{`const numbers = [1, 2, 3, 4];
const doubled = numbers.map(num => num * 2);

console.log(doubled); // Виведе [2, 4, 6, 8]`}
    </code>
  </pre>

  <h5>Метод <code>filter</code></h5>
  <p>
    Метод <code>filter</code> створює новий масив з елементами, що задовольняють умову, визначену у функції зворотного виклику.
  </p>
  <pre>
    <code>
{`const numbers = [1, 2, 3, 4];
const even = numbers.filter(num => num % 2 === 0);

console.log(even); // Виведе [2, 4]`}
    </code>
  </pre>

  <h5>Метод <code>reduce</code></h5>
  <p>
    Метод <code>reduce</code> виконує функцію зворотного виклику для кожного елементу масиву, накопичуючи результат у єдине значення.
  </p>
  <pre>
    <code>
{`const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((accumulator, current) => accumulator + current, 0);

console.log(sum); // Виведе 10`}
    </code>
  </pre>

  <h4>Довідка</h4>
  <div className='accordion accordion-inner accordion-icon-left mt-3 mb-4' id='jsObjectsArraysAccordion'>
    <div className='accordion-item'>
      <h2 className='accordion-header' id='jsObjectsArraysHeadingOne'>
        <button className='accordion-button' type='button' data-bs-toggle='collapse' data-bs-target='#jsObjectsArraysCollapseOne' aria-expanded='true' aria-controls='jsObjectsArraysCollapseOne'>
          Як створити об'єкт в JavaScript?
        </button>
      </h2>
      <div id='jsObjectsArraysCollapseOne' className='accordion-collapse collapse show' aria-labelledby='jsObjectsArraysHeadingOne' data-bs-parent='#jsObjectsArraysAccordion'>
        <div className='accordion-body'>
          Об'єкт можна створити за допомогою літерального синтаксису, використовуючи фігурні дужки, або за допомогою конструктора <code>Object</code>.
        </div>
      </div>
    </div>
    <div className='accordion-item'>
      <h2 className='accordion-header' id='jsObjectsArraysHeadingTwo'>
        <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#jsObjectsArraysCollapseTwo' aria-expanded='false' aria-controls='jsObjectsArraysCollapseTwo'>
          Як використовувати метод <code>map</code> для масивів?
        </button>
      </h2>
      <div id='jsObjectsArraysCollapseTwo' className='accordion-collapse collapse' aria-labelledby='jsObjectsArraysHeadingTwo' data-bs-parent='#jsObjectsArraysAccordion'>
        <div className='accordion-body'>
          Метод <code>map</code> викликає функцію для кожного елементу масиву та створює новий масив з результатами викликів цієї функції.
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

export default CourseJs5;

