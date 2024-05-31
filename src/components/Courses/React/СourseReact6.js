import React from "react";
import {
  FaArrowRight,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import courseListReact from "../../../scripts/CoursesListReact";

const CourseReact6 = () => {
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
                            <img src='assets/img/service/advanced_concepts_banner.jpeg' alt='img' className="w-100 h-20" style={{height: "300px", objectFit: "cover", marginBottom: "20px"}}/>
                        </div>
                        <div className='details'>
                            <h3>Просунуті концепції в React</h3>
                            <p>
                                React пропонує ряд просунутих концепцій, що дозволяють ефективно управляти складними інтерфейсами, включаючи композицію та наслідування, декомпозицію компонентів, HOC та рендер-пропси.
                            </p>

                            <h4>Композиція та наслідування</h4>
                            <p>
                                У React прийнято використовувати композицію, а не наслідування для повторного використання коду між компонентами. Композиція дозволяє включати один компонент в інший, створюючи гнучкі та легко підтримувані інтерфейси.
                            </p>
                            <pre>
                                <code>
{`function FancyBorder(props) {
  return <div className={'FancyBorder FancyBorder-' + props.color}>{props.children}</div>;
}

function WelcomeDialog() {
  return (
    <FancyBorder color="blue">
      <h1 className="Dialog-title">Ласкаво просимо</h1>
      <p className="Dialog-message">Дякуємо, що зайшли.</p>
    </FancyBorder>
  );
}`}
                                </code>
                            </pre>

                            <h4>Декомпозиція компонентів</h4>
                            <p>
                                Декомпозиція компонентів полягає у розбитті великих компонентів на менші, що робить код більш читабельним і легким для підтримки. Це дозволяє повторно використовувати компоненти в різних частинах додатку.
                            </p>
                            <pre>
                                <code>
{`function App() {
  return (
    <div>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

function Header() {
  return <header>Це заголовок</header>;
}

function Content() {
  return <main>Це основний контент</main>;
}

function Footer() {
  return <footer>Це підвал</footer>;
}`}
                                </code>
                            </pre>

                            <h4>HOC (Higher-Order Components)</h4>
                            <p>
                                Вищі компоненти (Higher-Order Components, HOC) - це функції, що приймають компонент і повертають новий компонент з додатковими властивостями або функціональністю. Вони дозволяють легко розширювати можливості компонентів.
                            </p>
                            <pre>
                                <code>
{`function withExtraInfo(WrappedComponent) {
  return class extends React.Component {
    render() {
      return <WrappedComponent extraInfo="Додаткова інформація" {...this.props} />;
    }
  };
}

function MyComponent(props) {
  return <div>{props.extraInfo}</div>;
}

const EnhancedComponent = withExtraInfo(MyComponent);`}
                                </code>
                            </pre>

                            <h4>Рендер-пропси</h4>
                            <p>
                                Рендер-пропси - це техніка для спільного використання логіки між компонентами шляхом передачі функції, яка повідомляє компоненту, що рендерити. Це дозволяє більш гнучко керувати тим, як компоненти рендеряться.
                            </p>
                            <pre>
                                <code>
{`class DataFetcher extends React.Component {
  state = { data: null };

  componentDidMount() {
    fetch(this.props.url)
      .then(response => response.json())
      .then(data => this.setState({ data }));
  }

  render() {
    return this.props.render(this.state.data);
  }
}

function MyComponent() {
  return (
    <DataFetcher url="/api/data" render={data => (
      data ? <div>Дані: {data}</div> : <div>Завантаження...</div>
    )} />
  );
}`}
                                </code>
                            </pre>

                            <h4>Довідка</h4>
                            <div className='accordion accordion-inner accordion-icon-left mt-3 mb-4' id='advancedAccordion'>
                                <div className='accordion-item'>
                                    <h2 className='accordion-header' id='advancedHeadingOne'>
                                        <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#advancedCollapseOne' aria-expanded='false' aria-controls='advancedCollapseOne'>
                                            Композиція vs Наслідування
                                        </button>
                                    </h2>
                                    <div id='advancedCollapseOne' className='accordion-collapse collapse' aria-labelledby='advancedHeadingOne' data-bs-parent='#advancedAccordion'>
                                        <div className='accordion-body'>
                                            <p>Композиція дозволяє легше повторно використовувати код і керувати компонентами, тоді як наслідування може призводити до складної ієрархії класів.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='accordion-item'>
                                    <h2 className='accordion-header' id='advancedHeadingTwo'>
                                        <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#advancedCollapseTwo' aria-expanded='false' aria-controls='advancedCollapseTwo'>
                                            Переваги декомпозиції компонентів
                                        </button>
                                    </h2>
                                    <div id='advancedCollapseTwo' className='accordion-collapse collapse' aria-labelledby='advancedHeadingTwo' data-bs-parent='#advancedAccordion'>
                                        <div className='accordion-body'>
                                            <p>Декомпозиція компонентів сприяє чистоті коду, покращує читабельність та дозволяє легше тестувати і повторно використовувати компоненти.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='accordion-item'>
                                    <h2 className='accordion-header' id='advancedHeadingThree'>
                                        <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#advancedCollapseThree' aria-expanded='false' aria-controls='advancedCollapseThree'>
                                            Використання HOC
                                        </button>
                                    </h2>
                                    <div id='advancedCollapseThree' className='accordion-collapse collapse' aria-labelledby='advancedHeadingThree' data-bs-parent='#advancedAccordion'>
                                        <div className='accordion-body'>
                                            <p>HOC дозволяють повторно використовувати логіку та функціональність між компонентами, що зменшує дублювання коду та покращує підтримку.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='accordion-item'>
                                    <h2 className='accordion-header' id='advancedHeadingFour'>
                                        <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#advancedCollapseFour' aria-expanded='false' aria-controls='advancedCollapseFour'>
                                            Рендер-пропси
                                        </button>
                                    </h2>
                                    <div id='advancedCollapseFour' className='accordion-collapse collapse' aria-labelledby='advancedHeadingFour' data-bs-parent='#advancedAccordion'>
                                        <div className='accordion-body'>
                                            <p>Рендер-пропси дозволяють компонентам передавати власні дані та рендерити логіку, роблячи їх гнучкими та легкими у повторному використанні.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p>Ці просунуті концепції допоможуть вам створювати складніші та гнучкіші додатки в React, покращуючи підтримку коду та зменшуючи дублювання.</p>
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

export default CourseReact6;

