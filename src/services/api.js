import axios from 'axios';

const api = axios.create({
  baseURL: 'https://dh-ufmg.herokuapp.com/',
});

export default api;
