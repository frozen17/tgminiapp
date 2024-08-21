export const fetchHoroscope = async (sign, language) => {

    const response = await fetch('https://poker247tech.ru/get_horoscope/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        sign: sign,           
        language: language,     
        period: 'today', 
      }),
    });
  
    if (!response.ok) {
      throw new Error('Failed to fetch horoscope');
    }
  
    const data = await response.json();
    return data;
  };
  