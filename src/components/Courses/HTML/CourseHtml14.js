import React from "react";
import {
  FaAngleDoubleRight,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";
import { HashLink as Link } from 'react-router-hash-link';
import courseListHTML from "../../../scripts/CoursesListHTML";
import { NavLink } from "react-router-dom";


const CourseHtml14 = () => {
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
      <h3>HTML Макети</h3>
      <p>
        Створення макетів у HTML є ключовою частиною веб-розробки. Макет визначає, як елементи будуть розташовані на веб-сторінці, що допомагає створити зрозумілу та естетично приємну структуру для користувачів.
      </p>
      
      <h4>HTML Елементи макета</h4>
      <p>
        Для створення макетів в HTML використовуються спеціальні елементи, такі як <code>&lt;div&gt;</code>, <code>&lt;header&gt;</code>, <code>&lt;footer&gt;</code>, <code>&lt;section&gt;</code>, <code>&lt;article&gt;</code>, і <code>&lt;aside&gt;</code>. Кожен з цих елементів має своє призначення і допомагає структурувати контент.
      </p>
      <pre>
        <code>
          {`
            <div class="container">
              <header>Головний заголовок</header>
              <nav>Навігація</nav>
              <section>
                <article>Стаття 1</article>
                <article>Стаття 2</article>
              </section>
              <aside>Бокова панель</aside>
              <footer>Нижній колонтитул</footer>
            </div>
          `}
        </code>
      </pre>

      <h4>HTML Методи розміщення</h4>
      <p>
        Існує кілька методів розміщення елементів на веб-сторінці. Найпопулярніші з них включають використання таблиць, float, flexbox і grid. Кожен метод має свої переваги та недоліки.
      </p>
      <pre>
        <code>
          {`
            /* Приклад розміщення з використанням flexbox */
            .container {
              display: flex;
              flex-direction: column;
            }
            header, nav, section, aside, footer {
              padding: 10px;
              border: 1px solid #ccc;
            }
          `}
        </code>
      </pre>

      <h4>Який обрати?</h4>
      <p>
        Вибір методу розміщення залежить від ваших потреб. Flexbox підходить для простих макетів з одновимірними розташуваннями (по осі X або Y), в той час як Grid краще підходить для складніших двовимірних макетів. Таблиці варто використовувати для табличних даних, а float - для простих макетів, хоча останніми роками їх використання значно зменшилось на користь flexbox та grid.
      </p>

      <h4>Accordion: Детальніше про макети</h4>
      <div className='accordion accordion-inner accordion-icon-left mt-3 mb-4' id='accordionHtmlLayouts'>
        <div className='accordion-item'>
          <h2 className='accordion-header' id='headingHtmlLayouts1'>
            <button
              className='accordion-button'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#collapseHtmlLayouts1'
              aria-expanded='true'
              aria-controls='collapseHtmlLayouts1'
            >
              Вибір методу розміщення
            </button>
          </h2>
          <div id='collapseHtmlLayouts1' className='accordion-collapse collapse show' aria-labelledby='headingHtmlLayouts1' data-bs-parent='#accordionHtmlLayouts'>
            <div className='accordion-body'>
              Flexbox і Grid є сучасними методами розміщення елементів на веб-сторінках. Flexbox краще підходить для розміщення елементів по одній осі, в той час як Grid дозволяє створювати складні двовимірні макети. Вибір між цими методами залежить від структури вашого макету і вимог до адаптивності.
            </div>
          </div>
        </div>
        <div className='accordion-item'>
          <h2 className='accordion-header' id='headingHtmlLayouts2'>
            <button
              className='accordion-button collapsed'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#collapseHtmlLayouts2'
              aria-expanded='false'
              aria-controls='collapseHtmlLayouts2'
            >
              Переваги Flexbox
            </button>
          </h2>
          <div id='collapseHtmlLayouts2' className='accordion-collapse collapse' aria-labelledby='headingHtmlLayouts2' data-bs-parent='#accordionHtmlLayouts'>
            <div className='accordion-body'>
              Flexbox є простим у використанні і дозволяє легко розміщувати елементи в центрі, змінювати порядок елементів, і адаптувати макет до різних розмірів екрану. Він ідеально підходить для створення адаптивних макетів і гнучких контейнерів.
            </div>
          </div>
        </div>
        <div className='accordion-item'>
          <h2 className='accordion-header' id='headingHtmlLayouts3'>
            <button
              className='accordion-button collapsed'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#collapseHtmlLayouts3'
              aria-expanded='false'
              aria-controls='collapseHtmlLayouts3'
            >
              Переваги Grid
            </button>
          </h2>
          <div id='collapseHtmlLayouts3' className='accordion-collapse collapse' aria-labelledby='headingHtmlLayouts3' data-bs-parent='#accordionHtmlLayouts'>
            <div className='accordion-body'>
              Grid дозволяє створювати складні макети з двовимірною сіткою, що дозволяє розміщувати елементи як по горизонталі, так і по вертикалі. Це ідеальний вибір для створення складних і адаптивних макетів, які вимагають точного розташування елементів.
            </div>
          </div>
        </div>
      </div>

      <h4>Переваги використання сучасних методів розміщення</h4>
      <div className='row'>
        <div className='col-md-6'>
          <ul className='single-list-inner style-check style-check mb-3'>
            <li><FaCheckCircle /> Полегшення створення адаптивних макетів</li>
            <li><FaCheckCircle /> Гнучкість у розміщенні елементів</li>
            <li><FaCheckCircle /> Зменшення складності коду</li>
          </ul>
        </div>
        <div className='col-md-6'>
          <ul className='single-list-inner style-check style-check mb-3'>
            <li><FaCheckCircle /> Підтримка сучасних браузерів</li>
            <li><FaCheckCircle /> Поліпшення користувацького досвіду</li>
            <li><FaCheckCircle /> Легке створення складних макетів</li>
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

export default CourseHtml14;
