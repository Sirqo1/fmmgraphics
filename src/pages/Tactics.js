import React from 'react';
import './Tactics.css';

const Tactics = () => {
  const formations = [
    { name: '4-4-2', description: 'Класична збалансована формація' },
    { name: '4-3-3', description: 'Атакуюча формація з акцентом на фланги' },
    { name: '3-5-2', description: 'Контроль середини поля' },
    { name: '4-2-3-1', description: 'Сучасна універсальна схема' }
  ];

  return (
    <div className="tactics-page">
      <div className="container">
        <h1>Тактики</h1>
        <p>Тут будуть тактики та формації для Football Manager Mobile</p>
        
        <section className="formations">
          <h2>Популярні формації</h2>
          <div className="formations-grid">
            {formations.map((formation, index) => (
              <div key={index} className="formation-card">
                <h3>{formation.name}</h3>
                <p>{formation.description}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="tactics-tips">
          <h2>Тактичні поради</h2>
          <div className="tips-list">
            <div className="tip">
              <h4>Адаптація до противника</h4>
              <p>Вивчай стиль гри суперника та адаптуй свою тактику відповідно</p>
            </div>
            <div className="tip">
              <h4>Ротація складу</h4>
              <p>Використовуй різних гравців для різних матчів та турнірів</p>
            </div>
            <div className="tip">
              <h4>Командні інструкції</h4>
              <p>Налаштовуй інструкції для команди залежно від ситуації у грі</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Tactics;
