import React from 'react';
import './News.css';

const News = () => {
  const newsItems = [
    {
      title: 'Новий сезон Football Manager Mobile',
      date: '15 листопада 2024',
      summary: 'Відкрийте для себе нові можливості в останньому оновленні гри'
    },
    {
      title: 'Чемпіонат Європи - Спеціальний турнір',
      date: '10 листопада 2024',
      summary: 'Приєднуйтесь до унікального турніру з ексклюзивними нагородами'
    },
    {
      title: 'Оновлення трансферного ринку',
      date: '5 листопада 2024',
      summary: 'Нові механіки трансферів та покращена система переговорів'
    }
  ];

  return (
    <div className="news-page">
      <div className="container">
        <h1>Новини та Оновлення</h1>
        
        <section className="latest-news">
          <h2>Останні новини</h2>
          <div className="news-grid">
            {newsItems.map((item, index) => (
              <article key={index} className="news-card">
                <div className="news-date">{item.date}</div>
                <h3>{item.title}</h3>
                <p>{item.summary}</p>
                <button className="read-more">Читати далі</button>
              </article>
            ))}
          </div>
        </section>

        <section className="community">
          <h2>Спільнота</h2>
          <div className="community-content">
            <p>Приєднуйтесь до нашої спільноти Football Manager Mobile!</p>
            <div className="social-links">
              <button className="social-btn">Discord</button>
              <button className="social-btn">Telegram</button>
              <button className="social-btn">Reddit</button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default News;
