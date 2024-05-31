import React from "react";
import {
  FaArrowRight,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import courseListReact from "../../../scripts/CoursesListReact";

const CourseReact7 = () => {
  return (
    <>
      {/* ===================== Course Single Page start ===================== */}
        <div className='service-area pd-top-120 pd-bottom-90'>
    <div className='container'>
        <div class='row'>
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
                            <h3>Списки та ключі в React</h3>
                            <p>
                                В React часто доводиться працювати зі списками даних. Правильне рендерування списків і використання ключів важливе для ефективності і коректної роботи додатку. 
                            </p>

                            <h4>Рендеринг списків</h4>
                            <p>
                                Для рендерингу списків в React використовується метод масиву <code>map()</code>. Цей метод дозволяє обійти кожен елемент масиву і повернути новий масив з елементами JSX.
                            </p>
                            <pre>
                                <code>
{`function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <li key={number.toString()}>
      {number}
    </li>
  );
  return (
    <ul>{listItems}</ul>
  );
}

const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
  <NumberList numbers={numbers} />,
  document.getElementById('root')
);`}
                                </code>
                            </pre>
                            <p>
                                У цьому прикладі ми передаємо масив чисел через пропси і використовуємо <code>map()</code>, щоб створити елементи <code>&lt;li&gt;</code> для кожного числа.
                            </p>

                            <h4>Використання ключів</h4>
                            <p>
                                Ключі допомагають React визначити, які елементи змінилися, додалися або видалилися. Ключі повинні бути унікальними серед сусідніх елементів. Найкраще використовувати стабільні, унікальні ідентифікатори, такі як ID з бази даних.
                            </p>
                            <pre>
                                <code>
{`function ListItem(props) {
  return <li>{props.value}</li>;
}

function NumberList(props) {
  const numbers = props.numbers;
  const listItems = numbers.map((number) =>
    <ListItem key={number.toString()} value={number} />
  );
  return (
    <ul>{listItems}</ul>
  );
}

const numbers = [1, 2, 3, 4, 5];
ReactDOM.render(
  <NumberList numbers={numbers} />,
  document.getElementById('root')
);`}
                                </code>
                            </pre>
                            <p>
                                У цьому прикладі ми використовуємо компоненти <code>ListItem</code> для рендерингу кожного елемента списку і передаємо унікальний ключ через пропси.
                            </p>
                            <p>
                                Використання індексу масиву як ключа теж можливе, але воно може призвести до проблем з продуктивністю та некоректного оновлення компонентів, якщо порядок елементів зміниться.
                            </p>

                            <h4>Переваги використання ключів</h4>
                            <ul>
                                <li>Забезпечують унікальність елементів у списку.</li>
                                <li>Допомагають React ефективно оновлювати та перерендерювати елементи.</li>
                                <li>Зменшують кількість повторних рендерів, що покращує продуктивність.</li>
                            </ul>

                            <h4>Довідка</h4>
                            <div className='accordion accordion-inner accordion-icon-left mt-3 mb-4' id='listsKeysAccordion'>
                                <div className='accordion-item'>
                                    <h2 className='accordion-header' id='listsKeysHeadingOne'>
                                        <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#listsKeysCollapseOne' aria-expanded='false' aria-controls='listsKeysCollapseOne'>
                                            Рендеринг списків
                                        </button>
                                    </h2>
                                    <div id='listsKeysCollapseOne' className='accordion-collapse collapse' aria-labelledby='listsKeysHeadingOne' data-bs-parent='#listsKeysAccordion'>
                                        <div className='accordion-body'>
                                            <p>Рендеринг списків в React базується на використанні методу <code>map()</code>, що дозволяє створювати елементи для кожного значення у масиві, повертаючи новий масив з JSX-елементами.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className='accordion-item'>
                                    <h2 className='accordion-header' id='listsKeysHeadingTwo'>
                                        <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#listsKeysCollapseTwo' aria-expanded='false' aria-controls='listsKeysCollapseTwo'>
                                            Використання ключів
                                        </button>
                                    </h2>
                                    <div id='listsKeysCollapseTwo' className='accordion-collapse collapse' aria-labelledby='listsKeysHeadingTwo' data-bs-parent='#listsKeysAccordion'>
                                        <div className='accordion-body'>
                                            <p>Ключі допомагають React відстежувати елементи в списках. Вони повинні бути унікальними серед сусідніх елементів і можуть використовуватися для оптимізації рендерингу, зменшуючи кількість повторних рендерів і покращуючи продуктивність.</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p>Рендеринг списків і використання ключів є важливими аспектами розробки на React, що дозволяють створювати ефективні та добре оптимізовані інтерфейси.</p>
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

export default CourseReact7;

