//import { ADD_NUM } from './actionTypes';

let nextId = 0;
export const addNum = payload => ({
  type: 'ADD_NUM',
  id: nextId++,
  payload
});

export const setOperatorFilter = filter => ({
  type: 'SET_OPERATOR_FILTER',
  filter
});

export const OperatorFilters = {
  ADDITION: 'ADDITION',
  SUBTRACTION: 'SUBTRACTION',
  MULTIPLICATION: 'MULTIPLICATION',
  DIVISION: 'DIVISION'
};

export const clear = () => ({
  type: 'CLEAR',
  filter: ''
});

export const evaluator = () => ({
  type: 'EVALUATE'
});
