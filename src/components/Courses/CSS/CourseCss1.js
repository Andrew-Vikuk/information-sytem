import React from "react";
import {
  FaAngleDoubleRight,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import courseListCSS from "../../../scripts/CoursesListCSS";


const CourseCss1 = () => {
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

<h3>Основи CSS: Вступ</h3>
<p>
  CSS (Cascading Style Sheets) - це мова стилів, що використовується для опису вигляду HTML-документів. За допомогою CSS можна задавати кольори, шрифти, вирівнювання, розміщення елементів та багато іншого.
</p>

<h4>Використання CSS для стилізації HTML-елементів</h4>
<p>
  CSS дозволяє відокремити візуальне оформлення веб-сторінки від її змісту. Стилі можуть бути додані безпосередньо в HTML-документ, у вигляді зовнішнього файлу або вбудовані в самі HTML-елементи. Розглянемо приклади:
</p>
<ul>
  <li><strong>Вбудовані стилі:</strong> Стилі, які прописуються безпосередньо в атрибуті <code>style</code> HTML-елемента.
    <pre><code>{`<p style="color: blue; font-size: 14px;">Цей текст буде синім та мати розмір шрифту 14px.</p>`}</code></pre>
  </li>
  <li><strong>Внутрішні стилі:</strong> Стилі, що задаються всередині тегу <code>{`<style>`}</code> в HTML-документі.
    <pre><code>{`<style>
p {
color: blue;
font-size: 14px;
}
</style>`}</code></pre>
  </li>
  <li><strong>Зовнішні стилі:</strong> Стилі, що зберігаються у зовнішньому файлі та підключаються за допомогою тегу <code>{`<link>`}</code>.
    <pre><code>{`<link rel="stylesheet" href="styles.css">`}</code></pre>
  </li>
</ul>

<h4>Застосування властивостей розміщення та вирівнювання</h4>
<p>
  CSS надає можливість керувати розміщенням та вирівнюванням елементів на веб-сторінці за допомогою таких властивостей, як <code>margin</code>, <code>padding</code> та <code>display</code>.
</p>
<ul>
  <li><strong>Margin:</strong> Встановлює зовнішні відступи елемента.
    <pre><code>{`p {
margin: 20px;
}`}</code></pre>
  </li>
  <li><strong>Padding:</strong> Встановлює внутрішні відступи елемента.
    <pre><code>{`p {
padding: 10px;
}`}</code></pre>
  </li>
  <li><strong>Display:</strong> Визначає спосіб відображення елемента на сторінці (блоковий, стрічковий тощо).
    <pre><code>{`div {
display: block;
}

span {
display: inline;
}`}</code></pre>
  </li>
</ul>

<h4>Робота зі змінними, селекторами та класами</h4>
<p>
  CSS також дозволяє використовувати змінні, селектори та класи для більш ефективного управління стилями.
</p>
<ul>
  <li><strong>Змінні:</strong> CSS-змінні дозволяють зберігати значення стилів у спеціальних змінних та використовувати їх повторно.
    <pre><code>{`:root {
--main-color: #3498db;
}

p {
color: var(--main-color);
}`}</code></pre>
  </li>
  <li><strong>Селектори:</strong> Використовуються для вибору елементів HTML, до яких застосовуються стилі.
    <pre><code>{`/* Селектор за тегом */
p {
color: red;
}

/* Селектор за класом */
.example {
color: green;
}

/* Селектор за ідентифікатором */
#unique {
color: blue;
}`}</code></pre>
  </li>
  <li><strong>Класи:</strong> Класи використовуються для групування елементів та застосування до них однакових стилів.
    <pre><code>{`<style>
.highlight {
background-color: yellow;
}
</style>

<p class="highlight">Цей текст має жовтий фон.</p>`}</code></pre>
  </li>
</ul>

<h4>Приклад застосування основних CSS-властивостей</h4>
<pre><code>{`<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>CSS Приклад</title>
<style>
  :root {
    --main-bg-color: #f0f0f0;
    --main-font-color: #333;
    --primary-color: #3498db;
  }

  body {
    background-color: var(--main-bg-color);
    color: var(--main-font-color);
    font-family: Arial, sans-serif;
    margin: 0;
    padding: 0;
  }

  .container {
    padding: 20px;
  }

  h1 {
    color: var(--primary-color);
  }

  p {
    margin: 10px 0;
    padding: 10px;
  }

  .highlight {
    background-color: yellow;
  }
</style>
</head>
<body>
<div class="container">
  <h1>Основи CSS</h1>
  <p>Цей абзац містить базові стилі CSS.</p>
  <p class="highlight">Цей абзац має жовтий фон.</p>
</div>
</body>
</html>`}</code></pre>

<h4>Питання та відповіді</h4>
<div className='accordion accordion-inner accordion-icon-left mt-3 mb-4' id='accordionCSSBasics'>
  <div className='accordion-item'>
    <h2 className='accordion-header' id='headingCSSOne'>
      <button className='accordion-button' type='button' data-bs-toggle='collapse' data-bs-target='#collapseCSSOne' aria-expanded='true' aria-controls='collapseCSSOne'>
        Що таке CSS і для чого він використовується?
      </button>
    </h2>
    <div id='collapseCSSOne' className='accordion-collapse collapse show' aria-labelledby='headingCSSOne' data-bs-parent='#accordionCSSBasics'>
      <div className='accordion-body'>
        CSS (Cascading Style Sheets) - це мова стилів, що використовується для опису вигляду HTML-документів. Вона дозволяє відокремити візуальне оформлення від структури документу, роблячи веб-сторінки більш гнучкими та зручними для підтримки.
      </div>
    </div>
  </div>
  <div className='accordion-item'>
    <h2 className='accordion-header' id='headingCSSTwo'>
      <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#collapseCSSTwo' aria-expanded='false' aria-controls='collapseCSSTwo'>
        Як використовувати властивості margin та padding?
      </button>
    </h2>
    <div id='collapseCSSTwo' className='accordion-collapse collapse' aria-labelledby='headingCSSTwo' data-bs-parent='#accordionCSSBasics'>
      <div className='accordion-body'>
        Властивість <code>margin</code> задає зовнішні відступи елемента, а <code>padding</code> - внутрішні відступи. Вони дозволяють контролювати простір навколо та всередині елементів, забезпечуючи більш гнучке розміщення контенту на сторінці.
      </div>
    </div>
  </div>
  <div className='accordion-item'>
    <h2 className='accordion-header' id='headingCSSThree'>
      <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#collapseCSSThree' aria-expanded='false' aria-controls='collapseCSSThree'>
        Що таке змінні в CSS і як вони використовуються?
      </button>
    </h2>
    <div id='collapseCSSThree' className='accordion-collapse collapse' aria-labelledby='headingCSSThree' data-bs-parent='#accordionCSSBasics'>
      <div className='accordion-body'>
        Змінні в CSS дозволяють зберігати значення стилів у спеціальних змінних та використовувати їх повторно. Це дозволяє спростити управління стилями, роблячи їх більш організованими та легкими для оновлення.
      </div>
    </div>
  </div>
</div>

<h4>Заключення</h4>
<p>
  Основи CSS включають стилізацію HTML-елементів, застосування властивостей розміщення та вирівнювання, а також використання змінних, селекторів та класів. Знання цих основ допоможе вам створювати красиві та зручні веб-сторінки.
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

export default CourseCss1;
