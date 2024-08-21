import React, { useEffect, useState } from 'react';
import { fetchHoroscope } from '../services/horoscopeService';

const ZodiacDetail = ({ sign, language, onBack }) => {
  const [horoscope, setHoroscope] = useState('');

  useEffect(() => {
    const getHoroscope = async () => {
      try {
        const data = await fetchHoroscope(sign, language);
        setHoroscope(data.description); 
      } catch (error) {
        console.error('Error fetching horoscope:', error);
      }
    };
    getHoroscope();

    if (window.Telegram && window.Telegram.WebApp) {
      window.Telegram.WebApp.onEvent('backButtonClicked', onBack);

      window.Telegram.WebApp.BackButton.show();

      return () => {
        window.Telegram.WebApp.BackButton.hide();
        window.Telegram.WebApp.offEvent('backButtonClicked', onBack);
      };
    }
  }, [sign, language, onBack]);

  const handleSwipeRight = (event) => {
    if (event.changedTouches[0].clientX > 200) {
      onBack();
    }
  };

  return (
    <div
      className="zodiac-detail"
      onTouchEnd={handleSwipeRight}
    >
      <p>{horoscope}</p>
    </div>
  );
};

export default ZodiacDetail;
