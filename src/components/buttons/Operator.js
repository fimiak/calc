import React from 'react';

const Operator = ({ active, value, children, onClick }) => (
  <button onClick={onClick} value={value}>
    {children}
  </button>
);

export default Operator;
