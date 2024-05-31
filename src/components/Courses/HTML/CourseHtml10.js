import React from "react";
import {
  FaAngleDoubleRight,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import courseListHTML from "../../../scripts/CoursesListHTML";

const CourseHtml10 = () => {
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

  <h3>HTML Атрибут id</h3>

  <p>
    Атрибут <code>id</code> в HTML використовується для унікальної ідентифікації елементів на сторінці. Кожен елемент може мати лише одне унікальне значення <code>id</code>.
  </p>

  <h4>Використання атрибута id</h4>

  <p>
    Атрибут <code>id</code> дозволяє звертатися до конкретного елемента за допомогою JavaScript, CSS або посилань в межах тієї ж сторінки. Наприклад:
  </p>

  <pre>
    <code>
      {`
        <div id="container">
          <p id="paragraph">Це абзац з ідентифікатором "paragraph".</p>
        </div>
      `}
    </code>
  </pre>

  <h4>Різниця між Class та ID</h4>

  <p>
    <strong>Class</strong> та <strong>ID</strong> є двома основними способами надання елементам стилів в CSS, але вони мають деякі відмінності:
  </p>

  <ul>
    <li><strong>Class:</strong> Може бути назначений багатьом елементам на сторінці.</li>
    <li><strong>ID:</strong> Має бути унікальним для кожного елемента на сторінці.</li>
    <li><strong>Class:</strong> Використовується для групування елементів зі схожими стилями.</li>
    <li><strong>ID:</strong> Використовується для однозначної ідентифікації конкретного елемента.</li>
  </ul>

  <h4>HTML Закладки з ID та посиланнями</h4>

  <p>
    За допомогою атрибута <code>id</code> можна створити "закладки" на сторінці, на які можна переходити з інших частин сторінки. Для цього потрібно використовувати посилання з відповідними значеннями <code>id</code> у внутрішніх посиланнях.
  </p>

  <div className='accordion accordion-inner accordion-icon-left mt-3 mb-4' id='accordionId'>
    <div className='accordion-item'>
      <h2 className='accordion-header' id='headingId1'>
        <button className='accordion-button' type='button' data-bs-toggle='collapse' data-bs-target='#collapseId1' aria-expanded='true' aria-controls='collapseId1'>
          Використання атрибута id
        </button>
      </h2>
      <div id='collapseId1' className='accordion-collapse collapse show' aria-labelledby='headingId1' data-bs-parent='#accordionId'>
        <div className='accordion-body'>
          Атрибут <code>id</code> використовується для унікальної ідентифікації елементів на сторінці.
        </div>
      </div>
    </div>
    <div className='accordion-item'>
      <h2 className='accordion-header' id='headingId2'>
        <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#collapseId2' aria-expanded='false' aria-controls='collapseId2'>
          Різниця між Class та ID
        </button>
      </h2>
      <div id='collapseId2' className='accordion-collapse collapse' aria-labelledby='headingId2' data-bs-parent='#accordionId'>
        <div className='accordion-body'>
          <strong>Class</strong> та <strong>ID</strong> є двома основними способами надання елементам стилів в CSS, але вони мають деякі відмінності.
        </div>
      </div>
    </div>
    <div className='accordion-item'>
      <h2 className='accordion-header' id='headingId3'>
        <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#collapseId3' aria-expanded='false' aria-controls='collapseId3'>
          HTML Закладки з ID та посиланнями
        </button>
      </h2>
      <div id='collapseId3' className='accordion-collapse collapse' aria-labelledby='headingId3' data-bs-parent='#accordionId'>
        <div className='accordion-body'>
          За допомогою атрибута <code>id</code> можна створити "закладки" на сторінці, на які можна переходити з інших частин сторінки.
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

export default CourseHtml10;
