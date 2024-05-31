import React from "react";
import {
  FaAngleDoubleRight,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import courseListHTML from "../../../scripts/CoursesListHTML";

const CourseHtml6 = () => {
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

<h3>Таблиці в HTML</h3>

<p>
  Таблиці використовуються для організації даних у форматі рядків і стовпців. HTML надає теги для створення таблиць, а також для стилізації та налаштування їх властивостей.
</p>

<h4>Створення таблиць</h4>

<p>
  Для створення таблиці в HTML використовується тег <code>&lt;table&gt;</code>. Всередині цього тега знаходяться ряди (<code>&lt;tr&gt;</code>), які містять осередки даних (<code>&lt;td&gt;</code>) або заголовки осередків (<code>&lt;th&gt;</code>).
</p>

<pre>
  <code>
    {`
      <table>
        <tr>
          <th>Заголовок 1</th>
          <th>Заголовок 2</th>
        </tr>
        <tr>
          <td>Дані 1</td>
          <td>Дані 2</td>
        </tr>
      </table>
    `}
  </code>
</pre>

<h4>Теги <code>&lt;table&gt;</code>, <code>&lt;tr&gt;</code>, <code>&lt;td&gt;</code>, <code>&lt;th&gt;</code></h4>

<p>
  Тег <code>&lt;table&gt;</code> визначає таблицю. Тег <code>&lt;tr&gt;</code> визначає рядок в таблиці. Теги <code>&lt;td&gt;</code> і <code>&lt;th&gt;</code> визначають осередки даних і заголовки осередків відповідно.
</p>

<pre>
  <code>
    {`
      <table>
        <tr>
          <th>Заголовок стовпця</th>
          <th>Заголовок стовпця</th>
        </tr>
        <tr>
          <td>Дані осередка</td>
          <td>Дані осередка</td>
        </tr>
      </table>
    `}
  </code>
</pre>

<h4>Атрибути та стилізація таблиць</h4>

<p>
  Таблиці можуть бути стилізовані за допомогою CSS. Основні атрибути для таблиць включають <code>border</code>, <code>cellpadding</code>, <code>cellspacing</code>, <code>width</code> та <code>height</code>.
</p>

<pre>
  <code>
    {`
      <table border="1" cellpadding="10" cellspacing="0">
        <tr>
          <th>Заголовок стовпця</th>
          <th>Заголовок стовпця</th>
        </tr>
        <tr>
          <td>Дані осередка</td>
          <td>Дані осередка</td>
        </tr>
      </table>
    `}
  </code>
</pre>

<p>
  Для стилізації таблиць можна використовувати CSS. Наприклад, можна задати колір фону для рядків, ширину та висоту таблиці, а також стилі для кордонів осередків.
</p>

<pre>
  <code>
    {`
      <style>
        table {
          width: 100%;
          border-collapse: collapse;
        }
        th, td {
          border: 1px solid black;
          padding: 10px;
          text-align: left;
        }
        tr:nth-child(even) {
          background-color: #f2f2f2;
        }
      </style>

      <table>
        <tr>
          <th>Заголовок стовпця</th>
          <th>Заголовок стовпця</th>
        </tr>
        <tr>
          <td>Дані осередка</td>
          <td>Дані осередка</td>
        </tr>
        <tr>
          <td>Дані осередка</td>
          <td>Дані осередка</td>
        </tr>
      </table>
    `}
  </code>
</pre>

<div className='accordion accordion-inner accordion-icon-left mt-3 mb-4' id='accordionTables'>
  <div className='accordion-item'>
    <h2 className='accordion-header' id='headingTablesOne'>
      <button className='accordion-button' type='button' data-bs-toggle='collapse' data-bs-target='#collapseTablesOne' aria-expanded='true' aria-controls='collapseTablesOne'>
        Як задати відступи в осередках таблиці?
      </button>
    </h2>
    <div id='collapseTablesOne' className='accordion-collapse collapse show' aria-labelledby='headingTablesOne' data-bs-parent='#accordionTables'>
      <div className='accordion-body'>
        Для встановлення відступів всередині осередків таблиці використовується атрибут <code>cellpadding</code>. Наприклад, <code>&lt;table cellpadding="10"&gt;</code> задасть відступ в 10 пікселів всередині кожного осередка.
      </div>
    </div>
  </div>
  <div className='accordion-item'>
    <h2 className='accordion-header' id='headingTablesTwo'>
      <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#collapseTablesTwo' aria-expanded='false' aria-controls='collapseTablesTwo'>
        Як об'єднати осередки таблиці по вертикалі або горизонталі?
      </button>
    </h2>
    <div id='collapseTablesTwo' className='accordion-collapse collapse' aria-labelledby='headingTablesTwo' data-bs-parent='#accordionTables'>
      <div className='accordion-body'>
        Для об'єднання осередків по горизонталі використовується атрибут <code>colspan</code>, а для об'єднання по вертикалі – атрибут <code>rowspan</code>. Наприклад, <code>&lt;td colspan="2"&gt;</code> об'єднає два осередка в один по горизонталі.
      </div>
    </div>
  </div>
  <div className='accordion-item'>
    <h2 className='accordion-header' id='headingTablesThree'>
      <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#collapseTablesThree' aria-expanded='false' aria-controls='collapseTablesThree'>
        Як зробити таблицю адаптивною?
      </button>
    </h2>
    <div id='collapseTablesThree' className='accordion-collapse collapse' aria-labelledby='headingTablesThree' data-bs-parent='#accordionTables'>
      <div className='accordion-body'>
        Для створення адаптивної таблиці можна використовувати CSS властивості, такі як <code>width: 100%;</code> та <code>max-width: 100%;</code>. Також можна використовувати медіазапити для налаштування стилів таблиці на різних екранах.
      </div>
    </div>
  </div>
</div>

<h4>Заключення</h4>
<p>
  Таблиці є потужним інструментом для організації даних на веб-сторінці. Використання правильних тегів і атрибутів дозволяє створювати добре структуровані та стилізовані таблиці, які легко читати та використовувати.
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

export default CourseHtml6;
