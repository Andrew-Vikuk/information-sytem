import React from "react";
import {
  FaAngleDoubleRight,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import courseListHTML from "../../../scripts/CoursesListHTML";

const CourseHtml3 = () => {
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

  <h3>Семантичні теги HTML: Вступ</h3>
  <p>
    Семантичні теги HTML допомагають краще організувати структуру веб-сторінок, роблячи їх більш зрозумілими для пошукових систем та доступними для користувачів з обмеженими можливостями.
  </p>

  <h4>Значення та використання семантичних тегів</h4>
  <p>
    Семантичні теги надають змістовну інформацію про зміст, що міститься в них. Розглянемо основні семантичні теги HTML:
  </p>
  <ul>
    <li><code>&lt;header&gt;</code> - призначений для верхньої частини веб-сторінки або розділу, зазвичай містить логотип, навігацію або заголовок.</li>
    <li><code>&lt;footer&gt;</code> - використовується для нижньої частини веб-сторінки або розділу, містить контактну інформацію, авторські права та посилання.</li>
    <li><code>&lt;nav&gt;</code> - містить навігаційні посилання по сайту.</li>
    <li><code>&lt;section&gt;</code> - використовується для розділення контенту на смислові секції.</li>
    <li><code>&lt;article&gt;</code> - представляє самостійний зміст, який може бути розповсюджений окремо, наприклад, стаття або блог-пост.</li>
    <li><code>&lt;aside&gt;</code> - містить інформацію, яка пов'язана з основним змістом, але не є частиною основного потоку контенту, наприклад, бокова панель або додаткові посилання.</li>
  </ul>

  <h4>Переваги використання семантичних тегів</h4>
  <p>
    Використання семантичних тегів має ряд переваг:
  </p>
  <ul>
    <li><strong>Підвищення доступності:</strong> Семантичні теги покращують доступність веб-сторінок для користувачів з обмеженими можливостями, допомагаючи екранним читачам краще інтерпретувати зміст сторінки.</li>
    <li><strong>Оптимізація для пошукових систем:</strong> Пошукові системи краще розуміють структуру та зміст веб-сторінки, що сприяє кращій індексації та ранжуванню в результатах пошуку.</li>
    <li><strong>Поліпшення організації контенту:</strong> Семантичні теги допомагають організувати контент більш логічно та зрозуміло як для розробників, так і для користувачів.</li>
  </ul>

  <h4>Приклад використання семантичних тегів</h4>
  <pre>
    <code>
      &lt;header&gt;<br></br>
        &lt;h1&gt;Мій Веб-Сайт&lt;/h1&gt;<br></br>
        &lt;nav&gt;<br></br>
          &lt;ul&gt;<br></br>
            &lt;li&gt;&lt;a href="#home"&gt;Головна&lt;/a&gt;&lt;/li&gt;<br></br>
            &lt;li&gt;&lt;a href="#about"&gt;Про нас&lt;/a&gt;&lt;/li&gt;<br></br>
            &lt;li&gt;&lt;a href="#services"&gt;Послуги&lt;/a&gt;&lt;/li&gt;<br></br>
            &lt;li&gt;&lt;a href="#contact"&gt;Контакти&lt;/a&gt;&lt;/li&gt;<br></br>
          &lt;/ul&gt;<br></br>
        &lt;/nav&gt;<br></br>
      &lt;/header&gt;<br></br><br></br>

      &lt;section&gt;<br></br>
        &lt;article&gt;<br></br>
          &lt;h2&gt;Заголовок статті&lt;/h2&gt;<br></br>
          &lt;p&gt;Текст статті...&lt;/p&gt;<br></br>
        &lt;/article&gt;<br></br>
        &lt;aside&gt;<br></br>
          &lt;h3&gt;Додаткова інформація&lt;/h3&gt;<br></br>
          &lt;p&gt;Тут можна розмістити додаткові відомості, пов'язані з основною статтею.&lt;/p&gt;<br></br>
        &lt;/aside&gt;<br></br>
      &lt;/section&gt;<br></br><br></br>

      &lt;footer&gt;<br></br>
        &lt;p&gt;Авторські права &copy; 2024 Мій Веб-Сайт&lt;/p&gt;<br></br>
      &lt;/footer&gt;<br></br>
    </code>
  </pre>

  <h4>Питання та відповіді</h4>
  <div className='accordion accordion-inner accordion-icon-left mt-3 mb-4' id='accordionSemanticTags'>
    <div className='accordion-item'>
      <h2 className='accordion-header' id='headingSemanticOne'>
        <button className='accordion-button' type='button' data-bs-toggle='collapse' data-bs-target='#collapseSemanticOne' aria-expanded='true' aria-controls='collapseSemanticOne'>
          Чому важливо використовувати семантичні теги?
        </button>
      </h2>
      <div id='collapseSemanticOne' className='accordion-collapse collapse show' aria-labelledby='headingSemanticOne' data-bs-parent='#accordionSemanticTags'>
        <div className='accordion-body'>
          Використання семантичних тегів дозволяє покращити розуміння структури веб-сторінки як для пошукових систем, так і для користувачів, що використовують екранні читачі. Це підвищує доступність та SEO-оптимізацію вашого сайту.
        </div>
      </div>
    </div>
    <div className='accordion-item'>
      <h2 className='accordion-header' id='headingSemanticTwo'>
        <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#collapseSemanticTwo' aria-expanded='false' aria-controls='collapseSemanticTwo'>
          Як семантичні теги допомагають у SEO?
        </button>
      </h2>
      <div id='collapseSemanticTwo' className='accordion-collapse collapse' aria-labelledby='headingSemanticTwo' data-bs-parent='#accordionSemanticTags'>
        <div className='accordion-body'>
          Семантичні теги допомагають пошуковим системам краще розуміти зміст та структуру вашої веб-сторінки. Це сприяє кращій індексації та ранжуванню у результатах пошуку, що може привести до збільшення трафіку на ваш сайт.
        </div>
      </div>
    </div>
    <div className='accordion-item'>
      <h2 className='accordion-header' id='headingSemanticThree'>
        <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#collapseSemanticThree' aria-expanded='false' aria-controls='collapseSemanticThree'>
          Які переваги використання семантичних тегів для доступності?
        </button>
      </h2>
      <div id='collapseSemanticThree' className='accordion-collapse collapse' aria-labelledby='headingSemanticThree' data-bs-parent='#accordionSemanticTags'>
        <div className='accordion-body'>
          Семантичні теги роблять ваш сайт більш доступним для користувачів з обмеженими можливостями, які використовують екранні читачі та інші допоміжні технології. Це дозволяє таким користувачам легше орієнтуватися та взаємодіяти з вашим сайтом.
        </div>
      </div>
    </div>
  </div>

  <h4>Заключення</h4>
  <p>
    Використання семантичних тегів HTML допомагає створювати більш організовані, доступні та SEO-оптимізовані веб-сторінки. Впровадження цих тегів у ваші проекти принесе значні переваги як для користувачів, так і для пошукових систем.
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

export default CourseHtml3;
