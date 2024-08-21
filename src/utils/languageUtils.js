export const getLanguage = () => {
    const telegramLanguage = window.Telegram?.WebApp?.languageCode;
    
    return telegramLanguage === 'ru' ? 'ru' : 'en';
  };
  