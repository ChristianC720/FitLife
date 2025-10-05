import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3001/api", // Cambia el puerto si usas uno diferente en tu backend
});

export default api;
