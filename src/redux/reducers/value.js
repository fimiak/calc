import calculate from '../calculate';

const value = (state = [0, 0], action) => {
  switch (action.type) {
    case 'ADD_NUM':
      return [Number(state[0] + action.payload), state[1]];
    case 'SET_OPERATOR_FILTER':
      return [0, state[0]];
    case 'EVALUATE':
      let equals = 3;
      return [calculate(equals, state[1]), state[0]];
    case 'CLEAR':
      return 0;
    default:
      return state;
  }
};

export default value;
