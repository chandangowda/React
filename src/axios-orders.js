import axios from 'axios';

const instance = axios.create({
    baseURL:'https://react-project-62da9.firebaseio.com/'

});

export default instance;