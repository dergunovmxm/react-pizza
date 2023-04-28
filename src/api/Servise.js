import axios from "axios";

const instance = axios.create({
    baseURL: 'https://6447946f7bb84f5a3e427cce.mockapi.io',
});

export default instance;