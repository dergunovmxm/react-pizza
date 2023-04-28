/* eslint-disable import/no-anonymous-default-export */
import axios from '../Servise';

const resource = '/items'
export default {
    getPizzas() {
        return axios.get(resource);
    },
};

