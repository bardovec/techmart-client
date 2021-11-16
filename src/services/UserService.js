import { $host } from '../api';

export default class UserService {
  static signup = async (newCustomer) => {
    const { data } = await $host.post('/customers', newCustomer);

    localStorage.setItem('token', data.token);

    return data;
  };

  static signin = async (userData) => {
    const { data } = await $host.post('/customers/login', userData);

    localStorage.setItem('token', data.token);

    return data;
  };

  static ping = async () => {
    return await $host.get('/customers/customer')
  }
}
