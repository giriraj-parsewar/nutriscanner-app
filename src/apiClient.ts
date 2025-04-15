import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'https://aahar-api-ssij.onrender.com/',
    headers: {
        'Accept': 'application/json',
    },
});

export default apiClient;


