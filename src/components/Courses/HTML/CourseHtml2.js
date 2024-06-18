import React from "react";
import {
  FaAngleDoubleRight,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";
import { HashLink as Link } from 'react-router-hash-link';
import courseListHTML from "../../../scripts/CoursesListHTML";
import { NavLink } from "react-router-dom";


const CourseHtml2 = () => {
  return (
    <>
      {/* ===================== Course Single Page start ===================== */}
      <div className='service-area pd-top-120 pd-bottom-90'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-4 col-12'>
              <div className='td-sidebar service-sidebar'>
                <div className='widget widget_catagory'>
                   <Link className='btn btn-border-base' to='/courses#html'>
                      Назад до курсів
                    </Link>
                  <h5 className='widget-title mt-4 mb-2'>
                    Уроки по HTML
                  </h5>
                  <ul className='catagory-items'>
                  {courseListHTML.map((data, index) => (
                    <div key={index}>
                      <li>
                            <NavLink to={data.link}  className={({ isActive, isPending }) =>
                              isPending ? "pending" : isActive ? "active" : ""
                            }>{data.title}</NavLink>
                        </li>
                    </div>
                  ))}
                  </ul>
                </div>
                <div className='widget widget_author text-center'>
                  <div className='thumb'>
                    <img src='assets/img/about/main_1.png' alt='img' className='service-banner-image' />
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
                    <img src='assets/img/service/html_cat.jpg' alt='img' className="w-100 h-20"  style={{height: "300px", objectFit: "cover", marginBottom: "20px"}}/>
                  </div>
                  <div className='details'>
      <h3>Форми в HTML: Основні концепції</h3>
      <p>
        Форми - це важливий елемент веб-сторінок, який дозволяє користувачам взаємодіяти з вмістом та надсилати дані на сервер.
      </p>

      <h4>Створення форм та їх елементів</h4>
      <p>
        HTML надає ряд вбудованих елементів для створення форм:
      </p>
      <ul>
        <li><code>&lt;form&gt;</code> - контейнер для всіх елементів форми</li>
        <li><code>&lt;input&gt;</code> - елемент для введення тексту, чекбоксів, радіокнопок, кнопок тощо</li>
        <li><code>&lt;textarea&gt;</code> - багаторядкове поле для введення тексту</li>
        <li><code>&lt;button&gt;</code> - кнопка для відправлення форми</li>
        <li><code>&lt;select&gt;</code> та <code>&lt;option&gt;</code> - випадаючий список та його варіанти</li>
      </ul>

      <h4>Приклад базової форми</h4>
      <pre>
        <code>
          {`
            <form action="/submit" method="post">
              <label for="username">Ім'я користувача:</label>
              <input type="text" id="username" name="username" required>

              <label for="email">Електронна пошта:</label>
              <input type="email" id="email" name="email" required>

              <label for="password">Пароль:</label>
              <input type="password" id="password" name="password" required>

              <label for="gender">Стать:</label>
              <select id="gender" name="gender">
                <option value="male">Чоловік</option>
                <option value="female">Жінка</option>
                <option value="other">Інше</option>
              </select>

              <label for="bio">Біографія:</label>
              <textarea id="bio" name="bio"></textarea>

              <button type="submit">Відправити</button>
            </form>
          `}
        </code>
      </pre>

      <h4>Валідація форм на клієнтському рівні</h4>
      <p>
        HTML також дозволяє використовувати атрибути для валідації даних, введених користувачем:
      </p>
      <ul>
        <li><code>required</code> - обов'язкове поле</li>
        <li><code>pattern</code> - шаблон для перевірки введеного значення</li>
        <li><code>min</code> та <code>max</code> - мінімальне та максимальне значення для числових полів</li>
        <li><code>minlength</code> та <code>maxlength</code> - мінімальна та максимальна кількість символів для текстових полів</li>
        <li><code>type</code> - визначення типу введених даних, таких як <code>email</code>, <code>url</code>, <code>number</code> тощо</li>
      </ul>

      <h4>Приклад форми з валідацією</h4>
      <pre>
        <code>
          {`
            <form action="/submit" method="post">
              <label for="username">Ім'я користувача:</label>
              <input type="text" id="username" name="username" required minlength="3" maxlength="15">

              <label for="email">Електронна пошта:</label>
              <input type="email" id="email" name="email" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,}$">

              <label for="age">Вік:</label>
              <input type="number" id="age" name="age" required min="18" max="100">

              <button type="submit">Відправити</button>
            </form>
          `}
        </code>
      </pre>

      <h4>Використання атрибутів для встановлення властивостей форм</h4>
      <p>
        Для налаштування різних властивостей форм використовуються атрибути:
      </p>
      <ul>
        <li><code>action</code> - URL, до якого буде відправлений результат форми</li>
        <li><code>method</code> - метод відправлення даних (<code>GET</code> або <code>POST</code>)</li>
        <li><code>enctype</code> - тип кодування для передачі файлів (<code>multipart/form-data</code> для завантаження файлів)</li>
        <li><code>autocomplete</code> - включення або виключення автозаповнення для форми</li>
        <li><code>target</code> - визначення, де буде відкритий результат форми (<code>_self</code>, <code>_blank</code>, <code>_parent</code>, <code>_top</code>)</li>
      </ul>

      <h4>Приклад форми з додатковими атрибутами</h4>
      <pre>
        <code>
          {`
            <form action="/submit" method="post" enctype="multipart/form-data" autocomplete="off" target="_blank">
              <label for="username">Ім'я користувача:</label>
              <input type="text" id="username" name="username" required>

              <label for="profilePicture">Фото профілю:</label>
              <input type="file" id="profilePicture" name="profilePicture" accept="image/*">

              <button type="submit">Відправити</button>
            </form>
          `}
        </code>
      </pre>

      <h4>Розширення можливостей форм в HTML</h4>
      <div className='accordion accordion-inner accordion-icon-left mt-3 mb-4' id='accordionForms'>
        <div className='accordion-item'>
          <h2 className='accordion-header' id='headingFormsOne'>
            <button className='accordion-button' type='button' data-bs-toggle='collapse' data-bs-target='#collapseFormsOne' aria-expanded='true' aria-controls='collapseFormsOne'>
              Як використовувати checkbox та radio кнопки в HTML формах?
            </button>
          </h2>
          <div id='collapseFormsOne' className='accordion-collapse collapse show' aria-labelledby='headingFormsOne' data-bs-parent='#accordionForms'>
            <div className='accordion-body'>
              Елементи <code>&lt;input type="checkbox"&gt;</code> та <code>&lt;input type="radio"&gt;</code> використовуються для вибору одного або декількох значень. Checkbox дозволяє користувачам вибирати більше одного значення, тоді як radio кнопки дозволяють вибрати тільки одне значення зі списку.
              <pre>
                <code>
                  {`
                    <form>
                      <label><input type="checkbox" name="option1" value="Option 1"> Варіант 1</label>
                      <label><input type="checkbox" name="option2" value="Option 2"> Варіант 2</label>

                      <label><input type="radio" name="gender" value="male"> Чоловік</label>
                      <label><input type="radio" name="gender" value="female"> Жінка</label>
                      <button type="submit">Відправити</button>
                    </form>
                  `}
                </code>
              </pre>
            </div>
          </div>
        </div>
        <div className='accordion-item'>
          <h2 className='accordion-header' id='headingFormsTwo'>
            <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#collapseFormsTwo' aria-expanded='false' aria-controls='collapseFormsTwo'>
              Як створити випадаючий список (select) в HTML?
            </button>
          </h2>
          <div id='collapseFormsTwo' className='accordion-collapse collapse' aria-labelledby='headingFormsTwo' data-bs-parent='#accordionForms'>
            <div className='accordion-body'>
              Використовуйте елемент <code>&lt;select&gt;</code> для створення випадаючого списку. Внутрішні елементи <code>&lt;option&gt;</code> визначають варіанти вибору для користувача.
              <pre>
                <code>
                  {`
                    <form>
                      <label for="country">Країна:</label>
                      <select id="country" name="country">
                        <option value="ua">Україна</option>
                        <option value="us">США</option>
                        <option value="ca">Канада</option>
                      </select>
                      <button type="submit">Відправити</button>
                    </form>
                  `}
                </code>
              </pre>
            </div>
          </div>
        </div>
        <div className='accordion-item'>
          <h2 className='accordion-header' id='headingFormsThree'>
            <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#collapseFormsThree' aria-expanded='false' aria-controls='collapseFormsThree'>
              Як валідувати форми на клієнтському рівні за допомогою HTML5?
            </button>
          </h2>
          <div id='collapseFormsThree' className='accordion-collapse collapse' aria-labelledby='headingFormsThree' data-bs-parent='#accordionForms'>
            <div className='accordion-body'>
              HTML5 надає ряд нових атрибутів для валідації форм на клієнтському рівні, таких як <code>required</code>, <code>pattern</code>, <code>min</code>, <code>max</code> та інші. Вони дозволяють виконувати базову перевірку даних перед відправленням на сервер.
              <pre>
                <code>
                  {`
                    <form>
                      <label for="phone">Телефон:</label>
                      <input type="tel" id="phone" name="phone" pattern="[0-9]{3}-[0-9]{2}-[0-9]{2}" required>
                      <small>Формат: 123-45-67</small>
                      <button type="submit">Відправити</button>
                    </form>
                  `}
                </code>
              </pre>
            </div>
          </div>
        </div>
      </div>

      <h4>Заключення</h4>
      <p>
        Вивчення основ форм в HTML дозволить вам створювати інтерактивні веб-сторінки з введенням користувача та відправленням даних на сервер.
      </p>

      <h4>Переваги використання HTML форм</h4>
      <div className='row'>
        <div className='col-md-6'>
          <ul className='single-list-inner style-check style-check mb-3'>
            <li><FaCheckCircle /> Простота та зрозумілість</li>
            <li><FaCheckCircle /> Широка підтримка в браузерах</li>
            <li><FaCheckCircle /> Легка інтеграція з CSS та JavaScript</li>
          </ul>
        </div>
        <div className='col-md-6'>
          <ul className='single-list-inner style-check style-check mb-3'>
            <li><FaCheckCircle /> Підтримка семантичної розмітки</li>
            <li><FaCheckCircle /> Доступність для пошукових систем</li>
            <li><FaCheckCircle /> Розширюваність за допомогою нових елементів та атрибутів</li>
          </ul>
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

export default CourseHtml2;

