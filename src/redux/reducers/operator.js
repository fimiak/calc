const operatorFilter = (state = '', action) => {
  switch (action.type) {
    case 'SET_OPERATOR_FILTER':
      return action.filter;
    case 'CLEAR':
      return '';
    default:
      return state;
  }
};

export default operatorFilter;
