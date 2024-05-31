import React from "react";
import {
  FaArrowRight,
  FaEnvelope,
  FaFacebookF,
  FaInstagram,
  FaPhoneAlt,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      {/* ================== Footer Start ==================*/}
      <footer className='footer-area bg-black bg-cover'>
        
        <div className='container'>
          <div className='row justify-content-between'>
            <div className='col-lg-3 col-md-6'>
              <div className='widget widget_about'>
                <div className='thumb'>
                  <img src='assets/img/about/logo.png' alt='img' />
                </div>
                <div className='details'>
                  <p>
                  Розвивайте свій потенціал у веб-розробці разом з нами.
                  </p>
                  <ul className='social-media'>
                    <li>
                      <a href='#'>
                        <FaFacebookF />
                      </a>
                    </li>
                    <li>
                      <a href='#'>
                        <FaInstagram />
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className='col-lg-3 col-md-6'>
              <div className='widget widget_nav_menu'>
                <h4 className='widget-title'>Меню</h4>
                <ul>
                  <li>    
                    <Link to='/'><FaArrowRight />Головна</Link>
                  </li>
                  <li>
                  <Link to='/courses'><FaArrowRight />Курси</Link>
                  </li>
                  <li>
                    <Link to='/about'><FaArrowRight />Про Нас</Link>
                  </li>
                  <li>
                    <Link to='/contact'><FaArrowRight />Контакти</Link>
                  </li>
                  
                </ul>
              </div>
            </div>
           
            <div className='col-lg-3 col-md-6'>
            <div className='details'>
            <h4 className='widget-title'>Контакти</h4>
                  <p className='mt-3'>
                    <FaPhoneAlt /> (+380) 123 456 765
                  </p>
                  <p className='mt-2'>
                    <FaEnvelope /> mail@gmail.com
                  </p>
                </div>
            </div>
          </div>
        </div>
        <div className='footer-bottom'>
          <div className='container'>
            <div className='row'>
              <div className='col-md-6 align-self-center'>
                <p>© Навчальний Веб-портал УЖНУ 2024</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* ================== Footer  end ==================*/}
    </>
  );
};

export default Footer;
