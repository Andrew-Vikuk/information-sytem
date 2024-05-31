import React from "react";
import {
  FaArrowRight,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import courseListJs from "../../../scripts/CoursesListJs";

const CourseJs7 = () => {
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
  <h3>Замикання в JavaScript</h3>
  <p>
    Замикання (closures) - це одна з найпотужніших та гнучких можливостей в JavaScript. Замикання утворюється, коли функція "замикає" область видимості змінних, доступних на момент її створення.
  </p>

  <h4>Що таке замикання</h4>
  <p>
    Замикання виникає, коли функція оголошується всередині іншої функції і має доступ до змінних зовнішньої функції навіть після того, як зовнішня функція завершила своє виконання.
  </p>
  <pre>
    <code>
{`function outerFunction() {
  let outerVariable = 'Я зовнішня змінна';

  function innerFunction() {
    console.log(outerVariable);
  }

  return innerFunction;
}

const closureFunction = outerFunction();
closureFunction(); // Виведе 'Я зовнішня змінна'`}
    </code>
  </pre>

  <h4>Приклади використання замикань</h4>

  <h5>Інкапсуляція даних</h5>
  <p>
    Замикання дозволяють створювати приватні змінні, які недоступні за межами функції.
  </p>
  <pre>
    <code>
{`function createCounter() {
  let count = 0;

  return function() {
    count++;
    return count;
  };
}

const counter = createCounter();
console.log(counter()); // Виведе 1
console.log(counter()); // Виведе 2
console.log(counter()); // Виведе 3`}
    </code>
  </pre>

  <h5>Функції з налаштуваннями</h5>
  <p>
    Замикання можуть використовуватися для створення функцій з налаштуваннями або функцій-фабрик.
  </p>
  <pre>
    <code>
{`function createGreeting(greeting) {
  return function(name) {
    return greeting + ', ' + name;
  };
}

const sayHello = createGreeting('Привіт');
console.log(sayHello('Іван')); // Виведе 'Привіт, Іван'
console.log(sayHello('Марія')); // Виведе 'Привіт, Марія'

const sayGoodbye = createGreeting('До побачення');
console.log(sayGoodbye('Іван')); // Виведе 'До побачення, Іван'
console.log(sayGoodbye('Марія')); // Виведе 'До побачення, Марія'`}
    </code>
  </pre>

  <h5>Затримка виконання</h5>
  <p>
    Замикання часто використовуються в асинхронних операціях, таких як таймери або обробники подій.
  </p>
  <pre>
    <code>
{`for (let i = 1; i <= 3; i++) {
  setTimeout(function() {
    console.log(i);
  }, i * 1000);
}
// Виведе 1, 2, 3 з інтервалом в 1 секунду між виводами`}
    </code>
  </pre>

  <h4>Довідка</h4>
  <div className='accordion accordion-inner accordion-icon-left mt-3 mb-4' id='closuresAccordion'>
    <div className='accordion-item'>
      <h2 className='accordion-header' id='closuresHeadingOne'>
        <button className='accordion-button' type='button' data-bs-toggle='collapse' data-bs-target='#closuresCollapseOne' aria-expanded='true' aria-controls='closuresCollapseOne'>
          Як створити замикання в JavaScript?
        </button>
      </h2>
      <div id='closuresCollapseOne' className='accordion-collapse collapse show' aria-labelledby='closuresHeadingOne' data-bs-parent='#closuresAccordion'>
        <div className='accordion-body'>
          Замикання створюється, коли внутрішня функція має доступ до змінних з області видимості зовнішньої функції, навіть після того, як зовнішня функція завершила своє виконання.
        </div>
      </div>
    </div>
    <div className='accordion-item'>
      <h2 className='accordion-header' id='closuresHeadingTwo'>
        <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#closuresCollapseTwo' aria-expanded='false' aria-controls='closuresCollapseTwo'>
          Які практичні приклади використання замикань?
        </button>
      </h2>
      <div id='closuresCollapseTwo' className='accordion-collapse collapse' aria-labelledby='closuresHeadingTwo' data-bs-parent='#closuresAccordion'>
        <div className='accordion-body'>
          Замикання можуть використовуватися для інкапсуляції даних, створення функцій з налаштуваннями, затримки виконання та в асинхронних операціях.
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

export default CourseJs7;

