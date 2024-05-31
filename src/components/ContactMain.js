import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { toast, Toaster } from "react-hot-toast";
const ContactMain = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_d2bgtka", //SERVICE_ID
        "template_w0nrmyr", //TEMPLATE_ID
        form.current,
        "333yC4AQ0UM1XMRl3" //PUBLIC_KEY
      )
      .then(
        (result) => {      
          toast.success("Повідомлення успішно відправлено!");
          form.current.reset();
        },
        (error) => {
            toast.success("Сталася помилка при відправці повідомленян!");
        }
      );
  };
  return (
    <>
      {/* ================= Contact Main start =================*/}
      <Toaster position='bottom-center' reverseOrder={false} />
      <div className='contact-area pd-top-120 pd-bottom-120'>
        <div className='container'>
          <div className='contact-page-inner bg-gray'>
            <div className='section-title mb-4 pb-2'>
              <h2 className='title'>Підтримка студентів <span>24/7</span></h2>
              <p className='content mb-0'>
              Якщо у вас виникли будь-які питання або пропозиції, будь ласка, зв'яжіться з нами. Ми завжди готові допомогти вам у навчанні!

              </p>
            </div>
            <form ref={form} onSubmit={sendEmail}>
              <div className='row'>
                <div className='col-md-12'>
                  <div className='single-input-inner'>
                    <input
                      id='name'
                      name='from_name'
                      type='text'
                      placeholder="Ваше Ім'я."
                      required
                    />
                  </div>
                </div>
                <div className='col-md-12'>
                  <div className='single-input-inner'>
                    <input
                      id='email'
                      name='user_email'
                      type='email'
                      placeholder='Ваш Email.'
                      required
                    />
                  </div>
                </div>
                <div className='col-md-12'>
                  <div className='single-input-inner'>
                    <input
                      id='subject'
                      name='subject'
                      type='text'
                      placeholder='Тема'
                      required
                    />
                  </div>
                </div>
                <div className='col-12'>
                  <div className='single-input-inner'>
                    <textarea
                      name='message'
                      id='massage'
                      cols='1'
                      rows='5'
                      placeholder='Повідомлення'
                      required
                    />
                  </div>
                </div>
                <div className='col-12 text-center'>
                  <button
                    className='btn btn-base border-radius-5'
                    type='submit'
                  >
                    Відправити
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* contact list */}
      <div className='contact-page-list'>
        <div className='container'>
          <div className='row justify-content-center'>
            <div className='col-lg-4 col-md-6'>
              <div className='media single-contact-list'>
                <div className='media-left'>
                  <img src='assets/img/about/phone-icon-64.png' alt='img' />
                </div>
                <div className='media-body'>
                  <h5>Телефон</h5>
                  <h6>88 01234 2345 12</h6>
                </div>
              </div>
            </div>
            <div className='col-lg-4 col-md-6'>
              <div className='media single-contact-list'>
                <div className='media-left'>
                  <img src='assets/img/about/mail-icon-64.png' alt='img' />
                </div>
                <div className='media-body'>
                  <h5>Наш Email</h5>
                  <h6>Comism@mail.com</h6>
                </div>
              </div>
            </div>
           
          </div>
        </div>
      </div>
      {/* Map  */}
      <div className='contact-g-map'>
      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d168841.4537940474!2d21.95910039453125!3d48.60701569999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473918fb01dc5047%3A0xa8908e1ac4a6c881!2z0KTQsNC60YPQu9GM0YLQtdGCINGW0L3RhNC-0YDQvNCw0YbRltC50L3QuNGFINGC0LXRhdC90L7Qu9C-0LPRltC5INCU0JLQndCXICLQo9C20J3QoyI!5e0!3m2!1sru!2sua!4v1715182344029!5m2!1sru!2sua"></iframe>      </div>

      {/* ================= Contact Main End =================*/}
    </>
  );
};

export default ContactMain;
