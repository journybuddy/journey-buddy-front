import { getStoredUser } from '../utils/userStorage';
import axios from 'axios';

export const axiosInstance = axios.create({
	baseURL: process.env.REACT_APP_API_URL,
});

axiosInstance.interceptors.request.use(
	(config) => {
		const token = getStoredUser();
		if (token) {
			config.headers = config.headers || {};
			config.headers['Authorization'] = token;
		}
		return config;
	},
	(error) => Promise.reject(error),
);
