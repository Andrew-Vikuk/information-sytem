import React from "react";
import {
  FaAngleDoubleRight,
  FaArrowRight,
  FaCheckCircle,
} from "react-icons/fa";
import { Link } from "react-router-dom";
import courseListHTML from "../../../scripts/CoursesListHTML";

const CourseHtml5 = () => {
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

  <h3>Робота із зображеннями та мультимедіа в HTML</h3>

  <p>
    Зображення та мультимедіа є важливою частиною веб-контенту. HTML надає різноманітні теги для вставки зображень, аудіо та відео, а також для налаштування їх властивостей.
  </p>

  <h4>Вставка зображень</h4>

  <p>
    Для вставки зображень в HTML використовується тег <code>&lt;img&gt;</code>. Цей тег є самозакриваючимся і вимагає атрибута <code>src</code>, який вказує шлях до зображення.
  </p>

  <pre>
    <code>
      {`
        <img src="path/to/image.jpg" alt="Опис зображення" />
      `}
    </code>
  </pre>

  <h4>Атрибути src, alt, width, height</h4>

  <p>
    Атрибут <code>src</code> задає шлях до зображення. Атрибут <code>alt</code> надає текстовий опис зображення, який буде показаний, якщо зображення не завантажиться, а також використовується для доступності.
  </p>

  <pre>
    <code>
      {`
        <img src="path/to/image.jpg" alt="Опис зображення" />
      `}
    </code>
  </pre>

  <p>
    Атрибути <code>width</code> і <code>height</code> задають ширину і висоту зображення відповідно. Вони можуть бути задані в пікселях або відсотках.
  </p>

  <pre>
    <code>
      {`
        <img src="path/to/image.jpg" alt="Опис зображення" width="300" height="200" />
      `}
    </code>
  </pre>

  <h4>Вставка аудіо та відео</h4>

  <p>
    Для вставки аудіо в HTML використовується тег <code>&lt;audio&gt;</code>. Цей тег підтримує різні формати аудіо файлів і надає можливість додавати елементи управління відтворенням.
  </p>

  <pre>
    <code>
      {`
        <audio controls>
          <source src="path/to/audio.mp3" type="audio/mpeg">
          Ваш браузер не підтримує елемент <code>&lt;audio&gt;.
        </audio>
      `}
    </code>
  </pre>

  <p>
    Для вставки відео використовується тег <code>&lt;video&gt;</code>. Цей тег підтримує різні формати відео файлів і надає можливість додавати елементи управління відтворенням.
  </p>

  <pre>
    <code>
      {`
        <video width="320" height="240" controls>
          <source src="path/to/video.mp4" type="video/mp4">
          Ваш браузер не підтримує елемент <code>&lt;video&gt;.
        </video>
      `}
    </code>
  </pre>

  <h4>Приклад роботи із зображеннями та мультимедіа</h4>

  <p>
    Нижче наведено приклад, що демонструє вставку зображення, аудіо та відео на веб-сторінці.
  </p>

  <pre>
    <code>
      {`
        <h1>Мій вебсайт</h1>
        <h2>Зображення</h2>
        <img src="path/to/image.jpg" alt="Опис зображення" width="300" height="200" />
        
        <h2>Аудіо</h2>
        <audio controls>
          <source src="path/to/audio.mp3" type="audio/mpeg">
          Ваш браузер не підтримує елемент <code>&lt;audio&gt;.
        </audio>

        <h2>Відео</h2>
        <video width="320" height="240" controls>
          <source src="path/to/video.mp4" type="video/mp4">
          Ваш браузер не підтримує елемент <code>&lt;video&gt;.
        </video>
      `}
    </code>
  </pre>

  <div className='accordion accordion-inner accordion-icon-left mt-3 mb-4' id='accordionMultimedia'>
    <div className='accordion-item'>
      <h2 className='accordion-header' id='headingMultimediaOne'>
        <button className='accordion-button' type='button' data-bs-toggle='collapse' data-bs-target='#collapseMultimediaOne' aria-expanded='true' aria-controls='collapseMultimediaOne'>
          Як правильно використовувати атрибут alt?
        </button>
      </h2>
      <div id='collapseMultimediaOne' className='accordion-collapse collapse show' aria-labelledby='headingMultimediaOne' data-bs-parent='#accordionMultimedia'>
        <div className='accordion-body'>
          Атрибут <code>alt</code> надає текстовий опис зображення, який використовується для доступності та показується, якщо зображення не завантажується. Завжди додавайте описовий текст в атрибут <code>alt</code>.
        </div>
      </div>
    </div>
    <div className='accordion-item'>
      <h2 className='accordion-header' id='headingMultimediaTwo'>
        <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#collapseMultimediaTwo' aria-expanded='false' aria-controls='collapseMultimediaTwo'>
          Які формати підтримують теги audio та video?
        </button>
      </h2>
      <div id='collapseMultimediaTwo' className='accordion-collapse collapse' aria-labelledby='headingMultimediaTwo' data-bs-parent='#accordionMultimedia'>
        <div className='accordion-body'>
          Тег <code>&lt;audio&gt;</code> підтримує формати MP3, WAV, Ogg. Тег <code>&lt;video&gt;</code> підтримує формати MP4, WebM, Ogg. Використовуйте <code>&lt;source&gt;</code> для вказівки кількох форматів для сумісності з різними браузерами.
        </div>
      </div>
    </div>
    <div className='accordion-item'>
      <h2 className='accordion-header' id='headingMultimediaThree'>
        <button className='accordion-button collapsed' type='button' data-bs-toggle='collapse' data-bs-target='#collapseMultimediaThree' aria-expanded='false' aria-controls='collapseMultimediaThree'>
          Як додати елементи управління до аудіо та відео?
        </button>
      </h2>
      <div id='collapseMultimediaThree' className='accordion-collapse collapse' aria-labelledby='headingMultimediaThree' data-bs-parent='#accordionMultimedia'>
        <div className='accordion-body'>
          Для додавання елементів управління до аудіо або відео, використовуйте атрибут <code>controls</code> в тегах <code>&lt;audio&gt;</code> або <code>&lt;video&gt;</code>. Це надає користувачам можливість відтворення, паузи, перемотування та зміни гучності.
        </div>
      </div>
    </div>
  </div>

  <h4>Заключення</h4>
  <p>
    Вміння працювати із зображеннями та мультимедіа є важливою частиною веб-розробки. Використовуючи правильні теги та атрибути, ви можете легко додавати зображення, аудіо та відео на свої веб-сторінки, роблячи їх більш привабливими та інтерактивними.
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

export default CourseHtml5;
