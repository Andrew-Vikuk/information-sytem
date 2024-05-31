import React from "react";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";

const CoursesAreaCategories = () => {
  return (
    <>
      {/*=================== Courses Categories start ===================*/}
      <div className='service-area bg-relative pd-top-100' id="html">
        <img
          className='position-bottom-left top_image_bounce'
          src='assets/img/icon/4.png'
          alt='img'
        />
        <div className='container'>
          <div className='section-title text-center'>
            <h6 className='sub-title'>Категорії</h6>
            <h2 className='title'>
            Наші <span>курси</span> 
            </h2>
          </div>
          <div className='row'>
              <div className='col-lg-6 col-md-6'>
                <div className='single-service-inner text-center'>
                  <div className='thumb'>
                    <img src='assets/img/about/html-icon_2.png' alt='img' />
                  </div>
                  <div className='details'>
                    <h5>
                      <Link to='/courses'>HTML</Link>
                    </h5>
                    <p>HTML (HyperText Markup Language) - це мова розмітки, яка використовується для створення структурованого вмісту веб-сторінок.</p>
                    <Link className='btn btn-border-base' to='/courses'>
                      Всі Курси <FaPlus />
                    </Link>
                  </div>

                </div>
              </div>

              <div className='col-lg-6 col-md-6'>
                <div className='single-service-inner text-center'>
                  <div className='thumb'>
                    <img src='assets/img/about/css-icon_1.png' alt='img' />
                  </div>
                  <div className='details'>
                    <h5>
                      <Link to='/courses'>CSS</Link>
                    </h5>
                    <p>CSS (Cascading Style Sheets) - це мова стилів, що використовується для опису вигляду HTML-документів.</p>
                    <Link className='btn btn-border-base' to='/courses'>
                    Всі Курси <FaPlus />
                    </Link>
                  </div>

                </div>
              </div>
          </div>

          <div className='row'>
              <div className='col-lg-6 col-md-6'>
                <div className='single-service-inner text-center'>
                  <div className='thumb'>
                    <img src='assets/img/about/js-icon_1.png' alt='img' />
                  </div>
                  <div className='details'>
                    <h5>
                      <Link to='/courses'>Java Script</Link>
                    </h5>
                    <p>JavaScript - це високорівнева, інтерпретована мова програмування, яка використовується для створення інтерактивних елементів на веб-сторінках.</p>
                    <Link className='btn btn-border-base' to='/courses'>
                    Всі Курси <FaPlus />
                    </Link>
                  </div>

                </div>
              </div>

              <div className='col-lg-6 col-md-6'>
                <div className='single-service-inner text-center'>
                  <div className='thumb'>
                    <img src='assets/img/about/react-icon_2.png' alt='img' />
                  </div>
                  <div className='details'>
                    <h5>
                      <Link to='/courses'>React JS</Link>
                    </h5>
                    <p>ReactJS - це бібліотека JavaScript для побудови інтерфейсів користувача, яка дозволяє створювати змінні та переважно динамічні UI-компоненти.</p>
                    <Link className='btn btn-border-base' to='/courses'>
                    Всі Курси <FaPlus />
                    </Link>
                  </div>

                </div>
              </div>
          </div>
          
        </div>

        
      </div>

      
      {/* =================== Courses Categories end ===================*/}
    </>
  );
};

export default CoursesAreaCategories;
