import { combineReducers } from 'redux';
import auth from './auth';
import users from './users';
import categories from './categories';
import skills from './skills';

export default combineReducers({
  auth,
  users,
  categories,
  skills,
});
