import React from "react";
import {
  FaArrowRight,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import courseListJs from "../../../scripts/CoursesListJs";

const CourseJs3 = () => {
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

<h3>Основи JavaScript</h3>
<p>
  JavaScript - це мова програмування, яка використовується для створення динамічних та інтерактивних веб-додатків. Щоб ефективно працювати з JavaScript, важливо розуміти основи синтаксису та основні оператори.
</p>

<h4>Синтаксис та основні оператори</h4>

<h5>Коментарі</h5>
<p>
  Коментарі в JavaScript використовуються для пояснення коду та не виконуються при запуску програми. Є два типи коментарів:
</p>
<ul>
  <li><strong>Однорядкові коментарі:</strong> Починаються з <code>//</code>. Наприклад:
    <pre><code>// Це однорядковий коментар</code></pre>
  </li>
  <li><strong>Багаторядкові коментарі:</strong> Починаються з <code>/*</code> і закінчуються <code>*/</code>. Наприклад:
    <pre><code>/* Це багаторядковий
коментар */</code></pre>
  </li>
</ul>

<h5>Змінні (var, let, const)</h5>
<p>
  Змінні використовуються для зберігання даних. В JavaScript є три способи оголошення змінних:
</p>
<ul>
  <li><strong>var:</strong> Раніше використовувався для оголошення змінних, має функціональну область видимості.
    <pre><code>var x = 10;</code></pre>
  </li>
  <li><strong>let:</strong> Оголошує змінну з блоковою областю видимості.
    <pre><code>let y = 20;</code></pre>
  </li>
  <li><strong>const:</strong> Оголошує змінну, значення якої не може бути змінене після присвоєння.
    <pre><code>const z = 30;</code></pre>
  </li>
</ul>

<h5>Типи даних</h5>
<p>
  JavaScript підтримує кілька типів даних:
</p>
<ul>
  <li><strong>Number:</strong> Числові значення. Наприклад: <code>let age = 25;</code></li>
  <li><strong>String:</strong> Рядкові значення. Наприклад: <code>let name = "John";</code></li>
  <li><strong>Boolean:</strong> Логічні значення, що можуть бути <code>true</code> або <code>false</code>. Наприклад: <code>let isStudent = true;</code></li>
  <li><strong>null:</strong> Спеціальне значення, що означає "нічого". Наприклад: <code>let car = null;</code></li>
  <li><strong>undefined:</strong> Значення змінної, яка була оголошена, але не ініціалізована. Наприклад: <code>let result;</code></li>
  <li><strong>Object:</strong> Колекція властивостей. Наприклад:
    <pre><code>let person ={` {
  name: "Alice",
  age: 30
};`}</code></pre>
  </li>
  <li><strong>Symbol:</strong> Унікальне та незмінне значення, часто використовуване як ідентифікатор для властивостей об'єктів. Наприклад: <code>let sym = Symbol();</code></li>
</ul>

<h5>Оператори</h5>
<p>
  JavaScript включає різні оператори для виконання операцій з даними:
</p>
<ul>
  <li><strong>Арифметичні оператори:</strong> Виконують математичні операції.
    <pre><code>let sum = 10 + 5; // Додавання
let difference = 10 - 5; // Віднімання
let product = 10 * 5; // Множення
let quotient = 10 / 5; // Ділення
let remainder = 10 % 3; // Остача від ділення</code></pre>
  </li>
  <li><strong>Оператори порівняння:</strong> Порівнюють значення і повертають логічне значення.
    <pre><code>let isEqual = 10 == 10; // true
let isStrictEqual = 10 === 10; // true
let isNotEqual = 10 != 5; // true
let isGreater = 10 {`>`} 5; // true
let isLess = 10 {`<`} 15; // true</code></pre>
  </li>
  <li><strong>Логічні оператори:</strong> Виконують логічні операції.
    <pre><code>let and = true && false; // false
let or = true || false; // true
let not = !true; // false</code></pre>
  </li>
  <li><strong>Оператори присвоєння:</strong> Присвоюють значення змінним.
    <pre><code>let a = 10;
a += 5; // a = a + 5;
a -= 3; // a = a - 3;
a *= 2; // a = a * 2;
a /= 4; // a = a / 4;</code></pre>
  </li>
</ul>

<h4>Довідка</h4>
<div className='accordion accordion-inner accordion-icon-left mt-3 mb-4' id='jsBasicsAccordion'>
  <div className='accordion-item'>
    <h2 className='accordion-header' id='jsBasicsHeadingOne'>
      <button className='accordion-button' type='button' data-bs-toggle='collapse' data-bs-target='#jsBasicsCollapseOne' aria-expanded='true' aria-controls='jsBasicsCollapseOne'>
        Що таке змінна в JavaScript?
      </button>
    </h2>
    <div id='jsBasicsCollapseOne' className='accordion-collapse collapse show' aria-labelledby='jsBasicsHeadingOne' data-bs-parent='#jsBasicsAccordion'>
      <div className='accordion-body'>
        Змінна - це іменована область пам'яті, яка використовується для зберігання значень. В JavaScript змінні оголошуються за допомогою ключових слів <code>var</code>, <code>let</code> або <code>const</code>.
      </div>
    </div>
  </div>
  <div className='accordion-item'>
    <h2 className='accordion-header' id='jsBasicsHeadingTwo'>
      <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#jsBasicsCollapseTwo' aria-expanded='false' aria-controls='jsBasicsCollapseTwo'>
        Чим відрізняються <code>var</code>, <code>let</code> та <code>const</code>?
      </button>
    </h2>
    <div id='jsBasicsCollapseTwo' className='accordion-collapse collapse' aria-labelledby='jsBasicsHeadingTwo' data-bs-parent='#jsBasicsAccordion'>
      <div className='accordion-body'>
        <code>var</code> має функціональну область видимості, тоді як <code>let</code> та <code>const</code> мають блокову область видимості. <code>const</code> використовується для змінних, значення яких не повинні змінюватися після ініціалізації.
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

export default CourseJs3;

