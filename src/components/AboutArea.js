import React from "react";

const AboutArea = () => {
  return (
    <>
      {/* ================== AboutArea start  ==================*/}
      <div className='about-area pd-top-120'>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-6'>
              <div
                className='about-thumb-inner pe-xl-5 me-xl-5 '
                data-aos='fade-right'
                data-aos-delay='100'
                data-aos-duration='1500'
              >
                {/*  Отут два трикутника, які тримали картинку знизу і збоку,  хз чи вони треба, дивно виглядає разом */}
                {/* <img
                  className='animate-img-1 top_image_bounce'
                  src='assets/img/about/2.png'
                  alt='img'
                /> */}
                {/* <img
                  className='animate-img-2 left_image_bounce'
                  src='assets/img/about/3.png'
                  alt='img'
                /> */}
              {/* Варіант 1 про нас (люди в офісі) */}
                {/* <img
                  className='main-img'
                  src='assets/img/about/At_the_ofice.png'
                  alt='img'
                /> */}
                  <img
                  className='main-img'
                  src='assets/img/about/v2_about_us.png'
                  alt='img'
                />
              </div>
            </div>
            <div
              className='col-lg-6 '
              data-aos='fade-left'
              data-aos-delay='100'
              data-aos-duration='1500'
            >
              <div className='section-title mt-5 mt-lg-0'>
                <h6 className='sub-title'>ПРО НАС</h6>
                <h2 className='title'>
                Історія та місія за Навчальним <span> Веб Порталом</span> 
                </h2>
                <p className='content mb-4 mb-xl-5'>
                Ми - студенти Ужгородського Національного Університету, які з любов'ю розробляють цей портал для інших студентів. Наша місія - зробити навчання веб-технологій захопливим та доступним для кожного.
                </p>
                <div className='row'>
                  <div className='col-md-6'>
                    <div className='single-about-inner'>
                      <div className='thumb mb-3'>
                        <img src='assets/img/about/potential-icon.png' alt='img' />
                      </div>
                      <div className='details'>
                        <h5>Потенціал</h5>
                        <p>
                        Вивчення HTML, CSS та React відкриває безмежні можливості для створення стильних, інтерактивних та інноваційних веб-додатків і сайтів.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className='col-md-6'>
                    <div className='single-about-inner'>
                      <div className='thumb mb-3'>
                        <img src='assets/img/about/goal-icon.png' alt='img' />
                      </div>
                      <div className='details'>
                        <h5>Наша Ціль</h5>
                        <p>
                        Наша ціль - надати студентам інструменти та ресурси, необхідні для досягнення професійного рівня веб-розробника та підтримки їх у кожному кроці на шляху до успіху.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* ================== AboutArea End  ==================*/}
    </>
  );
};

export default AboutArea;
