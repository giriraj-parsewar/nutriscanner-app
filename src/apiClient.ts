import axios from 'axios';

const apiClient = axios.create({
    baseURL: 'http://172.25.216.130:8000/',
    headers: {
        'Accept': 'application/json',
    },
});

export default apiClient;


