import React, { useState } from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [active, setActive] = useState(false);
  const [searchShow, setSearchShow] = useState(false);
  const menuActive = () => {
    setActive(!active);
  };
  const searchActive = () => {
    setSearchShow(!searchShow);
    console.log("hell");
  };

  // Control sidebar navigation
  let items = document.querySelectorAll(".menu-item-has-children > a");
  for (let i in items) {
    if (items.hasOwnProperty(i)) {
      items[i].onclick = function () {
        this.parentElement
          .querySelector(".sub-menu")
          .classList.toggle("active");
        this.classList.toggle("open");
      };
    }
  }

  return (
    <>
      
      <div
        onClick={searchActive}
        className={searchShow ? "body-overlay active" : "body-overlay"}
        id='body-overlay'
      ></div>
      {/* navbar start */}
      <nav className='navbar navbar-area navbar-expand-lg'>
        <div className='container nav-container navbar-bg'>
          <div className='responsive-mobile-menu'>
            <button
              onClick={menuActive}
              className={
                active
                  ? "menu toggle-btn d-block d-lg-none open"
                  : "menu toggle-btn d-block d-lg-none"
              }
              data-target='#itech_main_menu'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >
              <span className='icon-left' />
              <span className='icon-right' />
            </button>
          </div>
          <div className='logo'>
            <Link to='/'>
              <img src='../assets/img/about/logo.png' alt='img' />
            </Link>
          </div>
          
          <div
            className={
              active
                ? "collapse navbar-collapse sopen"
                : "collapse navbar-collapse"
            }
            id='itech_main_menu'
          >
            <ul className='navbar-nav menu-open text-lg-end'>
              <li>    
                    <Link to='/'>Головна</Link>
              </li>
              <li>
                  <Link to='/courses'>Курси</Link>
              </li>
              <li>
                    <Link to='/about'>Про Нас</Link>
              </li>
              
              <li>
                <Link to='/contact'>Контакти</Link>
              </li>
            </ul>
          </div>
         
        </div>
      </nav>
      {/* navbar end */}
    </>
  );
};

export default NavBar;
