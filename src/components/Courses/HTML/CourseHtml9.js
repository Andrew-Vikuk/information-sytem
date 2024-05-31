import React from "react";
import {
  FaAngleDoubleRight,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import courseListHTML from "../../../scripts/CoursesListHTML";

const CourseHtml9 = () => {
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

                  <div class="details">

  <h3>HTML Атрибут class</h3>

  <p>
    Атрибут <code>class</code> в HTML використовується для надання елементам спільних стилів за допомогою CSS та для визначення їх зв'язку з JavaScript для надання функціональності. Він дозволяє збирати елементи в групи та застосовувати до них стилі і дії одночасно.
  </p>

  <h4>Використання атрибуту <code>class</code></h4>

  <p>
    Для використання атрибуту <code>class</code> просто додайте його до відповідного HTML-елементу і вкажіть значення, яке відповідає класу або класам, які ви хочете застосувати.
  </p>

  <pre>
    <code>
      {`
        <div class="container">
          <p class="text-center">Цей текст буде відцентрований</p>
          <button class="btn btn-primary">Кнопка</button>
        </div>
      `}
    </code>
  </pre>

  <h4>Каскадний вибір за класом</h4>

  <p>
    CSS дозволяє вибирати елементи за їх класами та застосовувати до них стилі. Наприклад, якщо у вас є клас <code>.container</code>, ви можете застосувати до нього стилі таким чином:
  </p>

  <pre>
    <code>
      {`
        .container {
          width: 100%;
          max-width: 1200px;
          margin: 0 auto;
          padding: 20px;
          background-color: #f0f0f0;
        }
      `}
    </code>
  </pre>

  <h4>JavaScript та класи</h4>

  <p>
    JavaScript дозволяє звертатися до HTML-елементів за їх класами, щоб додавати, видаляти або змінювати їх властивості. Наприклад, ви можете змінити колір тексту усіх елементів з класом <code>.highlight</code> таким чином:
  </p>

  <pre>
    <code>
      {`
        let elements = document.querySelectorAll('.highlight');
        elements.forEach(element => {
          element.style.color = 'red';
        });
      `}
    </code>
  </pre>

  <h4>Висновок</h4>

  <p>
    Атрибут <code>class</code> є потужним інструментом для роботи з HTML-елементами. Використовуйте його для групування елементів та застосування спільних стилів, а також для зв'язку з JavaScript для роботи з динамічним вмістом веб-сторінки.
  </p>

  <h4>Додаткові відомості</h4>

  <div class="accordion accordion-inner accordion-icon-left mt-3 mb-4" id="accordionClass">
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingClassOne">
        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseClassOne" aria-expanded="true" aria-controls="collapseClassOne">
          Як створювати та застосовувати класи в HTML?
        </button>
      </h2>
      <div id="collapseClassOne" class="accordion-collapse collapse show" aria-labelledby="headingClassOne" data-bs-parent="#accordionClass">
        <div class="accordion-body">
          Класи створюються за допомогою атрибуту <code>class</code> у HTML-елементах. Наприклад:
          <pre>
            <code>
              {`
                <div class="container">
                  <!-- Вміст -->
                </div>
              `}
            </code>
          </pre>
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingClassTwo">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseClassTwo" aria-expanded="false" aria-controls="collapseClassTwo">
          Як використовувати каскадні стилі за класом в CSS?
        </button>
      </h2>
      <div id="collapseClassTwo" class="accordion-collapse collapse" aria-labelledby="headingClassTwo" data-bs-parent="#accordionClass">
        <div class="accordion-body">
          Для застосування стилів за класом в CSS, використовуйте назву класу з крапкою перед нею. Наприклад:
          <pre>
            <code>
              {`
                .container {
                  width: 100%;
                  max-width: 1200px;
                  margin: 0 auto;
                  padding: 20px;
                  background-color: #f0f0f0;
                }
              `}
            </code>
          </pre>
        </div>
      </div>
    </div>
    <div class="accordion-item">
      <h2 class="accordion-header" id="headingClassThree">
        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseClassThree" aria-expanded="false" aria-controls="collapseClassThree">
          Як застосовувати класи за допомогою JavaScript?
        </button>
      </h2>
      <div id="collapseClassThree" class="accordion-collapse collapse" aria-labelledby="headingClassThree" data-bs-parent="#accordionClass">
        <div class="accordion-body">
          Для застосування класів за допомогою JavaScript можна використовувати методи DOM, такі як <code>classList.add()</code>, <code>classList.remove()</code> та <code>classList.toggle()</code>. Наприклад:
          <pre>
            <code>
              {`
                // Додати клас
                document.getElementById('elementId').classList.add('highlight');

                // Видалити клас
                document.getElementById('elementId').classList.remove('highlight');

                // Перемикнути клас
                document.getElementById('elementId').classList.toggle('highlight');
              `}
            </code>
          </pre>
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

export default CourseHtml9;
