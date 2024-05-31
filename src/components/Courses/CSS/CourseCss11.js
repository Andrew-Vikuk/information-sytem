import React from "react";
import {
  FaAngleDoubleRight,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import courseListCSS from "../../../scripts/CoursesListCSS";


const CourseCss11 = () => {
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

  <h3>CSS Padding - Внутрішній відступ</h3>

  <p>
    CSS Padding використовується для створення внутрішнього відступу навколо вмісту елемента. Відступи створюються всередині меж елемента, розширюючи його розмір. У цьому уроці ми розглянемо властивості для задання внутрішнього відступу, їх скорочене написання та інші корисні значення.
  </p>

  <h4>Padding - Окремі сторони</h4>

  <p>
    Властивості <code>padding-top</code>, <code>padding-right</code>, <code>padding-bottom</code>, <code>padding-left</code> дозволяють задавати внутрішній відступ окремо для кожної сторони елемента.
  </p>

  <pre>
    <code>
      {`
        div {
          padding-top: 20px;
          padding-right: 25px;
          padding-bottom: 20px;
          padding-left: 25px;
        }
      `}
    </code>
  </pre>

  <h4>Padding - Скорочена властивість</h4>

  <p>
    Властивість <code>padding</code> дозволяє скорочено задавати значення внутрішнього відступу для всіх сторін одночасно. Порядок значень: верхній, правий, нижній, лівий відступ.
  </p>

  <pre>
    <code>
      {`
        div {
          padding: 20px 25px 20px 25px;
        }

        /* Можна задавати і менше значень */
        div {
          padding: 20px 25px; /* верхній та нижній відступ - 20px, правий та лівий - 25px */
        }
      `}
    </code>
  </pre>

  <h4>Padding та Width</h4>

  <p>
    Важливо пам'ятати, що значення <code>padding</code> додаються до ширини елемента, якщо не використовується <code>box-sizing: border-box</code>. Це може вплинути на загальний розмір елемента.
  </p>

  <pre>
    <code>
      {`
        div {
          width: 300px;
          padding: 20px;
        }
        /* Загальна ширина елемента буде 340px (300px + 20px з кожного боку) */
      `}
    </code>
  </pre>

  <div className='accordion accordion-inner accordion-icon-left mt-3 mb-4' id='accordionCssPadding'>
    <div className='accordion-item'>
      <h2 className='accordion-header' id='headingCssPadding1'>
        <button className='accordion-button' type='button' data-bs-toggle='collapse' data-bs-target='#collapseCssPadding1' aria-expanded='true' aria-controls='collapseCssPadding1'>
          Padding - Окремі сторони
        </button>
      </h2>
      <div id='collapseCssPadding1' className='accordion-collapse collapse show' aria-labelledby='headingCssPadding1' data-bs-parent='#accordionCssPadding'>
        <div className='accordion-body'>
          Властивості <code>padding-top</code>, <code>padding-right</code>, <code>padding-bottom</code>, <code>padding-left</code> дозволяють задавати внутрішній відступ окремо для кожної сторони елемента.
          <pre>
            <code>
              {`
                div {
                  padding-top: 20px;
                  padding-right: 25px;
                  padding-bottom: 20px;
                  padding-left: 25px;
                }
              `}
            </code>
          </pre>
        </div>
      </div>
    </div>
    <div className='accordion-item'>
      <h2 className='accordion-header' id='headingCssPadding2'>
        <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#collapseCssPadding2' aria-expanded='false' aria-controls='collapseCssPadding2'>
          Padding - Скорочена властивість
        </button>
      </h2>
      <div id='collapseCssPadding2' className='accordion-collapse collapse' aria-labelledby='headingCssPadding2' data-bs-parent='#accordionCssPadding'>
        <div className='accordion-body'>
          Властивість <code>padding</code> дозволяє скорочено задавати значення внутрішнього відступу для всіх сторін одночасно. Порядок значень: верхній, правий, нижній, лівий відступ.
          <pre>
            <code>
              {`
                div {
                  padding: 20px 25px 20px 25px;
                }

                /* Можна задавати і менше значень */
                div {
                  padding: 20px 25px; /* верхній та нижній відступ - 20px, правий та лівий - 25px */
                }
              `}
            </code>
          </pre>
        </div>
      </div>
    </div>
    <div className='accordion-item'>
      <h2 className='accordion-header' id='headingCssPadding3'>
        <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#collapseCssPadding3' aria-expanded='false' aria-controls='collapseCssPadding3'>
          Padding та Width
        </button>
      </h2>
      <div id='collapseCssPadding3' className='accordion-collapse collapse' aria-labelledby='headingCssPadding3' data-bs-parent='#accordionCssPadding'>
        <div className='accordion-body'>
          Важливо пам'ятати, що значення <code>padding</code> додаються до ширини елемента, якщо не використовується <code>box-sizing: border-box</code>. Це може вплинути на загальний розмір елемента.
          <pre>
            <code>
              {`
                div {
                  width: 300px;
                  padding: 20px;
                }
                /* Загальна ширина елемента буде 340px (300px + 20px з кожного боку) */
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

export default CourseCss11;
