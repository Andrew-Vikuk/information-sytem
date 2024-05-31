import React from "react";
import {
  FaArrowRight,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import courseListJs from "../../../scripts/CoursesListJs";

const CourseJs6 = () => {
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
  <h3>Умовні оператори та цикли в JavaScript</h3>
  <p>
    Умовні оператори та цикли дозволяють контролювати потік виконання програми на основі певних умов або повторювати виконання блоків коду.
  </p>

  <h4>if, else if, else</h4>
  <p>
    Умовний оператор <code>if</code> виконує блок коду, якщо умова є істинною. Ви можете додати <code>else if</code> для додаткових умов та <code>else</code> для виконання коду, якщо жодна з умов не є істинною.
  </p>
  <pre>
    <code>
{`const num = 10;

if (num > 10) {
  console.log('Число більше 10');
} else if (num < 10) {
  console.log('Число менше 10');
} else {
  console.log('Число дорівнює 10');
}`}
    </code>
  </pre>

  <h4>Тернарний оператор</h4>
  <p>
    Тернарний оператор є коротшою формою для запису умовного оператора <code>if...else</code> та повертає одне з двох значень залежно від умови.
  </p>
  <pre>
    <code>
{`const age = 20;
const canVote = age >= 18 ? 'Може голосувати' : 'Не може голосувати';
console.log(canVote); // Виведе 'Може голосувати'`}
    </code>
  </pre>

  <h4>switch</h4>
  <p>
    Оператор <code>switch</code> дозволяє виконувати різні блоки коду залежно від значення змінної.
  </p>
  <pre>
    <code>
{`const fruit = 'apple';

switch (fruit) {
  case 'banana':
    console.log('Це банан');
    break;
  case 'apple':
    console.log('Це яблуко');
    break;
  case 'cherry':
    console.log('Це вишня');
    break;
  default:
    console.log('Невідомий фрукт');
}`}
    </code>
  </pre>

  <h4>Цикли</h4>
  <p>
    Цикли дозволяють повторювати виконання блоку коду кілька разів.

    <h5>for</h5>
    <p>
      Цикл <code>for</code> використовується, коли кількість повторень відома заздалегідь.
    </p>
    <pre>
      <code>
{`for (let i = 0; i < 5; i++) {
  console.log(i);
}
// Виведе 0, 1, 2, 3, 4`}
      </code>
    </pre>

    <h5>while</h5>
    <p>
      Цикл <code>while</code> виконує блок коду, поки умова є істинною.
    </p>
    <pre>
      <code>
{`let i = 0;
while (i < 5) {
  console.log(i);
  i++;
}
// Виведе 0, 1, 2, 3, 4`}
      </code>
    </pre>

    <h5>do...while</h5>
    <p>
      Цикл <code>do...while</code> виконує блок коду щонайменше один раз, а потім продовжує виконання, поки умова є істинною.
    </p>
    <pre>
      <code>
{`let i = 0;
do {
  console.log(i);
  i++;
} while (i < 5);
// Виведе 0, 1, 2, 3, 4`}
      </code>
    </pre>
  </p>

  <h4>for...in та for...of</h4>
  <p>
    Цикли <code>for...in</code> та <code>for...of</code> використовуються для ітерації по об'єктах та масивах відповідно.

    <h5>for...in</h5>
    <p>
      Цикл <code>for...in</code> ітерує по ключах об'єкта.
    </p>
    <pre>
      <code>
{`const person = { name: 'John', age: 30 };

for (let key in person) {
  console.log(key + ': ' + person[key]);
}
// Виведе 'name: John' та 'age: 30'`}
      </code>
    </pre>

    <h5>for...of</h5>
    <p>
      Цикл <code>for...of</code> ітерує по значеннях ітерабельного об'єкта, такого як масив.
    </p>
    <pre>
      <code>
{`const fruits = ['apple', 'banana', 'cherry'];

for (let fruit of fruits) {
  console.log(fruit);
}
// Виведе 'apple', 'banana', 'cherry'`}
      </code>
    </pre>
  </p>

  <h4>Довідка</h4>
  <div className='accordion accordion-inner accordion-icon-left mt-3 mb-4' id='jsControlFlowAccordion'>
    <div className='accordion-item'>
      <h2 className='accordion-header' id='jsControlFlowHeadingOne'>
        <button className='accordion-button' type='button' data-bs-toggle='collapse' data-bs-target='#jsControlFlowCollapseOne' aria-expanded='true' aria-controls='jsControlFlowCollapseOne'>
          Як використовувати оператор <code>if</code> в JavaScript?
        </button>
      </h2>
      <div id='jsControlFlowCollapseOne' className='accordion-collapse collapse show' aria-labelledby='jsControlFlowHeadingOne' data-bs-parent='#jsControlFlowAccordion'>
        <div className='accordion-body'>
          Оператор <code>if</code> перевіряє умову, і якщо вона істинна, виконує блок коду. Ви також можете використовувати <code>else if</code> та <code>else</code> для перевірки додаткових умов або виконання коду, коли жодна умова не є істинною.
        </div>
      </div>
    </div>
    <div className='accordion-item'>
      <h2 className='accordion-header' id='jsControlFlowHeadingTwo'>
        <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#jsControlFlowCollapseTwo' aria-expanded='false' aria-controls='jsControlFlowCollapseTwo'>
          Які є цикли в JavaScript?
        </button>
      </h2>
      <div id='jsControlFlowCollapseTwo' className='accordion-collapse collapse' aria-labelledby='jsControlFlowHeadingTwo' data-bs-parent='#jsControlFlowAccordion'>
        <div className='accordion-body'>
          JavaScript підтримує кілька типів циклів, включаючи <code>for</code>, <code>while</code>, <code>do...while</code>, а також спеціалізовані цикли для об'єктів та масивів, такі як <code>for...in</code> та <code>for...of</code>.
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

export default CourseJs6;

