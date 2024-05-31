import React from "react";
import {
  FaAngleDoubleRight,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import courseListCSS from "../../../scripts/CoursesListCSS";


const CourseCss3 = () => {
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

<h3>Вступ до анімації та переходів в CSS</h3>

<p>
  Анімація та переходи в CSS дозволяють створювати динамічні та привабливі веб-інтерфейси, які привертають увагу користувачів та покращують їх взаємодію з веб-сайтом.
</p>

<h4>Використання ключових кадрів для створення анімаційних ефектів</h4>

<p>
  Ключові кадри (keyframes) - це механізм у CSS, який дозволяє визначити анімаційні ефекти для елементів в різних точках їх анімації. Вони використовуються разом з властивістю <code>@keyframes</code>.
</p>

<pre>
  <code>
    {`
      @keyframes slide {
        0% {
          transform: translateX(-100%);
        }
        100% {
          transform: translateX(0);
        }
      }
      .slide-in {
        animation: slide 0.5s ease-in-out;
      }
    `}
  </code>
</pre>

<h4>Застосування переходів для плавних змін властивостей</h4>

<p>
  Переходи дозволяють плавно змінювати властивості елементів при зміні їх стану. Для цього використовується властивість <code>transition</code>.
</p>

<pre>
  <code>
    {`
      .button {
        background-color: #3498db;
        transition: background-color 0.3s ease;
      }
      .button:hover {
        background-color: #2980b9;
      }
    `}
  </code>
</pre>

<h4>Використання бібліотек CSS-анімацій для швидкого розгортання анімацій</h4>

<p>
  Для прискорення розробки анімацій можна використовувати готові бібліотеки CSS-анімацій, такі як Animate.css або CSS Animate.
</p>

<p>
  Наприклад, для використання анімацій з бібліотекою Animate.css, достатньо додати клас <code>animated</code> та ім'я анімації до вашого елемента.
</p>

<pre>
  <code>
    {`
      <div className='animated bounce'>
        Content
      </div>
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
      {/* ===================== Course Single Page  End ===================== */}
    </>
  );
};

export default CourseCss3;
