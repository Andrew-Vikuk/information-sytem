import React from "react";
import {
  FaAngleDoubleRight,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import courseListCSS from "../../../scripts/CoursesListCSS";


const CourseCss2 = () => {
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

  <h3>Розмітка та позиціонування в CSS: Вступ</h3>
  <p>
    CSS (Cascading Style Sheets) надає різноманітні методи для розмітки та позиціонування елементів на веб-сторінці. У цьому уроці ми розглянемо такі методи, як floats, flexbox, grid, а також різні способи позиціонування елементів (relative, absolute). Додатково, розглянемо адаптивний дизайн та використання медіазапитів для створення зручного інтерфейсу на різних пристроях.
  </p>

  <h4>Використання різних методів розмітки</h4>
  <p>
    Існують різні методи для створення макетів у CSS. Серед них: float, flexbox, та grid. Кожен з них має свої переваги та застосування.
  </p>
  <ul>
    <li><strong>Floats:</strong> Це один з перших методів для створення макетів. Елементи, до яких застосовується float, обтікаються іншими елементами.
      <pre><code>{`<style>
.float-container {
  width: 100%;
}

.float-child {
  float: left;
  width: 50%;
}
</style>

<div class="float-container">
  <div class="float-child">Ліва колонка</div>
  <div class="float-child">Права колонка</div>
</div>`}</code></pre>
    </li>
    <li><strong>Flexbox:</strong> Це сучасний метод для створення гнучких макетів. Він дозволяє вирівнювати елементи по горизонталі та вертикалі.
      <pre><code>{`<style>
.flex-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.flex-item {
  width: 45%;
}
</style>

<div class="flex-container">
  <div class="flex-item">Елемент 1</div>
  <div class="flex-item">Елемент 2</div>
</div>`}</code></pre>
    </li>
    <li><strong>Grid:</strong> Це найбільш потужний метод для створення складних макетів. CSS Grid дозволяє створювати двовимірні макети з використанням рядків та стовпців.
      <pre><code>{`<style>
.grid-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
}

.grid-item {
  background-color: #ccc;
  padding: 20px;
}
</style>

<div class="grid-container">
  <div class="grid-item">Елемент 1</div>
  <div class="grid-item">Елемент 2</div>
</div>`}</code></pre>
    </li>
  </ul>

  <h4>Робота з позиціонуванням елементів</h4>
  <p>
    CSS також дозволяє визначати позицію елементів відносно їхнього початкового розташування або інших елементів на сторінці.
  </p>
  <ul>
    <li><strong>Relative:</strong> Елемент позиціонується відносно свого звичайного розташування.
      <pre><code>{`<style>
.relative-item {
  position: relative;
  top: 10px;
  left: 20px;
}
</style>

<div class="relative-item">Відносно позиціонований елемент</div>`}</code></pre>
    </li>
    <li><strong>Absolute:</strong> Елемент позиціонується відносно свого найближчого позиціонованого предка (не static).
      <pre><code>{`<style>
.absolute-container {
  position: relative;
  width: 200px;
  height: 200px;
  background-color: #f0f0f0;
}

.absolute-item {
  position: absolute;
  top: 20px;
  right: 20px;
}
</style>

<div class="absolute-container">
  <div class="absolute-item">Абсолютно позиціонований елемент</div>
</div>`}</code></pre>
    </li>
  </ul>

  <h4>Адаптивний дизайн та медіазапити</h4>
  <p>
    Адаптивний дизайн дозволяє створювати веб-сторінки, що коректно відображаються на різних пристроях. Для цього використовуються медіазапити, які дозволяють застосовувати різні стилі в залежності від характеристик пристрою.
  </p>
  <ul>
    <li><strong>Медіазапити:</strong> CSS медіазапити дозволяють застосовувати стилі в залежності від ширини вікна браузера, дозволу екрану та інших характеристик.
      <pre><code>{`<style>
/* Стільникові пристрої */
@media (max-width: 600px) {
  .responsive-item {
    background-color: lightblue;
  }
}

/* Планшети */
@media (min-width: 601px) and (max-width: 1200px) {
  .responsive-item {
    background-color: lightgreen;
  }
}

/* Десктопи */
@media (min-width: 1201px) {
  .responsive-item {
    background-color: lightcoral;
  }
}
</style>

<div class="responsive-item">Адаптивний елемент</div>`}</code></pre>
    </li>
  </ul>

  <h4>Приклад застосування розмітки та позиціонування</h4>
  <pre><code>{`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Розмітка та позиціонування</title>
  <style>
    .flex-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: #f8f9fa;
      padding: 20px;
    }

    .flex-item {
      width: 45%;
      background-color: #e9ecef;
      padding: 20px;
    }

    .relative-item {
      position: relative;
      top: 10px;
      left: 20px;
      background-color: #dee2e6;
      padding: 10px;
    }

    .absolute-container {
      position: relative;
      width: 200px;
      height: 200px;
      background-color: #f0f0f0;
    }

    .absolute-item {
      position: absolute;
      top: 20px;
      right: 20px;
      background-color: #ced4da;
      padding: 10px;
    }

    @media (max-width: 600px) {
      .responsive-item {
        background-color: lightblue;
      }
    }

    @media (min-width: 601px) and (max-width: 1200px) {
      .responsive-item {
        background-color: lightgreen;
      }
    }

    @media (min-width: 1201px) {
      .responsive-item {
        background-color: lightcoral;
      }
    }
  </style>
</head>
<body>
  <div class="flex-container">
    <div class="flex-item">Флекс елемент 1</div>
    <div class="flex-item">Флекс елемент 2</div>
  </div>

  <div class="relative-item">Відносно позиціонований елемент</div>

  <div class="absolute-container">
    <div class="absolute-item">Абсолютно позиціонований елемент</div>
  </div>

  <div class="responsive-item">Адаптивний елемент</div>
</body>
</html>`}</code></pre>

  <h4>Питання та відповіді</h4>
  <div className='accordion accordion-inner accordion-icon-left mt-3 mb-4' id='accordionCSSLayout'>
    <div className='accordion-item'>
      <h2 className='accordion-header' id='headingLayoutOne'>
        <button className='accordion-button' type='button' data-bs-toggle='collapse' data-bs-target='#collapseLayoutOne' aria-expanded='true' aria-controls='collapseLayoutOne'>
          Що таке flexbox і як він використовується?
        </button>
      </h2>
      <div id='collapseLayoutOne' className='accordion-collapse collapse show' aria-labelledby='headingLayoutOne' data-bs-parent='#accordionCSSLayout'>
        <div className='accordion-body'>
          Flexbox - це сучасний метод для створення гнучких макетів у CSS. Він дозволяє легко вирівнювати елементи по горизонталі та вертикалі, забезпечуючи при цьому адаптивність макету.
        </div>
      </div>
    </div>
    <div className='accordion-item'>
      <h2 className='accordion-header' id='headingLayoutTwo'>
      <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#collapseLayoutTwo' aria-expanded='false' aria-controls='collapseLayoutTwo'>
          Що таке CSS Grid і як він використовується?
        </button>
      </h2>
      <div id='collapseLayoutTwo' className='accordion-collapse collapse' aria-labelledby='headingLayoutTwo' data-bs-parent='#accordionCSSLayout'>
        <div className='accordion-body'>
          CSS Grid - це потужний інструмент для створення складних двовимірних макетів у CSS. Він дозволяє створювати гнучкі та прогнозовані макети з використанням рядків та стовпців.
        </div>
      </div>
    </div>
    <div className='accordion-item'>
      <h2 className='accordion-header' id='headingLayoutThree'>
        <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#collapseLayoutThree' aria-expanded='false' aria-controls='collapseLayoutThree'>
          Як використовувати медіазапити для адаптивного дизайну?
        </button>
      </h2>
      <div id='collapseLayoutThree' className='accordion-collapse collapse' aria-labelledby='headingLayoutThree' data-bs-parent='#accordionCSSLayout'>
        <div className='accordion-body'>
          Медіазапити дозволяють застосовувати різні стилі в залежності від розмірів екрану та інших характеристик пристрою. Це дозволяє створювати адаптивний дизайн, який зручно відображається на різних пристроях.
        </div>
      </div>
    </div>
  </div>

  <h4>Заключення</h4>
  <p>
    Вивчення розмітки та позиціонування в CSS допоможе вам створювати привабливі та функціональні веб-сторінки. Знання різних методів розмітки, таких як flexbox і CSS Grid, а також вміння працювати з позиціонуванням елементів, є важливими навичками для фронтенд розробника.
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

export default CourseCss2;
