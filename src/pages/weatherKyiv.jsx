import Link from "next/link"
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setWeatherData } from '../redux/weatherSlice';

const WeatherKyiv = () => {
    const dispatch = useDispatch();
    const weatherData = useSelector((state) => state.weather);

    useEffect(
        () => {
            const fetchData = async () => {
                try {
                    const response = await fetch('http://api.openweathermap.org/data/2.5/weather?q=Kyiv&units=metric&APPID=5d066958a60d315387d9492393935c19');
                    const data = await response.json();
                    dispatch(setWeatherData(data));
                }
                catch (error) {
                    console.log('Error fetching weather data:', error);
                }
            };
            fetchData();
        }, [dispatch]);
    if (!weatherData) {
        return <div>Loading...</div>;
    }

    return (

            <div className="weather">
                <h2>Weather in {weatherData.name}</h2>
                <p>Temperature: {weatherData.main.temp}°C</p>
                <p>Pressure: {weatherData.main.pressure} hPa</p>
                <p>Description: {weatherData.weather[0].description}</p>
                <p>Humidity: {weatherData.main.humidity}%</p>
                <p>Wind: {weatherData.wind.speed} m/s, {weatherData.wind.deg}°</p>
                <img src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`} height="50" width="50" alt="Weather Icon" />
                <Link className="customLink" href='/'>Вернуться на домашнюю страницу</Link>
            </div>
  

    );
};

export default WeatherKyiv