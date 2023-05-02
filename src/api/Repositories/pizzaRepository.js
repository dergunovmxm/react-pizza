/* eslint-disable import/no-anonymous-default-export */
import axios from '../Servise';

const resource = '/items'
export default {
    getPizzas(sort, categoryId) {
        
        const order = sort.sortType.includes('-') ? 'desc' : 'asc';
        const sortBy = sort.sortType.replace('-', '');
        const category = categoryId ? `category=${categoryId}` : '';

        return axios.get(`${resource}?${category}&sortBy=${sortBy}&order=${order}`);
    },
};

