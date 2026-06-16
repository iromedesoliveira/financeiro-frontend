import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:8082' // Ajuste para a URL do seu backend
});

// Interceptor de Request: Adiciona o Token JWT automaticamente
api.interceptors.request.use(config => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, error => {
    return Promise.reject(error);
});

// Interceptor de Response: Trata erros globais (como expiração do token)
api.interceptors.response.use(response => {
    return response;
}, error => {
    if (error.response?.status === 401) {
        // Token expirado ou não autorizado
        localStorage.removeItem('token');
        window.location.href = '/login'; // Redireciona para o login
    }
    return Promise.reject(error);
});

export default api;