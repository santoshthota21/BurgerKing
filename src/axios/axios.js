import axios from 'axios';


const instance = axios.create({
    baseURL:"https://burger-79bea.firebaseio.com/"
});

export default instance;