import React, { useEffect, useState } from 'react';
import ZodiacList from './components/ZodiacList';
import './App.css';
const App = () => {
    const [language, setLanguage] = useState(''); // Состояние для хранения языка
    const [selectedSign, setSelectedSign] = useState(null);
    const [horoscope, setHoroscope] = useState('');

    useEffect(() => {
        // Проверка языка Telegram
        if (window.Telegram && window.Telegram.WebApp) {
            const userLanguage = window.Telegram.WebApp.initDataUnsafe.user.language_code;
            setLanguage(userLanguage === 'ru' ? 'ru' : 'en'); // Установите язык на русский, если язык Telegram на русском
        } else {
            setLanguage('en'); // По умолчанию на английском, если Telegram не доступен
        }
    }, []);

    const handleSignSelect = (sign) => {
        setSelectedSign(sign);
    };

    const handleBackClick = () => {
        setSelectedSign(null);
        setHoroscope('');
    };

    return (
        <div className="app">
            <ZodiacList
                language={language}
                onSelectZodiac={handleSignSelect}
                onBackClick={handleBackClick}
                selectedSign={selectedSign}
                horoscope={horoscope}
            />
        </div>
    );
};

export default App;
