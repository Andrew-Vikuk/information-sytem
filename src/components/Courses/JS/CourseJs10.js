import React from "react";
import {
  FaArrowRight,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import courseListJs from "../../../scripts/CoursesListJs";

const CourseJs10 = () => {
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
  <h3>Класи в JavaScript</h3>
  <p>
    Класи в JavaScript були введені в ECMAScript 6 (ES6) та надають зручний синтаксис для роботи з об'єктно-орієнтованим програмуванням. Класи є синтаксичним цукром поверх прототипного наслідування.
  </p>

  <h4>Оголошення класів</h4>
  <p>
    Для оголошення класу використовується ключове слово <code>class</code>:
  </p>
  <pre>
    <code>
{`class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  greet() {
    console.log(\`Привіт, я \${this.name}\`);
  }
}

// Створення екземпляра класу
const person = new Person('Іван', 25);
person.greet(); // Виведе 'Привіт, я Іван'`}
    </code>
  </pre>

  <h4>Конструктори та методи</h4>
  <p>
    Клас може мати конструктор - спеціальний метод, який викликається під час створення нового екземпляра класу. Методи оголошуються всередині класу без використання ключового слова <code>function</code>.
  </p>
  <pre>
    <code>
{`class Car {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }

  startEngine() {
    console.log(\`\${this.brand} \${this.model} запускає двигун.\`);
  }
}

// Створення екземпляра класу
const car = new Car('Toyota', 'Corolla');
car.startEngine(); // Виведе 'Toyota Corolla запускає двигун.'`}
    </code>
  </pre>

  <h4>Наслідування класів</h4>
  <p>
    Класи можуть наслідувати інші класи за допомогою ключового слова <code>extends</code>. Наслідуваний клас (підклас) успадковує всі властивості та методи батьківського класу.
  </p>
  <pre>
    <code>
{`class Animal {
  constructor(name) {
    this.name = name;
  }

  makeSound() {
    console.log('Звук тварини');
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name); // Виклик конструктора батьківського класу
    this.breed = breed;
  }

  makeSound() {
    console.log('Гав гав');
  }

  displayBreed() {
    console.log(\`Порода: \${this.breed}\`);
  }
}

// Створення екземпляра підкласу
const dog = new Dog('Бобик', 'Вівчарка');
dog.makeSound(); // Виведе 'Гав гав'
dog.displayBreed(); // Виведе 'Порода: Вівчарка'`}
    </code>
  </pre>

  <h4>Довідка</h4>
  <div className='accordion accordion-inner accordion-icon-left mt-3 mb-4' id='classesAccordion'>
    <div className='accordion-item'>
      <h2 className='accordion-header' id='classesHeadingOne'>
        <button className='accordion-button' type='button' data-bs-toggle='collapse' data-bs-target='#classesCollapseOne' aria-expanded='true' aria-controls='classesCollapseOne'>
          Що таке клас в JavaScript?
        </button>
      </h2>
      <div id='classesCollapseOne' className='accordion-collapse collapse show' aria-labelledby='classesHeadingOne' data-bs-parent='#classesAccordion'>
        <div className='accordion-body'>
          Клас - це синтаксична конструкція в JavaScript, яка дозволяє створювати об'єкти з певними властивостями та методами. Класи надають більш зручний і читабельний спосіб створення об'єктів та реалізації наслідування.
        </div>
      </div>
    </div>
    <div className='accordion-item'>
      <h2 className='accordion-header' id='classesHeadingTwo'>
        <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#classesCollapseTwo' aria-expanded='false' aria-controls='classesCollapseTwo'>
          Як працює наслідування класів в JavaScript?
        </button>
      </h2>
      <div id='classesCollapseTwo' className='accordion-collapse collapse' aria-labelledby='classesHeadingTwo' data-bs-parent='#classesAccordion'>
        <div className='accordion-body'>
          Наслідування класів в JavaScript здійснюється за допомогою ключового слова <code>extends</code>. Підклас може успадковувати властивості та методи батьківського класу, а також додавати або перевизначати власні методи.
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

export default CourseJs10;

