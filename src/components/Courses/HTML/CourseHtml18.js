import React from "react";
import {
  FaAngleDoubleRight,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";
import { HashLink as Link } from 'react-router-hash-link';
import courseListHTML from "../../../scripts/CoursesListHTML";
import { NavLink } from "react-router-dom";


const CourseHtml17 = () => {
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
      <h3>HTML URL - Уніфіковані локатори ресурсів</h3>
      <p>
        Уніфікований локатор ресурсів (URL) - це адреса, яка використовується для доступу до ресурсів в Інтернеті. URL складається з декількох частин, які допомагають ідентифікувати місце розташування ресурсу.
      </p>

      <h4>Загальні схеми URL</h4>
      <p>
        URL можуть мати різні схеми, які визначають протокол доступу до ресурсу. Найбільш поширені схеми включають:
      </p>
      <ul>
        <li><code>http://</code> - використовується для доступу до веб-сторінок через HTTP</li>
        <li><code>https://</code> - використовується для доступу до веб-сторінок через HTTPS, забезпечуючи безпечний зв'язок</li>
        <li><code>ftp://</code> - використовується для доступу до файлів через протокол передачі файлів FTP</li>
        <li><code>mailto:</code> - використовується для створення посилань, які відкривають програму для електронної пошти</li>
      </ul>
      <pre>
        <code>
          {`
            http://www.example.com
            https://www.example.com
            ftp://ftp.example.com
            mailto:example@example.com
          `}
        </code>
      </pre>

      <h4>URL Кодування</h4>
      <p>
        URL можуть містити лише певні символи. Символи, які не входять до дозволеного набору, повинні бути закодовані. URL-кодування замінює заборонені символи їхнім шістнадцятковим представленням, перед яким стоїть відсоток (%).
      </p>
      <pre>
        <code>
          {`
            Пробіл - %20
            ! - %21
            # - %23
            $ - %24
            & - %26
          `}
        </code>
      </pre>

      <h4>ASCII кодування. Приклади</h4>
      <p>
        ASCII кодування використовує числа для представлення символів. Наприклад, великий символ "A" в ASCII кодується як 65, а малий символ "a" - як 97.
      </p>
      <pre>
        <code>
          {`
            A - %41
            a - %61
            1 - %31
            @ - %40
          `}
        </code>
      </pre>

      <h4>Деталі про URL</h4>
      <div className='accordion accordion-inner accordion-icon-left mt-3 mb-4' id='accordionHtmlUrls'>
        <div className='accordion-item'>
          <h2 className='accordion-header' id='headingHtmlUrls1'>
            <button
              className='accordion-button'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#collapseHtmlUrls1'
              aria-expanded='true'
              aria-controls='collapseHtmlUrls1'
            >
              Загальні схеми URL
            </button>
          </h2>
          <div id='collapseHtmlUrls1' className='accordion-collapse collapse show' aria-labelledby='headingHtmlUrls1' data-bs-parent='#accordionHtmlUrls'>
            <div className='accordion-body'>
              URL можуть мати різні схеми, які визначають протокол доступу до ресурсу. Наприклад, <code>http://</code> використовується для веб-сторінок через HTTP, а <code>https://</code> забезпечує безпечний зв'язок через HTTPS.
            </div>
          </div>
        </div>
        <div className='accordion-item'>
          <h2 className='accordion-header' id='headingHtmlUrls2'>
            <button
              className='accordion-button collapsed'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#collapseHtmlUrls2'
              aria-expanded='false'
              aria-controls='collapseHtmlUrls2'
            >
              URL Кодування
            </button>
          </h2>
          <div id='collapseHtmlUrls2' className='accordion-collapse collapse' aria-labelledby='headingHtmlUrls2' data-bs-parent='#accordionHtmlUrls'>
            <div className='accordion-body'>
              URL-кодування замінює заборонені символи їхнім шістнадцятковим представленням. Наприклад, пробіл кодується як <code>%20</code>, знак оклику як <code>%21</code>, а знак решітки як <code>%23</code>.
            </div>
          </div>
        </div>
        <div className='accordion-item'>
          <h2 className='accordion-header' id='headingHtmlUrls3'>
            <button
              className='accordion-button collapsed'
              type='button'
              data-bs-toggle='collapse'
              data-bs-target='#collapseHtmlUrls3'
              aria-expanded='false'
              aria-controls='collapseHtmlUrls3'
            >
              ASCII кодування. Приклади
            </button>
          </h2>
          <div id='collapseHtmlUrls3' className='accordion-collapse collapse' aria-labelledby='headingHtmlUrls3' data-bs-parent='#accordionHtmlUrls'>
            <div className='accordion-body'>
              ASCII кодування використовує числа для представлення символів. Наприклад, великий символ "A" в ASCII кодується як <code>%41</code>, а малий символ "a" - як <code>%61</code>.
            </div>
          </div>
        </div>
      </div>

      <h4>Переваги використання правильного форматування URL</h4>
      <div className='row'>
        <div className='col-md-6'>
          <ul className='single-list-inner style-check style-check mb-3'>
            <li><FaCheckCircle /> Забезпечує коректний доступ до ресурсів</li>
            <li><FaCheckCircle /> Підтримує стандарти Інтернету</li>
            <li><FaCheckCircle /> Допомагає уникнути помилок при передачі даних</li>
          </ul>
        </div>
        <div className='col-md-6'>
          <ul className='single-list-inner style-check style-check mb-3'>
            <li><FaCheckCircle /> Підвищує безпеку при використанні HTTPS</li>
            <li><FaCheckCircle /> Покращує сумісність з різними браузерами та пристроями</li>
            <li><FaCheckCircle /> Забезпечує правильне кодування спеціальних символів</li>
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

export default CourseHtml17;
