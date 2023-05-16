import axios from 'axios';

const http = axios.create(
    {
        baseURL: 'http://localhost:8001',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Access-Control-Allow-Origin': '*'
        }
    }
);

http.interceptors.request.use(config => {
    const token = localStorage.getItem('access_token')

    if (token) {
        config.headers.Authorization = token
    }

    return config
})

export default http