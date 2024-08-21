import React from 'react';

const LanguageSwitcher = ({ language, onLanguageChange }) => {
    return (
        <div className="language-switcher">
            <button onClick={() => onLanguageChange('ru')} disabled={language === 'ru'}>
                Русский
            </button>
            <button onClick={() => onLanguageChange('en')} disabled={language === 'en'}>
                English
            </button>
        </div>
    );
};

export default LanguageSwitcher;
