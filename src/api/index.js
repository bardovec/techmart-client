import axios from 'axios';

const $host = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'Content-type': 'application/json',
  },
});

const authInterceptor = (config) => {
  // eslint-disable-next-line no-param-reassign
  config.headers.authorization = localStorage.getItem('token');
  return config;
};

$host.interceptors.request.use(authInterceptor);

export { $host };
