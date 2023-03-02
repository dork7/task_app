import axios from 'axios';
// const BASE_URL = 'http://localhost:4000/v1';
const BASE_URL = 'https://node-app-tau.vercel.app/v1';
export default axios.create({
  baseURL: BASE_URL,
});

export const axiosPrivate = axios.create({
  baseURL: BASE_URL,
  headers: {
    CONTENT_TYPE: 'application/json',
  },
  withCredentials: true,
});
