import React from "react";
import {
  FaArrowRight,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import courseListJs from "../../../scripts/CoursesListJs";

const CourseJs9 = () => {
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
  <h3>Прототипне наслідування в JavaScript</h3>
  <p>
    Прототипне наслідування - це спосіб, яким об'єкти в JavaScript можуть успадковувати властивості та методи від інших об'єктів. Кожен об'єкт має свій прототип (prototype), який може бути використаний як шаблон для створення нових об'єктів.
  </p>

  <h4>Прототипи та ланцюжок прототипів</h4>
  <p>
    В JavaScript кожен об'єкт має приховане посилання на інший об'єкт, який називається його прототипом. Цей прототип може мати власний прототип, формуючи таким чином ланцюжок прототипів (prototype chain). Коли доступ до властивості або методу здійснюється через об'єкт, JavaScript спочатку шукає цю властивість або метод у самому об'єкті, а якщо не знаходить, продовжує пошук у ланцюжку прототипів.
  </p>
  <pre>
    <code>
{`const person = {
  greet() {
    console.log('Привіт');
  }
};

const student = {
  study() {
    console.log('Я вчуся');
  }
};

// Встановлення прототипу
student.__proto__ = person;

student.greet(); // Виведе 'Привіт'
student.study(); // Виведе 'Я вчуся'`}
    </code>
  </pre>

  <h4>Наслідування об'єктів</h4>
  <p>
    JavaScript дозволяє створювати нові об'єкти, які наслідують властивості та методи від інших об'єктів. Для цього можна використовувати Object.create() або класові синтаксиси, представлені в ES6.
  </p>

  <h5>Object.create()</h5>
  <p>
    Метод Object.create() створює новий об'єкт, який наслідує прототип від зазначеного об'єкта.
  </p>
  <pre>
    <code>
{`const person = {
  greet() {
    console.log('Привіт');
  }
};

const student = Object.create(person);
student.study = function() {
  console.log('Я вчуся');
};

student.greet(); // Виведе 'Привіт'
student.study(); // Виведе 'Я вчуся'`}
    </code>
  </pre>

  <h5>Класи (ES6)</h5>
  <p>
    В ES6 були введені класи, які забезпечують більш зручний синтаксис для створення об'єктів та реалізації наслідування.
  </p>
  <pre>
    <code>
{`class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log('Привіт, я ' + this.name);
  }
}

class Student extends Person {
  study() {
    console.log('Я вчуся');
  }
}

const student = new Student('Іван');
student.greet(); // Виведе 'Привіт, я Іван'
student.study(); // Виведе 'Я вчуся'`}
    </code>
  </pre>

  <h4>Довідка</h4>
  <div className='accordion accordion-inner accordion-icon-left mt-3 mb-4' id='inheritanceAccordion'>
    <div className='accordion-item'>
      <h2 className='accordion-header' id='inheritanceHeadingOne'>
        <button className='accordion-button' type='button' data-bs-toggle='collapse' data-bs-target='#inheritanceCollapseOne' aria-expanded='true' aria-controls='inheritanceCollapseOne'>
          Що таке прототипне наслідування?
        </button>
      </h2>
      <div id='inheritanceCollapseOne' className='accordion-collapse collapse show' aria-labelledby='inheritanceHeadingOne' data-bs-parent='#inheritanceAccordion'>
        <div className='accordion-body'>
          Прототипне наслідування - це механізм в JavaScript, який дозволяє об'єктам наслідувати властивості та методи інших об'єктів через їх прототипи.
        </div>
      </div>
    </div>
    <div className='accordion-item'>
      <h2 className='accordion-header' id='inheritanceHeadingTwo'>
        <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#inheritanceCollapseTwo' aria-expanded='false' aria-controls='inheritanceCollapseTwo'>
          Як використовувати Object.create() для наслідування?
        </button>
      </h2>
      <div id='inheritanceCollapseTwo' className='accordion-collapse collapse' aria-labelledby='inheritanceHeadingTwo' data-bs-parent='#inheritanceAccordion'>
        <div className='accordion-body'>
          Метод Object.create() створює новий об'єкт, який наслідує прототип від зазначеного об'єкта. Це дозволяє створювати об'єкти, які мають доступ до властивостей та методів прототипного об'єкта.
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

export default CourseJs9;

