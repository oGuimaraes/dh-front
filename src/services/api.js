import axios from 'axios';

const api = axios.create({
  baseURL: 'http://dh-ufmg.herokuapp.com/',
});

export default api;
