import axios from 'axios';

// inicialize axios to call api
export const api = axios.create({
  baseURL: '/api',
})