<script>
  import ContactForm from '../components/ContactForm.svelte';
</script>

<section class="page-header">
  <div class="container">
    <h1>О компании</h1>
  </div>
</section>

<section class="section">
  <div class="container">
    <div class="about-content">
      <div class="about-image">
        <img src="/images/outdoor%20furniture/2024-05-13%2012-08-37.JPG" alt="Наша компания" />
      </div>

      <div class="about-text">
        <h2>СТС - эксперты в деревянной мебели</h2>
        <p>
          СТС - молодая компания, но опыт специалистов, которые в ней работают, весьма солидный. 
          Мы объединили профессионалов с многолетним опытом работы с деревом, чтобы создавать 
          уникальные изделия, которые будут радовать наших клиентов долгие годы.
        </p>

        <h3>Наша миссия</h3>
        <p>
          Создавать качественную, экологичную и долговечную мебель из дерева, которая станет 
          украшением вашего дома или офиса. Мы стремимся сохранить традиции деревообработки, 
          сочетая их с современными технологиями и дизайном.
        </p>

        <h3>Наши ценности</h3>
        <ul>
          <li><strong>Качество</strong> - мы используем только лучшие материалы и уделяем внимание каждой детали</li>
          <li><strong>Надежность</strong> - мы всегда выполняем свои обязательства перед клиентами</li>
          <li><strong>Экологичность</strong> - мы заботимся о природе и используем экологически чистые материалы</li>
          <li><strong>Индивидуальный подход</strong> - мы учитываем все пожелания клиента и предлагаем оптимальные решения</li>
        </ul>
      </div>
    </div>
  </div>
</section>

<section class="section bg-light">
  <div class="container">
    <h2 class="section-title">Наш опыт</h2>
    <div class="experience-grid">
      <div class="experience-item">
        <div class="experience-icon">
          <span class="number">15+</span>
        </div>
        <h3>Лет опыта</h3>
        <p>Наши специалисты имеют более 15 лет опыта работы с деревом</p>
      </div>

      <div class="experience-item">
        <div class="experience-icon">
          <span class="number">500+</span>
        </div>
        <h3>Выполненных проектов</h3>
        <p>Более 500 успешно реализованных проектов различной сложности</p>
      </div>

      <div class="experience-item">
        <div class="experience-icon">
          <span class="number">10+</span>
        </div>
        <h3>Стран</h3>
        <p>Опыт работы в более чем 10 странах с различными климатическими условиями</p>
      </div>

      <div class="experience-item">
        <div class="experience-icon">
          <span class="number">98%</span>
        </div>
        <h3>Довольных клиентов</h3>
        <p>98% наших клиентов рекомендуют нас своим друзьям и знакомым</p>
      </div>
    </div>
  </div>
</section>

<section class="section contact-section">
  <div class="container">
    <div class="contact-container">
      <div class="contact-info">
        <h2>Свяжитесь с нами</h2>
        <p>Если у вас есть вопросы или вы хотите обсудить ваш проект, заполните форму, и мы свяжемся с вами в ближайшее время.</p>
      </div>
      <div class="contact-form-container">
        <ContactForm formTitle="Связаться с нами" buttonText="Отправить" />
      </div>
    </div>
  </div>
</section>

<style>
  /* Page header styles are now handled by global CSS */

  .about-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 3rem;
    align-items: center;
  }

  .about-image img {
    width: 100%;
    border-radius: 8px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }

  .about-text h2 {
    margin-top: 0;
  }

  .about-text h3 {
    margin-top: 2rem;
  }

  .about-text ul {
    padding-left: 1.5rem;
  }

  .about-text li {
    margin-bottom: 0.75rem;
  }

  .experience-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 2rem;
    text-align: center;
  }

  .experience-icon {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background-color: var(--primary-color);
    color: var(--white);
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto 1.5rem;
  }

  .number {
    font-size: 2rem;
    font-weight: 700;
  }

  .contact-section {
    background-color: var(--primary-color);
    color: var(--white);
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
    .about-content {
      grid-template-columns: 1fr;
    }

    .contact-container {
      grid-template-columns: 1fr;
    }
  }
</style>
