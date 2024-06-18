import React from "react";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";



const CoursesNavigation = () => {
  return (
    <>
         
      {/*=================== Courses Categories start ===================*/}
      <div className='service-area bg-relative pd-top-100'>
        <img
          className='position-bottom-left top_image_bounce'
          src='assets/img/icon/4.png'
          alt='img'
        />
        <div className='container'>
          <div className='section-title text-center'>
            <h2 className='title'>
            Навігація по <span>категоріях</span> 
            </h2>
          </div>

          <div className='row'>
              <div className='col-lg-3 col-md-6'>
                <div className='single-service-inner text-center p-4'>
                    <button className='btn btn-border-base' onClick={() => document.getElementById('html')?.scrollIntoView()}>
                      Уроки HTML <FaPlus />
                    </button>
                </div>
              </div>
              <div className='col-lg-3 col-md-6'>
                <div className='single-service-inner text-center p-4'>
                <button className='btn btn-border-base' onClick={() => document.getElementById('css')?.scrollIntoView()}>
                      Уроки CSS <FaPlus />
                    </button>
                </div>
              </div>
              <div className='col-lg-3 col-md-6'>
                <div className='single-service-inner text-center p-4'>
                   <button className='btn btn-border-base' onClick={() => document.getElementById('java-script')?.scrollIntoView()}>
                      Уроки Java Script <FaPlus />
                    </button>
                </div>
              </div>
              <div className='col-lg-3 col-md-6'>
                <div className='single-service-inner text-center p-4'>
                <button className='btn btn-border-base' onClick={() => document.getElementById('react')?.scrollIntoView()}>
                      Уроки React JS <FaPlus />
                    </button>
                </div>
              </div>
          </div>
        </div>
      </div>

      
      {/* =================== Courses Categories end ===================*/}
    </>
  );
};

export default CoursesNavigation;
