import React from 'react';

const Home = () => {
  return (
    <div style={{ backgroundColor: 'white', minHeight: 'calc(100vh - 70px)' }}>
    </div>
  );
};

export default Home;
          <a href="#download" className="download-btn">Завантажити</a>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-content">
          <h1>Football Manager Mobile</h1>
          <p>Керуй командою мрії. Створюй історію. Стань легендою.</p>
          <div className="hero-buttons">
            <button className="primary-btn">Почати гру</button>
            <button className="secondary-btn">Дивитись трейлер</button>
          </div>
        </div>
        <div className="hero-visual">
          <div className="phone-mockup">
            <div className="screen">
              <div className="game-ui">
                <div className="field"></div>
                <div className="players">
                  <div className="player"></div>
                  <div className="player"></div>
                  <div className="player"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="features">
        <div className="container">
          <h2>Чому саме FMM?</h2>
          <div className="features-grid">
            <div className="feature">
              <div className="feature-icon">⚽</div>
              <h3>Реалістичний геймплей</h3>
              <p>Відчуй справжню атмосферу футбольного менеджменту</p>
            </div>
            <div className="feature">
              <div className="feature-icon">📊</div>
              <h3>Детальна аналітика</h3>
              <p>Глибокий аналіз гравців та матчів для кращих рішень</p>
            </div>
            <div className="feature">
              <div className="feature-icon">🏆</div>
              <h3>Турніри світового рівня</h3>
              <p>Змагайся з тренерами з усього світу</p>
            </div>
          </div>
        </div>
      </section>

      <section id="download" className="download">
        <div className="container">
          <h2>Готовий почати?</h2>
          <p>Завантажуй Football Manager Mobile і розпочинай свій шлях до слави</p>
          <div className="download-buttons">
            <button className="store-btn">
              <span>📱</span>
              <div>
                <small>Завантажити з</small>
                <strong>App Store</strong>
              </div>
            </button>
            <button className="store-btn">
              <span>🤖</span>
              <div>
                <small>Завантажити з</small>
                <strong>Google Play</strong>
              </div>
            </button>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">FMM Graphics</div>
            <div className="footer-links">
              <a href="#">Підтримка</a>
              <a href="#">Спільнота</a>
              <a href="#">Про нас</a>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2024 FMM Graphics. Усі права захищені.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;
