import React from "react";
import {
  FaAngleDoubleRight,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import courseListHTML from "../../../scripts/CoursesListHTML";

const CourseHtml8 = () => {
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
                    <FaArrowRight /> Інші Уроки по HTML
                  </h5>
                  <ul className='catagory-items'>
                  {courseListHTML.map((data, index) => (
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
                    <img src='assets/img/about/main_1.png' alt='img' className='service-banner-image' />
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
                    <img src='assets/img/service/html_cat.jpg' alt='img' className="w-100 h-20"  style={{height: "300px", objectFit: "cover", marginBottom: "20px"}}/>
                  </div>

                  <div className='details'>

  <h3>Мультимедійні елементи HTML</h3>

  <p>
    HTML надає можливість легко інтегрувати мультимедійний контент, такий як аудіо та відео, на веб-сторінки. Основні теги для цього — <code>&lt;audio&gt;</code> та <code>&lt;video&gt;</code>. Вони дозволяють відтворювати медіафайли безпосередньо в браузері, використовуючи різні атрибути для контролю відтворення.
  </p>

  <h4>Теги <code>&lt;audio&gt;</code> та <code>&lt;video&gt;</code></h4>

  <p>
    Теги <code>&lt;audio&gt;</code> та <code>&lt;video&gt;</code> використовуються для вбудовування аудіо та відео на веб-сторінки відповідно.
  </p>

  <h5>Тег <code>&lt;audio&gt;</code></h5>

  <p>
    Тег <code>&lt;audio&gt;</code> дозволяє вбудовувати аудіофайли. Ви можете вказати декілька джерел аудіо для забезпечення сумісності з різними браузерами.
  </p>

  <pre>
    <code>
      {`
        <audio controls>
          <source src="audio.mp3" type="audio/mpeg">
          <source src="audio.ogg" type="audio/ogg">
          Ваш браузер не підтримує аудіо елемент.
        </audio>
      `}
    </code>
  </pre>

  <h5>Тег <code>&lt;video&gt;</code></h5>

  <p>
    Тег <code>&lt;video&gt;</code> використовується для вбудовування відеофайлів. Так само, як і з аудіо, ви можете вказати декілька джерел відео.
  </p>

  <pre>
    <code>
      {`
        <video width="320" height="240" controls>
          <source src="movie.mp4" type="video/mp4">
          <source src="movie.ogg" type="video/ogg">
          Ваш браузер не підтримує відео елемент.
        </video>
      `}
    </code>
  </pre>

  <h4>Атрибути <code>controls</code>, <code>autoplay</code>, <code>loop</code></h4>

  <p>
    Теги <code>&lt;audio&gt;</code> та <code>&lt;video&gt;</code> підтримують кілька важливих атрибутів, які допомагають керувати відтворенням медіафайлів:
  </p>

  <ul>
    <li><code>controls</code>: Відображає вбудовані елементи керування для відтворення, паузи, регулювання гучності тощо.</li>
    <li><code>autoplay</code>: Автоматично починає відтворення медіафайлу при завантаженні сторінки.</li>
    <li><code>loop</code>: Зациклює відтворення медіафайлу після його завершення.</li>
  </ul>

  <pre>
    <code>
      {`
        <audio controls autoplay loop>
          <source src="audio.mp3" type="audio/mpeg">
          Ваш браузер не підтримує аудіо елемент.
        </audio>

        <video width="320" height="240" controls autoplay loop>
          <source src="movie.mp4" type="video/mp4">
          Ваш браузер не підтримує відео елемент.
        </video>
      `}
    </code>
  </pre>

  <h4>Формати файлів та сумісність з браузерами</h4>

  <p>
    Коли ви використовуєте теги <code>&lt;audio&gt;</code> та <code>&lt;video&gt;</code>, важливо враховувати сумісність файлів з різними браузерами. Основні формати для аудіо та відео включають:
  </p>

  <h5>Аудіо формати</h5>
  <ul>
    <li><code>MP3</code> (audio/mpeg): Найпопулярніший аудіо формат, підтримується майже всіма браузерами.</li>
    <li><code>Ogg</code> (audio/ogg): Відкритий формат, підтримується більшістю сучасних браузерів.</li>
    <li><code>WAV</code> (audio/wav): Високоякісний формат, підтримується більшістю браузерів.</li>
  </ul>

  <h5>Відео формати</h5>
  <ul>
    <li><code>MP4</code> (video/mp4): Найпопулярніший відео формат, підтримується більшістю браузерів.</li>
    <li><code>WebM</code> (video/webm): Відкритий формат, підтримується сучасними браузерами.</li>
    <li><code>Ogg</code> (video/ogg): Відкритий формат, підтримується сучасними браузерами.</li>
  </ul>

  <pre>
    <code>
      {`
        <video width="320" height="240" controls>
          <source src="movie.mp4" type="video/mp4">
          <source src="movie.webm" type="video/webm">
          <source src="movie.ogg" type="video/ogg">
          Ваш браузер не підтримує відео елемент.
        </video>
      `}
    </code>
  </pre>

  <div className='accordion accordion-inner accordion-icon-left mt-3 mb-4' id='accordionMultimedia'>
    <div className='accordion-item'>
      <h2 className='accordion-header' id='headingMultimediaOne'>
        <button className='accordion-button' type='button' data-bs-toggle='collapse' data-bs-target='#collapseMultimediaOne' aria-expanded='true' aria-controls='collapseMultimediaOne'>
          Як вбудувати аудіофайл на веб-сторінку?
        </button>
      </h2>
      <div id='collapseMultimediaOne' className='accordion-collapse collapse show' aria-labelledby='headingMultimediaOne' data-bs-parent='#accordionMultimedia'>
        <div className='accordion-body'>
          Щоб вбудувати аудіофайл на веб-сторінку, використовуйте тег <code>&lt;audio&gt;</code> з атрибутом <code>controls</code> для відображення елементів керування відтворенням. Додайте всередині тега <code>&lt;source&gt;</code> з посиланням на аудіофайл. Наприклад:
          <pre>
            <code>
              {`
                <audio controls>
                  <source src="audio.mp3" type="audio/mpeg">
                  Ваш браузер не підтримує аудіо елемент.
                </audio>
              `}
            </code>
          </pre>
        </div>
      </div>
    </div>
    <div className='accordion-item'>
      <h2 className='accordion-header' id='headingMultimediaTwo'>
        <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#collapseMultimediaTwo' aria-expanded='false' aria-controls='collapseMultimediaTwo'>
          Які формати відеофайлів підтримуються браузерами?
        </button>
      </h2>
      <div id='collapseMultimediaTwo' className='accordion-collapse collapse' aria-labelledby='headingMultimediaTwo' data-bs-parent='#accordionMultimedia'>
        <div className='accordion-body'>
          Основні формати відеофайлів, які підтримуються більшістю браузерів, включають MP4 (video/mp4), WebM (video/webm) та Ogg (video/ogg). Використовуйте кілька <code>&lt;source&gt;</code> елементів всередині тега <code>&lt;video&gt;</code>, щоб забезпечити сумісність з різними браузерами. Наприклад:
          <pre>
            <code>
              {`
                <video width="320" height="240" controls>
                  <source src="movie.mp4" type="video/mp4">
                  <source src="movie.webm" type="video/webm">
                  <source src="movie.ogg" type="video/ogg">
                  Ваш браузер не підтримує відео елемент.
                </video>
              `}
            </code>
          </pre>
        </div>
      </div>
    </div>
    <div className='accordion-item'>
      <h2 className='accordion-header' id='headingMultimediaThree'>
        <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#collapseMultimediaThree' aria-expanded='false' aria-controls='collapseMultimediaThree'>
          Як використовувати атрибут autoplay?
        </button>
      </h2>
      <div id='collapseMultimediaThree' className='accordion-collapse collapse' aria-labelledby='headingMultimediaThree' data-bs-parent='#accordionMultimedia'>
        <div className='accordion-body'>
          Атрибут autoplay дозволяє автоматично запускати відтворення медіафайлу при завантаженні сторінки. Для його використання додайте цей атрибут до тега <code>&lt;audio&gt;</code> або <code>&lt;video&gt;</code>. Наприклад:
          <pre>
            <code>
              {`
                <audio controls autoplay>
                  <source src="audio.mp3" type="audio/mpeg">
                  Ваш браузер не підтримує аудіо елемент.
                </audio>

                <video width="320" height="240" controls autoplay>
                  <source src="movie.mp4" type="video/mp4">
                  Ваш браузер не підтримує відео елемент.
                </video>
              `}
            </code>
          </pre>
        </div>
      </div>
    </div>
  </div>

  <h4>Висновок</h4>

  <p>
    Використання мультимедійних елементів HTML, таких як <code>&lt;audio&gt;</code> та <code>&lt;video&gt;</code>, дозволяє легко вбудовувати аудіо та відео на веб-сторінки. Використовуйте різні формати файлів для забезпечення сумісності з усіма браузерами і застосовуйте атрибути <code>controls</code>, <code>autoplay</code> та <code>loop</code> для покращення користувацького досвіду.
  </p>

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

export default CourseHtml8;
