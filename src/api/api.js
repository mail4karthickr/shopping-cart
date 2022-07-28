import axios from 'axios';

const api = axios.create({
    timeout: 1000
});

api.interceptors.request.use(request => {
    console.log('Starting Request', JSON.stringify(request, null, 2))
    return request
});

api.interceptors.response.use(response => {
    console.log('Response:', JSON.stringify(response, null, 2))
    return response
});

export default api;