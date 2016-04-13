import axios from 'axios';
const API_KEY = 'c5a3964e344a2e37f4ded449adbe7dab'

export const FETCH_WEATHER = "FETCH_WEATHER";
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export function fetchWeather(city) {
	const url = `${ROOT_URL}&q=${city},us`;
	const request = axios.get(url);
	return {
		type: 'FETCH_WEATHER',
		payload: request
	}
}