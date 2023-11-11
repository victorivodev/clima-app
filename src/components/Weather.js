// src/components/Weather.js
import React, { useState } from 'react';
import axios from 'axios';

const apiKey = 'dc481c4685ec8897a02aeb469f46e8ec';

const Weather = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(null);

// src/components/Weather.js
const getWeather = async () => {
    try {
      const response = await axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`);
      console.log(response.data); // Verifique se os dados são impressos corretamente
  
      const weatherInfo = response.data;
      
      setWeatherData({
        city: weatherInfo.name,
        country: weatherInfo.sys.country,
        temperature: weatherInfo.main.temp,
        description: weatherInfo.weather[0].description,
      });
  
      setError(null);
    } catch (error) {
      setWeatherData(null);
      setError('Cidade não encontrada');
    }
  };
  

  return (
    <div>
      <h2>Previsão do Tempo</h2>
      <div>
        <label htmlFor="city">Digite o nome da cidade:</label>
        <input
          type="text"
          id="city"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={getWeather}>Obter Previsão</button>
      </div>
      {weatherData && (
  <div>
    <h3>{weatherData.city}, {weatherData.country}</h3>
    <h4>Temperatura: {weatherData.temperature}°C</h4>
    <h4>Descrição: {weatherData.description}</h4>
  </div>
)}
      {error && <p>{error}</p>}
    </div>
  );
};

export default Weather;
