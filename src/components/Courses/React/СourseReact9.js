import React from "react";
import {
  FaArrowRight,
} from "react-icons/fa";
import { HashLink as Link } from 'react-router-hash-link';
import courseListReact from "../../../scripts/CoursesListReact";
import { NavLink } from "react-router-dom";


const CourseReact9 = () => {
  return (
    <>
      {/* ===================== Course Single Page start ===================== */}
    <div className='service-area pd-top-120 pd-bottom-90'>
    <div className='container'>
        <div className='row'>
            <div className='col-lg-4 col-12'>
                <div className='td-sidebar service-sidebar'>
                    <div className='widget widget_catagory'>
                        <Link className='btn btn-border-base' to='/courses#react'>
                      Назад до курсів
                    </Link>
                  <h5 className='widget-title mt-4 mb-2'>
                    Уроки по React JS
                  </h5>
                        <ul className='catagory-items'>
                            {courseListReact.map((data, index) => (
                                <div key={index}>
                                    <li>
                            <NavLink to={data.link}  className={({ isActive, isPending }) =>
                              isPending ? "pending" : isActive ? "active" : ""
                            }>{data.title}</NavLink>
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
                            <h3>Обробка подій у React</h3>
                            <p>
                                Обробка подій є важливою частиною інтерактивних веб-додатків. У React події працюють подібно до DOM-елементів, але з деякими відмінностями. Нижче ми розглянемо, як додавати події до елементів і передавати параметри в обробники подій.
                            </p>

                            <h4>Додавання подій до елементів</h4>
                            <p>
                                У React події додаються за допомогою атрибутів, які називаються camelCase. Наприклад, для обробки кліку використовують <code>onClick</code>.
                            </p>
                            <pre>
                                <code>
{`class EventHandling extends React.Component {
  handleClick() {
    alert('Button clicked!');
  }

  render() {
    return (
      <button onClick={this.handleClick}>
        Click Me
      </button>
    );
  }
}`}
                                </code>
                            </pre>
                            <p>
                                У цьому прикладі метод <code>handleClick</code> буде викликаний при натисканні кнопки, і з'явиться повідомлення "Button clicked!".
                            </p>

                            <h4>Передача параметрів в обробники подій</h4>
                            <p>
                                Часто необхідно передавати параметри в обробники подій. Це можна зробити за допомогою анонімних функцій або методу <code>bind</code>.
                            </p>
                            <h5>Анонімні функції</h5>
                            <pre>
                                <code>
{`class EventHandlingWithParams extends React.Component {
  handleClick(name) {
    alert('Hello, ' + name);
  }

  render() {
    return (
      <button onClick={() => this.handleClick('Alice')}>
        Greet Alice
      </button>
    );
  }
}`}
                                </code>
                            </pre>
                            <p>
                                У цьому прикладі анонімна функція передає параметр <code>'Alice'</code> у метод <code>handleClick</code>.
                            </p>

                            <h5>Метод <code>bind</code></h5>
                            <pre>
                                <code>
{`class EventHandlingWithBind extends React.Component {
  handleClick(name) {
    alert('Hello, ' + name);
  }

  render() {
    return (
      <button onClick={this.handleClick.bind(this, 'Bob')}>
        Greet Bob
      </button>
    );
  }
}`}
                                </code>
                            </pre>
                            <p>
                                У цьому прикладі метод <code>handleClick</code> прив'язується до контексту компонента і параметра <code>'Bob'</code> за допомогою <code>bind</code>.
                            </p>

                              <h4>Обробка подій у функціональних компонентах</h4>
    <p>
        Використання хуків для обробки подій у функціональних компонентах.
    </p>
    <pre>
        <code>
{`import React, { useState } from 'react';

function EventHandling() {
  const handleClick = () => {
    alert('Button clicked!');
  };

  return (
    <button onClick={handleClick}>
      Click Me
    </button>
  );
}

export default EventHandling;`}
        </code>
    </pre>
    <p>
        У цьому прикладі використовується функціональний компонент та хук <code>useState</code> для обробки події кліку.
    </p>

    <h4>Приклади використання подій</h4>
    <p>
        Додаткові приклади обробки подій у React:
    </p>
    <h5>Обробка події введення тексту</h5>
    <pre>
        <code>
{`class TextInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {
    return (
      <div>
        <input type="text" value={this.state.value} onChange={this.handleChange} />
        <p>Current input: {this.state.value}</p>
      </div>
    );
  }
}`}
        </code>
    </pre>
    <p>
        У цьому прикладі стан компонента оновлюється при кожному введенні тексту в інпут.
    </p>

    <h5>Обробка події введення тексту у функціональних компонентах</h5>
    <pre>
        <code>
{`import React, { useState } from 'react';

function TextInput() {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  }

  return (
    <div>
      <input type="text" value={value} onChange={handleChange} />
      <p>Current input: {value}</p>
    </div>
  );
}

export default TextInput;`}
        </code>
    </pre>
    <p>
        У цьому прикладі використовується функціональний компонент і хук <code>useState</code> для обробки події введення тексту.
    </p>

    <h5>Обробка події відправлення форми</h5>
    <pre>
        <code>
{`class FormSubmit extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert('A value was submitted: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Value:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
    );
  }
}`}
        </code>
    </pre>
    <p>
        У цьому прикладі обробляється подія відправлення форми, і стан компонента використовується для зберігання введеного значення.
    </p>

    <h5>Обробка події відправлення форми у функціональних компонентах</h5>
    <pre>
        <code>
{`import React, { useState } from 'react';

function FormSubmit() {
  const [value, setValue] = useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  }

  const handleSubmit = (event) => {
    alert('A value was submitted: ' + value);
    event.preventDefault();
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Value:
        <input type="text" value={value} onChange={handleChange} />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default FormSubmit;`}
        </code>
    </pre>
    <p>
        У цьому прикладі обробка події відправлення форми реалізована у функціональному компоненті з використанням хуків.
    </p>

    <h4>Поради щодо обробки подій</h4>
    <ul>
        <li>Використовуйте анонімні функції обережно, щоб уникнути зайвих рендерів.</li>
        <li>При використанні методу <code>bind</code> переконайтеся, що контекст прив'язаний правильно.</li>
        <li>Обробляйте події форми, такі як <code>submit</code> і <code>focus</code>, для кращого користувацького досвіду.</li>
    </ul>

                            <h4>Довідка</h4>
                            <div className='accordion accordion-inner accordion-icon-left mt-3 mb-4' id='eventsAccordion'>
                                <div className='accordion-item'>
                                    <h2 className='accordion-header' id='eventsHeadingOne'>
                                        <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#eventsCollapseOne' aria-expanded='false' aria-controls='eventsCollapseOne'>
                                            Додавання подій
                                        </button>
                                    </h2>
                                    <div id='eventsCollapseOne' className='accordion-collapse collapse' aria-labelledby='eventsHeadingOne' data-bs-parent='#eventsAccordion'>
                                        <div className='accordion-body'>
                                            <p>Події додаються за допомогою camelCase атрибутів, таких як <code>onClick</code>, <code>onChange</code> тощо. Обробник подій вказується як функція або метод.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='accordion-item'>
                                    <h2 className='accordion-header' id='eventsHeadingTwo'>
                                        <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#eventsCollapseTwo' aria-expanded='false' aria-controls='eventsCollapseTwo'>
                                            Передача параметрів
                                        </button>
                                    </h2>
                                    <div id='eventsCollapseTwo' className='accordion-collapse collapse' aria-labelledby='eventsHeadingTwo' data-bs-parent='#eventsAccordion'>
                                        <div className='accordion-body'>
                                            <p>Параметри можна передавати в обробники подій за допомогою анонімних функцій або методу <code>bind</code>.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p>Обробка подій у React надає гнучкий і зручний спосіб керування взаємодією користувачів з вашим додатком, дозволяючи створювати динамічні та інтерактивні інтерфейси.</p>
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

export default CourseReact9;

