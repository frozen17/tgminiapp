import React, { useState } from 'react';
import LanguageSwitcher from './LanguageSwitcher';
import Horoscope from './Horoscope';
import { fetchHoroscope } from '../services/horoscopeService'; // Исправленный импорт

const zodiacSigns = [
    { sign: "aries", displayName: "Овен", dateRange: "21 марта - 19 апреля" },
    { sign: "taurus", displayName: "Телец", dateRange: "20 апреля - 20 мая" },
    { sign: "gemini", displayName: "Близнецы", dateRange: "21 мая - 20 июня" },
    { sign: "cancer", displayName: "Рак", dateRange: "21 июня - 22 июля" },
    { sign: "leo", displayName: "Лев", dateRange: "23 июля - 22 августа" },
    { sign: "virgo", displayName: "Дева", dateRange: "23 августа - 22 сентября" },
    { sign: "libra", displayName: "Весы", dateRange: "23 сентября - 22 октября" },
    { sign: "scorpio", displayName: "Скорпион", dateRange: "23 октября - 21 ноября" },
    { sign: "sagittarius", displayName: "Стрелец", dateRange: "22 ноября - 21 декабря" },
    { sign: "capricorn", displayName: "Козерог", dateRange: "22 декабря - 19 января" },
    { sign: "aquarius", displayName: "Водолей", dateRange: "20 января - 18 февраля" },
    { sign: "pisces", displayName: "Рыбы", dateRange: "19 февраля - 20 марта" }
];

const zodiacSignsEn = [
    { sign: "aries", displayName: "Aries", dateRange: "March 21 - April 19" },
    { sign: "taurus", displayName: "Taurus", dateRange: "April 20 - May 20" },
    { sign: "gemini", displayName: "Gemini", dateRange: "May 21 - June 20" },
    { sign: "cancer", displayName: "Cancer", dateRange: "June 21 - July 22" },
    { sign: "leo", displayName: "Leo", dateRange: "July 23 - August 22" },
    { sign: "virgo", displayName: "Virgo", dateRange: "August 23 - September 22" },
    { sign: "libra", displayName: "Libra", dateRange: "September 23 - October 22" },
    { sign: "scorpio", displayName: "Scorpio", dateRange: "October 23 - November 21" },
    { sign: "sagittarius", displayName: "Sagittarius", dateRange: "November 22 - December 21" },
    { sign: "capricorn", displayName: "Capricorn", dateRange: "December 22 - January 19" },
    { sign: "aquarius", displayName: "Aquarius", dateRange: "January 20 - February 18" },
    { sign: "pisces", displayName: "Pisces", dateRange: "February 19 - March 20" }
];

const ZodiacList = () => {
    const [language, setLanguage] = useState('en');
    const [selectedSign, setSelectedSign] = useState(null);
    const [horoscope, setHoroscope] = useState('');

    const handleLanguageChange = (newLanguage) => {
        setLanguage(newLanguage);
    };

    const handleSignClick = async (sign) => {
        try {
            const result = await fetchHoroscope(sign, language); // Используем fetchHoroscope
            setHoroscope(result.horoscope);
            setSelectedSign(sign);
        } catch (error) {
            console.error("Error fetching horoscope:", error);
        }
    };

    const handleBackClick = () => {
        setSelectedSign(null);
        setHoroscope('');
    };

    return (
        <div className="zodiac-list">
            <LanguageSwitcher language={language} onLanguageChange={handleLanguageChange} />
            {selectedSign ? (
                <Horoscope
                    horoscope={horoscope}
                    onBackClick={handleBackClick}
                />
            ) : (
                <div className="zodiac-signs">
                    {(language === 'ru' ? zodiacSigns : zodiacSignsEn).map((zodiac) => (
                        <div key={zodiac.sign} className="zodiac-sign" onClick={() => handleSignClick(zodiac.sign)}>
                            <h3>{zodiac.displayName}</h3>
                            <p>{zodiac.dateRange}</p>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default ZodiacList;
