import { Axios } from 'axios';

const Http = new Axios({
  baseURL: 'http://localhost:3000/api',
  timeout: 5000,
  headers: {
    'Content-Type': 'application/json',
  },
});

export default Http;
