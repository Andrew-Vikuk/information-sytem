import React from "react";
import {
  FaAngleDoubleRight,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import courseListHTML from "../../../scripts/CoursesListHTML";

const CourseHtml12 = () => {
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

  <h3>HTML Шляхи до файлів</h3>

  <p>
    В HTML ви можете використовувати шляхи до файлів для вставки зображень, підключення стилів або скриптів та інших ресурсів. Існує два основні типи шляхів: абсолютний і відносний.
  </p>

  <h4>Абсолютний шлях до файлу</h4>

  <p>
    Абсолютний шлях до файлу вказує повне місцезнаходження файлу, включаючи доменне ім'я. Це корисно, коли ви посилаєтесь на ресурси, які знаходяться на іншому сервері.
  </p>

  <pre>
    <code>
      {`
        <img src="https://www.example.com/images/picture.jpg" alt="Example Image">
      `}
    </code>
  </pre>

  <h4>Відносний шлях до файлу</h4>

  <p>
    Відносний шлях до файлу вказує місцезнаходження файлу відносно поточного документа. Це зручно для ресурсів, які знаходяться на тому ж сервері, що і HTML документ.
  </p>

  <pre>
    <code>
      {`
        <img src="images/picture.jpg" alt="Example Image">
      `}
    </code>
  </pre>

  <h4>Найкраща практика</h4>

  <p>
    Використання відносних шляхів зазвичай є найкращою практикою, оскільки це полегшує переміщення та копіювання проекту без необхідності змінювати шляхи до ресурсів. Проте, якщо ресурс знаходиться на іншому сервері або доступний через CDN, використовуйте абсолютний шлях.
  </p>

  <pre>
    <code>
      {`
        <!-- Відносний шлях -->
        <link rel="stylesheet" href="styles/main.css">

        <!-- Абсолютний шлях -->
        <script src="https://cdn.example.com/library.js"></script>
      `}
    </code>
  </pre>

  <div className='accordion accordion-inner accordion-icon-left mt-3 mb-4' id='accordionFilePaths'>
    <div className='accordion-item'>
      <h2 className='accordion-header' id='headingFilePath1'>
        <button className='accordion-button' type='button' data-bs-toggle='collapse' data-bs-target='#collapseFilePath1' aria-expanded='true' aria-controls='collapseFilePath1'>
          Абсолютний шлях до файлу
        </button>
      </h2>
      <div id='collapseFilePath1' className='accordion-collapse collapse show' aria-labelledby='headingFilePath1' data-bs-parent='#accordionFilePaths'>
        <div className='accordion-body'>
          Абсолютний шлях до файлу вказує повне місцезнаходження файлу, включаючи доменне ім'я. Використовуйте абсолютні шляхи для ресурсів, які знаходяться на інших серверах.
        </div>
      </div>
    </div>
    <div className='accordion-item'>
      <h2 className='accordion-header' id='headingFilePath2'>
        <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#collapseFilePath2' aria-expanded='false' aria-controls='collapseFilePath2'>
          Відносний шлях до файлу
        </button>
      </h2>
      <div id='collapseFilePath2' className='accordion-collapse collapse' aria-labelledby='headingFilePath2' data-bs-parent='#accordionFilePaths'>
        <div className='accordion-body'>
          Відносний шлях до файлу вказує місцезнаходження файлу відносно поточного документа. Використовуйте відносні шляхи для ресурсів, які знаходяться на тому ж сервері.
        </div>
      </div>
    </div>
    <div className='accordion-item'>
      <h2 className='accordion-header' id='headingFilePath3'>
        <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#collapseFilePath3' aria-expanded='false' aria-controls='collapseFilePath3'>
          Найкраща практика
        </button>
      </h2>
      <div id='collapseFilePath3' className='accordion-collapse collapse' aria-labelledby='headingFilePath3' data-bs-parent='#accordionFilePaths'>
        <div className='accordion-body'>
          Використання відносних шляхів зазвичай є найкращою практикою, оскільки це полегшує переміщення та копіювання проекту. Проте, якщо ресурс знаходиться на іншому сервері або доступний через CDN, використовуйте абсолютний шлях.
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

export default CourseHtml12;
