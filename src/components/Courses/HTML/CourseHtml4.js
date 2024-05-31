import React from "react";
import {
  FaAngleDoubleRight,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import courseListHTML from "../../../scripts/CoursesListHTML";

const CourseHtml4 = () => {
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

  <h3>Основи форматування тексту в HTML і CSS</h3>

  <p>
    Форматування тексту є ключовим аспектом створення веб-сторінок. HTML надає різні теги для структурування тексту, а CSS дозволяє стилізувати цей текст для покращення його вигляду та читабельності.
  </p>

  <h4>Заголовки та абзаци</h4>

  <p>
    Заголовки в HTML визначаються тегами <code>&lt;h1&gt;</code> до <code>&lt;h6&gt;</code>, де <code>&lt;h1&gt;</code> є найбільшим і найважливішим заголовком, а <code>&lt;h6&gt;</code> - найменшим.
  </p>

  <pre>
    <code>
      {`
        <h1>Заголовок 1 рівня</h1>
        <h2>Заголовок 2 рівня</h2>
        <h3>Заголовок 3 рівня</h3>
        <h4>Заголовок 4 рівня</h4>
        <h5>Заголовок 5 рівня</h5>
        <h6>Заголовок 6 рівня</h6>
      `}
    </code>
  </pre>

  <p>
    Абзаци визначаються тегом <code>&lt;p&gt;</code> і використовуються для групування тексту в логічні блоки.
  </p>

  <pre>
    <code>
      {`
        <p>Це приклад абзацу. Абзаци використовуються для розділення тексту на логічні частини.</p>
      `}
    </code>
  </pre>

  <h4>Списки (нумеровані та марковані)</h4>

  <p>
    HTML підтримує два основних типи списків: нумеровані (впорядковані) та марковані (невпорядковані).
  </p>

  <p><strong>Нумеровані списки</strong></p>
  <pre>
    <code>
      {`
        <ol>
          <li>Перший пункт</li>
          <li>Другий пункт</li>
          <li>Третій пункт</li>
        </ol>
      `}
    </code>
  </pre>

  <p><strong>Марковані списки</strong></p>
  <pre>
    <code>
      {`
        <ul>
          <li>Перший пункт</li>
          <li>Другий пункт</li>
          <li>Третій пункт</li>
        </ul>
      `}
    </code>
  </pre>

  <h4>Стрічкові та блочні елементи</h4>

  <p>
    В HTML елементи можуть бути блочними або стрічковими. Блочні елементи займають всю ширину батьківського елемента і починаються з нового рядка. Стрічкові елементи займають лише необхідну ширину і розміщуються в одному рядку з іншими стрічковими елементами.
  </p>

  <p><strong>Блочні елементи</strong></p>
  <pre>
    <code>
      {`
        <div>Це блочний елемент.</div>
        <p>Це теж блочний елемент.</p>
      `}
    </code>
  </pre>

  <p><strong>Стрічкові елементи</strong></p>
  <pre>
    <code>
      {`
        <span>Це стрічковий елемент.</span>
        <a href="#">Це теж стрічковий елемент.</a>
      `}
    </code>
  </pre>

  <h4>Приклад форматування тексту</h4>

  <p>
    Нижче наведено приклад форматування тексту, де використані заголовки, абзаци, списки, стрічкові та блочні елементи.
  </p>

  <pre>
    <code>
      {`
        <h1>Великий заголовок</h1>
        <p>Це абзац з текстом. Він використовується для групування речень в логічні блоки.</p>
        <h2>Список завдань</h2>
        <ol>
          <li>Перше завдання</li>
          <li>Друге завдання</li>
          <li>Третє завдання</li>
        </ol>
        <p>Тепер приклад маркованого списку:</p>
        <ul>
          <li>Перший пункт</li>
          <li>Другий пункт</li>
          <li>Третій пункт</li>
        </ul>
        <div>Це блочний елемент. Він займає всю ширину.</div>
        <p>Це абзац, а всередині нього <span>стрічковий елемент</span> та <a href="#">посилання</a>.</p>
      `}
    </code>
  </pre>

  <div className='accordion accordion-inner accordion-icon-left mt-3 mb-4' id='accordionFormatting'>
    <div className='accordion-item'>
      <h2 className='accordion-header' id='headingFormattingOne'>
        <button className='accordion-button' type='button' data-bs-toggle='collapse' data-bs-target='#collapseFormattingOne' aria-expanded='true' aria-controls='collapseFormattingOne'>
          Як правильно використовувати заголовки в HTML?
        </button>
      </h2>
      <div id='collapseFormattingOne' className='accordion-collapse collapse show' aria-labelledby='headingFormattingOne' data-bs-parent='#accordionFormatting'>
        <div className='accordion-body'>
          Заголовки в HTML допомагають структурувати контент. Використовуйте <code>&lt;h1&gt;</code> для основного заголовка сторінки і далі <code>&lt;h2&gt;</code> до <code>&lt;h6&gt;</code> для підзаголовків, відповідно до їх ієрархії.
        </div>
      </div>
    </div>
    <div className='accordion-item'>
      <h2 className='accordion-header' id='headingFormattingTwo'>
        <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#collapseFormattingTwo' aria-expanded='false' aria-controls='collapseFormattingTwo'>
          Яка різниця між блочними та стрічковими елементами?
        </button>
      </h2>
      <div id='collapseFormattingTwo' className='accordion-collapse collapse' aria-labelledby='headingFormattingTwo' data-bs-parent='#accordionFormatting'>
        <div className='accordion-body'>
          Блочні елементи займають всю ширину контейнера і починаються з нового рядка. Стрічкові елементи займають тільки необхідну ширину і можуть розташовуватися в одному рядку з іншими стрічковими елементами.
        </div>
      </div>
    </div>
    <div className='accordion-item'>
      <h2 className='accordion-header' id='headingFormattingThree'>
        <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#collapseFormattingThree' aria-expanded='false' aria-controls='collapseFormattingThree'>
          Як створювати марковані та нумеровані списки?
        </button>
      </h2>
      <div id='collapseFormattingThree' className='accordion-collapse collapse' aria-labelledby='headingFormattingThree' data-bs-parent='#accordionFormatting'>
        <div className='accordion-body'>
          Для створення нумерованих списків використовуйте тег <code>&lt;ol&gt;</code> з тегами <code>&lt;li&gt;</code> для кожного елемента. Для маркованих списків використовуйте тег <code>&lt;ul&gt;</code> з тегами <code>&lt;li&gt;</code>.
        </div>
      </div>
    </div>
  </div>

  <h4>Заключення</h4>
  <p>
    Володіння навичками форматування тексту в HTML і CSS є важливою частиною веб-розробки. Використовуючи заголовки, абзаци, списки, стрічкові та блочні елементи, ви можете створювати структуровані та читабельні веб-сторінки.
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

export default CourseHtml4;
