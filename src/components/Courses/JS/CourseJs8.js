import React from "react";
import {
  FaArrowRight,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import courseListJs from "../../../scripts/CoursesListJs";

const CourseJs8 = () => {
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
  <h3>Контекст виклику (this) в JavaScript</h3>
  <p>
    Контекст виклику (this) - це ключове слово в JavaScript, яке визначає, який об'єкт викликає поточну функцію. Контекст залежить від способу виклику функції і може змінюватися в різних ситуаціях.
  </p>

  <h4>Контекст у функціях</h4>
  <p>
    В залежності від способу виклику функції, this може посилатися на різні об'єкти.
  </p>

  <h5>Глобальний контекст</h5>
  <p>
    В глобальному контексті (поза будь-якими функціями) this посилається на глобальний об'єкт. У браузері це об'єкт window.
  </p>
  <pre>
    <code>
{`console.log(this); // Виведе глобальний об'єкт (window в браузері)`}
    </code>
  </pre>

  <h5>Контекст в методах об'єкта</h5>
  <p>
    В методі об'єкта this посилається на сам об'єкт.
  </p>
  <pre>
    <code>
{`const person = {
  name: 'Іван',
  greet() {
    console.log('Привіт, я ' + this.name);
  }
};

person.greet(); // Виведе 'Привіт, я Іван'`}
    </code>
  </pre>

  <h5>Контекст у функціях</h5>
  <p>
    В звичайній функції this за замовчуванням посилається на глобальний об'єкт (window в браузері). В строгому режимі (strict mode) this буде undefined.
  </p>
  <pre>
    <code>
{`function showThis() {
  console.log(this);
}

showThis(); // Виведе глобальний об'єкт (window), або undefined в strict mode`}
    </code>
  </pre>

  <h5>Контекст в стрілкових функціях</h5>
  <p>
    Стрілкові функції не мають власного контексту this. Вони успадковують this з зовнішньої функції або області, в якій вони були визначені.
  </p>
  <pre>
    <code>
{`const person = {
  name: 'Іван',
  greet: () => {
    console.log('Привіт, я ' + this.name);
  }
};

person.greet(); // this.name буде undefined, оскільки стрілкова функція не має власного this`}
    </code>
  </pre>

  <h4>Методи bind, call, apply</h4>
  <p>
    Методи bind, call та apply дозволяють явно встановлювати контекст this для функції.
  </p>

  <h5>Метод bind</h5>
  <p>
    Метод bind створює нову функцію з прив'язаним контекстом this.
  </p>
  <pre>
    <code>
{`const person = {
  name: 'Іван'
};

function greet() {
  console.log('Привіт, я ' + this.name);
}

const boundGreet = greet.bind(person);
boundGreet(); // Виведе 'Привіт, я Іван'`}
    </code>
  </pre>

  <h5>Метод call</h5>
  <p>
    Метод call викликає функцію з вказаним контекстом this та аргументами, переданими по одному.
  </p>
  <pre>
    <code>
{`const person = {
  name: 'Іван'
};

function greet(greeting) {
  console.log(greeting + ', я ' + this.name);
}

greet.call(person, 'Привіт'); // Виведе 'Привіт, я Іван'`}
    </code>
  </pre>

  <h5>Метод apply</h5>
  <p>
    Метод apply викликає функцію з вказаним контекстом this та аргументами, переданими як масив.
  </p>
  <pre>
    <code>
{`const person = {
  name: 'Іван'
};

function greet(greeting, punctuation) {
  console.log(greeting + ', я ' + this.name + punctuation);
}

greet.apply(person, ['Привіт', '!']); // Виведе 'Привіт, я Іван!'`}
    </code>
  </pre>

  <h4>Довідка</h4>
  <div className='accordion accordion-inner accordion-icon-left mt-3 mb-4' id='contextAccordion'>
    <div className='accordion-item'>
      <h2 className='accordion-header' id='contextHeadingOne'>
        <button className='accordion-button' type='button' data-bs-toggle='collapse' data-bs-target='#contextCollapseOne' aria-expanded='true' aria-controls='contextCollapseOne'>
          Що таке контекст this у JavaScript?
        </button>
      </h2>
      <div id='contextCollapseOne' className='accordion-collapse collapse show' aria-labelledby='contextHeadingOne' data-bs-parent='#contextAccordion'>
        <div className='accordion-body'>
          Контекст this у JavaScript - це ключове слово, яке вказує на об'єкт, який викликає поточну функцію. Контекст this залежить від способу виклику функції.
        </div>
      </div>
    </div>
    <div className='accordion-item'>
      <h2 className='accordion-header' id='contextHeadingTwo'>
        <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#contextCollapseTwo' aria-expanded='false' aria-controls='contextCollapseTwo'>
          Яка різниця між методами bind, call та apply?
        </button>
      </h2>
      <div id='contextCollapseTwo' className='accordion-collapse collapse' aria-labelledby='contextHeadingTwo' data-bs-parent='#contextAccordion'>
        <div className='accordion-body'>
          Метод bind створює нову функцію з прив'язаним контекстом this. Методи call та apply викликають функцію з вказаним контекстом this, але call передає аргументи по одному, а apply - як масив.
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

export default CourseJs8;

