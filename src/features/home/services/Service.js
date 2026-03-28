import axios from "axios";

const API_BASE = "https://contigofiscal-backend.onrender.com";

// 1. Creamos una instancia personalizada de Axios
const api = axios.create({
    baseURL: API_BASE,
});

// 2. INTERCEPTOR: Antes de cada petición, pega el token si existe
api.interceptors.request.use((config) => {
    const token = localStorage.getItem("token");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

const endpoints = {
    requests: `/requests`,
    catalogs: `/catalogs`
};

class Services {
    // Métodos genéricos usando la instancia 'api'
    async fetchData(url) {
        try {
            const response = await api.get(url);
            return response.data;
        } catch (error) {
            console.error(`Error al obtener datos de ${url}:`, error);
            throw error;
        }
    }

    async postData(url, data) {
        try {
            const response = await api.post(url, data);
            return response.data;
        } catch (error) {
            console.error(`Error al enviar datos a ${url}:`, error);
            throw error;
        }
    }

    // --- AUTENTICACIÓN ---
    async login(email, password) {
        try {
            const response = await api.post(`/api/auth/login`, { email, password });
            
            // SI TU BACKEND DEVUELVE UN TOKEN (ej: response.data.token)
            // Guardamos la llave en el navegador
            if (response.data.token) {
                localStorage.setItem("token", response.data.token);
            }
            
            return response.data;
        } catch (error) {
            throw error.response?.data?.message || "Error al iniciar sesión";
        }
    }

    logout() {
        localStorage.removeItem("token");
        window.location.href = "/login";
    }

    // --- MÉTODOS DEL DASHBOARD ---
    getAllRequests() {
        return this.fetchData(`${endpoints.requests}/consultar`); 
    }

    updateRequestStatus(id, nuevoStatus) {
        // Usamos 'api' para que incluya el token automáticamente
        return api.patch(`${endpoints.requests}/${id}/status?status=${nuevoStatus}`);
    }

    deleteRequest(id) {
        return api.delete(`${endpoints.requests}/${id}`);
    }

    // --- MÉTODOS DEL CHATBOT ---
    getServicios() { 
        return this.fetchData(`${endpoints.catalogs}/services`); 
    }

    getDocumentosPorServicio(serviceId) { 
        return this.fetchData(`${endpoints.catalogs}/services/${serviceId}/documents`); 
    }

    saveCliente(data) { 
        return this.postData(`${endpoints.requests}/crear`, data); 
    }
}

export default new Services();