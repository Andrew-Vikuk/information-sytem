import React from "react";
import {
  FaAngleDoubleRight,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import courseListHTML from "../../../scripts/CoursesListHTML";

const CourseHtml11 = () => {
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

  <h3>HTML Iframes - Фрейми</h3>

  <p>
    Фрейми (Iframes) в HTML дозволяють вбудовувати інші документи HTML в поточну веб-сторінку. Це корисно для включення вмісту з інших джерел, таких як відео, карти, або інші веб-сторінки.
  </p>

  <h4>HTML Iframe Синтаксис фрейма</h4>

  <p>
    Основний синтаксис для створення фрейма використовує тег <code>&lt;iframe&gt;</code>. Ось приклад:
  </p>

  <pre>
    <code>
      {`
        <iframe src="https://www.example.com"></iframe>
      `}
    </code>
  </pre>

  <h4>Iframe - Встановити висоту та ширину фрейму</h4>

  <p>
    Ви можете встановити висоту та ширину фрейма за допомогою атрибутів <code>height</code> та <code>width</code>. Наприклад:
  </p>

  <pre>
    <code>
      {`
        <iframe src="https://www.example.com" width="600" height="400"></iframe>
      `}
    </code>
  </pre>

  <h4>Iframe - Видалити межу фрейма</h4>

  <p>
    За замовчуванням фрейми можуть мати межу навколо них. Ви можете видалити межу, встановивши атрибут <code>style</code> або використовуючи CSS. Наприклад:
  </p>

  <pre>
    <code>
      {`
        <iframe src="https://www.example.com" style="border:none;"></iframe>
      `}
    </code>
  </pre>

  <h4>Iframe - Ціль для посилання</h4>

  <p>
    Ви можете використовувати фрейм як ціль для посилання. Для цього надайте ідентифікатор <code>id</code> фрейму та використовуйте атрибут <code>target</code> у посиланні. Наприклад:
  </p>

  <pre>
    <code>
      {`
        <iframe id="myFrame" src="https://www.example.com" width="600" height="400"></iframe>
        <a href="https://www.wikipedia.org" target="myFrame">Відкрити Wikipedia у фреймі</a>
      `}
    </code>
  </pre>

  <div className='accordion accordion-inner accordion-icon-left mt-3 mb-4' id='accordionIframe'>
    <div className='accordion-item'>
      <h2 className='accordion-header' id='headingIframe1'>
        <button className='accordion-button' type='button' data-bs-toggle='collapse' data-bs-target='#collapseIframe1' aria-expanded='true' aria-controls='collapseIframe1'>
          HTML Iframe Синтаксис фрейма
        </button>
      </h2>
      <div id='collapseIframe1' className='accordion-collapse collapse show' aria-labelledby='headingIframe1' data-bs-parent='#accordionIframe'>
        <div className='accordion-body'>
          Основний синтаксис для створення фрейма використовує тег <code>&lt;iframe&gt;</code>. Він дозволяє вбудовувати інший HTML документ у поточну сторінку.
        </div>
      </div>
    </div>
    <div className='accordion-item'>
      <h2 className='accordion-header' id='headingIframe2'>
        <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#collapseIframe2' aria-expanded='false' aria-controls='collapseIframe2'>
          Iframe - Встановити висоту та ширину фрейму
        </button>
      </h2>
      <div id='collapseIframe2' className='accordion-collapse collapse' aria-labelledby='headingIframe2' data-bs-parent='#accordionIframe'>
        <div className='accordion-body'>
          Ви можете встановити висоту та ширину фрейма за допомогою атрибутів <code>height</code> та <code>width</code>, що дозволяє точно налаштувати розмір вбудованого вмісту.
        </div>
      </div>
    </div>
    <div className='accordion-item'>
      <h2 className='accordion-header' id='headingIframe3'>
        <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#collapseIframe3' aria-expanded='false' aria-controls='collapseIframe3'>
          Iframe - Видалити межу фрейма
        </button>
      </h2>
      <div id='collapseIframe3' className='accordion-collapse collapse' aria-labelledby='headingIframe3' data-bs-parent='#accordionIframe'>
        <div className='accordion-body'>
          Щоб видалити межу навколо фрейма, можна використовувати атрибут <code>style</code> з значенням <code>border:none;</code>. Це робить фрейм виглядати як невід'ємна частина сторінки.
        </div>
      </div>
    </div>
    <div className='accordion-item'>
      <h2 className='accordion-header' id='headingIframe4'>
        <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#collapseIframe4' aria-expanded='false' aria-controls='collapseIframe4'>
          Iframe - Ціль для посилання
        </button>
      </h2>
      <div id='collapseIframe4' className='accordion-collapse collapse' aria-labelledby='headingIframe4' data-bs-parent='#accordionIframe'>
        <div className='accordion-body'>
          Ви можете використовувати фрейм як ціль для посилання. Для цього необхідно надати фрейму унікальний <code>id</code> та використовувати атрибут <code>target</code> в посиланні.
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

export default CourseHtml11;
