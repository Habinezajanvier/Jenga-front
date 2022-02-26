import { combineReducers } from 'redux';
import auth from './auth';
import users from './users';
import categories from './categories';
import skills from './skills';
import adverts from './adverts';
import offers from './offer';
import feeds from './feeds';

export default combineReducers({
  auth,
  users,
  categories,
  skills,
  adverts,
  offers,
  feeds,
});
