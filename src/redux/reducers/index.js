import { combineReducers } from 'redux';
import value from './value';
import operator from './operator';

export default combineReducers({ operator, value });
