import * as productActions from './productActions';
import * as userActions from './userActions';
import * as cartActions from './cartActions';

/* eslint import/no-anonymous-default-export: [2, {"allowObject": true}] */
export default {
  ...productActions,
  ...userActions,
  ...cartActions,
};
