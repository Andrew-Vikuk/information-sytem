import React from "react";
import {
  FaAngleDoubleRight,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import courseListHTML from "../../../scripts/CoursesListHTML";

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
                  <h5 className='widget-title'>
                    <FaArrowRight /> Інші Уроки по HTML
                  </h5>
                  <ul className='catagory-items'>
                  {courseListHTML.map((data, index) => (
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
                    <img src='../assets/img/about/main_1.png' alt='img' className='service-banner-image' />
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

  <h3>Основи HTML: Поглиблене вивчення</h3>
  <p>
    HTML (HyperText Markup Language) - це мова розмітки, яка використовується для створення структурованого вмісту веб-сторінок. Дозволяє визначати елементи сторінки та їх відношення між собою.
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
  </ul>

  <h4>Робота з посиланнями та зображеннями</h4>
  <p>
    Додавання посилань та зображень до сторінки - це важлива частина роботи з HTML:
  </p>
  <ul>
    <li><strong>Посилання:</strong> Використовуйте тег <code>&lt;a&gt;</code> для створення посилань. Встановлюйте атрибут <code>href</code> для вказання URL-адреси посилання.</li>
    <li><strong>Зображення:</strong> Використовуйте тег <code>&lt;img&gt;</code> для вставки зображень. Встановлюйте атрибут <code>src</code> для вказання шляху до зображення.</li>
  </ul>

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

  <h4>Заключення</h4>
  <p>
    HTML - це основна мова розмітки для веб-розробки. Вивчення основних концепцій HTML дозволить вам створювати структуровані та доступні веб-сторінки.
  </p>

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
