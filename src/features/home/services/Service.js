import axios from "axios";

//const BASE_URL = "http://localhost:8082/administracion";


const API_BASE = "http://localhost:8081/api";

const endpoints = {
    requests: `${API_BASE}/requests`,
    catalogs: `${API_BASE}/catalogs`
};

class Services {
    // Método genérico para GET
    async fetchData(url) {
        try {
            const response = await axios.get(url);
            return response.data;
        } catch (error) {
            console.error(`Error al obtener datos de ${url}:`, error);
            throw error;
        }
    }

    // Método genérico para POST
    async postData(url, data) {
        try {
            const response = await axios.post(url, data);
            return response.data;
        } catch (error) {
            console.error(`Error al enviar datos a ${url}:`, error);
            throw error;
        }
    }

    // --- MÉTODOS PARA EL CHATBOT ---

    // Obtiene la lista de servicios (Paso 3 del Chatbot)
    getServicios() { 
        return this.fetchData(`${endpoints.catalogs}/services`); 
    }

    // Obtiene los documentos según el servicio elegido (Paso 4 del Chatbot - HU2)
    getDocumentosPorServicio(serviceId) { 
        return this.fetchData(`${endpoints.catalogs}/services/${serviceId}/documents`); 
    }

    // Guarda al prospecto en la DB al terminar el chat
    saveCliente(data) { 
        return this.postData(`${endpoints.requests}/crear`, data); 
    }

    async login(email, password) {
        try {
            // Enviamos las credenciales al endpoint de autenticación
            const response = await axios.post("http://localhost:8081/api/auth/login", {
            email: email,
            password: password
            });
            return response.data; // El backend debería retornar algo como { email: "...", role: "ADMIN" }
        } catch (error) {
            throw error.response?.data?.message || "Error al iniciar sesión";
        }
}
}
export default new Services();