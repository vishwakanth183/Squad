import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';

// Custom imports
import { config } from '../shared/env';
import { getToken } from './asyncTokenService';
import { AsyncTokens } from '../shared/asyncTokens';

// Create an Axios instance with custom configuration
const axiosInstance: AxiosInstance = axios.create({
    // Your custom configuration options here
    baseURL: config.apiUrl,
});


// Request interceptor
axiosInstance.interceptors.request.use(
    (config) => {
        const userToken = getToken(AsyncTokens.userToken);
        if (userToken) {
            config.headers.Authorization = userToken;
        }
        return config;
    },
    (error) => {
        // Handle request error
        console.log("interceptor", error);
        return Promise.reject(error);
    }
);

// Response interceptor
axiosInstance.interceptors.response.use(
    (response: AxiosResponse) => {
        return response.data;
    },
    (error) => {
        // Handle response error
        return Promise.reject(error);
    }
);

export default axiosInstance;
