import React, {useRef} from "react";
import emailjs from "@emailjs/browser";
import { toast, Toaster } from "react-hot-toast";

const ContactArea = () => {
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
      {/* ========================= Сontact Area start =========================*/}
      <Toaster position='bottom-center' reverseOrder={false} />
      <div className='contact-area'>
        <div className='container'>
          <div className='contact-inner-1'>
            <img
              className='top_image_bounce animate-img-1'
              src='assets/img/banner/2.png'
              alt='img'
            />
            <img
              className='top_image_bounce animate-img-2'
              src='assets/img/about/6.png'
              alt='img'
            />
            <div className='row'>
              <div
                className='col-lg-8'
                data-aos='fade-right'
                data-aos-delay='200'
                data-aos-duration='1500'
              >
                <img className='w-100' src='assets/img/about/get_in_touch_3.png' alt='img' />
              </div>
              <div
                className='col-lg-4 wow animated fadeInRight'
                data-aos='fade-left'
                data-aos-delay='200'
                data-aos-duration='1500'
              >
                <div className='section-title mb-0'>
                  <h6 className='sub-title'>ЗВ'ЯЖІТЬСЯ З НАМИ</h6>
                  <h2 className='title'>
                    Підтримка студентів <span>24/7</span>
                  </h2>
                  <p className='content'>
                  Якщо у вас виникли будь-які питання або пропозиції, будь ласка, зв'яжіться з нами. Ми завжди готові допомогти вам у навчанні!
                  </p>
                  
                  <form className='mt-4'ref={form} onSubmit={sendEmail}>
                    <div className='row'>
                      <div className='col-lg-6'>
                        <div className='single-input-inner style-border'>
                          <input
                            type='text'
                            name='from_name'
                            placeholder="Ваше Ім'я" 
                            required/>
                        </div>
                      </div>
                      <div className='col-lg-6'>
                        <div className='single-input-inner style-border'>
                          <input
                            name='user_email'
                            type='email'
                            placeholder='Ваш Email'
                            required />
                        </div>
                      </div>
                      <div className='col-lg-12'>
                        <div className='single-input-inner style-border'>
                          <input 
                            name='subject' 
                            type='text' 
                            placeholder='Тема' 
                            required/>
                        </div>
                      </div>
                      <div className='col-lg-12'>
                        <div className='single-input-inner style-border'>
                          <textarea 
                            name='message' 
                            placeholder='Повідомлення' 
                            defaultValue={""} 
                            required/>
                        </div>
                      </div>
                      <div className='col-12'>
                        <button
                          className='btn btn-black mt-0 w-100 border-radius-5'
                          type="submit"
                        >
                          Відправити
                        </button>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/*========================= Сontact Area end =========================*/}
    </>
  );
};

export default ContactArea;
