import React from "react";
import {
  FaArrowRight,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import courseListReact from "../../../scripts/CoursesListReact";

const CourseReact4 = () => {
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
                            <h3>Компоненти в React</h3>
                            <p>
                                Компоненти є основними будівельними блоками React додатків. Вони дозволяють розбивати інтерфейс на незалежні, повторно використовувані частини, що спрощує розробку та підтримку коду.
                            </p>

                            <h4>Функціональні компоненти</h4>
                            <p>
                                Функціональні компоненти - це прості JavaScript функції, які приймають пропси (props) як аргументи та повертають React елементи. Вони є зручними для написання простих компонентів.
                            </p>
                            <pre>
                                <code>
{`function Welcome(props) {
  return <h1>Привіт, {props.name}!</h1>;
}`}
                                </code>
                            </pre>

                            <h4>Класові компоненти</h4>
                            <p>
                                Класові компоненти використовуються для створення більш складних компонентів з власним станом та життєвим циклом. Вони оголошуються як класи, які успадковують React.Component.
                            </p>
                            <pre>
                                <code>
{`class Welcome extends React.Component {
  render() {
    return <h1>Привіт, {this.props.name}!</h1>;
  }
}`}
                                </code>
                            </pre>

                            <h4>Пропси (props)</h4>
                            <p>
                                Пропси - це скорочення від "properties" (властивості). Вони передаються до компонентів для налаштування та передачі даних. Пропси є незмінними, тобто їх не можна змінювати всередині компонента.
                            </p>
                            <pre>
                                <code>
{`function Welcome(props) {
  return <h1>Привіт, {props.name}!</h1>;
}

const element = <Welcome name="Іван" />;`}
                                </code>
                            </pre>

                            <h4>Стан (state)</h4>
                            <p>
                                Стан - це приватні дані компонента, які можуть змінюватися під час його існування. Стан використовується для зберігання інформації, яка може змінюватися та впливати на рендеринг компонента.
                            </p>
                            <pre>
                                <code>
{`class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <div>
        <h1>Привіт, світе!</h1>
        <h2>Зараз {this.state.date.toLocaleTimeString()}.</h2>
      </div>
    );
  }
}`}
                                </code>
                            </pre>

                            <h4>Життєвий цикл компонентів</h4>
                            <p>
                                Життєвий цикл компонентів описує послідовність методів, які викликаються під час існування компонента. Основні етапи життєвого циклу: монтування, оновлення та демонтування.
                            </p>
                            <ul>
                                <li><strong>componentDidMount:</strong> Викликається після того, як компонент був змонтований (вставлений в DOM).</li>
                                <li><strong>componentDidUpdate:</strong> Викликається після оновлення компонента.</li>
                                <li><strong>componentWillUnmount:</strong> Викликається перед демонтуванням компонента (видалення з DOM).</li>
                            </ul>
                            <p>Ось приклад класового компонента, який використовує методи життєвого циклу:</p>
                            <pre>
                                <code>
{`class Example extends React.Component {
  componentDidMount() {
    // Викликається після того, як компонент був вставлений в DOM
  }

  componentDidUpdate(prevProps, prevState) {
    // Викликається після оновлення компонента
  }

  componentWillUnmount() {
    // Викликається перед видаленням компонента з DOM
  }

  render() {
    return <div>Приклад компонента</div>;
  }
}`}
                                </code>
                            </pre>

                            <h4>Довідка</h4>
                            <div className='accordion accordion-inner accordion-icon-left mt-3 mb-4' id='componentsAccordion'>
                                <div className='accordion-item'>
                                    <h2 className='accordion-header' id='componentsHeadingOne'>
                                        <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#componentsCollapseOne' aria-expanded='false' aria-controls='componentsCollapseOne'>
                                            Переваги функціональних компонентів
                                        </button>
                                    </h2>
                                    <div id='componentsCollapseOne' className='accordion-collapse collapse' aria-labelledby='componentsHeadingOne' data-bs-parent='#componentsAccordion'>
                                        <div className='accordion-body'>
                                            <p>Функціональні компоненти є простішими та легшими для розуміння, їх легше тестувати та вони зазвичай мають кращу продуктивність.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='accordion-item'>
                                    <h2 className='accordion-header' id='componentsHeadingTwo'>
                                        <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#componentsCollapseTwo' aria-expanded='false' aria-controls='componentsCollapseTwo'>
                                            Використання стану в класових компонентах
                                        </button>
                                    </h2>
                                    <div id='componentsCollapseTwo' className='accordion-collapse collapse' aria-labelledby='componentsHeadingTwo' data-bs-parent='#componentsAccordion'>
                                        <div className='accordion-body'>
                                            <p>Класові компоненти дозволяють використовувати локальний стан та методи життєвого циклу, що робить їх більш підходящими для складних компонентів.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='accordion-item'>
                                    <h2 className='accordion-header' id='componentsHeadingThree'>
                                        <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#componentsCollapseThree' aria-expanded='false' aria-controls='componentsCollapseThree'>
                                            Переваги та недоліки пропсів
                                        </button>
                                    </h2>
                                    <div id='componentsCollapseThree' className='accordion-collapse collapse' aria-labelledby='componentsHeadingThree' data-bs-parent='#componentsAccordion'>
                                        <div className='accordion-body'>
                                            <p>Пропси дозволяють передавати дані та функції між компонентами, що робить компоненти більш гнучкими та повторно використовуваними. Однак, пропси є незмінними, тому для роботи зі змінюваними даними використовується стан.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='accordion-item'>
                                    <h2 className='accordion-header' id='componentsHeadingFour'>
                                        <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#componentsCollapseFour' aria-expanded='false' aria-controls='componentsCollapseFour'>
                                            Життєвий цикл компонентів у класах
                                        </button>
                                    </h2>
                                    <div id='componentsCollapseFour' className='accordion-collapse collapse' aria-labelledby='componentsHeadingFour' data-bs-parent='#componentsAccordion'>
                                        <div className='accordion-body'>
                                            <p>Життєвий цикл компонентів дозволяє керувати поведінкою компонентів на різних етапах їх існування, що є корисним для виконання асинхронних операцій та управління ресурсами.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p>Ці основні концепції допоможуть вам створювати потужні та гнучкі компоненти в React. Знання про компоненти є важливим для розуміння та ефективного використання React.</p>
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

export default CourseReact4;

