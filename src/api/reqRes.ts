import axios from 'axios';

export const reqResApi = axios.create({
  baseURL: 'https://reqres.in/api',
  headers: {
    'x-api-key': import.meta.env.VITE_REQRES_API_KEY,
  },
});
