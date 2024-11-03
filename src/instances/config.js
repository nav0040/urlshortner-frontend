import axios from 'axios';
const instance = axios.create({
    baseURL:'https://urlshortner-backend-nest.onrender.com/api',
    withCredentials:true,
});

export default instance;
