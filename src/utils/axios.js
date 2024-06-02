import Cookie from 'js-cookie'
import axios from "axios";
export const Axios = axios.create({
    baseURL : import.meta.env.VITE_BASE_URL,
    withCredentials : true
});

axios.defaults.headers.common['Authorization'] = Cookie?.get('token');
axios.defaults.headers.post['Content-Type'] = 'application/json'
