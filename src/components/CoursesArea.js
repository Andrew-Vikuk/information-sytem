import React from "react";
import { FaPlus } from "react-icons/fa";
import { Link } from "react-router-dom";
import courseListHTML from "../scripts/CoursesListHTML";
import courseListCSS from "../scripts/CoursesListCSS";
import courseListReact from "../scripts/CoursesListReact";
import courseListJs from "../scripts/CoursesListJs";

const CoursesArea = () => {
  return (
    <>
      {/*=================== Courses HTML start ===================*/}
      <div className='service-area bg-relative pd-top-100'>
        <img
          className='position-bottom-left top_image_bounce'
          src='assets/img/icon/4.png'
          alt='img'
        />
        <div className='container'  id="html">
          <div className='section-title text-center'>
            <h6 className='sub-title'>HTML</h6>
            <h2 className='title'>
            Наші <span>HTML</span> курси
            </h2>
          </div>
          <div className='row'>
            {courseListHTML.map((data, index) => (
              <div className='col-lg-4 col-md-6' key={index}  >
                <div className='single-service-inner text-center'>
                  <div className='thumb'>
                    <img src={data.img} alt='img' />
                  </div>
                  <div className='details'>
                    <h5>
                      <Link to={data.link}>{data.title}</Link>
                    </h5>
                    <p>{data.des}</p>
                    <Link className='btn btn-border-base' to={data.link}>
                      До Уроку <FaPlus />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* =================== Courses HTML end ===================*/}

      {/*=================== Courses CSS start ===================*/}
      <div className='service-area bg-relative pd-top-100' id="css">
        <img
          className='position-bottom-left top_image_bounce'
          src='assets/img/icon/4.png'
          alt='img'
        />
        <div className='container' id="css">
          <div className='section-title text-center'>
            <h6 className='sub-title'>CSS</h6>
            <h2 className='title'>
            Наші <span>CSS</span> курси
            </h2>
          </div>
          <div className='row'>
            {courseListCSS.map((data, index) => (
              <div className='col-lg-4 col-md-6' key={index}>
                <div className='single-service-inner text-center'>
                  <div className='thumb'>
                    <img src={data.img} alt='img' />
                  </div>
                  <div className='details'>
                    <h5>
                      <Link to={data.link}>{data.title}</Link>
                    </h5>
                    <p>{data.des}</p>
                    <Link className='btn btn-border-base' to={data.link}>
                    До Уроку <FaPlus />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* =================== Courses CSS end ===================*/}

      {/*=================== Courses Java Script start ===================*/}
      <div className='service-area bg-relative pd-top-100' id="java-script">
        <img
          className='position-bottom-left top_image_bounce'
          src='assets/img/icon/4.png'
          alt='img'
        />
        <div className='container' id="java-script">
          <div className='section-title text-center'>
            <h6 className='sub-title'>Java Script</h6>
            <h2 className='title'>
            Наші <span>Java Script</span> курси
            </h2>
          </div>
          <div className='row'>
            {courseListJs.map((data, index) => (
              <div className='col-lg-4 col-md-6' key={index}>
                <div className='single-service-inner text-center'>
                  <div className='thumb'>
                    <img src={data.img} alt='img' />
                  </div>
                  <div className='details'>
                    <h5>
                      <Link to={data.link}>{data.title}</Link>
                    </h5>
                    <p>{data.des}</p>
                    <Link className='btn btn-border-base' to={data.link}>
                    До Уроку <FaPlus />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* =================== Courses Java Script end ===================*/}

      {/*=================== Courses REACT start ===================*/}
      <div className='service-area bg-relative pd-top-100' id="react">
        <img
          className='position-bottom-left top_image_bounce'
          src='assets/img/icon/4.png'
          alt='img'
        />
        <div className='container' id="react">
          <div className='section-title text-center'>
            <h6 className='sub-title'>REACT</h6>
            <h2 className='title'>
            Наші <span>React</span> курси
            </h2>
          </div>
          <div className='row'>
            {courseListReact.map((data, index) => (
              <div className='col-lg-4 col-md-6' key={index}>
                <div className='single-service-inner text-center'>
                  <div className='thumb'>
                    <img src={data.img} alt='img' />
                  </div>
                  <div className='details'>
                    <h5>
                      <Link to={data.link}>{data.title}</Link>
                    </h5>
                    <p>{data.des}</p>
                    <Link className='btn btn-border-base' to={data.link}>
                    До Уроку <FaPlus />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* =================== Courses REACT end ===================*/}
    </>
  );
};

export default CoursesArea;
