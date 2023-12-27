import axios from "axios";

const axiosClient = axios.create({
    baseURL: 'http://127.0.0.1:8082/v1'
})

axiosClient.interceptors.request.use(config => {
    config.headers.Authorization = null;
    return config;
})

export default axiosClient;