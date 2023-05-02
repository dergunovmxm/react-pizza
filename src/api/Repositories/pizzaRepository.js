/* eslint-disable import/no-anonymous-default-export */
import axios from '../Servise';

const resource = '/items'
export default {
    getPizzas(sort, categoryId, searchValue) {
        console.log(searchValue)
        const order = sort.sortType.includes('-') ? 'desc' : 'asc';
        const sortBy = sort.sortType.replace('-', '');
        const category = categoryId ? `category=${categoryId}` : '';    
        const search = searchValue ? `&search=${searchValue}` : '';

        return axios.get(`${resource}?${category}${search}&sortBy=${sortBy}&order=${order}`);
    },
};

