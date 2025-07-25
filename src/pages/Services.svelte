<script>
  import ContactForm from '../components/ContactForm.svelte';
  import { getAssetPath } from '../utils/assetPath';
</script>

<section class="page-header">
  <div class="container">
    <h1>Сервис</h1>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="services-intro">
      <p>
        Компания СТС предлагает полный спектр услуг по работе с деревом - от проектирования и изготовления 
        до доставки, монтажа и последующего обслуживания. Мы гарантируем высокое качество на каждом этапе работы.
      </p>
    </div>

    <div class="services-grid">
      <div class="service-card">
        <div class="service-icon">
          <img src={getAssetPath('/images/indoor/2024-05-12%2023-19-10.JPG')} alt="Консультация" />
        </div>
        <div class="service-content">
          <h3>Консультация</h3>
          <p>Наши специалисты помогут вам выбрать оптимальные материалы и дизайн для вашего проекта, учитывая все ваши пожелания и особенности помещения или участка.</p>
        </div>
      </div>

      <div class="service-card">
        <div class="service-icon">
          <img src={getAssetPath('/images/outdoor%20furniture/2024-04-11%2011-18-49.JPG')} alt="Проектирование" />
        </div>
        <div class="service-content">
          <h3>Проектирование</h3>
          <p>Мы разработаем детальный проект вашего изделия или конструкции, учитывая все технические требования и эстетические предпочтения.</p>
        </div>
      </div>

      <div class="service-card">
        <div class="service-icon">
          <img src={getAssetPath('/images/indoor/2024-06-01%2014-39-21.JPG')} alt="Изготовление" />
        </div>
        <div class="service-content">
          <h3>Изготовление</h3>
          <p>Производство изделий осуществляется на современном оборудовании с использованием качественных материалов и соблюдением всех технологических процессов.</p>
        </div>
      </div>

      <div class="service-card">
        <div class="service-icon">
          <img src={getAssetPath('/images/outdoor%20furniture/2024-06-24%2006-27-19_1719213080407.JPG')} alt="Доставка и монтаж" />
        </div>
        <div class="service-content">
          <h3>Доставка и монтаж</h3>
          <p>Мы доставим и установим вашу мебель или конструкцию в удобное для вас время. Работаем по всей Республике Кипр.</p>
        </div>
      </div>

      <div class="service-card">
        <div class="service-icon">
          <img src={getAssetPath('/images/indoor/2024-07-06%2014-43-32.JPG')} alt="Обслуживание" />
        </div>
        <div class="service-content">
          <h3>Обслуживание</h3>
          <p>Предлагаем услуги по уходу, ремонту и реставрации деревянных изделий, чтобы они сохраняли свой первоначальный вид на протяжении долгих лет.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="section bg-light">
  <div class="container">
    <h2 class="section-title">Наши преимущества</h2>
    <div class="advantages-grid">
      <div class="advantage-item">
        <div class="advantage-icon">✓</div>
        <h3>Качество</h3>
        <p>Используем только высококачественные материалы и современные технологии</p>
      </div>

      <div class="advantage-item">
        <div class="advantage-icon">✓</div>
        <h3>Сроки</h3>
        <p>Выполняем работы точно в установленные сроки</p>
      </div>

      <div class="advantage-item">
        <div class="advantage-icon">✓</div>
        <h3>Гарантия</h3>
        <p>Предоставляем гарантию на все наши изделия и работы</p>
      </div>

      <div class="advantage-item">
        <div class="advantage-icon">✓</div>
        <h3>Индивидуальный подход</h3>
        <p>Учитываем все пожелания клиента и особенности проекта</p>
      </div>
    </div>
  </div>
</section>

<section class="section contact-section">
  <div class="container">
    <div class="contact-container">
      <div class="contact-info">
        <h2>Заказать услугу</h2>
        <p>Если вы хотите заказать услугу или получить консультацию, заполните форму, и мы свяжемся с вами в ближайшее время.</p>
      </div>
      <div class="contact-form-container">
        <ContactForm formTitle="Заказать услугу" buttonText="Отправить" />
      </div>
    </div>
  </div>
</section>

<style>
  /* Page header styles are now handled by global CSS */

  .services-intro {
    max-width: 800px;
    margin: 0 auto 3rem;
    text-align: center;
  }

  .services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 2rem;
  }

  .service-card {
    background-color: var(--white);
    border-radius: 8px;
    overflow: hidden;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    display: flex;
    flex-direction: column;
  }

  .service-icon {
    height: 200px;
    overflow: hidden;
  }

  .service-icon img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .service-content {
    padding: 1.5rem;
    flex-grow: 1;
  }

  .section-title {
    text-align: center;
    margin-bottom: 3rem;
  }

  .advantages-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    gap: 2rem;
    text-align: center;
  }

  .advantage-item {
    padding: 2rem;
    background-color: var(--white);
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  .advantage-icon {
    font-size: 2rem;
    color: var(--primary-color);
    margin-bottom: 1rem;
  }

  .bg-light {
    background-color: var(--light-bg);
  }

  .contact-section {
    background-color: var(--primary-color);
    color: var(--white);
    margin-top: 4rem;
  }

  .contact-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    align-items: center;
  }

  .contact-info h2 {
    color: var(--white);
  }

  @media (max-width: 768px) {
    .services-grid,
    .advantages-grid {
      grid-template-columns: 1fr;
    }

    .contact-container {
      grid-template-columns: 1fr;
    }
  }
</style>
