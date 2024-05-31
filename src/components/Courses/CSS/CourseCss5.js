import React from "react";
import {
  FaAngleDoubleRight,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import courseListCSS from "../../../scripts/CoursesListCSS";


const CourseCss5 = () => {
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
                    <FaArrowRight /> Інші Уроки по CSS
                  </h5>
                  <ul className='catagory-items'>
                  {courseListCSS.map((data, index) => (
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
                    <img src='assets/img/service/css_cat.png' alt='img' className="w-100 h-20"  style={{height: "300px", objectFit: "cover", marginBottom: "20px"}}/>
                  </div>
                  <div className='details'>

  <h3>CSS Селектори</h3>

  <p>
    CSS селектори дозволяють вибирати HTML-елементи, до яких потрібно застосувати стилі. Різні типи селекторів дозволяють гнучко і точно визначати елементи для стилізації.
  </p>

  <h4>CSS селектор id</h4>

  <p>
    Селектор id використовується для вибору елемента з певним значенням атрибута id. У CSS він починається з символу #, за яким слідує значення id.
  </p>

  <pre>
    <code>
      {`
        #myId {
          color: blue;
        }
      `}
    </code>
  </pre>

  <h4>CSS селектор class</h4>

  <p>
    Селектор class використовується для вибору елементів з певним значенням атрибута class. У CSS він починається з символу ., за яким слідує назва класу.
  </p>

  <pre>
    <code>
      {`
        .myClass {
          font-size: 20px;
        }
      `}
    </code>
  </pre>

  <h4>Універсальний CSS селектор</h4>

  <p>
    Універсальний селектор вибирає всі елементи на сторінці. Він позначається символом *.
  </p>

  <pre>
    <code>
      {`
        * {
          margin: 0;
          padding: 0;
        }
      `}
    </code>
  </pre>

  <h4>CSS Селектор групування</h4>

  <p>
    Групування селекторів дозволяє застосовувати однакові стилі до різних елементів. Селектори розділяються комами.
  </p>

  <pre>
    <code>
      {`
        h1, h2, h3 {
          color: red;
        }
      `}
    </code>
  </pre>

  <div className='accordion accordion-inner accordion-icon-left mt-3 mb-4' id='accordionCssSelectors'>
    <div className='accordion-item'>
      <h2 className='accordion-header' id='headingCssSelectors1'>
        <button className='accordion-button' type='button' data-bs-toggle='collapse' data-bs-target='#collapseCssSelectors1' aria-expanded='true' aria-controls='collapseCssSelectors1'>
          CSS селектор id
        </button>
      </h2>
      <div id='collapseCssSelectors1' className='accordion-collapse collapse show' aria-labelledby='headingCssSelectors1' data-bs-parent='#accordionCssSelectors'>
        <div className='accordion-body'>
          Селектор id використовується для вибору елемента з певним значенням атрибута id. У CSS він починається з символу #, за яким слідує значення id.
        </div>
      </div>
    </div>
    <div className='accordion-item'>
      <h2 className='accordion-header' id='headingCssSelectors2'>
        <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#collapseCssSelectors2' aria-expanded='false' aria-controls='collapseCssSelectors2'>
          CSS селектор class
        </button>
      </h2>
      <div id='collapseCssSelectors2' className='accordion-collapse collapse' aria-labelledby='headingCssSelectors2' data-bs-parent='#accordionCssSelectors'>
        <div className='accordion-body'>
          Селектор class використовується для вибору елементів з певним значенням атрибута class. У CSS він починається з символу ., за яким слідує назва класу.
        </div>
      </div>
    </div>
    <div className='accordion-item'>
      <h2 className='accordion-header' id='headingCssSelectors3'>
        <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#collapseCssSelectors3' aria-expanded='false' aria-controls='collapseCssSelectors3'>
          Універсальний CSS селектор
        </button>
      </h2>
      <div id='collapseCssSelectors3' className='accordion-collapse collapse' aria-labelledby='headingCssSelectors3' data-bs-parent='#accordionCssSelectors'>
        <div className='accordion-body'>
          Універсальний селектор вибирає всі елементи на сторінці. Він позначається символом *.
        </div>
      </div>
    </div>
    <div className='accordion-item'>
      <h2 className='accordion-header' id='headingCssSelectors4'>
        <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#collapseCssSelectors4' aria-expanded='false' aria-controls='collapseCssSelectors4'>
          CSS Селектор групування
        </button>
      </h2>
      <div id='collapseCssSelectors4' className='accordion-collapse collapse' aria-labelledby='headingCssSelectors4' data-bs-parent='#accordionCssSelectors'>
        <div className='accordion-body'>
          Групування селекторів дозволяє застосовувати однакові стилі до різних елементів. Селектори розділяються комами.
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

export default CourseCss5;
