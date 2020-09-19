import axios from 'axios';

const instance = axios.create({
    baseURL:'https://burger-builder-6353a.firebaseio.com/'
});

export default instance;