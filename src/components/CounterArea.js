import React from "react";
import CountUp from "react-countup";
import TrackVisibility from "react-on-screen";

const CounterArea = () => {
  return (
    <>
      {/* counter area start */}
      <div
        className='counter-area bg-relative bg-cover pd-top-110 pd-bottom-100'
        style={{ backgroundImage: 'url("./assets/img/bg/5.png")' }}
      >
        <div className='container pd-bottom-90'>
          <div className='row'>
            <div
              className='col-lg-3 col-sm-6'
              data-aos='fade-up'
              data-aos-delay='100'
              data-aos-duration='1500'
            >
              <div className='single-counter-inner'>
                <div className='thumb'>
                  <img src='assets/img/about/vacancy-icon_5.png' alt='img' />
                </div>
                <h2 className='text-white mt-4 mb-2'>
                  <TrackVisibility once>
                    {({ isVisible }) =>
                      isVisible && (
                        <span className='counter'>
                          <CountUp duration={1} delay={0} start={0} end={200} />{" "}
                          +
                        </span>
                      )
                    }
                  </TrackVisibility>
                </h2>
                <p className='text-white'>React вакансій щодня</p>
              </div>
            </div>
            <div
              className='col-lg-3 col-sm-6'
              data-aos='fade-up'
              data-aos-delay='150'
              data-aos-duration='1500'
            >
              <div className='single-counter-inner'>
                <div className='thumb'>
                  <img src='assets/img/about/web-sites-icon_2.png' alt='img' />
                </div>
                <h2 className='text-white mt-4 mb-2'>
                  <TrackVisibility once>
                    {({ isVisible }) =>
                      isVisible && (
                        <span className='counter'>
                          <CountUp duration={1} delay={0} start={0} end={19} />{" "}
                          млн
                        </span>
                      )
                    }
                  </TrackVisibility>
                </h2>
                <p className='text-white'>Сайтів на React</p>
              </div>
            </div>
            <div
              className='col-lg-3 col-sm-6'
              data-aos='fade-up'
              data-aos-delay='200'
              data-aos-duration='1500'
            >
              <div className='single-counter-inner'>
                <div className='thumb'>
                  <img src='assets/img/about/cr-project-icon_4.png' alt='img' />
                </div>
                <h2 className='text-white mt-4 mb-2'>
                  <TrackVisibility once>
                    {({ isVisible }) =>
                      isVisible && (
                        <span className='counter'>
                          <CountUp duration={3} delay={0} start={0} end={1200} />{" "}
                          +
                        </span>
                      )
                    }
                  </TrackVisibility>
                </h2>
                <p className='text-white'>Проєктів щодня</p>
              </div>
            </div>
            <div
              className='col-lg-3 col-sm-6 '
              data-aos='fade-up'
              data-aos-delay='250'
              data-aos-duration='1500'
            >
              <div className='single-counter-inner'>
                <div className='thumb'>
                  <img src='assets/img/about/a-salary-icon.png' alt='img' />
                </div>
                <h2 className='text-white mt-4 mb-2'>
                  <TrackVisibility once>
                    {({ isVisible }) =>
                      isVisible && (
                        <span className='counter'>
                          <CountUp duration={3} delay={0} start={0} end={4000} />{" "}
                          $
                        </span>
                      )
                    }
                  </TrackVisibility>
                </h2>
                <p className='text-white'>Середня ЗП React розробника</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* counter area end */}
    </>
  );
};

export default CounterArea;
