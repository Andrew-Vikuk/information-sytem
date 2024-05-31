import React from "react";
import {
  FaArrowRight,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import courseListReact from "../../../scripts/CoursesListReact";

const CourseReact8 = () => {
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
                            <FaArrowRight /> Інші уроки ReactJS
                        </h5>
                        <ul className='catagory-items'>
                            {courseListReact.map((data, index) => (
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
                            <img src='assets/img/about/about-pages.png' alt='img' className='service-banner-image' />
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
                            <img src='assets/img/about/lesson-image-react_4.jpeg' alt='img' className="w-100 h-20"  style={{height: "400px", objectFit: "cover", marginBottom: "20px"}}/>
                        </div>
                        <div className='details'>
                            <h3>Форми та керування станом форм у React</h3>
                            <p>
                                Форми є важливим компонентом більшості веб-додатків. У React ми можемо керувати станом форм за допомогою керованих та некерованих компонентів. Також існують спеціальні бібліотеки для спрощення роботи з формами, такі як Formik.
                            </p>

                            <h4>Керовані компоненти</h4>
                            <p>
                                У керованих компонентах стан форми зберігається в стані (state) компонента. Це дозволяє React контролювати значення форми і реагувати на зміни користувача.
                            </p>
                            <pre>
                                <code>
{`class ControlledForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ''
    };
  }

  handleChange = (event) => {
    this.setState({ name: event.target.value });
  }

  handleSubmit = (event) => {
    alert('A name was submitted: ' + this.state.name);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" value={this.state.name} onChange={this.handleChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
    );
  }
}`}
                                </code>
                            </pre>
                            <p>
                                У цьому прикладі введене значення зберігається в стані компонента, а кожна зміна викликає метод <code>handleChange</code>, який оновлює стан.
                            </p>

                            <h4>Некеровані компоненти</h4>
                            <p>
                                У некерованих компонентах доступ до значень форми здійснюється через рефери (refs), замість збереження значень у стані.
                            </p>
                            <pre>
                                <code>
{`class UncontrolledForm extends React.Component {
  constructor(props) {
    super(props);
    this.nameInput = React.createRef();
  }

  handleSubmit = (event) => {
    alert('A name was submitted: ' + this.nameInput.current.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <input type="text" ref={this.nameInput} />
        </label>
        <button type="submit">Submit</button>
      </form>
    );
  }
}`}
                                </code>
                            </pre>
                            <p>
                                У цьому прикладі значення інпуту отримується через реф при відправленні форми.
                            </p>

                            <h4>Використання бібліотеки Formik</h4>
                            <p>
                                Formik — це популярна бібліотека для роботи з формами в React. Вона забезпечує зручний спосіб керування станом форм, валідацією та обробкою подій.
                            </p>
                            <pre>
                                <code>
{`import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const SignupForm = () => {
  return (
    <Formik
      initialValues={{ name: '' }}
      validationSchema={Yup.object({
        name: Yup.string()
          .max(15, 'Must be 15 characters or less')
          .required('Required'),
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
          alert(JSON.stringify(values, null, 2));
          setSubmitting(false);
        }, 400);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <label htmlFor="name">Name</label>
          <Field name="name" type="text" />
          <ErrorMessage name="name" component="div" />
          <button type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
}

export default SignupForm;`}
                                </code>
                            </pre>
                            <p>
                                У цьому прикладі використовується Formik для створення форми з валідацією. <code>initialValues</code> визначає початкові значення форми, <code>validationSchema</code> задає правила валідації за допомогою Yup, а <code>onSubmit</code> обробляє відправлення форми.
                            </p>

                            <h4>Переваги використання Formik</h4>
                            <ul>
                                <li>Просте керування станом форм.</li>
                                <li>Зручна інтеграція з бібліотеками для валідації, такими як Yup.</li>
                                <li>Легка обробка подій та валідації.</li>
                            </ul>

                            <h4>Довідка</h4>
                            <div className='accordion accordion-inner accordion-icon-left mt-3 mb-4' id='formsAccordion'>
                                <div className='accordion-item'>
                                    <h2 className='accordion-header' id='formsHeadingOne'>
                                        <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#formsCollapseOne' aria-expanded='false' aria-controls='formsCollapseOne'>
                                            Керовані компоненти
                                        </button>
                                    </h2>
                                    <div id='formsCollapseOne' className='accordion-collapse collapse' aria-labelledby='formsHeadingOne' data-bs-parent='#formsAccordion'>
                                        <div className='accordion-body'>
                                            <p>У керованих компонентах стан форми зберігається в стані (state) компонента, що дозволяє React контролювати значення форми і реагувати на зміни користувача.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='accordion-item'>
                                    <h2 className='accordion-header' id='formsHeadingTwo'>
                                        <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#formsCollapseTwo' aria-expanded='false' aria-controls='formsCollapseTwo'>
                                            Некеровані компоненти
                                        </button>
                                    </h2>
                                    <div id='formsCollapseTwo' className='accordion-collapse collapse' aria-labelledby='formsHeadingTwo' data-bs-parent='#formsAccordion'>
                                        <div className='accordion-body'>
                                            <p>У некерованих компонентах доступ до значень форми здійснюється через рефери (refs), замість збереження значень у стані.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='accordion-item'>
                                    <h2 className='accordion-header' id='formsHeadingThree'>
                                        <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#formsCollapseThree' aria-expanded='false' aria-controls='formsCollapseThree'>
                                            Formik
                                        </button>
                                    </h2>
                                    <div id='formsCollapseThree' className='accordion-collapse collapse' aria-labelledby='formsHeadingThree' data-bs-parent='#formsAccordion'>
                                        <div className='accordion-body'>
                                            <p>Formik — це популярна бібліотека для роботи з формами в React. Вона забезпечує зручний спосіб керування станом форм, валідацією та обробкою подій.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p>Керовані та некеровані компоненти, а також використання бібліотеки Formik, надають розробникам гнучкість і зручність у роботі з формами в React, дозволяючи створювати потужні та масштабовані додатки.</p>
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

export default CourseReact8;

