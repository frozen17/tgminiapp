import React from 'react';
import PropTypes from 'prop-types';

const Horoscope = ({ horoscope, onBackClick }) => {
    return (
        <div className="horoscope">
            <h2>Гороскоп на сегодня</h2>
            <p>{horoscope}</p>
            <button onClick={onBackClick}>Назад</button>
        </div>
    );
};

// Пропсы для проверки типов
Horoscope.propTypes = {
    horoscope: PropTypes.string.isRequired, // Гороскоп должен быть строкой
    onBackClick: PropTypes.func.isRequired, // Функция для обработки нажатия кнопки "Назад"
};

export default Horoscope;
