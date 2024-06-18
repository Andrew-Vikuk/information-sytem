import React from "react";
import {
  FaAngleDoubleRight,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";
import courseListHTML from "../../../scripts/CoursesListHTML";
import { HashLink as Link } from 'react-router-hash-link';
import { NavLink } from "react-router-dom";



const CourseHtml1 = () => {
  return (
    <>
      {/* ===================== Course Single Page start ===================== */}
      <div className='service-area pd-top-120 pd-bottom-90' id="course-single">
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
                    <img src='/assets/img/about/main_1.png' alt='img' className='service-banner-image' />
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
                    <img src='/assets/img/service/html_cat.jpg' alt='img' className="w-100 h-20"  style={{height: "300px", objectFit: "cover", marginBottom: "20px"}}/>
                  </div>
                  <div className='details'>
      <h3>Основи HTML</h3>
      <p>
        HTML (HyperText Markup Language) - це мова розмітки, яка використовується для створення структурованого вмісту веб-сторінок. HTML дозволяє визначати елементи сторінки та їх відношення між собою.
      </p>

      <h4>Структура HTML-документа</h4>
      <p>
        HTML-документ складається з ряду елементів, які визначають його структуру та вміст:
      </p>
      <ul>
        <li><code>&lt;!DOCTYPE html&gt;</code> - оголошення типу документа</li>
        <li><code>&lt;html&gt;</code> - кореневий елемент HTML, що містить увесь вміст сторінки</li>
        <li><code>&lt;head&gt;</code> - містить метадані документа та посилання на зовнішні ресурси</li>
        <li><code>&lt;title&gt;</code> - заголовок сторінки, який відображається у заголовку вкладки браузера</li>
        <li><code>&lt;body&gt;</code> - містить вміст сторінки, який відображається користувачу</li>
      </ul>

      <h4>Використання тегів заголовків, абзаців, списків тощо</h4>
      <p>
        HTML використовується для визначення різноманітних елементів вмісту сторінки:
      </p>
      <ul>
        <li><code>&lt;h1&gt;</code> до <code>&lt;h6&gt;</code> - заголовки різних рівнів</li>
        <li><code>&lt;p&gt;</code> - абзац тексту</li>
        <li><code>&lt;ul&gt;</code>, <code>&lt;ol&gt;</code>, <code>&lt;li&gt;</code> - списки</li>
        <li><code>&lt;a&gt;</code> - посилання</li>
        <li><code>&lt;img&gt;</code> - зображення</li>
        <li><code>&lt;div&gt;</code> - контейнер для інших елементів</li>
        <li><code>&lt;span&gt;</code> - інлайн-контейнер для тексту або інших елементів</li>
      </ul>

      <h4>Робота з посиланнями та зображеннями</h4>
      <p>
        Додавання посилань та зображень до сторінки - це важлива частина роботи з HTML:
      </p>
      <ul>
        <li>
          <strong>Посилання:</strong> Використовуйте тег <code>&lt;a&gt;</code> для створення посилань. Встановлюйте атрибут <code>href</code> для вказання URL-адреси посилання.
          <pre>
            <code>
              {`<a href="https://example.com">Перейти на приклад</a>`}
            </code>
          </pre>
        </li>
        <li>
          <strong>Зображення:</strong> Використовуйте тег <code>&lt;img&gt;</code> для вставки зображень. Встановлюйте атрибут <code>src</code> для вказання шляху до зображення та атрибут <code>alt</code> для надання альтернативного тексту.
          <pre>
            <code>
              {`<img src="image.jpg" alt="Опис зображення">`}
            </code>
          </pre>
        </li>
      </ul>

      <h4>Форматування тексту</h4>
      <p>
        HTML надає можливості для форматування тексту:
      </p>
      <ul>
        <li><code>&lt;strong&gt;</code> і <code>&lt;b&gt;</code> - для виділення жирним</li>
        <li><code>&lt;em&gt;</code> і <code>&lt;i&gt;</code> - для виділення курсивом</li>
        <li><code>&lt;br&gt;</code> - для вставки розриву рядка</li>
        <li><code>&lt;hr&gt;</code> - для вставки горизонтальної лінії</li>
      </ul>

      <h4>Таблиці</h4>
      <p>
        HTML дозволяє створювати таблиці для організації даних:
      </p>
      <ul>
        <li><code>&lt;table&gt;</code> - контейнер для таблиці</li>
        <li><code>&lt;tr&gt;</code> - рядок таблиці</li>
        <li><code>&lt;td&gt;</code> - комірка таблиці</li>
        <li><code>&lt;th&gt;</code> - заголовок комірки таблиці</li>
      </ul>
      <pre>
        <code>
          {`
            <table>
              <tr>
                <th>Заголовок 1</th>
                <th>Заголовок 2</th>
              </tr>
              <tr>
                <td>Дані 1</td>
                <td>Дані 2</td>
              </tr>
            </table>
          `}
        </code>
      </pre>

      <h4>Форми</h4>
      <p>
        HTML надає можливість створювати форми для збору даних від користувачів:
      </p>
      <ul>
        <li><code>&lt;form&gt;</code> - контейнер для форми</li>
        <li><code>&lt;input&gt;</code> - поле введення даних</li>
        <li><code>&lt;textarea&gt;</code> - багато-рядкове поле введення</li>
        <li><code>&lt;button&gt;</code> - кнопка</li>
        <li><code>&lt;select&gt;</code> - випадаючий список</li>
        <li><code>&lt;option&gt;</code> - пункт випадаючого списку</li>
      </ul>
      <pre>
        <code>
          {`
            <form action="/submit" method="post">
              <label for="name">Ім'я:</label>
              <input type="text" id="name" name="name">
              <input type="submit" value="Відправити">
            </form>
          `}
        </code>
      </pre>

      <h4>Розширення можливостей HTML</h4>
      <div className='accordion accordion-inner accordion-icon-left mt-3 mb-4' id='accordionExample'>
        <div className='accordion-item'>
          <h2 className='accordion-header' id='headingOne'>
            <button className='accordion-button' type='button' data-bs-toggle='collapse' data-bs-target='#collapseOne' aria-expanded='true' aria-controls='collapseOne'>
              Як створити форму в HTML?
            </button>
          </h2>
          <div id='collapseOne' className='accordion-collapse collapse show' aria-labelledby='headingOne' data-bs-parent='#accordionExample'>
            <div className='accordion-body'>
              HTML надає ряд вбудованих елементів для створення форм, таких як <code>&lt;input&gt;</code>, <code>&lt;select&gt;</code>, <code>&lt;textarea&gt;</code>. Вони дозволяють користувачам вводити дані та надсилати їх на сервер.
            </div>
          </div>
        </div>
        <div className='accordion-item'>
          <h2 className='accordion-header' id='headingTwo'>
            <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#collapseTwo' aria-expanded='false' aria-controls='collapseTwo'>
              Як вставити зображення в HTML?
            </button>
          </h2>
          <div id='collapseTwo' className='accordion-collapse collapse' aria-labelledby='headingTwo' data-bs-parent='#accordionExample'>
            <div className='accordion-body'>
              Для вставки зображення в HTML використовується тег <code>&lt;img&gt;</code>. Він має атрибут <code>src</code>, який вказує шлях до зображення, та додаткові атрибути для налаштування розміру, альтернативного тексту та інших параметрів.
            </div>
          </div>
        </div>
        <div className='accordion-item'>
          <h2 className='accordion-header' id='headingThree'>
            <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#collapseThree' aria-expanded='false' aria-controls='collapseThree'>
              Як вбудувати відео на веб-сторінку?
            </button>
          </h2>
          <div id='collapseThree' className='accordion-collapse collapse' aria-labelledby='headingThree' data-bs-parent='#accordionExample'>
            <div className='accordion-body'>
              Для вбудовування відео на веб-сторінку можна використати тег <code>&lt;video&gt;</code>. Він дозволяє вставити відео з вказаним джерелом та додатковими параметрами, такими як контроль програвання, автоматичне програвання та інше.
            </div>
          </div>
        </div>
      </div>

      <h4>Медіа-елементи</h4>
      <p>
        HTML дозволяє вставляти медіа-елементи, такі як аудіо та відео:
      </p>
      <ul>
        <li><code>&lt;audio&gt;</code> - аудіоплеєр</li>
        <li><code>&lt;video&gt;</code> - відеоплеєр</li>
        <li><code>&lt;source&gt;</code> - джерело медіа-файлу</li>
        <li><code>&lt;track&gt;</code> - текстові доріжки для відео</li>
      </ul>
      <pre>
        <code>
          {`
            <video controls>
              <source src="movie.mp4" type="video/mp4">
              Ваш браузер не підтримує відео-теги.
            </video>
          `}
        </code>
      </pre>

      <h4>Заключення</h4>
      <p>
        HTML - це основна мова розмітки для веб-розробки. Вивчення основних концепцій HTML дозволить вам створювати структуровані та доступні веб-сторінки.
      </p>

      <h4>Переваги використання HTML</h4>
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

export default CourseHtml1;
