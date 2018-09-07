import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://burgerbuilder-90d7e.firebaseio.com/'
});

export default instance;
