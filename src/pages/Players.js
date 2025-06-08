import React from 'react';
import './Players.css';

const Players = () => {
  const playerTypes = [
    { position: 'Воротар', skills: ['Реакція', 'Позиціонування', 'Гра руками'] },
    { position: 'Захисник', skills: ['Відбір', 'Заголовки', 'Маркування'] },
    { position: 'Півзахисник', skills: ['Пас', 'Техніка', 'Бачення гри'] },
    { position: 'Нападник', skills: ['Завершення', 'Дриблінг', 'Швидкість'] }
  ];

  return (
    <div className="players-page">
      <div className="container">
        <h1>Гравці та Розвиток</h1>
        
        <section className="positions">
          <h2>Позиції та Навички</h2>
          <div className="positions-grid">
            {playerTypes.map((type, index) => (
              <div key={index} className="position-card">
                <h3>{type.position}</h3>
                <ul>
                  {type.skills.map((skill, skillIndex) => (
                    <li key={skillIndex}>{skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section className="development-tips">
          <h2>Поради з розвитку гравців</h2>
          <div className="tips-grid">
            <div className="tip-card">
              <h4>🎯 Індивідуальні тренування</h4>
              <p>Фокусуйтесь на слабких сторонах кожного гравця</p>
            </div>
            <div className="tip-card">
              <h4>⏰ Ігровий час</h4>
              <p>Молоді гравці потребують регулярної ігрової практики</p>
            </div>
            <div className="tip-card">
              <h4>🏆 Ментальність</h4>
              <p>Розвивайте лідерські якості та впевненість гравців</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Players;
