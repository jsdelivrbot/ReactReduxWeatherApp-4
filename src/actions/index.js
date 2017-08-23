import axios from 'axios';

const WEATHER_API_KEY = '7d47f9e2593327c3838ce3bdd3f1b3a1';
const WEATHER_API_ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${WEATHER_API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(cityName) {
    const url = `${WEATHER_API_ROOT_URL}&q=${cityName},us`;
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    }
}